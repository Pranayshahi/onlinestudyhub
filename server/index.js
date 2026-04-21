const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const crypto = require('crypto');
require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const connectDB = require('./db');
const { Student, Teacher, Booking, TopicMedia, DocChunk } = require('./models');
const { chunkText, retrieveChunks } = require('./rag');
const { moderateInput, SAFETY_SYSTEM_ADDENDUM } = require('./moderation');

// Multer — store upload in memory (max 10 MB)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
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
    const { studentName, studentPhone, studentEmail, teacherId, classId, subjectId, topicId, timeSlot, scheduledDate } = req.body || {};

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
    });

    res.status(201).json({ bookingId: booking._id, meetLink, message: 'Booking confirmed!' });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ error: 'Failed to create booking' });
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

// ── Bookings: Update status (protected) ───────────────────────
app.patch('/api/bookings/:id', requireAuth, async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate(
      { _id: req.params.id, teacher_id: req.teacher.id },
      { status: req.body.status },
      { new: true }
    );
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
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

// ── Topic Media: get all for a topic (public) ───────────────────
app.get('/api/media/:classId/:subjectId/:topicId', async (req, res) => {
  try {
    const { classId, subjectId, topicId } = req.params;
    const items = await TopicMedia.find({ classId, subjectId, topicId })
      .select('-fileData')   // strip heavy binary on list
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
      { classId, subjectId, topicId, type },
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
    await DocChunk.insertMany(
      chunks.map((chunkText, chunkIndex) => ({
        uploadId,
        fileName: req.file.originalname,
        chunkText,
        chunkIndex,
      }))
    );

    res.json({ uploadId, fileName: req.file.originalname, chunks: chunks.length });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Failed to process document.' });
  }
});

// ── AI Doubt: RAG query with firewall ─────────────────────────
app.post('/api/ai-doubt', async (req, res) => {
  try {
    const { messages, system, uploadId } = req.body || {};
    const groqKey = process.env.GROQ_API_KEY;
    if (!groqKey) return res.status(503).json({ error: 'AI service not configured.' });

    // 1. Firewall — check last user message
    const lastUserMsg = [...(messages || [])].reverse().find(m => m.role === 'user');
    if (lastUserMsg) {
      const modResult = moderateInput(lastUserMsg.content);
      if (modResult.blocked) {
        return res.status(400).json({ blocked: true, reason: modResult.reason });
      }
    }

    // 2. RAG retrieval — if a document is attached
    let contextBlock = '';
    let source = 'general';

    if (uploadId && lastUserMsg) {
      const dbChunks = await DocChunk.find({ uploadId }).sort({ chunkIndex: 1 }).lean();
      if (dbChunks.length) {
        const relevant = retrieveChunks(lastUserMsg.content, dbChunks.map(c => c.chunkText));
        if (relevant.length) {
          contextBlock = `\n\nRELEVANT DOCUMENT EXCERPTS:\n${relevant.map((r, i) => `[${i + 1}] ${r.chunk}`).join('\n\n')}`;
          source = 'document';
        }
      }
    }

    // 3. Build system prompt with safety rules + optional doc context
    const fullSystem = system + SAFETY_SYSTEM_ADDENDUM + contextBlock
      + (source === 'document'
        ? '\n\nAnswer primarily using the document excerpts above. If the answer is not in the excerpts, say so and answer from your general knowledge.'
        : '');

    // 4. Call Groq
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${groqKey}` },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1024,
        messages: [{ role: 'system', content: fullSystem }, ...(messages || [])],
      }),
    });

    const data = await groqRes.json();
    if (!groqRes.ok) return res.status(groqRes.status).json({ error: data.error?.message || 'Groq error' });

    res.json({ reply: data.choices?.[0]?.message?.content || 'No response.', source });
  } catch (err) {
    console.error('AI doubt error:', err);
    res.status(500).json({ error: 'AI service error.' });
  }
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
