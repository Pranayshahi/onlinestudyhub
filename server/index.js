const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const crypto = require('crypto');
require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const connectDB = require('./db');
const { Student, Teacher, Booking, TopicMedia, Review, ForumPost, Parent, PushSub, GroupClass } = require('./models');
const Razorpay = require('razorpay');
const {
  notifyStudentBookingReceived,
  notifyTeacherNewBooking,
  notifyStudentSessionConfirmed,
  notifyStudentSessionCancelled,
  notifyTeacherBookingConfirmed,
  notifyTeacherBookingDeclined,
  notifyStudentCancelledSelf,
  notifyTeacherStudentCancelled,
  notifyStudentDemoReceived,
  notifyTeacherDemoRequest,
  notifyStudentDemoConfirmed,
} = require('./whatsapp');

// In-memory document store: uploadId → { fileName, chunks: string[], expiresAt }
const docStore = new Map();
const DOC_TTL_MS = 60 * 60 * 1000; // 1 hour
setInterval(() => {
  const now = Date.now();
  for (const [id, doc] of docStore) {
    if (doc.expiresAt < now) docStore.delete(id);
  }
}, 10 * 60 * 1000); // prune every 10 min
const { chunkText, retrieveChunks } = require('./rag');
const { moderateInput, SAFETY_SYSTEM_ADDENDUM } = require('./moderation');

// Multer — store upload in memory (max 10 MB)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'image/jpeg', 'image/png', 'image/webp', 'image/gif',
    ];
    cb(null, allowed.includes(file.mimetype));
  },
});

const app = express();
const PORT = process.env.PORT || 5001;
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_in_prod';

const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:3001').split(',');
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || 
        allowedOrigins.includes(origin) || 
        origin.endsWith('.vercel.app') || 
        origin.includes('onlinestudyhub.com')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json({ limit: '20mb' }));

// Ensure DB is connected before every request (safe for serverless)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch {
    res.status(503).json({ error: 'Service temporarily unavailable. Please try again in a moment.' });
  }
});

