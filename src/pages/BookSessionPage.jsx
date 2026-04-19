import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getClass, getSubject, getTopic, getSubjectColor, SUBJECT_META } from '../data/curriculum';
import { TEACHERS } from '../data/teachers';
import Breadcrumb from '../components/Breadcrumb';

// ── Steps shown on the page ──────────────────────────────────────
const STEPS = [
  {
    icon: '📋',
    title: 'Pick a Time Slot',
    desc: 'Choose a date and time that works for you. Sessions are 45–60 minutes long.',
    color: '#eef2ff',
    accent: '#4f46e5',
  },
  {
    icon: '🎯',
    title: '1-on-1 Focused Session',
    desc: `Your teacher will cover exactly this topic — no generic lessons, just what you need.`,
    color: '#f0fdf4',
    accent: '#16a34a',
  },
  {
    icon: '💬',
    title: 'Ask Everything Live',
    desc: 'Get all your doubts cleared in real time. No question is too small.',
    color: '#fff7ed',
    accent: '#ea580c',
  },
  {
    icon: '📝',
    title: 'Notes + Practice',
    desc: "Get personalised notes and extra practice problems after the session.",
    color: '#fdf4ff',
    accent: '#9333ea',
  },
];

// ── Booking Modal ────────────────────────────────────────────────
function BookingModal({ teacher, topic, classData, subjectMeta, onClose, onSuccess }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', doubts: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const TIME_SLOTS = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM',
  ];

  function set(k, v) { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: '' })); }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!form.date) e.date = 'Please select a date';
    if (!form.time) e.time = 'Please pick a time slot';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate network request (in production, POST to /api/bookings)
    setTimeout(() => {
      setLoading(false);
      onSuccess(form);
    }, 1200);
  }

  // Min date = tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const inputStyle = (hasErr) => ({
    width: '100%', padding: '.65rem .9rem',
    border: `1.5px solid ${hasErr ? '#ef4444' : '#e5e7eb'}`,
    borderRadius: 10, fontSize: '.9rem', fontFamily: 'Inter, sans-serif',
    outline: 'none', boxSizing: 'border-box', transition: 'border-color .15s',
  });

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.55)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: '#fff', borderRadius: 20, width: '100%', maxWidth: 500, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 64px rgba(0,0,0,.25)' }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', padding: '1.5rem', borderRadius: '20px 20px 0 0', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,.15)', border: 'none', color: '#fff', width: 30, height: 30, borderRadius: '50%', cursor: 'pointer', fontSize: '.9rem' }}>✕</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div style={{ fontSize: '2.5rem' }}>{teacher.avatar}</div>
            <div>
              <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.1rem', color: '#fff' }}>Book with {teacher.name}</div>
              <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.7)' }}>{subjectMeta.icon} {topic.title} · {classData.label}</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '1.5rem' }}>
          <p style={{ fontSize: '.85rem', color: '#9ca3af', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            Fill in your details and we'll confirm your session. The teacher will call you to confirm the booking.
          </p>

          {/* Name */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '.82rem', color: '#374151', marginBottom: '.35rem' }}>
              Full Name <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input style={inputStyle(errors.name)} value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g. Riya Sharma" />
            {errors.name && <p style={{ color: '#ef4444', fontSize: '.75rem', marginTop: '.25rem' }}>{errors.name}</p>}
          </div>

          {/* Phone */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '.82rem', color: '#374151', marginBottom: '.35rem' }}>
              Mobile Number <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input style={inputStyle(errors.phone)} value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="10-digit number" maxLength={10} inputMode="numeric" />
            {errors.phone && <p style={{ color: '#ef4444', fontSize: '.75rem', marginTop: '.25rem' }}>{errors.phone}</p>}
          </div>

          {/* Date + Time */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '.82rem', color: '#374151', marginBottom: '.35rem' }}>
                Date <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input type="date" style={inputStyle(errors.date)} min={minDate} value={form.date} onChange={e => set('date', e.target.value)} />
              {errors.date && <p style={{ color: '#ef4444', fontSize: '.75rem', marginTop: '.25rem' }}>{errors.date}</p>}
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 700, fontSize: '.82rem', color: '#374151', marginBottom: '.35rem' }}>
                Time Slot <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <select style={{ ...inputStyle(errors.time), background: '#fff' }} value={form.time} onChange={e => set('time', e.target.value)}>
                <option value="">Pick a slot…</option>
                {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.time && <p style={{ color: '#ef4444', fontSize: '.75rem', marginTop: '.25rem' }}>{errors.time}</p>}
            </div>
          </div>

          {/* Doubts */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '.82rem', color: '#374151', marginBottom: '.35rem' }}>
              What do you want to focus on? <span style={{ color: '#9ca3af' }}>(optional)</span>
            </label>
            <textarea
              style={{ ...inputStyle(false), resize: 'vertical', minHeight: 80 }}
              value={form.doubts}
              onChange={e => set('doubts', e.target.value)}
              placeholder={`e.g. I'm struggling with the formula part of ${topic.title}…`}
            />
          </div>

          {/* Session summary */}
          <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1rem', marginBottom: '1.5rem', fontSize: '.83rem', color: '#374151' }}>
            <div style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#1e1b4b', marginBottom: '.5rem', fontSize: '.9rem' }}>📋 Session Summary</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem' }}>
              <span style={{ color: '#9ca3af' }}>Topic</span>
              <span style={{ fontWeight: 600 }}>{topic.title}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem' }}>
              <span style={{ color: '#9ca3af' }}>Teacher</span>
              <span style={{ fontWeight: 600 }}>{teacher.name}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem' }}>
              <span style={{ color: '#9ca3af' }}>Duration</span>
              <span style={{ fontWeight: 600 }}>45–60 minutes</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e5e7eb', paddingTop: '.5rem', marginTop: '.25rem' }}>
              <span style={{ color: '#9ca3af' }}>Fee</span>
              <span style={{ fontWeight: 800, color: '#16a34a', fontSize: '1rem' }}>
                {typeof teacher.fee === 'number' ? `₹${teacher.fee}` : teacher.fee || '₹500'}/session
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ width: '100%', padding: '.85rem', borderRadius: 12, background: loading ? '#e5e7eb' : 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: loading ? '#9ca3af' : '#fff', fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', border: 'none', cursor: loading ? 'default' : 'pointer', transition: 'opacity .2s' }}
          >
            {loading ? '⏳ Sending request…' : '📅 Confirm Booking Request'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Success Screen ───────────────────────────────────────────────
function BookingSuccess({ booking, teacher, topic, onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.55)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: '#fff', borderRadius: 20, width: '100%', maxWidth: 440, padding: '2.5rem', textAlign: 'center', boxShadow: '0 24px 64px rgba(0,0,0,.25)' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', fontSize: '1.5rem', marginBottom: '.5rem' }}>Booking Request Sent!</h2>
        <p style={{ color: '#6b7280', fontSize: '.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          <strong>{teacher.name}</strong> will call you on <strong>{booking.phone}</strong> within <strong>24 hours</strong> to confirm your session on <strong>{topic.title}</strong>.
        </p>

        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 14, padding: '1rem', marginBottom: '1.5rem', fontSize: '.85rem', color: '#15803d', textAlign: 'left' }}>
          <div style={{ fontWeight: 800, marginBottom: '.5rem' }}>✅ What happens next:</div>
          <div>1. Teacher reviews your request</div>
          <div>2. Calls you to confirm the slot</div>
          <div>3. You join at the agreed time</div>
          <div>4. 45–60 min 1-on-1 deep session</div>
        </div>

        <div style={{ fontSize: '.8rem', color: '#9ca3af', marginBottom: '1.5rem' }}>
          Requested: {booking.date} at {booking.time}
        </div>

        <button
          onClick={onClose}
          style={{ width: '100%', padding: '.8rem', borderRadius: 12, background: '#4f46e5', color: '#fff', fontFamily: 'Nunito', fontWeight: 800, fontSize: '.95rem', border: 'none', cursor: 'pointer' }}
        >
          Back to Topic
        </button>
      </div>
    </div>
  );
}

