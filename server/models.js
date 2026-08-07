const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String, default: '🧑‍🎓' },
  phone: { type: String, default: '' },
  class_id: { type: String, default: '' },
  bio: { type: String, default: '' },
  referral_code:  { type: String, default: null, sparse: true },
  referred_by:    { type: String, default: null },
  referral_count: { type: Number, default: 0 },
  unlocked_notes: [{ type: String }], // each entry: "classId/subjectId/topicId"
  pyq_pro_expires: { type: Date, default: null }, // null = not a Pro subscriber
}, { timestamps: true });

const teacherSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String, default: '👨‍🏫' },
  profile_pic: { type: String, default: null },
  subject: { type: String, required: true },
  class_ids: { type: String, required: true },
  experience: { type: Number, default: 1 },
  qualification: { type: String, required: true },
  rating: { type: Number, default: 4.5 },
  students_count: { type: Number, default: 0 },
  fee: { type: Number, default: 500 },
  bio: { type: String },
  topics: { type: String },
  contact: { type: String },
  available: { type: Boolean, default: true },
  demo_available: { type: Boolean, default: true },
  is_online: { type: Boolean, default: false },
  last_seen: { type: Date, default: Date.now },
  availability: [{
    day: { type: String }, // 'Monday', 'Tuesday', etc.
    slots: [{ type: String }], // ['9:00 AM', '10:00 AM', ...]
  }],
}, { timestamps: true });

const bookingSchema = new mongoose.Schema({
  student_name: { type: String, required: true },
  student_phone: { type: String, required: true },
  student_email: { type: String },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  class_id: { type: String, required: true },
  subject_id: { type: String, required: true },
  topic_id: { type: String, default: null },
  time_slot: { type: String, required: true },
  scheduled_date: { type: String, required: true },
  meet_link: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
  payment_id:   { type: String, default: null },
  amount_paid:  { type: Number, default: null },
  is_demo:      { type: Boolean, default: false },
  demo_prep:    {
    goal:  { type: String, default: '' },
    level: { type: String, default: '' },
    note:  { type: String, default: '' },
  },
}, { timestamps: true });

const topicMediaSchema = new mongoose.Schema({
  classId:   { type: String, required: true },
  subjectId: { type: String, required: true },
  topicId:   { type: String, required: true },
  type: { type: String, enum: ['audio', 'video', 'report', 'infographic', 'quiz'], required: true },
  title:    { type: String, default: '' },
  // file-based types (audio, report, infographic)
  fileData: { type: String, default: null },   // base64 data URI
  fileName: { type: String, default: null },
  mimeType: { type: String, default: null },
  fileSize: { type: Number, default: null },
  // video
  videoUrl: { type: String, default: null },
  // quiz
  quiz: [{
    question:    { type: String },
    options:     [{ type: String }],
    correct:     { type: Number },
    explanation: { type: String },
  }],
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', default: null },
}, { timestamps: true });

// One record per (teacher, class, subject, topic, type) — multiple teachers allowed
topicMediaSchema.index({ classId: 1, subjectId: 1, topicId: 1, type: 1 });
topicMediaSchema.index({ classId: 1, subjectId: 1, topicId: 1, uploadedBy: 1 });

const reviewSchema = new mongoose.Schema({
  teacherId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  bookingId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true, unique: true },
  studentEmail:{ type: String, required: true },
  studentName: { type: String, required: true },
  rating:      { type: Number, required: true, min: 1, max: 5 },
  review:      { type: String, default: '' },
}, { timestamps: true });

const forumAnswerSchema = new mongoose.Schema({
  authorName:  { type: String, required: true },
  authorEmail: { type: String, required: true },
  isTeacher:   { type: Boolean, default: false },
  text:        { type: String, required: true },
  upvotes:     { type: Number, default: 0 },
  upvotedBy:   [{ type: String }],
  createdAt:   { type: Date, default: Date.now },
});