// ── JWT middleware ──────────────────────────────────────────────
function requireAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });
  try {
    req.teacher = jwt.verify(auth.slice(7), JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

function requireStudentAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });
  try {
    req.student = jwt.verify(auth.slice(7), JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// ── Auth: Register ──────────────────────────────────────────────
app.post('/api/auth/register', async (req, res) => {
  try {
    const {
      email, password, name, avatar, profile_pic, subject, class_ids,
      experience, qualification, fee, bio, topics, contact, available,
    } = req.body || {};

    if (!email || !password || !name || !subject || !class_ids || !qualification) {
      return res.status(400).json({ error: 'Required fields missing' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }
    const existing = await Teacher.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const hash = await bcrypt.hash(password, 10);
    const teacher = await Teacher.create({
      email,
      password_hash: hash,
      name,
      avatar: avatar || '👨‍🏫',
      profile_pic: profile_pic || null,
      subject,
      class_ids: Array.isArray(class_ids) ? class_ids.join(',') : class_ids,
      experience: parseInt(experience) || 1,
      qualification,
      fee: parseInt(fee) || 500,
      bio: bio || '',
      topics: Array.isArray(topics) ? topics.join(',') : (topics || ''),
      contact: contact || '',
      available: available !== false,
    });

    const token = jwt.sign({ id: teacher._id.toString(), email, role: 'teacher' }, JWT_SECRET, { expiresIn: '30d' });
    res.status(201).json({ token, id: teacher._id, email, name, role: 'teacher' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Auth: Teacher Login ──────────────────────────────────────────
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const teacher = await Teacher.findOne({ email });
    if (!teacher) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, teacher.password_hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: teacher._id.toString(), email: teacher.email, role: 'teacher' }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, id: teacher._id, email: teacher.email, name: teacher.name, role: 'teacher' });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Auth: Student Registration ──────────────────────────────────
async function generateUniqueReferralCode(name) {
  const prefix = (name || '').replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 3) || 'OSH';
  for (let i = 0; i < 10; i++) {
    const code = prefix + Math.random().toString(36).toUpperCase().slice(2, 6);
    const exists = await Student.findOne({ referral_code: code });
    if (!exists) return code;
  }
  return 'OSH' + Date.now().toString(36).toUpperCase().slice(-5);
}

app.post('/api/auth/student/register', async (req, res) => {
  try {
    const { email, password, name, refCode } = req.body || {};
    if (!email || !password || !name) return res.status(400).json({ error: 'All fields required' });
    const existing = await Student.findOne({ email });
    if (existing) return res.status(409).json({ error: 'Email already registered' });

    const hash = await bcrypt.hash(password, 10);
    const referral_code = await generateUniqueReferralCode(name);
    const student = await Student.create({
      email, password_hash: hash, name,
      referral_code,
      referred_by: refCode || null,
    });

    if (refCode) {
      await Student.findOneAndUpdate({ referral_code: refCode }, { $inc: { referral_count: 1 } });
    }

    const token = jwt.sign({ id: student._id.toString(), email, name, role: 'student' }, JWT_SECRET, { expiresIn: '30d' });
    res.status(201).json({ token, id: student._id, email, name, role: 'student' });
  } catch (err) {
    console.error('Student Register error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Auth: Student Login ─────────────────────────────────────────
app.post('/api/auth/student/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const student = await Student.findOne({ email });
    if (!student) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, student.password_hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: student._id.toString(), email: student.email, name: student.name, role: 'student' }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, id: student._id, email: student.email, name: student.name, role: 'student' });
  } catch (err) {
    console.error('Student Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Students: Get own profile ───────────────────────────────────
app.get('/api/students/me', requireStudentAuth, async (req, res) => {
  try {
    const student = await Student.findById(req.student.id).select('-password_hash -__v').lean();
    if (!student) return res.status(404).json({ error: 'Not found' });
    res.json({ id: student._id, email: student.email, name: student.name, avatar: student.avatar || '🧑‍🎓', phone: student.phone || '', class_id: student.class_id || '', bio: student.bio || '', role: 'student' });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// ── Students: Update own profile ────────────────────────────────
app.patch('/api/students/me', requireStudentAuth, async (req, res) => {
  try {
    const { name, avatar, phone, class_id, bio } = req.body || {};
    if (!name?.trim()) return res.status(400).json({ error: 'Name is required' });
    const student = await Student.findByIdAndUpdate(
      req.student.id,
      { $set: { name: name.trim(), avatar: avatar || '🧑‍🎓', phone: (phone || '').trim(), class_id: (class_id || '').trim(), bio: (bio || '').trim() } },
      { new: true }
    ).lean();
    if (!student) return res.status(404).json({ error: 'Not found' });
    const token = jwt.sign({ id: student._id.toString(), email: student.email, name: student.name, role: 'student' }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, id: student._id, email: student.email, name: student.name, avatar: student.avatar, phone: student.phone || '', class_id: student.class_id || '', bio: student.bio || '', role: 'student' });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// ── Students: Change password ───────────────────────────────────
app.patch('/api/students/me/password', requireStudentAuth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body || {};
    if (!currentPassword || !newPassword) return res.status(400).json({ error: 'All fields are required' });
    if (newPassword.length < 6) return res.status(400).json({ error: 'New password must be at least 6 characters' });
    const student = await Student.findById(req.student.id);
    if (!student) return res.status(404).json({ error: 'Not found' });
    const valid = await bcrypt.compare(currentPassword, student.password_hash);
    if (!valid) return res.status(400).json({ error: 'Current password is incorrect' });
    student.password_hash = await bcrypt.hash(newPassword, 10);
    await student.save();
    res.json({ message: 'Password updated successfully' });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// ── Students: Get referral info (backfills code if missing) ────
app.get('/api/students/me/referral', requireStudentAuth, async (req, res) => {
  try {
    let student = await Student.findById(req.student.id).select('referral_code referral_count name').lean();
    if (!student) return res.status(404).json({ error: 'Not found' });
    if (!student.referral_code) {
      const code = await generateUniqueReferralCode(student.name);
      await Student.findByIdAndUpdate(req.student.id, { $set: { referral_code: code } });
      student.referral_code = code;
    }
    res.json({ referral_code: student.referral_code, referral_count: student.referral_count || 0 });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// ── Teachers: Get all (public — used by user portal) ───────────
app.get('/api/teachers', async (req, res) => {
  try {
    const { classId } = req.query;
    let query = { available: true };
    if (classId) {
      query.class_ids = { $regex: classId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') };
    }

    const teachers = await Teacher.find(query)
      .select('-password_hash -createdAt -updatedAt -__v')
      .sort({ rating: -1, students_count: -1 })
      .lean();

    res.json(teachers.map(t => ({
      ...t,
      id: t._id.toString(),
      students: t.students_count || 0
    })).map(formatTeacher));
  } catch (err) {
    console.error('Get teachers error:', err);
    res.status(500).json({ error: 'Failed to load teachers' });
  }
});

// ── Teachers: Get own profile (protected) ──────────────────────
app.get('/api/teachers/me', requireAuth, async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.teacher.id).select('-password_hash -createdAt -updatedAt -__v').lean();
    if (!teacher) return res.status(404).json({ error: 'Not found' });

    const formattedTeacher = {
      ...teacher,
      id: teacher._id.toString(),
      students: teacher.students_count || 0
    };

    res.json(formatTeacher(formattedTeacher));
  } catch (err) {
    console.error('Get me error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Teachers: Update own profile (protected) ───────────────────
app.put('/api/teachers/me', requireAuth, async (req, res) => {
  try {
    const {
      name, avatar, profile_pic, subject, class_ids, experience, qualification,
      fee, bio, topics, contact, available,
    } = req.body || {};
    const teacher = await Teacher.findByIdAndUpdate(
      req.teacher.id,
      {
        name,
        avatar: avatar || '👨‍🏫',
        profile_pic: profile_pic || null,
        subject,
        class_ids: Array.isArray(class_ids) ? class_ids.join(',') : class_ids,
        experience: parseInt(experience) || 1,
        qualification,
        fee: parseInt(fee) || 500,
        bio: bio || '',
        topics: Array.isArray(topics) ? topics.join(',') : (topics || ''),
        contact: contact || '',
        available: available !== false,
      },
      { new: true }
    ).select('-password_hash -createdAt -updatedAt -__v').lean();

    if (!teacher) return res.status(404).json({ error: 'Not found' });

    const formattedTeacher = {
      ...teacher,
      id: teacher._id.toString(),
      students: teacher.students_count || 0
    };

    res.json(formatTeacher(formattedTeacher));
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Teachers: Delete own account (protected) ───────────────────
app.delete('/api/teachers/me', requireAuth, async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.teacher.id);
    res.json({ message: 'Account deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Teachers: Change password ───────────────────────────────────
app.patch('/api/teachers/me/password', requireAuth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body || {};
    if (!currentPassword || !newPassword) return res.status(400).json({ error: 'All fields are required' });
    if (newPassword.length < 6) return res.status(400).json({ error: 'New password must be at least 6 characters' });
    const teacher = await Teacher.findById(req.teacher.id);
    if (!teacher) return res.status(404).json({ error: 'Not found' });
    const valid = await bcrypt.compare(currentPassword, teacher.password_hash);
    if (!valid) return res.status(400).json({ error: 'Current password is incorrect' });
    teacher.password_hash = await bcrypt.hash(newPassword, 10);
    await teacher.save();
    res.json({ message: 'Password updated successfully' });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// ── Teachers: Toggle online status (protected) ─────────────────
app.patch('/api/teachers/me/online', requireAuth, async (req, res) => {
  try {
    const { is_online } = req.body;
    const teacher = await Teacher.findByIdAndUpdate(
      req.teacher.id,
      { is_online: Boolean(is_online), last_seen: new Date() },
      { new: true }
    ).select('is_online last_seen').lean();
    res.json({ is_online: teacher.is_online });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Teachers: Get single teacher (public) ─────────────────────
app.get('/api/teachers/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id)
      .select('-password_hash -createdAt -updatedAt -__v').lean();
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' });
    res.json(formatTeacher({ ...teacher, id: teacher._id.toString(), students: teacher.students_count || 0 }));
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Bookings: Create (public) ──────────────────────────────────
app.post('/api/bookings', async (req, res) => {
  try {
    const { studentName, studentPhone, studentEmail, teacherId, classId, subjectId, topicId, timeSlot, scheduledDate, paymentId, amountPaid } = req.body || {};

    if (!studentName || !studentPhone || !teacherId || !classId || !subjectId || !timeSlot || !scheduledDate) {
      return res.status(400).json({ error: 'Missing required booking information' });
    }

    // Generate a Google Meet-style link
    const meetCode = Array.from({ length: 3 }, () =>
      Math.random().toString(36).substring(2, 5)
    ).join('-');
    const meetLink = `https://meet.google.com/${meetCode}`;

    const booking = await Booking.create({
      student_name: studentName,
      student_phone: studentPhone,
      student_email: studentEmail || '',
      teacher_id: teacherId,
      class_id: classId,
      subject_id: subjectId,
      topic_id: topicId || null,
      time_slot: timeSlot,
      scheduled_date: scheduledDate,
      meet_link: meetLink,
      status: 'pending',
      payment_id: paymentId || null,
      amount_paid: amountPaid || null,
    });

    // WhatsApp notifications (fire-and-forget — don't block response)
    const teacher = await Teacher.findById(teacherId).select('name contact').lean();
    const topicLabel = topicId ? topicId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Personalised Session';
    notifyStudentBookingReceived({
      studentPhone,
      studentName,
      teacherName: teacher?.name || 'your teacher',
      topicTitle: topicLabel,
      date: scheduledDate,
      time: timeSlot,
    });
    if (teacher?.contact) {
      notifyTeacherNewBooking({
        teacherPhone: teacher.contact,
        teacherName: teacher.name,
        studentName,
        studentPhone,
        topicTitle: topicLabel,
        date: scheduledDate,
        time: timeSlot,
      });
    }

    res.status(201).json({ bookingId: booking._id, meetLink, message: 'Booking confirmed!' });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// ── Demo: Check eligibility (student can only have 1 demo per teacher) ──
app.get('/api/bookings/demo-eligible/:teacherId', requireStudentAuth, async (req, res) => {
  try {
    const existing = await Booking.findOne({
      teacher_id: req.params.teacherId,
      student_email: req.student.email,
      is_demo: true,
    }).lean();
    res.json({ eligible: !existing });
  } catch (err) {
    res.status(500).json({ error: 'Failed to check demo eligibility' });
  }
});

// ── Demo Booking: Create (free, no payment) ────────────────────
app.post('/api/bookings/demo', requireStudentAuth, async (req, res) => {
  try {
    const { teacherId, classId, subjectId, timeSlot, scheduledDate, demoPrep } = req.body || {};

    if (!teacherId || !classId || !subjectId || !timeSlot || !scheduledDate) {
      return res.status(400).json({ error: 'Missing required demo booking information' });
    }

    // Enforce 1 demo per student-teacher pair
    const existing = await Booking.findOne({
      teacher_id: teacherId,
      student_email: req.student.email,
      is_demo: true,
    });
    if (existing) {
      return res.status(409).json({ error: 'You have already booked a demo with this teacher' });
    }

    const teacher = await Teacher.findById(teacherId).select('name contact demo_available').lean();
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' });
    if (teacher.demo_available === false) {
      return res.status(400).json({ error: 'This teacher is not accepting demo requests at the moment' });
    }

    const meetCode = Array.from({ length: 3 }, () => Math.random().toString(36).substring(2, 5)).join('-');
    const meetLink = `https://meet.google.com/${meetCode}`;

    const booking = await Booking.create({
      student_name:  req.student.name,
      student_phone: req.student.phone || '',
      student_email: req.student.email,
      teacher_id:    teacherId,
      class_id:      classId,
      subject_id:    subjectId,
      time_slot:     timeSlot,
      scheduled_date: scheduledDate,
      meet_link:     meetLink,
      status:        'pending',
      is_demo:       true,
      amount_paid:   0,
      demo_prep: {
        goal:  demoPrep?.goal  || '',
        level: demoPrep?.level || '',
        note:  demoPrep?.note  || '',
      },
    });

    notifyStudentDemoReceived({
      studentPhone: req.student.phone || '',
      studentName:  req.student.name,
      teacherName:  teacher.name,
      date: scheduledDate,
      time: timeSlot,
    });
    if (teacher.contact) {
      notifyTeacherDemoRequest({
        teacherPhone: teacher.contact,
        teacherName:  teacher.name,
        studentName:  req.student.name,
        goal:  demoPrep?.goal  || '',
        level: demoPrep?.level || '',
        date:  scheduledDate,
        time:  timeSlot,
      });
    }

    res.status(201).json({ bookingId: booking._id, meetLink, message: 'Demo booked!' });
  } catch (err) {
    console.error('Demo booking error:', err);
    res.status(500).json({ error: 'Failed to create demo booking' });
  }
});

// ── Bookings: Get student's own bookings (protected) ──────────
app.get('/api/bookings/student', requireStudentAuth, async (req, res) => {
  try {
    const bookings = await Booking.find({ student_email: req.student.email })
      .sort({ createdAt: -1 }).lean();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Bookings: Get teacher's appointments (protected) ──────────
app.get('/api/bookings/mine', requireAuth, async (req, res) => {
  try {
    const bookings = await Booking.find({ teacher_id: req.teacher.id })
      .sort({ createdAt: -1 }).lean();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Bookings: Student cancel own booking (protected) ──────────
app.patch('/api/bookings/:id/cancel', requireStudentAuth, async (req, res) => {
  try {
    const booking = await Booking.findOne({ _id: req.params.id, student_email: req.student.email });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    if (!['pending', 'confirmed'].includes(booking.status)) {
      return res.status(400).json({ error: 'Only pending or confirmed bookings can be cancelled' });
    }

    booking.status = 'cancelled';
    await booking.save();

    const teacher = await Teacher.findById(booking.teacher_id).select('name contact').lean();
    const topicLabel = booking.topic_id
      ? booking.topic_id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
      : 'Personalised Session';

    notifyStudentCancelledSelf({
      studentPhone: booking.student_phone,
      studentName:  booking.student_name,
      topicTitle:   topicLabel,
      date:         booking.scheduled_date,
      time:         booking.time_slot,
    });
    if (teacher?.contact) {
      notifyTeacherStudentCancelled({
        teacherPhone: teacher.contact,
        teacherName:  teacher.name,
        studentName:  booking.student_name,
        topicTitle:   topicLabel,
        date:         booking.scheduled_date,
        time:         booking.time_slot,
      });
    }

    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Bookings: Update status (protected) ───────────────────────
app.patch('/api/bookings/:id', requireAuth, async (req, res) => {
  try {
    const newStatus = req.body.status;
    const VALID_STATUSES = ['pending', 'confirmed', 'completed', 'cancelled'];
    if (!VALID_STATUSES.includes(newStatus)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }
    const booking = await Booking.findOneAndUpdate(
      { _id: req.params.id, teacher_id: req.teacher.id },
      { status: newStatus },
      { new: true }
    );
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    // WhatsApp notifications on status change (fire-and-forget)
    const teacher = await Teacher.findById(req.teacher.id).select('name contact').lean();
    const topicLabel = booking.topic_id
      ? booking.topic_id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
      : 'Personalised Session';

    if (newStatus === 'confirmed') {
      if (booking.is_demo) {
        notifyStudentDemoConfirmed({
          studentPhone: booking.student_phone,
          studentName:  booking.student_name,
          teacherName:  teacher?.name || 'your teacher',
          date:         booking.scheduled_date,
          time:         booking.time_slot,
          meetLink:     booking.meet_link,
        });
      } else {
        notifyStudentSessionConfirmed({
          studentPhone: booking.student_phone,
          studentName:  booking.student_name,
          teacherName:  teacher?.name || 'your teacher',
          topicTitle:   topicLabel,
          date:         booking.scheduled_date,
          time:         booking.time_slot,
          meetLink:     booking.meet_link,
        });
      }
      if (booking.student_email) {
        sendPush(booking.student_email, {
          title: '✅ Session Confirmed!',
          body: `Your session with ${teacher?.name || 'your teacher'} on ${booking.scheduled_date} at ${booking.time_slot} is confirmed.`,
          url: '/my-bookings',
          tag: 'booking-confirmed',
        });
      }
      if (teacher?.contact) {
        notifyTeacherBookingConfirmed({
          teacherPhone: teacher.contact,
          teacherName:  teacher.name,
          studentName:  booking.student_name,
          topicTitle:   topicLabel,
          date:         booking.scheduled_date,
          time:         booking.time_slot,
          meetLink:     booking.meet_link,
        });
      }
    } else if (newStatus === 'cancelled') {
      notifyStudentSessionCancelled({
        studentPhone: booking.student_phone,
        studentName:  booking.student_name,
        teacherName:  teacher?.name || 'your teacher',
        date:         booking.scheduled_date,
        time:         booking.time_slot,
      });
      if (teacher?.contact) {
        notifyTeacherBookingDeclined({
          teacherPhone: teacher.contact,
          teacherName:  teacher.name,
          studentName:  booking.student_name,
          topicTitle:   topicLabel,
          date:         booking.scheduled_date,
          time:         booking.time_slot,
        });
      }
    }

    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Health check ────────────────────────────────────────────────
app.get('/api/health', async (req, res) => {
  try {
    await connectDB();
    const mongoose = require('mongoose');
    const connected = mongoose.connection.readyState === 1;
    res.json({ status: 'ok', db: connected ? 'connected' : 'disconnected' });
  } catch {
    // DB failed to connect — still return 200 with disconnected status
    // so the frontend health check doesn't crash
    res.json({ status: 'ok', db: 'disconnected' });
  }
});

// ── Helper ──────────────────────────────────────────────────────
function formatTeacher(t) {
  return {
    ...t,
    class_ids: t.class_ids ? t.class_ids.split(',') : [],
    topics: t.topics ? t.topics.split(',').map(s => s.trim()).filter(Boolean) : [],
    available: Boolean(t.available),
    rating: parseFloat(t.rating) || 4.5,
  };
}

// ── Topic Media: get all for a topic (public) ───────────────────
app.get('/api/media/:classId/:subjectId/:topicId', async (req, res) => {
  try {
    const { classId, subjectId, topicId } = req.params;
    const items = await TopicMedia.find({ classId, subjectId, topicId })
      .select('-fileData')
      .populate('uploadedBy', 'name avatar rating _id')
      .sort({ createdAt: -1 })
      .lean();
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get single media item with file data (public, used for display)
app.get('/api/media/item/:id', async (req, res) => {
  try {
    const item = await TopicMedia.findById(req.params.id).lean();
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get all media uploaded by this teacher (protected)
app.get('/api/media/mine/all', requireAuth, async (req, res) => {
  try {
    const items = await TopicMedia.find({ uploadedBy: req.teacher.id })
      .select('-fileData')
      .sort({ updatedAt: -1 })
      .lean();
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Upsert media for a topic (protected)
app.post('/api/media', requireAuth, async (req, res) => {
  try {
    const { classId, subjectId, topicId, type, title, fileData, fileName, mimeType, fileSize, videoUrl, quiz } = req.body;
    if (!classId || !subjectId || !topicId || !type) {
      return res.status(400).json({ error: 'classId, subjectId, topicId, type are required' });
    }
    const update = {
      title: title || '',
      uploadedBy: req.teacher.id,
      ...(fileData !== undefined && { fileData, fileName, mimeType, fileSize }),
      ...(videoUrl !== undefined && { videoUrl }),
      ...(quiz !== undefined && { quiz }),
    };
    const item = await TopicMedia.findOneAndUpdate(
      { classId, subjectId, topicId, type, uploadedBy: req.teacher.id },
      { $set: update },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    const { fileData: _fd, ...safe } = item.toObject();
    res.json(safe);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Delete media item (protected)
app.delete('/api/media/:id', requireAuth, async (req, res) => {
  try {
    const item = await TopicMedia.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    if (String(item.uploadedBy) !== String(req.teacher.id)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    await item.deleteOne();
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── AI Doubt: Document upload → parse → chunk → store ─────────
app.post('/api/ai-doubt/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded or unsupported type (PDF, DOCX, TXT only).' });

    let text = '';
    const mime = req.file.mimetype;

    if (mime === 'text/plain') {
      text = req.file.buffer.toString('utf-8');
    } else if (mime === 'application/pdf') {
      const pdfParse = require('pdf-parse');
      const parsed = await pdfParse(req.file.buffer);
      text = parsed.text;
    } else if (mime.includes('wordprocessingml')) {
      const mammoth = require('mammoth');
      const result = await mammoth.extractRawText({ buffer: req.file.buffer });
      text = result.value;
    }

    if (!text.trim()) return res.status(422).json({ error: 'Could not extract text from the file.' });

    const chunks = chunkText(text);
    if (!chunks.length) return res.status(422).json({ error: 'File has no usable content.' });

    const uploadId = crypto.randomUUID();
    docStore.set(uploadId, {
      fileName: req.file.originalname,
      chunks,
      expiresAt: Date.now() + DOC_TTL_MS,
    });

    res.json({ uploadId, fileName: req.file.originalname, chunks: chunks.length });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Failed to process document.' });
  }
});

// ── AI Doubt: Image upload endpoint ───────────────────────────
app.post('/api/ai-doubt/upload-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded.' });
    const imageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!imageTypes.includes(req.file.mimetype)) return res.status(400).json({ error: 'Only JPG, PNG, WEBP, GIF allowed.' });
    const b64 = req.file.buffer.toString('base64');
    const dataUrl = `data:${req.file.mimetype};base64,${b64}`;
    const imageId = crypto.randomUUID();
    docStore.set(imageId, { type: 'image', dataUrl, mimeType: req.file.mimetype, fileName: req.file.originalname, expiresAt: Date.now() + DOC_TTL_MS });
    res.json({ imageId, fileName: req.file.originalname });
  } catch (err) {
    console.error('Image upload error:', err);
    res.status(500).json({ error: 'Failed to process image.' });
  }
});

// ── AI Doubt: RAG query with firewall + streaming + vision ─────
app.post('/api/ai-doubt', async (req, res) => {
  try {
    const { messages, system, uploadId, imageId } = req.body || {};
    const groqKey = (process.env.GROQ_API_KEY || '').trim();
    if (!groqKey) return res.status(503).json({ error: 'AI service not configured.' });

    // 1. Firewall
    const lastUserMsg = [...(messages || [])].reverse().find(m => m.role === 'user');
    if (lastUserMsg) {
      const modResult = moderateInput(lastUserMsg.content);
      if (modResult.blocked) return res.status(400).json({ blocked: true, reason: modResult.reason });
    }

    // 2. RAG retrieval for documents
    let contextBlock = '';
    let source = 'general';
    if (uploadId && lastUserMsg) {
      const doc = docStore.get(uploadId);
      if (doc && doc.chunks?.length) {
        const META_RE = /\b(summary|summarize|summarise|overview|what is this|define this|about this|what('s| is) (this|the) (file|document|doc)|describe|explain (this|the) (file|document))\b/i;
        const isMeta = META_RE.test(lastUserMsg.content);
        let relevant = isMeta ? [] : retrieveChunks(lastUserMsg.content, doc.chunks);
        if (!relevant.length) relevant = doc.chunks.slice(0, 3).map(chunk => ({ chunk, score: 0 }));
        contextBlock = `\n\nDOCUMENT: "${doc.fileName}"\n${relevant.map((r, i) => `[${i + 1}] ${r.chunk}`).join('\n\n')}`;
        source = 'document';
      }
    }

    // 3. Vision — if image attached, build vision message
    let groqMessages;
    let model = 'llama-3.3-70b-versatile';
    if (imageId) {
      const img = docStore.get(imageId);
      if (img?.type === 'image') {
        model = 'meta-llama/llama-4-scout-17b-16e-instruct';
        source = 'image';
        const visionContent = [
          { type: 'image_url', image_url: { url: img.dataUrl } },
          { type: 'text', text: lastUserMsg?.content || 'What is in this image? Explain it for a student.' },
        ];
        groqMessages = [
          { role: 'system', content: system + SAFETY_SYSTEM_ADDENDUM + '\nThe student has uploaded an image of a question or diagram. Solve or explain it clearly with steps.' },
          ...(messages || []).slice(0, -1),
          { role: 'user', content: visionContent },
        ];
      }
    }

    if (!groqMessages) {
      const fullSystem = system + SAFETY_SYSTEM_ADDENDUM + contextBlock
        + (source === 'document' ? '\n\nAnswer using the document excerpts above.' : '');
      groqMessages = [{ role: 'system', content: fullSystem }, ...(messages || [])];
    }

    // 4. Call Groq
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${groqKey}` },
      body: JSON.stringify({ model, max_tokens: 1024, messages: groqMessages }),
    });

    if (!groqRes.ok) {
      const err = await groqRes.json();
      return res.status(groqRes.status).json({ error: err.error?.message || 'Groq error' });
    }

    const data = await groqRes.json();
    res.json({ reply: data.choices?.[0]?.message?.content || 'No response.', source });
  } catch (err) {
    console.error('AI doubt error:', err);
    res.status(500).json({ error: 'AI service error.' });
  }
});

// ── Reviews ────────────────────────────────────────────────────
app.post('/api/reviews', requireStudentAuth, async (req, res) => {
  try {
    const { teacherId, bookingId, rating, review } = req.body;
    if (!teacherId || !bookingId || !rating) return res.status(400).json({ error: 'Missing fields' });
    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    if (booking.student_email !== req.student.email) return res.status(403).json({ error: 'Forbidden' });
    if (booking.status !== 'completed') return res.status(400).json({ error: 'Session not completed yet' });
    const existing = await Review.findOne({ bookingId });
    if (existing) return res.status(409).json({ error: 'You already reviewed this session' });
    const r = await Review.create({ teacherId, bookingId, studentEmail: req.student.email, studentName: req.student.name, rating, review: review || '' });
    // Recompute teacher average rating
    const all = await Review.find({ teacherId });
    const avg = all.length > 0 ? all.reduce((s, x) => s + x.rating, 0) / all.length : rating;
    await Teacher.findByIdAndUpdate(teacherId, { rating: Math.round(avg * 10) / 10 });
    res.json(r);
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ error: 'Already reviewed this session' });
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/reviews/teacher/:teacherId', async (req, res) => {
  try {
    const reviews = await Review.find({ teacherId: req.params.teacherId }).sort({ createdAt: -1 }).lean();
    res.json(reviews);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/reviews/booking/:bookingId', requireStudentAuth, async (req, res) => {
  try {
    const review = await Review.findOne({ bookingId: req.params.bookingId }).lean();
    res.json(review || null);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── Forum ───────────────────────────────────────────────────────
app.get('/api/forum/:classId/:subjectId/:topicId', async (req, res) => {
  try {
    const { classId, subjectId, topicId } = req.params;
    const posts = await ForumPost.find({ classId, subjectId, topicId }).sort({ createdAt: -1 }).lean();
    res.json(posts);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/forum', requireStudentAuth, async (req, res) => {
  try {
    const { classId, subjectId, topicId, question } = req.body;
    if (!classId || !subjectId || !topicId || !question?.trim()) return res.status(400).json({ error: 'Missing fields' });
    // name may be absent in old tokens — fall back to DB lookup
    let authorName = req.student.name;
    if (!authorName) {
      const s = await Student.findById(req.student.id).lean();
      authorName = s?.name || req.student.email.split('@')[0];
    }
    const post = await ForumPost.create({ classId, subjectId, topicId, authorName, authorEmail: req.student.email, question: question.trim() });
    res.json(post);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/forum/:postId/answers', requireStudentAuth, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text?.trim()) return res.status(400).json({ error: 'Answer text required' });
    let authorName = req.student.name;
    if (!authorName) {
      const s = await Student.findById(req.student.id).lean();
      authorName = s?.name || req.student.email.split('@')[0];
    }
    const post = await ForumPost.findByIdAndUpdate(req.params.postId, {
      $push: { answers: { authorName, authorEmail: req.student.email, text: text.trim(), isTeacher: false } }
    }, { new: true });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/forum/:postId/answers/teacher', requireAuth, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text?.trim()) return res.status(400).json({ error: 'Answer text required' });
    const teacher = await Teacher.findById(req.teacher.id).lean();
    const post = await ForumPost.findByIdAndUpdate(req.params.postId, {
      $push: { answers: { authorName: teacher.name, authorEmail: teacher.email, text: text.trim(), isTeacher: true } }
    }, { new: true });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/api/forum/:postId/upvote', requireStudentAuth, async (req, res) => {
  try {
    const post = await ForumPost.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Not found' });
    const email = req.student.email;
    const idx = post.upvotedBy.indexOf(email);
    if (idx > -1) { post.upvotedBy.splice(idx, 1); post.upvotes = Math.max(0, post.upvotes - 1); }
    else { post.upvotedBy.push(email); post.upvotes++; }
    await post.save();
    res.json({ upvotes: post.upvotes, upvotedBy: post.upvotedBy });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/api/forum/:postId/answers/:answerId/upvote', requireStudentAuth, async (req, res) => {
  try {
    const post = await ForumPost.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Not found' });
    const answer = post.answers.id(req.params.answerId);
    if (!answer) return res.status(404).json({ error: 'Answer not found' });
    const email = req.student.email;
    const idx = answer.upvotedBy.indexOf(email);
    if (idx > -1) { answer.upvotedBy.splice(idx, 1); answer.upvotes = Math.max(0, answer.upvotes - 1); }
    else { answer.upvotedBy.push(email); answer.upvotes++; }
    await post.save();
    res.json({ upvotes: answer.upvotes });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── Razorpay Payments ───────────────────────────────────────────
function getRazorpay() {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) return null;
  return new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
}

app.post('/api/payments/create-order', requireStudentAuth, async (req, res) => {
  try {
    const rzp = getRazorpay();
    if (!rzp) return res.status(503).json({ error: 'Payment gateway not configured' });
    const { amount, teacherId, currency = 'INR' } = req.body;
    if (!amount || amount < 1) return res.status(400).json({ error: 'Invalid amount' });
    const order = await rzp.orders.create({
      amount: Math.round(amount * 100),
      currency,
      receipt: `osh_${Date.now()}`,
      notes: { teacherId, studentEmail: req.student.email },
    });
    res.json({ orderId: order.id, amount: order.amount, currency: order.currency, keyId: process.env.RAZORPAY_KEY_ID });
  } catch (e) {
    console.error('Razorpay create-order error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/payments/verify', requireStudentAuth, async (req, res) => {
  try {
    if (!process.env.RAZORPAY_KEY_SECRET) return res.status(503).json({ error: 'Payment gateway not configured' });
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expected = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(body).digest('hex');
    if (expected !== razorpay_signature) return res.status(400).json({ error: 'Payment verification failed' });
    res.json({ ok: true, paymentId: razorpay_payment_id });
  } catch (e) {
    console.error('Razorpay verify error:', e.message);
    res.status(500).json({ error: e.message });
  }
});


// ── Web Push setup ─────────────────────────────────────────────
let webPush = null;
let vapidPublicKey = null;
try {
  webPush = require('web-push');
  const pub = process.env.VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  if (pub && priv) {
    vapidPublicKey = pub;
    webPush.setVapidDetails('mailto:admin@onlinestudyhub.com', pub, priv);
  } else {
    const keys = webPush.generateVAPIDKeys();
    vapidPublicKey = keys.publicKey;
    webPush.setVapidDetails('mailto:admin@onlinestudyhub.com', keys.publicKey, keys.privateKey);
    console.log('[PUSH] Save these VAPID keys to .env for persistence:');
    console.log(`  VAPID_PUBLIC_KEY=${keys.publicKey}`);
    console.log(`  VAPID_PRIVATE_KEY=${keys.privateKey}`);
  }
} catch (e) {
  console.log('[PUSH] web-push not available:', e.message);
}

async function sendPush(email, { title, body, url, tag }) {
  if (!webPush || !vapidPublicKey) return;
  try {
    const sub = await PushSub.findOne({ userEmail: email });
    if (!sub) return;
    await webPush.sendNotification(sub.subscription, JSON.stringify({ title, body, url: url || '/', tag }));
  } catch (e) {
    if (e.statusCode === 410 || e.statusCode === 404) await PushSub.deleteOne({ userEmail: email });
  }
}

// GET VAPID public key
app.get('/api/push/vapid-public-key', (req, res) => {
  if (!vapidPublicKey) return res.status(503).json({ error: 'Push not configured' });
  res.json({ publicKey: vapidPublicKey });
});

// Subscribe / update subscription
app.post('/api/push/subscribe', requireStudentAuth, async (req, res) => {
  try {
    const { subscription } = req.body || {};
    if (!subscription) return res.status(400).json({ error: 'Missing subscription' });
    await PushSub.findOneAndUpdate(
      { userEmail: req.student.email },
      { $set: { subscription } },
      { upsert: true, new: true }
    );
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// ── AI: Personalized Study Plan ────────────────────────────────
app.post('/api/ai/study-plan', async (req, res) => {
  try {
    const { target, examDate, hoursPerDay, weakTopics } = req.body || {};
    const groqKey = (process.env.GROQ_API_KEY || '').trim();
    if (!groqKey) return res.status(503).json({ error: 'AI not configured' });
    if (!examDate) return res.status(400).json({ error: 'Exam date required' });

    const today = new Date().toISOString().slice(0, 10);
    const daysLeft = Math.max(1, Math.round((new Date(examDate) - new Date(today)) / 86400000));
    const planDays = Math.min(daysLeft, 60);
    const hours = Math.max(1, Math.min(12, parseInt(hoursPerDay) || 2));
    const weakList = (weakTopics || []).filter(Boolean);

    const prompt = `You are an expert Indian academic study planner. Create a personalized day-by-day study plan.

Target exam/goal: ${target || 'Board Exam'}
Exam date: ${examDate}
Today: ${today}
Days available: ${planDays}
Study hours per day: ${hours}
Weak topics to prioritize: ${weakList.length ? weakList.join(', ') : 'not specified'}

Rules:
- Start with weakest topics (first 40% of days)
- Mix in practice problems and revision
- Last 20% = full mock tests + revision
- Each day must have 2-4 tasks
- Be specific (e.g. "Solve 20 Integration problems" not just "Study Math")
- Include rest/light revision every 7th day

Respond ONLY with a raw JSON array, no markdown, no explanation:
[{"day":1,"date":"YYYY-MM-DD","subject":"Mathematics","focus":"Quadratic Equations","tasks":["task1","task2","task3"],"hours":${hours},"type":"study"},...]

Generate exactly ${planDays} days starting from ${today}.`;

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${groqKey}` },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 4000,
        temperature: 0.4,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!groqRes.ok) {
      const err = await groqRes.json().catch(() => ({}));
      return res.status(groqRes.status).json({ error: err.error?.message || 'AI error' });
    }

    const data = await groqRes.json();
    const text = data.choices?.[0]?.message?.content || '[]';

    let plan = [];
    try {
      // Try direct parse first
      plan = JSON.parse(text);
    } catch {
      // Extract JSON array from text
      const match = text.match(/\[[\s\S]*\]/);
      if (match) {
        try { plan = JSON.parse(match[0]); } catch { plan = []; }
      }
    }

    if (!Array.isArray(plan)) plan = [];
    res.json({ plan, daysLeft, planDays });
  } catch (err) {
    console.error('Study plan error:', err);
    res.status(500).json({ error: 'Failed to generate study plan' });
  }
});

// ── AI Flashcard Generator ─────────────────────────────────────
app.post('/api/ai/flashcards', async (req, res) => {
  try {
    const { topicTitle, definition, content, subjectId, classId } = req.body || {};
    const groqKey = (process.env.GROQ_API_KEY || '').trim();
    if (!groqKey) return res.status(503).json({ error: 'AI not configured' });
    if (!topicTitle) return res.status(400).json({ error: 'topicTitle required' });

    const contextText = [
      definition && `Definition: ${definition}`,
      content && `Content: ${content?.replace(/<[^>]+>/g, ' ').slice(0, 1500)}`,
    ].filter(Boolean).join('\n\n');

    const prompt = `You are an expert Indian CBSE teacher for ${subjectId || 'the subject'} (${classId?.replace('class-', 'Class ') || ''}).

Generate exactly 10 high-quality flashcard pairs for the topic: "${topicTitle}"

Use this source material:
${contextText || `Topic: ${topicTitle}`}

Rules:
- Each question must test a specific, important concept
- Answers must be concise (1-3 sentences max)
- Mix question types: definitions, formulas, examples, applications, comparisons
- Focus on what appears in CBSE board exams
- Use simple, clear language

Respond with ONLY valid JSON, no markdown, no explanation:
{"cards":[{"q":"question text","a":"answer text"},...]}}`;

    const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.5,
        max_tokens: 1500,
      }),
    });

    if (!resp.ok) {
      const err = await resp.text();
      console.error('Groq flashcard error:', err);
      return res.status(502).json({ error: 'AI service error' });
    }

    const data = await resp.json();
    const raw = data.choices?.[0]?.message?.content || '';

    // Extract JSON — strip any markdown fences if present
    const jsonStr = raw.replace(/^```json?\s*/i, '').replace(/```\s*$/, '').trim();
    let parsed;
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      // Try to find JSON object in the response
      const match = jsonStr.match(/\{[\s\S]*\}/);
      if (match) parsed = JSON.parse(match[0]);
      else return res.status(502).json({ error: 'AI returned invalid format' });
    }

    const cards = Array.isArray(parsed?.cards) ? parsed.cards.filter(c => c.q && c.a) : [];
    if (!cards.length) return res.status(502).json({ error: 'No cards generated' });

    res.json({ cards });
  } catch (err) {
    console.error('Flashcard gen error:', err);
    res.status(500).json({ error: 'Failed to generate flashcards' });
  }
});

// ── Parent Portal: Auth ────────────────────────────────────────
function requireParentAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });
  try {
    req.parent = jwt.verify(auth.slice(7), JWT_SECRET);
    if (req.parent.role !== 'parent') return res.status(403).json({ error: 'Not a parent account' });
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

app.post('/api/parent/register', async (req, res) => {
  try {
    const { email, password, name, phone } = req.body || {};
    if (!email || !password || !name) return res.status(400).json({ error: 'All fields required' });
    if (password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters' });
    const existing = await Parent.findOne({ email });
    if (existing) return res.status(409).json({ error: 'Email already registered' });
    const hash = await bcrypt.hash(password, 10);
    const parent = await Parent.create({ email, password_hash: hash, name, phone: phone || '' });
    const token = jwt.sign({ id: parent._id.toString(), email, name, role: 'parent' }, JWT_SECRET, { expiresIn: '30d' });
    res.status(201).json({ token, id: parent._id, email, name, role: 'parent' });
  } catch (e) { console.error('Parent register:', e); res.status(500).json({ error: 'Server error' }); }
});

app.post('/api/parent/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
    const parent = await Parent.findOne({ email });
    if (!parent) return res.status(401).json({ error: 'Invalid credentials' });
    const valid = await bcrypt.compare(password, parent.password_hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: parent._id.toString(), email: parent.email, name: parent.name, role: 'parent' }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, id: parent._id, email: parent.email, name: parent.name, role: 'parent', linked_students: parent.linked_students });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/parent/me', requireParentAuth, async (req, res) => {
  try {
    const parent = await Parent.findById(req.parent.id).select('-password_hash').lean();
    if (!parent) return res.status(404).json({ error: 'Not found' });
    res.json({ ...parent, id: parent._id, role: 'parent' });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

app.post('/api/parent/link', requireParentAuth, async (req, res) => {
  try {
    const { studentEmail, nickname } = req.body || {};
    if (!studentEmail) return res.status(400).json({ error: 'Student email required' });
    const student = await Student.findOne({ email: studentEmail.toLowerCase().trim() }).lean();
    if (!student) return res.status(404).json({ error: 'No student found with that email' });
    const parent = await Parent.findById(req.parent.id);
    const already = parent.linked_students.some(s => s.email === studentEmail.toLowerCase().trim());
    if (already) return res.status(409).json({ error: 'Already linked to this student' });
    parent.linked_students.push({ email: studentEmail.toLowerCase().trim(), nickname: nickname || student.name });
    await parent.save();
    res.json({ ok: true, student: { email: student.email, name: student.name } });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

app.delete('/api/parent/unlink/:email', requireParentAuth, async (req, res) => {
  try {
    const parent = await Parent.findById(req.parent.id);
    parent.linked_students = parent.linked_students.filter(s => s.email !== req.params.email);
    await parent.save();
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/parent/child/:email/data', requireParentAuth, async (req, res) => {
  try {
    const parent = await Parent.findById(req.parent.id).lean();
    const linked = parent.linked_students.some(s => s.email === req.params.email);
    if (!linked) return res.status(403).json({ error: 'Not authorized for this student' });

    const student = await Student.findOne({ email: req.params.email }).select('name avatar class_id createdAt').lean();
    if (!student) return res.status(404).json({ error: 'Student not found' });

    const bookings = await Booking.find({ student_email: req.params.email })
      .populate('teacher_id', 'name subject')
      .sort({ scheduled_date: -1 })
      .lean();

    const sessions = bookings.map(b => ({
      id: b._id,
      date: b.scheduled_date,
      time: b.time_slot,
      subject: b.subject_id,
      topic: b.topic_id,
      teacherName: b.teacher_id?.name || '—',
      status: b.status,
      amount: b.amount_paid,
      is_demo: b.is_demo,
      meet_link: b.status === 'confirmed' ? b.meet_link : null,
    }));

    const totalSpent = sessions.filter(s => s.amount).reduce((acc, s) => acc + (s.amount || 0), 0);
    const completedCount = sessions.filter(s => s.status === 'completed').length;
    const upcomingCount = sessions.filter(s => s.status === 'confirmed').length;

    res.json({
      student: { name: student.name, avatar: student.avatar, class_id: student.class_id, joinedAt: student.createdAt },
      sessions,
      stats: { totalSessions: sessions.length, completedCount, upcomingCount, totalSpent },
    });
  } catch (e) { console.error('Parent child data:', e); res.status(500).json({ error: 'Server error' }); }
});

// ── Group Classes ───────────────────────────────────────────────

// List upcoming/live group classes (public)
app.get('/api/group-classes', async (req, res) => {
  try {
    const { classId, subjectId, status } = req.query;
    const filter = {};
    if (classId)   filter.classId   = classId;
    if (subjectId) filter.subjectId = subjectId;
    if (status)    filter.status    = status;
    else           filter.status    = { $in: ['scheduled', 'live'] };

    const classes = await GroupClass.find(filter)
      .populate('teacherId', 'name avatar rating subject')
      .sort({ scheduledAt: 1 })
      .lean();

    res.json(classes.map(gc => ({
      ...gc,
      spotsLeft: gc.maxStudents - gc.joinedStudents.length,
      joinedCount: gc.joinedStudents.length,
      joinedStudents: undefined,
    })));
  } catch (e) { console.error('GET group-classes:', e); res.status(500).json({ error: 'Server error' }); }
});

// Teacher's own group classes
app.get('/api/group-classes/mine', requireAuth, async (req, res) => {
  try {
    const classes = await GroupClass.find({ teacherId: req.teacher.id })
      .sort({ scheduledAt: -1 })
      .lean();
    res.json(classes.map(gc => ({
      ...gc,
      joinedCount: gc.joinedStudents.length,
    })));
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// Student's joined group classes
app.get('/api/group-classes/joined', requireStudentAuth, async (req, res) => {
  try {
    const email = req.student.email;
    const classes = await GroupClass.find({
      'joinedStudents.email': email,
      status: { $in: ['scheduled', 'live'] },
    })
      .populate('teacherId', 'name avatar rating')
      .sort({ scheduledAt: 1 })
      .lean();
    res.json(classes.map(gc => ({
      ...gc,
      joinedCount: gc.joinedStudents.length,
      joinedStudents: undefined,
    })));
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// Get single group class
app.get('/api/group-classes/:id', async (req, res) => {
  try {
    const gc = await GroupClass.findById(req.params.id)
      .populate('teacherId', 'name avatar rating subject experience qualification bio')
      .lean();
    if (!gc) return res.status(404).json({ error: 'Not found' });
    res.json({ ...gc, joinedCount: gc.joinedStudents.length, joinedStudents: undefined });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// Teacher creates a group class
app.post('/api/group-classes', requireAuth, async (req, res) => {
  try {
    const { title, description, classId, subjectId, topicId, scheduledAt, durationMin, maxStudents, price, language } = req.body || {};
    if (!title || !classId || !subjectId || !scheduledAt) {
      return res.status(400).json({ error: 'title, classId, subjectId, scheduledAt required' });
    }
    const teacher = await Teacher.findById(req.teacher.id).lean();
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' });

    const jitsiRoomId = 'osh-' + crypto.randomBytes(8).toString('hex');
    const gc = await GroupClass.create({
      teacherId:   req.teacher.id,
      title:       title.trim(),
      description: (description || '').trim(),
      classId, subjectId,
      topicId:     topicId || '',
      scheduledAt: new Date(scheduledAt),
      durationMin: parseInt(durationMin) || 60,
      maxStudents: Math.min(parseInt(maxStudents) || 20, 100),
      price:       parseFloat(price) || 0,
      language:    language || 'Hindi/English',
      jitsiRoomId,
    });
    res.status(201).json(gc);
  } catch (e) { console.error('POST group-classes:', e); res.status(500).json({ error: 'Server error' }); }
});

// Student joins a group class (free only for now; Razorpay can be wired for paid)
app.post('/api/group-classes/:id/join', requireStudentAuth, async (req, res) => {
  try {
    const gc = await GroupClass.findById(req.params.id);
    if (!gc) return res.status(404).json({ error: 'Class not found' });
    if (gc.status === 'ended' || gc.status === 'cancelled') {
      return res.status(400).json({ error: 'This class is no longer available' });
    }
    if (gc.joinedStudents.length >= gc.maxStudents) {
      return res.status(400).json({ error: 'Class is full' });
    }
    const alreadyJoined = gc.joinedStudents.some(s => s.email === req.student.email);
    if (alreadyJoined) return res.status(400).json({ error: 'Already registered' });

    gc.joinedStudents.push({ email: req.student.email, name: req.student.name || '' });
    await gc.save();
    res.json({ success: true, jitsiRoomId: gc.jitsiRoomId, status: gc.status });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// Student leaves a group class
app.delete('/api/group-classes/:id/leave', requireStudentAuth, async (req, res) => {
  try {
    const gc = await GroupClass.findById(req.params.id);
    if (!gc) return res.status(404).json({ error: 'Not found' });
    gc.joinedStudents = gc.joinedStudents.filter(s => s.email !== req.student.email);
    await gc.save();
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// Teacher updates status (live / ended / cancelled)
app.patch('/api/group-classes/:id/status', requireAuth, async (req, res) => {
  try {
    const { status } = req.body || {};
    if (!['scheduled', 'live', 'ended', 'cancelled'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    const gc = await GroupClass.findOneAndUpdate(
      { _id: req.params.id, teacherId: req.teacher.id },
      { status },
      { new: true }
    );
    if (!gc) return res.status(404).json({ error: 'Not found or not your class' });
    res.json(gc);
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// Teacher deletes a group class
app.delete('/api/group-classes/:id', requireAuth, async (req, res) => {
  try {
    const gc = await GroupClass.findOneAndDelete({ _id: req.params.id, teacherId: req.teacher.id });
    if (!gc) return res.status(404).json({ error: 'Not found or not your class' });
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

// ── Error Handler ──────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});


if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

module.exports = app;