// ── Main BookSessionPage ─────────────────────────────────────────
export default function BookSessionPage() {
  const { classId, subjectId, topicId } = useParams();
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);
  const [bookingDone, setBookingDone] = useState(null);

  const classData = getClass(classId);
  const subject = getSubject(classId, subjectId);
  const topic = getTopic(classId, subjectId, topicId);
  const subjectColor = getSubjectColor(subjectId);
  const meta = SUBJECT_META[subjectId] || {};

  const classTeachers = TEACHERS[classId] || [];
  const teacher = classTeachers.find(t =>
    t.subject?.toLowerCase().includes(subjectId?.toLowerCase()) ||
    (t.topics && t.topics.some(tp => tp.toLowerCase().includes(topic?.title?.toLowerCase())))
  ) || classTeachers[0];

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  if (!classData || !subject || !topic || !teacher) {
    return (
      <div className="container" style={{ padding: '5rem 1.25rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>😕</div>
        <h2 style={{ fontFamily: 'Nunito', color: '#1e1b4b', marginBottom: '.75rem' }}>Session info not found</h2>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>We couldn't find a teacher for this topic right now.</p>
        <Link to="/" className="btn btn-primary">← Go Home</Link>
      </div>
    );
  }

  const topicPath = `/class/${classId}/subject/${subjectId}/topic/${topicId}`;

  return (
    <div>
      {/* ── Hero ── */}
      <div className={subjectColor} style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4f46e5 100%)', color: '#fff', padding: '3rem 0 3.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-5rem', top: '-5rem', width: '22rem', height: '22rem', borderRadius: '50%', background: 'rgba(255,255,255,.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', left: '-3rem', bottom: '-6rem', width: '16rem', height: '16rem', borderRadius: '50%', background: 'rgba(255,255,255,.03)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', to: '/' },
            { label: classData.label, to: `/class/${classId}` },
            { label: meta.label || subjectId, to: `/class/${classId}/subject/${subjectId}` },
            { label: topic.title, to: topicPath },
            { label: 'Book Session' },
          ]} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
            {/* Teacher avatar */}
            <div style={{ width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', border: '3px solid rgba(255,255,255,.25)', flexShrink: 0 }}>
              {teacher.avatar}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: '#f97316', color: '#fff', fontSize: '.7rem', fontWeight: 800, padding: '.25rem .75rem', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '.04em' }}>
                  Deep Learn Session
                </span>
                <span style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', fontSize: '.75rem', fontWeight: 600, padding: '.25rem .7rem', borderRadius: 99 }}>
                  {meta.icon} {meta.label} · {classData.label}
                </span>
              </div>
              <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', marginBottom: '.35rem', lineHeight: 1.2 }}>
                {topic.title}
              </h1>
              <p style={{ opacity: .8, fontSize: '.92rem' }}>
                1-on-1 session with <strong>{teacher.name}</strong> · {teacher.experience} experience · ⭐ {teacher.rating}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-sm" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>

        {/* ── How it works ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.4rem', color: '#1e1b4b', marginBottom: '.4rem' }}>
            How a Deep Learn Session works
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '.9rem', marginBottom: '1.75rem' }}>
            A focused 1-on-1 experience built around this exact topic — not a generic tutoring call.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ background: step.color, border: `1px solid ${step.accent}22`, borderRadius: 16, padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-.75rem', right: '-.75rem', width: '4rem', height: '4rem', borderRadius: '50%', background: `${step.accent}12` }} />
                <div style={{ fontSize: '1.75rem', marginBottom: '.75rem' }}>{step.icon}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.35rem' }}>
                  <span style={{ background: step.accent, color: '#fff', width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '.95rem', color: '#1e1b4b' }}>{step.title}</span>
                </div>
                <p style={{ fontSize: '.83rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What you'll cover ── */}
        <section style={{ marginBottom: '3rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 20, padding: '2rem' }}>
          <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.2rem', color: '#1e1b4b', marginBottom: '1rem' }}>
            📚 What you'll cover in this session
          </h2>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontWeight: 700, color: '#374151', marginBottom: '.5rem', fontSize: '.9rem' }}>Topic focus</div>
              <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.1rem', color: '#1e1b4b', marginBottom: '.5rem' }}>{topic.title}</div>
              {topic.subtopics && (
                <p style={{ fontSize: '.85rem', color: '#6b7280', lineHeight: 1.6 }}>Covers: {topic.subtopics}</p>
              )}
              {topic.definition && (
                <div style={{ background: '#eef2ff', border: '1px solid #c7d2fe', borderRadius: 10, padding: '.75rem 1rem', marginTop: '.75rem', fontSize: '.83rem', color: '#374151', lineHeight: 1.6 }}>
                  <strong style={{ color: '#4f46e5' }}>Definition:</strong> {topic.definition}
                </div>
              )}
            </div>
            {topic.qa?.length > 0 && (
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontWeight: 700, color: '#374151', marginBottom: '.5rem', fontSize: '.9rem' }}>Practice Q&A</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                  {topic.qa.slice(0, 3).map((q, i) => (
                    <div key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '.6rem .9rem', fontSize: '.8rem', color: '#374151', maxWidth: 280 }}>
                      <span style={{ color: '#9ca3af', fontWeight: 700 }}>Q{i + 1}: </span>{q.q.slice(0, 60)}{q.q.length > 60 ? '…' : ''}
                    </div>
                  ))}
                  {topic.qa.length > 3 && (
                    <div style={{ fontSize: '.78rem', color: '#9ca3af', paddingLeft: '.25rem' }}>+{topic.qa.length - 3} more questions</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Teacher card + Book CTA ── */}
        <section style={{ background: 'linear-gradient(135deg, #f8fafc, #eef2ff)', border: '1.5px solid #c7d2fe', borderRadius: 24, padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Avatar + name */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', flexShrink: 0 }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.8rem', boxShadow: '0 4px 16px rgba(79,70,229,.2)', border: '3px solid #c7d2fe' }}>
                {teacher.avatar}
              </div>
              <div style={{ display: 'flex', color: '#fbbf24', fontSize: '.85rem' }}>{'★'.repeat(Math.floor(teacher.rating))}</div>
              <span style={{ fontSize: '.75rem', fontWeight: 700, color: '#4f46e5' }}>{teacher.rating}/5</span>
            </div>

            {/* Teacher info */}
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.3rem', color: '#1e1b4b', marginBottom: '.2rem' }}>{teacher.name}</div>
              <div style={{ fontSize: '.85rem', color: '#4f46e5', fontWeight: 600, marginBottom: '.75rem' }}>{teacher.subject} Expert · {teacher.qualification}</div>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
                {[
                  ['🎓', teacher.qualification],
                  ['⏱️', `${teacher.experience} exp`],
                  ['👨‍🎓', `${teacher.students}+ students`],
                ].map(([icon, val]) => (
                  <div key={val} style={{ display: 'flex', alignItems: 'center', gap: '.35rem', fontSize: '.82rem', color: '#475569' }}>
                    <span>{icon}</span> {val}
                  </div>
                ))}
              </div>
              {teacher.bio && (
                <p style={{ fontSize: '.85rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {teacher.bio.slice(0, 160)}{teacher.bio.length > 160 ? '…' : ''}
                </p>
              )}
            </div>

            {/* CTA box */}
            <div style={{ background: '#fff', border: '1.5px solid #c7d2fe', borderRadius: 18, padding: '1.5rem', textAlign: 'center', minWidth: 200, flexShrink: 0, boxShadow: '0 4px 20px rgba(79,70,229,.1)' }}>
              <div style={{ fontSize: '.78rem', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.4rem' }}>Session fee</div>
              <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '2rem', color: '#1e1b4b', marginBottom: '.15rem' }}>
                {typeof teacher.fee === 'number' ? `₹${teacher.fee}` : teacher.fee || '₹500'}
              </div>
              <div style={{ fontSize: '.78rem', color: '#9ca3af', marginBottom: '1.25rem' }}>per 45–60 min session</div>
              <button
                onClick={() => setShowBooking(true)}
                style={{ width: '100%', padding: '.85rem 1.25rem', borderRadius: 12, background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff', fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(79,70,229,.35)', transition: 'transform .15s', lineHeight: 1.3 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                📅 Book Teacher
              </button>
              <p style={{ fontSize: '.73rem', color: '#9ca3af', marginTop: '.65rem', lineHeight: 1.5 }}>
                Free cancellation up to 2 hrs before session
              </p>
            </div>
          </div>
        </section>

        {/* ── Back link ── */}
        <div style={{ textAlign: 'center' }}>
          <Link to={topicPath} className="btn btn-ghost" style={{ fontSize: '.88rem', border: '1px solid #e5e7eb' }}>
            ← Back to {topic.title}
          </Link>
        </div>
      </div>

      {/* ── Booking modal ── */}
      {showBooking && !bookingDone && (
        <BookingModal
          teacher={teacher}
          topic={topic}
          classData={classData}
          subjectMeta={meta}
          onClose={() => setShowBooking(false)}
          onSuccess={(booking) => { setShowBooking(false); setBookingDone(booking); }}
        />
      )}

      {/* ── Success screen ── */}
      {bookingDone && (
        <BookingSuccess
          booking={bookingDone}
          teacher={teacher}
          topic={topic}
          onClose={() => { setBookingDone(null); navigate(topicPath); }}
        />
      )}
    </div>
  );
}
