const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const connectDB = require('./db');
const { Student, Teacher, Booking } = require('./models');

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
app.use(express.json({ limit: '5mb' }));

// Ensure DB is connected before every request (safe for serverless)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch {
    res.status(503).json({ error: 'Database unavailable. Check MONGODB_URI and Atlas network access.' });
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

    const token = jwt.sign({ id: teacher._id.toString(), email }, JWT_SECRET, { expiresIn: '30d' });
    res.status(201).json({ token, id: teacher._id });
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
app.post('/api/auth/student/register', async (req, res) => {
  try {
    const { email, password, name } = req.body || {};
    if (!email || !password || !name) return res.status(400).json({ error: 'All fields required' });
    const existing = await Student.findOne({ email });
    if (existing) return res.status(409).json({ error: 'Email already registered' });

    const hash = await bcrypt.hash(password, 10);
    const student = await Student.create({ email, password_hash: hash, name });

    const token = jwt.sign({ id: student._id.toString(), email, role: 'student' }, JWT_SECRET, { expiresIn: '30d' });
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

    const token = jwt.sign({ id: student._id.toString(), email: student.email, role: 'student' }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, id: student._id, email: student.email, name: student.name, role: 'student' });
  } catch (err) {
    console.error('Student Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Teachers: Get all (public — used by user portal) ───────────
app.get('/api/teachers', async (req, res) => {
  try {
    const { classId } = req.query;
    let query = { available: true };
    if (classId) {
      query.class_ids = new RegExp(classId);
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
    res.status(500).json({ error: 'Server error: ' + err.message });
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

// ── Bookings: Create (public) ──────────────────────────────────
app.post('/api/bookings', async (req, res) => {
  try {
    const { studentEmail, teacherId, classId, subjectId, topicId } = req.body || {};

    if (!studentEmail || !teacherId || !classId || !subjectId) {
      return res.status(400).json({ error: 'Missing required booking information' });
    }
    const booking = await Booking.create({
      student_email: studentEmail,
      teacher_id: teacherId,
      class_id: classId,
      subject_id: subjectId,
      topic_id: topicId || null
    });
    res.status(201).json({ message: 'Booking request sent successfully', bookingId: booking._id });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// ── Health check ────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  const mongoose = require('mongoose');
  const state = mongoose.connection.readyState;
  // 0=disconnected 1=connected 2=connecting 3=disconnecting
  const connected = state === 1;
  res.json({ status: 'ok', db: connected ? 'connected' : 'disconnected' });
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
