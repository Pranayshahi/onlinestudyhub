const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  name: { type: String, required: true },
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
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
const Teacher = mongoose.model('Teacher', teacherSchema);
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { Student, Teacher, Booking };
