const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const pool = require('./db');
const app = express();
const PORT = process.env.PORT || 5001;
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_in_prod';

const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:3001').split(',');
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

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
  const {
    email, password, name, avatar, profile_pic, subject, class_ids,
    experience, qualification, fee, bio, topics, contact, available,
  } = req.body;

  if (!email || !password || !name || !subject || !class_ids || !qualification) {
    return res.status(400).json({ error: 'Required fields missing' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  try {
    const [existing] = await pool.query('SELECT id FROM teachers WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const hash = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      `INSERT INTO teachers
        (email, password_hash, name, avatar, profile_pic, subject, class_ids, experience, qualification, fee, bio, topics, contact, available)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        email, hash, name,
        avatar || '👨‍🏫',
        profile_pic || null,
        subject,
        Array.isArray(class_ids) ? class_ids.join(',') : class_ids,
        parseInt(experience) || 1,
        qualification,
        parseInt(fee) || 500,
        bio || '',
        Array.isArray(topics) ? topics.join(',') : (topics || ''),
        contact || '',
        available !== false ? 1 : 0,
      ]
    );

    const token = jwt.sign({ id: result.insertId, email }, JWT_SECRET, { expiresIn: '30d' });
    res.status(201).json({ token, id: result.insertId });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Auth: Teacher Login ──────────────────────────────────────────
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  try {
    const [rows] = await pool.query('SELECT * FROM teachers WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const teacher = rows[0];
    const valid = await bcrypt.compare(password, teacher.password_hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: teacher.id, email: teacher.email, role: 'teacher' }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, id: teacher.id, email: teacher.email, name: teacher.name, role: 'teacher' });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Auth: Student Registration ──────────────────────────────────
app.post('/api/auth/student/register', async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) return res.status(400).json({ error: 'All fields required' });

  try {
    const [existing] = await pool.query('SELECT id FROM students WHERE email = ?', [email]);
    if (existing.length > 0) return res.status(409).json({ error: 'Email already registered' });

    const hash = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO students (email, password_hash, name) VALUES (?, ?, ?)',
      [email, hash, name]
    );

    const token = jwt.sign({ id: result.insertId, email, role: 'student' }, JWT_SECRET, { expiresIn: '30d' });
    res.status(201).json({ token, id: result.insertId, email, name, role: 'student' });
  } catch (err) {
    console.error('Student Register error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Auth: Student Login ─────────────────────────────────────────
app.post('/api/auth/student/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  try {
    const [rows] = await pool.query('SELECT * FROM students WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const student = rows[0];
    const valid = await bcrypt.compare(password, student.password_hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: student.id, email: student.email, role: 'student' }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, id: student.id, email: student.email, name: student.name, role: 'student' });
  } catch (err) {
    console.error('Student Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Teachers: Get all (public — used by user portal) ───────────
app.get('/api/teachers', async (req, res) => {
  try {
    const { classId } = req.query;
    let sql = 'SELECT id, name, avatar, profile_pic, subject, class_ids, experience, qualification, rating, students, fee, bio, topics, contact, available FROM teachers';
    const params = [];

    if (classId) {
      sql += ' WHERE FIND_IN_SET(?, class_ids) > 0 AND available = 1';
      params.push(classId);
    } else {
      sql += ' WHERE available = 1';
    }
    sql += ' ORDER BY rating DESC, students DESC';

    const [rows] = await pool.query(sql, params);
    res.json(rows.map(formatTeacher));
  } catch (err) {
    console.error('Get teachers error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Teachers: Get own profile (protected) ──────────────────────
app.get('/api/teachers/me', requireAuth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, email, name, avatar, profile_pic, subject, class_ids, experience, qualification, rating, students, fee, bio, topics, contact, available FROM teachers WHERE id = ?',
      [req.teacher.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(formatTeacher(rows[0]));
  } catch (err) {
    console.error('Get me error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Teachers: Update own profile (protected) ───────────────────
app.put('/api/teachers/me', requireAuth, async (req, res) => {
  const {
    name, avatar, profile_pic, subject, class_ids, experience, qualification,
    fee, bio, topics, contact, available,
  } = req.body;

  try {
    await pool.query(
      `UPDATE teachers SET
        name = ?, avatar = ?, profile_pic = ?, subject = ?, class_ids = ?,
        experience = ?, qualification = ?, fee = ?,
        bio = ?, topics = ?, contact = ?, available = ?
       WHERE id = ?`,
      [
        name, avatar || '👨‍🏫',
        profile_pic || null,
        subject,
        Array.isArray(class_ids) ? class_ids.join(',') : class_ids,
        parseInt(experience) || 1,
        qualification,
        parseInt(fee) || 500,
        bio || '',
        Array.isArray(topics) ? topics.join(',') : (topics || ''),
        contact || '',
        available !== false ? 1 : 0,
        req.teacher.id,
      ]
    );

    const [rows] = await pool.query(
      'SELECT id, email, name, avatar, profile_pic, subject, class_ids, experience, qualification, rating, students, fee, bio, topics, contact, available FROM teachers WHERE id = ?',
      [req.teacher.id]
    );
    res.json(formatTeacher(rows[0]));
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Teachers: Delete own account (protected) ───────────────────
app.delete('/api/teachers/me', requireAuth, async (req, res) => {
  try {
    await pool.query('DELETE FROM teachers WHERE id = ?', [req.teacher.id]);
    res.json({ message: 'Account deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Bookings: Create (public) ──────────────────────────────────
app.post('/api/bookings', async (req, res) => {
  const { studentEmail, teacherId, classId, subjectId, topicId } = req.body;

  if (!studentEmail || !teacherId || !classId || !subjectId) {
    return res.status(400).json({ error: 'Missing required booking information' });
  }

  try {
    const [result] = await pool.query(
      `INSERT INTO bookings (student_email, teacher_id, class_id, subject_id, topic_id)
       VALUES (?, ?, ?, ?, ?)`,
      [studentEmail, teacherId, classId, subjectId, topicId || null]
    );
    res.status(201).json({ message: 'Booking request sent successfully', bookingId: result.insertId });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// ── Health check ────────────────────────────────────────────────
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', db: 'connected' });
  } catch {
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

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

module.exports = app;
