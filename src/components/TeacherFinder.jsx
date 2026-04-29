import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

const TIME_SLOTS = [
  { period: 'Morning', icon: '🌅', slots: ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'] },
  { period: 'Afternoon', icon: '☀️', slots: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
  { period: 'Evening', icon: '🌆', slots: ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'] },
];

function OnlineBadge({ isOnline }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      fontSize: '.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: 20,
      background: isOnline ? '#dcfce7' : '#f3f4f6',
      color: isOnline ? '#16a34a' : '#9ca3af',
    }}>
      <span style={{
        width: 7, height: 7, borderRadius: '50%',
        background: isOnline ? '#22c55e' : '#d1d5db',
        boxShadow: isOnline ? '0 0 0 2px #bbf7d0' : 'none',
        animation: isOnline ? 'pulse 2s infinite' : 'none',
      }} />
      {isOnline ? 'Online' : 'Offline'}
    </span>
  );
}

function TeacherCard({ teacher, onSelect }) {
  return (
    <div
      onClick={() => onSelect(teacher)}
      style={{
        background: '#fff', borderRadius: 16, padding: '1.25rem',
        border: '1.5px solid #e5e7eb', cursor: 'pointer',
        transition: 'all .2s', display: 'flex', gap: '1rem', alignItems: 'flex-start',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#4f46e5'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,70,229,.1)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {/* Avatar */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div style={{
          width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.75rem', overflow: 'hidden',
        }}>
          {teacher.profile_pic
            ? <img src={teacher.profile_pic} alt={teacher.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : teacher.avatar}
        </div>
        {/* Online dot */}
        <span style={{
          position: 'absolute', bottom: 2, right: 2,
          width: 12, height: 12, borderRadius: '50%', border: '2px solid #fff',
          background: teacher.is_online ? '#22c55e' : '#d1d5db',
        }} />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.25rem' }}>
          <span style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#1e1b4b' }}>{teacher.name}</span>
          <OnlineBadge isOnline={teacher.is_online} />
        </div>
        <div style={{ fontSize: '.82rem', color: '#6b7280', marginBottom: '.4rem' }}>{teacher.subject} · {teacher.experience} yrs exp</div>
        <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '.8rem', color: '#f59e0b', fontWeight: 700 }}>⭐ {teacher.rating}</span>
          <span style={{ fontSize: '.8rem', color: '#6b7280' }}>👨‍🎓 {teacher.students || 0} students</span>
          <span style={{ fontSize: '.8rem', color: '#059669', fontWeight: 700 }}>₹{teacher.fee}/session</span>
        </div>
      </div>

      <div style={{ color: '#4f46e5', fontSize: '1.2rem', alignSelf: 'center' }}>›</div>
    </div>
  );
}