const forumPostSchema = new mongoose.Schema({
  classId:     { type: String, required: true },
  subjectId:   { type: String, required: true },
  topicId:     { type: String, required: true },
  authorName:  { type: String, required: true },
  authorEmail: { type: String, required: true },
  question:    { type: String, required: true },
  upvotes:     { type: Number, default: 0 },
  upvotedBy:   [{ type: String }],
  answers:     [forumAnswerSchema],
}, { timestamps: true });
forumPostSchema.index({ classId: 1, subjectId: 1, topicId: 1 });

const parentSchema = new mongoose.Schema({
  email:         { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  name:          { type: String, required: true },
  phone:         { type: String, default: '' },
  linked_students: [{
    email:    { type: String, required: true },
    nickname: { type: String, default: '' },
  }],
}, { timestamps: true });

const pushSubSchema = new mongoose.Schema({
  userEmail:    { type: String, required: true, unique: true },
  subscription: { type: Object, required: true },
}, { timestamps: true });

const groupClassSchema = new mongoose.Schema({
  teacherId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  title:       { type: String, required: true },
  description: { type: String, default: '' },
  classId:     { type: String, required: true },
  subjectId:   { type: String, required: true },
  topicId:     { type: String, default: '' },
  scheduledAt: { type: Date, required: true },
  durationMin: { type: Number, default: 60 },
  maxStudents: { type: Number, default: 20 },
  price:       { type: Number, default: 0 },
  language:    { type: String, default: 'Hindi/English' },
  jitsiRoomId: { type: String, required: true, unique: true },
  status:      { type: String, enum: ['scheduled', 'live', 'ended', 'cancelled'], default: 'scheduled' },
  joinedStudents: [{
    email:    { type: String, required: true },
    name:     { type: String, default: '' },
    joinedAt: { type: Date, default: Date.now },
  }],
}, { timestamps: true });

groupClassSchema.index({ scheduledAt: 1, status: 1 });
groupClassSchema.index({ teacherId: 1 });

const batchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  targetExam: { type: String, required: true },
  targetClass: { type: String, required: true },
  description: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  bannerText: { type: String, default: 'PW Style Batch 2026' },
  price: { type: Number, required: true, default: 2999 },
  originalPrice: { type: Number, default: 4999 },
  language: { type: String, default: 'Hinglish' },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  faculties: [{
    name: { type: String, required: true },
    subject: { type: String, required: true },
    avatar: { type: String, default: '👨‍🏫' },
    qualification: { type: String, default: 'Senior Faculty' },
    experience: { type: String, default: '8+ Years' }
  }],
  schedule: [{
    day: { type: String },
    time: { type: String },
    subject: { type: String },
    topic: { type: String },
    videoUrl: { type: String },
    pdfNotesUrl: { type: String },
    dppId: { type: String }
  }],
  announcements: [{
    title: { type: String },
    content: { type: String },
    date: { type: Date, default: Date.now }
  }],
  enrolledStudents: [{
    email: { type: String, required: true },
    paymentId: { type: String },
    enrolledAt: { type: Date, default: Date.now }
  }],
  features: [{ type: String }]
}, { timestamps: true });

batchSchema.index({ targetExam: 1, targetClass: 1 });

const dppSchema = new mongoose.Schema({
  title: { type: String, required: true },
  batchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch' },
  subject: { type: String, required: true },
  topic: { type: String, required: true },
  questions: [{
    question: { type: String, required: true },
    options: [{ type: String }],
    correct: { type: Number, required: true },
    explanation: { type: String },
    videoSolutionUrl: { type: String }
  }],
  pdfUrl: { type: String, default: null }
}, { timestamps: true });

const storeProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, enum: ['book', 'module', 'handbook', 'test_kit'], required: true },
  targetExam: { type: String, default: 'JEE/NEET' },
  description: { type: String, default: '' },
  price: { type: Number, required: true },
  originalPrice: { type: Number, default: 999 },
  image: { type: String, default: '' },
  rating: { type: Number, default: 4.8 },
  reviewsCount: { type: Number, default: 128 },
  features: [{ type: String }],
  samplePdfUrl: { type: String, default: '' },
  inStock: { type: Boolean, default: true }
}, { timestamps: true });

