const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String, default: '🧑‍🎓' },
  phone: { type: String, default: '' },
  class_id: { type: String, default: '' },
  bio: { type: String, default: '' },
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

const Student   = mongoose.model('Student',   studentSchema);
const Teacher   = mongoose.model('Teacher',   teacherSchema);
const Booking   = mongoose.model('Booking',   bookingSchema);
const TopicMedia= mongoose.model('TopicMedia',topicMediaSchema);
const Review    = mongoose.model('Review',    reviewSchema);
const ForumPost = mongoose.model('ForumPost', forumPostSchema);

module.exports = { Student, Teacher, Booking, TopicMedia, Review, ForumPost };