function TeacherDetail({ teacher, classId, subjectId, onBack, onBooked, user, onOpenLogin }) {
  const [step, setStep] = useState('detail'); // detail → slots → form → success
  const [selectedSlot, setSelectedSlot] = useState('');
  const [form, setForm] = useState({ name: user?.name || '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState('');
  const [wantsToBook, setWantsToBook] = useState(false);

  // Auto-advance to slots once user logs in
  useEffect(() => {
    if (wantsToBook && user) {
      setForm(f => ({ ...f, name: user.name || f.name }));
      setStep('slots');
      setWantsToBook(false);
    }
  }, [user, wantsToBook]);

  const today = new Date();
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
  const scheduledDateISO = tomorrow.toISOString().split('T')[0];
  const scheduledDateDisplay = tomorrow.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });

  async function handleBook() {
    if (!form.name.trim()) { setError('Please enter your name'); return; }
    if (!/^[6-9]\d{9}$/.test(form.phone)) { setError('Enter a valid 10-digit Indian mobile number'); return; }
    setError('');
    setLoading(true);
    try {
      const data = await api('/bookings', {
        method: 'POST',
        body: {
          studentName: form.name,
          studentPhone: form.phone,
          studentEmail: user?.email || '',
          teacherId: teacher.id || teacher._id,
          classId,
          subjectId: subjectId || teacher.subject || 'general',
          timeSlot: selectedSlot,
          scheduledDate: scheduledDateISO,
        },
      });
      setBooking(data);
      setStep('success');
      if (onBooked) onBooked();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  if (step === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
        <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.5rem' }}>Booking Request Sent!</h3>
        <p style={{ color: '#6b7280', fontSize: '.9rem', marginBottom: '1.5rem' }}>
          Your request for <strong>{selectedSlot}</strong> on <strong>{scheduledDateDisplay}</strong> has been sent to <strong>{teacher.name}</strong>.
        </p>

        <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: 14, padding: '1.25rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          <div style={{ fontSize: '.75rem', fontWeight: 700, color: '#16a34a', marginBottom: '.5rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>
            ✅ What happens next
          </div>
          <div style={{ fontSize: '.85rem', color: '#374151', lineHeight: 1.8 }}>
            <div>1. Teacher reviews your request</div>
            <div>2. You'll get a WhatsApp confirmation</div>
            <div>3. Google Meet link shared on confirmation</div>
          </div>
        </div>

        <button
          onClick={onBack}
          style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 10, padding: '.75rem 2rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'Nunito', fontSize: '.95rem' }}
        >
          Done
        </button>
      </div>
    );
  }

  if (step === 'form') {
    return (
      <div>
        <button onClick={() => setStep('slots')} style={{ background: 'none', border: 'none', color: '#4f46e5', fontWeight: 700, cursor: 'pointer', marginBottom: '1rem', padding: 0 }}>
          ← Back
        </button>
        <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.25rem' }}>Your Details</h3>
        <p style={{ color: '#6b7280', fontSize: '.85rem', marginBottom: '1.5rem' }}>
          Session with <strong>{teacher.name}</strong> at <strong>{selectedSlot}</strong> on {scheduledDateDisplay}
        </p>

        {user && (
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '.6rem 1rem', marginBottom: '1rem', fontSize: '.82rem', color: '#15803d', fontWeight: 600 }}>
            ✅ Booking as <strong>{user.name}</strong> ({user.email})
          </div>
        )}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 700, color: '#374151', marginBottom: '.4rem' }}>Your Name *</label>
          <input
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Enter your full name"
            style={{ width: '100%', padding: '.7rem 1rem', border: '1.5px solid #e5e7eb', borderRadius: 10, fontSize: '.9rem', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 700, color: '#374151', marginBottom: '.4rem' }}>Mobile Number *</label>
          <input
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
            placeholder="10-digit mobile number"
            type="tel"
            style={{ width: '100%', padding: '.7rem 1rem', border: '1.5px solid #e5e7eb', borderRadius: 10, fontSize: '.9rem', boxSizing: 'border-box' }}
          />
        </div>

        {error && <div style={{ color: '#ef4444', fontSize: '.85rem', marginBottom: '1rem' }}>{error}</div>}

        <button
          onClick={handleBook}
          disabled={loading}
          style={{
            width: '100%', padding: '.9rem', background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)',
            color: '#fff', border: 'none', borderRadius: 12, fontWeight: 800,
            fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Nunito',
            opacity: loading ? .7 : 1,
          }}
        >
          {loading ? 'Booking...' : '📅 Confirm & Get Meet Link'}
        </button>
      </div>
    );
  }

  if (step === 'slots') {
    return (
      <div>
        <button onClick={() => setStep('detail')} style={{ background: 'none', border: 'none', color: '#4f46e5', fontWeight: 700, cursor: 'pointer', marginBottom: '1rem', padding: 0 }}>
          ← Back
        </button>
        <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.25rem' }}>Pick a Time Slot</h3>
        <p style={{ color: '#6b7280', fontSize: '.85rem', marginBottom: '1.5rem' }}>Available slots for tomorrow, {scheduledDateDisplay}</p>

        {TIME_SLOTS.map(({ period, icon, slots }) => (
          <div key={period} style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.6rem' }}>
              {icon} {period}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
              {slots.map(slot => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  style={{
                    padding: '.45rem .9rem', border: '1.5px solid',
                    borderRadius: 8, cursor: 'pointer', fontSize: '.85rem', fontWeight: 600,
                    transition: 'all .15s',
                    borderColor: selectedSlot === slot ? '#4f46e5' : '#e5e7eb',
                    background: selectedSlot === slot ? '#eef2ff' : '#fff',
                    color: selectedSlot === slot ? '#4f46e5' : '#374151',
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Connect Teacher button appears when morning slot selected */}
        {selectedSlot && (
          <div style={{ marginTop: '1rem' }}>
            {selectedSlot.includes('AM') && (
              <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 10, padding: '.6rem 1rem', fontSize: '.82rem', color: '#92400e', marginBottom: '.75rem' }}>
                🌅 Morning slot selected — teacher will be notified immediately
              </div>
            )}
            <button
              onClick={() => setStep('form')}
              style={{
                width: '100%', padding: '.85rem', background: 'linear-gradient(135deg, #059669, #10b981)',
                color: '#fff', border: 'none', borderRadius: 12,
                fontWeight: 800, fontSize: '1rem', cursor: 'pointer', fontFamily: 'Nunito',
              }}
            >
              🔗 Connect Teacher — {selectedSlot}
            </button>
          </div>
        )}
      </div>
    );
  }

  // step === 'detail'
  return (
    <div>
      <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#4f46e5', fontWeight: 700, cursor: 'pointer', marginBottom: '1rem', padding: 0 }}>
        ← All Teachers
      </button>

      {/* Teacher header */}
      <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', borderRadius: 16, padding: '1.5rem', color: '#fff', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', overflow: 'hidden', flexShrink: 0 }}>
            {teacher.profile_pic
              ? <img src={teacher.profile_pic} alt={teacher.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : teacher.avatar}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.25rem' }}>
              <span style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.2rem' }}>{teacher.name}</span>
              <OnlineBadge isOnline={teacher.is_online} />
            </div>
            <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.75)' }}>{teacher.subject} · {teacher.qualification}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Rating', value: `⭐ ${teacher.rating}` },
            { label: 'Students', value: `${teacher.students || 0}+` },
            { label: 'Experience', value: `${teacher.experience} yrs` },
            { label: 'Fee', value: `₹${teacher.fee}/session` },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,.12)', borderRadius: 8, padding: '.35rem .75rem', flex: 1, minWidth: 70, textAlign: 'center' }}>
              <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.55)' }}>{s.label}</div>
              <div style={{ fontWeight: 700, fontSize: '.85rem' }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      {teacher.bio && (
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.4rem' }}>About</div>
          <p style={{ fontSize: '.9rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{teacher.bio}</p>
        </div>
      )}

      {/* Topics */}
      {teacher.topics?.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.5rem' }}>Topics</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
            {teacher.topics.map(t => (
              <span key={t} style={{ background: '#eef2ff', color: '#4f46e5', padding: '.25rem .7rem', borderRadius: 20, fontSize: '.8rem', fontWeight: 600 }}>{t}</span>
            ))}
          </div>
        </div>
      )}

      {user ? (
        <button
          onClick={() => setStep('slots')}
          style={{
            width: '100%', padding: '.9rem', background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)',
            color: '#fff', border: 'none', borderRadius: 12,
            fontWeight: 800, fontSize: '1rem', cursor: 'pointer', fontFamily: 'Nunito',
          }}
        >
          📅 Book Appointment
        </button>
      ) : (
        <div style={{ border: '1.5px solid #e0e7ff', borderRadius: 14, padding: '1.25rem', background: '#f5f3ff', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>🔐</div>
          <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#1e1b4b', marginBottom: '.35rem' }}>
            Login to Book a Session
          </div>
          <p style={{ fontSize: '.82rem', color: '#6b7280', marginBottom: '1rem', lineHeight: 1.5 }}>
            Create a free student account to book appointments and track your sessions.
          </p>
          <button
            onClick={() => { setWantsToBook(true); onOpenLogin(); }}
            style={{
              width: '100%', padding: '.75rem', background: '#4f46e5',
              color: '#fff', border: 'none', borderRadius: 10,
              fontWeight: 800, fontSize: '.95rem', cursor: 'pointer', fontFamily: 'Nunito',
            }}
          >
            🎓 Login / Sign Up Free
          </button>
        </div>
      )}
    </div>
  );
}

export default function TeacherFinder({ classId, subjectId, onClose, initialTeacher = null, user, onOpenLogin }) {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(initialTeacher);

  useEffect(() => {
    setLoading(true);
    api(`/teachers?classId=${classId}`)
      .then(data => { setTeachers(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [classId]);

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 900 }} />

      {/* Panel */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(420px, 100vw)', background: '#f8fafc',
        zIndex: 901, overflowY: 'auto', boxShadow: '-8px 0 40px rgba(0,0,0,.15)',
        animation: 'slideInRight .25s ease',
      }}>
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', padding: '1.25rem 1.5rem', position: 'sticky', top: 0, zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.1rem', color: '#fff' }}>
                {selected ? selected.name : 'Find a Teacher'}
              </div>
              <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.6)', marginTop: '.1rem' }}>
                {selected ? 'Teacher Profile' : `${teachers.length} teacher${teachers.length !== 1 ? 's' : ''} available`}
              </div>
            </div>
            <button onClick={onClose} aria-label="Close panel" style={{ background: 'rgba(255,255,255,.15)', border: 'none', color: '#fff', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '1.25rem 1.5rem' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: '#9ca3af' }}>
              <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>⏳</div>
              Loading teachers...
            </div>
          ) : teachers.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: '#9ca3af' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>👨‍🏫</div>
              <div style={{ fontWeight: 700, marginBottom: '.5rem', color: '#374151' }}>No teachers yet</div>
              <div style={{ fontSize: '.85rem' }}>Teachers will appear here once they register</div>
            </div>
          ) : selected ? (
            <TeacherDetail
              teacher={selected}
              classId={classId}
              subjectId={subjectId}
              onBack={() => setSelected(null)}
              onBooked={() => {}}
              user={user}
              onOpenLogin={onOpenLogin}
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {teachers.map(t => (
                <TeacherCard key={t.id || t._id} teacher={t} onSelect={setSelected} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
      `}</style>
    </>
  );
}