const Student    = mongoose.model('Student',    studentSchema);
const Teacher    = mongoose.model('Teacher',    teacherSchema);
const Booking    = mongoose.model('Booking',    bookingSchema);
const TopicMedia = mongoose.model('TopicMedia', topicMediaSchema);
const Review     = mongoose.model('Review',     reviewSchema);
const ForumPost  = mongoose.model('ForumPost',  forumPostSchema);
const Parent     = mongoose.model('Parent',     parentSchema);
const PushSub    = mongoose.model('PushSub',    pushSubSchema);
const GroupClass = mongoose.model('GroupClass', groupClassSchema);
const Batch      = mongoose.model('Batch',      batchSchema);
const DPP        = mongoose.model('DPP',        dppSchema);
const StoreProduct = mongoose.model('StoreProduct', storeProductSchema);

// ── Gamification: XP, Streak & Badges per student ─────────────
const gamificationSchema = new mongoose.Schema({
  studentEmail:  { type: String, required: true, unique: true },
  studentName:   { type: String, default: '' },
  xp:            { type: Number, default: 0 },
  level:         { type: Number, default: 1 },
  streak:        { type: Number, default: 0 },       // current daily streak
  longestStreak: { type: Number, default: 0 },
  lastActiveDate:{ type: String, default: null },     // 'YYYY-MM-DD'
  badges: [{ type: String }],                         // badge ids earned
  weeklyXp:      { type: Number, default: 0 },        // reset every Monday
  weeklyReset:   { type: String, default: null },     // ISO week key 'YYYY-Www'
  topicsCompleted: { type: Number, default: 0 },
  quizzesTaken:  { type: Number, default: 0 },
  doubtsPosted:  { type: Number, default: 0 },
  subjectTopics: { type: Map, of: Number, default: {} }, // e.g. { mathematics: 7, physics: 3 }
}, { timestamps: true });

gamificationSchema.index({ xp: -1 });
gamificationSchema.index({ weeklyXp: -1 });

const Gamification = mongoose.model('Gamification', gamificationSchema);

// ── Contact Submissions (Feedback & Complaints) ─────────────────
const contactSubmissionSchema = new mongoose.Schema({
  type: { type: String, enum: ['Feedback', 'Complaint', 'General'], default: 'Feedback' },
  name: { type: String, required: true },
  email: { type: String, default: '' },
  subject: { type: String, required: true },
  priority: { type: String, enum: ['Normal', 'Urgent', 'Critical'], default: 'Normal' },
  message: { type: String, required: true },
  status: { type: String, enum: ['Open', 'In Review', 'Resolved'], default: 'Open' },
  destinationEmail: { type: String, default: 'shahipran@gmail.com' }
}, { timestamps: true });

// ── Super Admin Audit Log Schema ───────────────────────────────
const auditLogSchema = new mongoose.Schema({
  eventType: { type: String, required: true }, // 'student_signup', 'student_login', 'teacher_signup', 'teacher_login', 'contact_submission', 'superadmin_login'
  userEmail: { type: String, required: true },
  userName: { type: String, default: '' },
  role: { type: String, default: 'student' },
  details: { type: String, default: '' },
  ip: { type: String, default: '' },
  userAgent: { type: String, default: '' }
}, { timestamps: true });

auditLogSchema.index({ createdAt: -1 });
auditLogSchema.index({ eventType: 1 });

const ContactSubmission = mongoose.model('ContactSubmission', contactSubmissionSchema);
const AuditLog          = mongoose.model('AuditLog',          auditLogSchema);

module.exports = { Student, Teacher, Booking, TopicMedia, Review, ForumPost, Parent, PushSub, GroupClass, Batch, DPP, StoreProduct, Gamification, ContactSubmission, AuditLog };


