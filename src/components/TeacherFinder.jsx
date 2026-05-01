import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

const TIME_SLOTS = [
  { period: 'Morning',   icon: '🌅', slots: ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'] },
  { period: 'Afternoon', icon: '☀️', slots: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'] },
  { period: 'Evening',   icon: '🌆', slots: ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'] },
];

const DEMO_GOALS = [
  { id: 'concepts',  icon: '📚', label: 'Learn Concepts' },
  { id: 'exam',      icon: '🏆', label: 'Exam Prep' },
  { id: 'homework',  icon: '✏️', label: 'Homework Help' },
  { id: 'revision',  icon: '🎯', label: 'Quick Revision' },
];

const DEMO_LEVELS = [
  { id: 'struggling', icon: '😟', label: 'Struggling', color: '#ef4444' },
  { id: 'average',    icon: '😐', label: 'Average',    color: '#f59e0b' },
  { id: 'good',       icon: '😊', label: 'Good, want better', color: '#22c55e' },
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
        animation: isOnline ? 'tfPulse 2s infinite' : 'none',
      }} />
      {isOnline ? 'Online' : 'Offline'}
    </span>
  );
}

function DemoBadge() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 3,
      fontSize: '.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: 20,
      background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
      color: '#065f46', border: '1px solid #6ee7b7',
      letterSpacing: '.01em',
    }}>
      ✨ Free Demo
    </span>
  );
}

function TeacherCard({ teacher, onSelect }) {
  const demoAvail = teacher.demo_available !== false;
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
        <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '.8rem', color: '#f59e0b', fontWeight: 700 }}>⭐ {teacher.rating}</span>
          <span style={{ fontSize: '.8rem', color: '#6b7280' }}>👨‍🎓 {teacher.students || 0} students</span>
          <span style={{ fontSize: '.8rem', color: '#059669', fontWeight: 700 }}>₹{teacher.fee}/session</span>
          {demoAvail && <DemoBadge />}
        </div>
      </div>

      <div style={{ color: '#4f46e5', fontSize: '1.2rem', alignSelf: 'center' }}>›</div>
    </div>
  );
}

// ── Date + slot picker (shared by demo and paid flows) ────────────
function SlotPicker({ selectedDate, setSelectedDate, selectedSlot, setSelectedSlot, isDemo }) {
  const now = new Date();
  const dateOptions = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + i); return d;
  });
  const isToday = selectedDate.toDateString() === now.toDateString();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  function slotToMinutes(slot) {
    const [time, period] = slot.split(' ');
    let [h, m] = time.split(':').map(Number);
    if (period === 'PM' && h !== 12) h += 12;
    if (period === 'AM' && h === 12) h = 0;
    return h * 60 + m;
  }
  function isSlotAvailable(slot) {
    if (!isToday) return true;
    return slotToMinutes(slot) >= nowMinutes + 60;
  }

  return (
    <>
      {/* Date strip */}
      <div style={{ display: 'flex', gap: '.5rem', overflowX: 'auto', paddingBottom: '.5rem', marginBottom: '1.5rem' }}>
        {dateOptions.map(d => {
          const isSelected = d.toDateString() === selectedDate.toDateString();
          const label = d.toDateString() === now.toDateString() ? 'Today' : d.toLocaleDateString('en-IN', { weekday: 'short' });
          return (
            <button key={d.toISOString()} onClick={() => { setSelectedDate(d); setSelectedSlot(''); }}
              style={{ minWidth: 52, padding: '.5rem .3rem', border: '1.5px solid', borderRadius: 10, cursor: 'pointer', textAlign: 'center', flexShrink: 0, transition: 'all .15s',
                borderColor: isSelected ? (isDemo ? '#059669' : '#4f46e5') : '#e5e7eb',
                background: isSelected ? (isDemo ? '#059669' : '#4f46e5') : '#fff',
                color: isSelected ? '#fff' : '#374151',
              }}>
              <div style={{ fontSize: '.68rem', fontWeight: 700 }}>{label}</div>
              <div style={{ fontSize: '1rem', fontWeight: 800 }}>{d.getDate()}</div>
            </button>
          );
        })}
      </div>

      {TIME_SLOTS.map(({ period, icon, slots }) => {
        const available = slots.filter(isSlotAvailable);
        if (available.length === 0) return null;
        return (
          <div key={period} style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.6rem' }}>
              {icon} {period}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
              {available.map(slot => {
                const active = selectedSlot === slot;
                return (
                  <button key={slot} onClick={() => setSelectedSlot(slot)}
                    style={{
                      padding: '.45rem .9rem', border: '1.5px solid', borderRadius: 8,
                      cursor: 'pointer', fontSize: '.85rem', fontWeight: 600, transition: 'all .15s',
                      borderColor: active ? (isDemo ? '#059669' : '#4f46e5') : '#e5e7eb',
                      background: active ? (isDemo ? '#f0fdf4' : '#eef2ff') : '#fff',
                      color: active ? (isDemo ? '#059669' : '#4f46e5') : '#374151',
                    }}>
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

// ── Back button ────────────────────────────────────────────────
function Back({ onClick, label = '← Back' }) {
  return (
    <button onClick={onClick} style={{ background: 'none', border: 'none', color: '#4f46e5', fontWeight: 700, cursor: 'pointer', marginBottom: '1rem', padding: 0, fontSize: '.9rem' }}>
      {label}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────
// TeacherDetail — handles both demo and paid booking flows
// ─────────────────────────────────────────────────────────────────────
function TeacherDetail({ teacher, classId, subjectId, onBack, onBooked, user, onOpenLogin }) {
  // step: 'detail' | 'demo-prep' | 'demo-slots' | 'demo-success'
  //                | 'slots' | 'form' | 'payment' | 'paid-success'
  const [step, setStep] = useState('detail');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [wantsToBook, setWantsToBook] = useState(null); // 'demo' | 'paid'
  const [demoEligible, setDemoEligible] = useState(null); // null=unknown, true/false

  // Demo state
  const [demoPrep, setDemoPrep] = useState({ goal: '', level: '', note: '' });
  const [demoResult, setDemoResult] = useState(null);

  // Paid state
  const [form, setForm] = useState({ name: user?.name || '', phone: '' });

  // Shared: date/slot
  const [selectedDate, setSelectedDate] = useState(() => { const d = new Date(); d.setHours(0,0,0,0); return d; });
  const [selectedSlot, setSelectedSlot] = useState('');

  const scheduledDateISO = selectedDate.toISOString().split('T')[0];
  const scheduledDateDisplay = selectedDate.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });

  const demoAvail = teacher.demo_available !== false;

  // Load Razorpay once
  useEffect(() => {
    if (document.getElementById('razorpay-script')) return;
    const s = document.createElement('script');
    s.id = 'razorpay-script';
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Check demo eligibility when user is available
  useEffect(() => {
    if (!user || !demoAvail) return;
    const token = localStorage.getItem('osh_student_token');
    if (!token) return;
    api(`/bookings/demo-eligible/${teacher.id || teacher._id}`, { token })
      .then(d => setDemoEligible(d.eligible))
      .catch(() => setDemoEligible(true));
  }, [user, teacher]); // eslint-disable-line

  // Auto-advance after login
  useEffect(() => {
    if (wantsToBook && user) {
      setForm(f => ({ ...f, name: user.name || f.name }));
      if (wantsToBook === 'demo') setStep('demo-prep');
      else setStep('slots');
      setWantsToBook(null);
    }
  }, [user, wantsToBook]);

  // ── Handlers ────────────────────────────────────────────────

  async function handleBookDemo() {
    setLoading(true); setError('');
    try {
      const token = localStorage.getItem('osh_student_token');
      const data = await api('/bookings/demo', {
        method: 'POST',
        token,
        body: {
          teacherId: teacher.id || teacher._id,
          classId,
          subjectId: subjectId || teacher.subject || 'general',
          timeSlot: selectedSlot,
          scheduledDate: scheduledDateISO,
          demoPrep,
        },
      });
      setDemoResult(data);
      setStep('demo-success');
      if (onBooked) onBooked();
    } catch (e) {
      setError(e.message || 'Failed to book demo');
    } finally {
      setLoading(false);
    }
  }

  async function handleBook(payment) {
    setLoading(true); setError('');
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
          paymentId: payment?.paymentId || null,
          amountPaid: teacher.fee || 500,
        },
      });
      setStep('paid-success');
      if (onBooked) onBooked();
    } catch (e) {
      setError(e.message);
      setStep('payment');
    } finally {
      setLoading(false);
    }
  }

  async function handlePayment() {
    setLoading(true); setError('');
    try {
      const token = localStorage.getItem('osh_student_token');
      const order = await api('/payments/create-order', {
        method: 'POST', token,
        body: { amount: teacher.fee || 500, teacherId: teacher.id || teacher._id },
      });
      const options = {
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'OnlineStudyHub',
        description: `Session with ${teacher.name}`,
        order_id: order.orderId,
        handler: async (response) => {
          try {
            const verified = await api('/payments/verify', {
              method: 'POST', token,
              body: {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
            });
            await handleBook(verified);
          } catch (e) {
            setError('Payment verification failed. Please contact support.');
            setLoading(false);
          }
        },
        prefill: { name: form.name, contact: form.phone, email: user?.email || '' },
        theme: { color: '#4f46e5' },
        modal: { ondismiss: () => setLoading(false) },
      };
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', () => { setError('Payment failed. Please try again.'); setLoading(false); });
      rzp.open();
    } catch (e) {
      setError(e.message || 'Failed to initiate payment');
      setLoading(false);
    }
  }

  function handleProceedToPayment() {
    if (!form.name.trim()) { setError('Please enter your name'); return; }
    if (!/^[6-9]\d{9}$/.test(form.phone)) { setError('Enter a valid 10-digit Indian mobile number'); return; }
    setError('');
    setStep('payment');
  }

  // ── Step: Demo success ───────────────────────────────────────
  if (step === 'demo-success') {
    return (
      <div style={{ textAlign: 'center', padding: '1rem 0' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '.75rem' }}>🎉</div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: '#d1fae5', color: '#065f46', borderRadius: 99, padding: '.35rem 1rem', fontSize: '.8rem', fontWeight: 800, marginBottom: '1rem' }}>
          ✨ Free Demo Booked!
        </div>
        <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.4rem' }}>
          You're all set with {teacher.name}!
        </h3>
        <p style={{ color: '#6b7280', fontSize: '.88rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Your 15-min demo is on <strong>{scheduledDateDisplay}</strong> at <strong>{selectedSlot}</strong>.
          The teacher has your goals and will come prepared.
        </p>

        {/* Prep note recap */}
        <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: 14, padding: '1rem', marginBottom: '1.25rem', textAlign: 'left' }}>
          <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#16a34a', marginBottom: '.6rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>
            📋 Your Prep Note Sent to Teacher
          </div>
          <div style={{ fontSize: '.85rem', color: '#374151', lineHeight: 1.7 }}>
            <div>🎯 Goal: <strong>{DEMO_GOALS.find(g => g.id === demoPrep.goal)?.label || '—'}</strong></div>
            <div>📊 Level: <strong>{DEMO_LEVELS.find(l => l.id === demoPrep.level)?.label || '—'}</strong></div>
            {demoPrep.note && <div>📝 Note: <strong>{demoPrep.note}</strong></div>}
          </div>
        </div>

        {/* What happens next */}
        <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#6b7280', marginBottom: '.6rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>
            ✅ What happens next
          </div>
          <div style={{ fontSize: '.85rem', color: '#374151', lineHeight: 1.9 }}>
            <div>1. Teacher reviews and confirms your demo</div>
            <div>2. You'll get an SMS with the Google Meet link</div>
            <div>3. Attend your free 15-min session</div>
            <div>4. If you like the teacher, book a full session!</div>
          </div>
        </div>

        <button onClick={onBack} style={{ width: '100%', padding: '.85rem', background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: '1rem', cursor: 'pointer', fontFamily: 'Nunito' }}>
          Done
        </button>
      </div>
    );
  }

  // ── Step: Paid success ───────────────────────────────────────
  if (step === 'paid-success') {
    return (
      <div style={{ textAlign: 'center', padding: '1rem 0' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
        <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.5rem' }}>Booking Request Sent!</h3>
        <p style={{ color: '#6b7280', fontSize: '.9rem', marginBottom: '1.5rem' }}>
          Your request for <strong>{selectedSlot}</strong> on <strong>{scheduledDateDisplay}</strong> has been sent to <strong>{teacher.name}</strong>.
        </p>
        <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: 14, padding: '1.25rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          <div style={{ fontSize: '.75rem', fontWeight: 700, color: '#16a34a', marginBottom: '.5rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>✅ What happens next</div>
          <div style={{ fontSize: '.85rem', color: '#374151', lineHeight: 1.8 }}>
            <div>1. Teacher reviews your request</div>
            <div>2. You'll get an SMS confirmation</div>
            <div>3. Google Meet link shared via SMS on confirmation</div>
          </div>
        </div>
        <button onClick={onBack} style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 10, padding: '.75rem 2rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'Nunito', fontSize: '.95rem' }}>
          Done
        </button>
      </div>
    );
  }

  // ── Step: Demo Prep (3 visual questions) ────────────────────
  if (step === 'demo-prep') {
    const canContinue = demoPrep.goal && demoPrep.level;
    return (
      <div>
        <Back onClick={() => setStep('detail')} />
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #065f46, #059669)', borderRadius: 14, padding: '1.1rem 1.25rem', marginBottom: '1.5rem', color: '#fff' }}>
          <div style={{ fontSize: '.75rem', opacity: .8, marginBottom: '.15rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em' }}>Step 1 of 2 — Free 15-min Demo</div>
          <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.05rem' }}>Help {teacher.name} prepare for you</div>
          <div style={{ fontSize: '.82rem', opacity: .8, marginTop: '.2rem' }}>Answer 2 quick questions so your teacher can make the most of your 15 minutes</div>
        </div>

        {/* Q1: Goal */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontWeight: 700, fontSize: '.9rem', color: '#1e1b4b', marginBottom: '.75rem' }}>🎯 What's your goal for this demo?</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.6rem' }}>
            {DEMO_GOALS.map(g => {
              const active = demoPrep.goal === g.id;
              return (
                <button key={g.id} onClick={() => setDemoPrep(p => ({ ...p, goal: g.id }))}
                  style={{
                    padding: '.85rem .5rem', borderRadius: 12, border: '2px solid',
                    borderColor: active ? '#059669' : '#e5e7eb',
                    background: active ? '#f0fdf4' : '#fff',
                    cursor: 'pointer', textAlign: 'center', transition: 'all .15s',
                  }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '.2rem' }}>{g.icon}</div>
                  <div style={{ fontSize: '.8rem', fontWeight: 700, color: active ? '#059669' : '#374151' }}>{g.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Q2: Level */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontWeight: 700, fontSize: '.9rem', color: '#1e1b4b', marginBottom: '.75rem' }}>📊 What's your current level?</div>
          <div style={{ display: 'flex', gap: '.6rem' }}>
            {DEMO_LEVELS.map(l => {
              const active = demoPrep.level === l.id;
              return (
                <button key={l.id} onClick={() => setDemoPrep(p => ({ ...p, level: l.id }))}
                  style={{
                    flex: 1, padding: '.85rem .4rem', borderRadius: 12, border: '2px solid',
                    borderColor: active ? l.color : '#e5e7eb',
                    background: active ? `${l.color}18` : '#fff',
                    cursor: 'pointer', textAlign: 'center', transition: 'all .15s',
                  }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '.2rem' }}>{l.icon}</div>
                  <div style={{ fontSize: '.72rem', fontWeight: 700, color: active ? l.color : '#374151', lineHeight: 1.3 }}>{l.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Q3: Optional note */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontWeight: 700, fontSize: '.9rem', color: '#1e1b4b', marginBottom: '.4rem' }}>
            📝 Any specific topic to cover? <span style={{ color: '#9ca3af', fontWeight: 500 }}>(optional)</span>
          </div>
          <input
            value={demoPrep.note}
            onChange={e => setDemoPrep(p => ({ ...p, note: e.target.value }))}
            placeholder="e.g. Quadratic equations, Photosynethsis, Newton's laws…"
            style={{ width: '100%', padding: '.75rem 1rem', border: '1.5px solid #e5e7eb', borderRadius: 10, fontSize: '.88rem', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }}
          />
        </div>

        <button
          onClick={() => { if (canContinue) { setSelectedSlot(''); setStep('demo-slots'); } }}
          disabled={!canContinue}
          style={{
            width: '100%', padding: '.9rem',
            background: canContinue ? 'linear-gradient(135deg, #065f46, #059669)' : '#e5e7eb',
            color: canContinue ? '#fff' : '#9ca3af',
            border: 'none', borderRadius: 12, fontWeight: 800, fontSize: '1rem',
            cursor: canContinue ? 'pointer' : 'not-allowed', fontFamily: 'Nunito',
            transition: 'all .2s',
          }}
        >
          Pick a Demo Slot →
        </button>
      </div>
    );
  }

  // ── Step: Demo Slots ─────────────────────────────────────────
  if (step === 'demo-slots') {
    return (
      <div>
        <Back onClick={() => setStep('demo-prep')} />
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #065f46, #059669)', borderRadius: 14, padding: '1.1rem 1.25rem', marginBottom: '1.5rem', color: '#fff' }}>
          <div style={{ fontSize: '.75rem', opacity: .8, marginBottom: '.15rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em' }}>Step 2 of 2 — Free 15-min Demo</div>
          <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.05rem' }}>Pick your demo slot</div>
          <div style={{ fontSize: '.82rem', opacity: .8, marginTop: '.2rem' }}>Choose any available 15-minute window — completely free</div>
        </div>

        <SlotPicker
          selectedDate={selectedDate} setSelectedDate={setSelectedDate}
          selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot}
          isDemo
        />

        {error && <div style={{ color: '#ef4444', fontSize: '.85rem', marginBottom: '.75rem' }}>{error}</div>}

        {selectedSlot && (
          <button
            onClick={handleBookDemo}
            disabled={loading}
            style={{
              marginTop: '.75rem', width: '100%', padding: '.9rem',
              background: loading ? '#e5e7eb' : 'linear-gradient(135deg, #065f46, #059669)',
              color: loading ? '#9ca3af' : '#fff',
              border: 'none', borderRadius: 12, fontWeight: 800, fontSize: '1rem',
              cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Nunito',
            }}
          >
            {loading ? '⏳ Booking…' : `✨ Confirm Free Demo — ${selectedSlot}`}
          </button>
        )}
      </div>
    );
  }

  // ── Step: Paid slot picker ───────────────────────────────────
  if (step === 'slots') {
    return (
      <div>
        <Back onClick={() => setStep('detail')} />
        <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.25rem' }}>Pick a Date & Time</h3>
        <p style={{ color: '#6b7280', fontSize: '.85rem', marginBottom: '1rem' }}>Choose from today up to 7 days ahead</p>
        <SlotPicker
          selectedDate={selectedDate} setSelectedDate={setSelectedDate}
          selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot}
          isDemo={false}
        />
        {selectedSlot && (
          <button onClick={() => setStep('form')}
            style={{ marginTop: '1rem', width: '100%', padding: '.85rem', background: 'linear-gradient(135deg, #059669, #10b981)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: '1rem', cursor: 'pointer', fontFamily: 'Nunito' }}>
            🔗 Continue — {selectedSlot}
          </button>
        )}
      </div>
    );
  }

  // ── Step: Student details form ───────────────────────────────
  if (step === 'form') {
    return (
      <div>
        <Back onClick={() => setStep('slots')} />
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
          <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Enter your full name"
            style={{ width: '100%', padding: '.7rem 1rem', border: '1.5px solid #e5e7eb', borderRadius: 10, fontSize: '.9rem', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '.82rem', fontWeight: 700, color: '#374151', marginBottom: '.4rem' }}>Mobile Number *</label>
          <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
            placeholder="10-digit mobile number" type="tel"
            style={{ width: '100%', padding: '.7rem 1rem', border: '1.5px solid #e5e7eb', borderRadius: 10, fontSize: '.9rem', boxSizing: 'border-box' }} />
        </div>
        {error && <div style={{ color: '#ef4444', fontSize: '.85rem', marginBottom: '1rem' }}>{error}</div>}
        <button onClick={handleProceedToPayment}
          style={{ width: '100%', padding: '.9rem', background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: '1rem', cursor: 'pointer', fontFamily: 'Nunito' }}>
          Proceed to Payment →
        </button>
      </div>
    );
  }

  // ── Step: Payment ─────────────────────────────────────────────
  if (step === 'payment') {
    const fee = teacher.fee || 500;
    return (
      <div>
        <Back onClick={() => setStep('form')} />
        <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.25rem' }}>Payment Summary</h3>
        <p style={{ color: '#6b7280', fontSize: '.85rem', marginBottom: '1.5rem' }}>Complete payment to confirm your booking</p>
        <div style={{ background: '#f8fafc', border: '1.5px solid #e0e7ff', borderRadius: 14, padding: '1.2rem', marginBottom: '1.5rem' }}>
          {[['Teacher', teacher.name], ['Date', scheduledDateDisplay], ['Time', selectedSlot]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.9rem', color: '#374151', marginBottom: '.6rem' }}>
              <span>{k}</span><strong>{v}</strong>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #e5e7eb', marginTop: '.75rem', paddingTop: '.75rem', display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.05rem', color: '#1e1b4b' }}>
            <span>Total</span><span>₹{fee}</span>
          </div>
        </div>
        {error && <div style={{ color: '#ef4444', fontSize: '.85rem', marginBottom: '1rem' }}>{error}</div>}
        <button onClick={handlePayment} disabled={loading}
          style={{ width: '100%', padding: '.9rem', background: loading ? '#e5e7eb' : 'linear-gradient(135deg, #059669, #10b981)', color: loading ? '#9ca3af' : '#fff', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Nunito' }}>
          {loading ? '⏳ Processing…' : `💳 Pay ₹${fee} & Confirm Booking`}
        </button>
        <p style={{ textAlign: 'center', fontSize: '.78rem', color: '#9ca3af', marginTop: '.75rem' }}>
          🔒 Secured by Razorpay · UPI, Cards, Net Banking accepted
        </p>
      </div>
    );
  }

  // ── Step: detail (default) ────────────────────────────────────
  return (
    <div>
      <Back onClick={onBack} label="← All Teachers" />

      {/* Teacher header card */}
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
            {demoAvail && (
              <div style={{ marginTop: '.35rem' }}>
                <span style={{ background: 'rgba(110,231,183,.2)', border: '1px solid rgba(110,231,183,.4)', borderRadius: 99, padding: '.2rem .65rem', fontSize: '.72rem', fontWeight: 800, color: '#6ee7b7' }}>
                  ✨ Free 15-min Demo Available
                </span>
              </div>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Rating',     value: `⭐ ${teacher.rating}` },
            { label: 'Students',   value: `${teacher.students || 0}+` },
            { label: 'Experience', value: `${teacher.experience} yrs` },
            { label: 'Fee',        value: `₹${teacher.fee}/session` },
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {/* Free Demo CTA */}
          {demoAvail && (
            <div>
              {demoEligible === false ? (
                <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 12, padding: '.85rem 1rem', fontSize: '.85rem', color: '#15803d', fontWeight: 600, textAlign: 'center' }}>
                  ✅ You've already done a free demo with {teacher.name}
                </div>
              ) : (
                <button
                  onClick={() => setStep('demo-prep')}
                  style={{
                    width: '100%', padding: '.9rem',
                    background: 'linear-gradient(135deg, #065f46, #059669)',
                    color: '#fff', border: 'none', borderRadius: 12,
                    fontWeight: 800, fontSize: '1rem', cursor: 'pointer', fontFamily: 'Nunito',
                    boxShadow: '0 4px 16px rgba(5,150,105,.25)',
                  }}
                >
                  ✨ Try Free 15-min Demo
                </button>
              )}
            </div>
          )}

          {/* Divider */}
          {demoAvail && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
              <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
              <span style={{ fontSize: '.78rem', color: '#9ca3af', fontWeight: 600 }}>or</span>
              <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
            </div>
          )}

          {/* Book Full Session */}
          <button
            onClick={() => { setSelectedSlot(''); setStep('slots'); }}
            style={{
              width: '100%', padding: demoAvail ? '.8rem' : '.9rem',
              background: demoAvail ? '#fff' : 'linear-gradient(135deg, #1e1b4b, #4f46e5)',
              color: demoAvail ? '#4f46e5' : '#fff',
              border: demoAvail ? '2px solid #c7d2fe' : 'none',
              borderRadius: 12, fontWeight: 800,
              fontSize: demoAvail ? '.92rem' : '1rem',
              cursor: 'pointer', fontFamily: 'Nunito',
            }}
          >
            📅 Book Full Session — ₹{teacher.fee || 500}
          </button>
        </div>
      ) : (
        <div style={{ border: '1.5px solid #e0e7ff', borderRadius: 14, padding: '1.25rem', background: '#f5f3ff', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>🔐</div>
          <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#1e1b4b', marginBottom: '.35rem' }}>Login to Book a Session</div>
          <p style={{ fontSize: '.82rem', color: '#6b7280', marginBottom: '1rem', lineHeight: 1.5 }}>
            {demoAvail ? 'Login to try a free 15-min demo or book a full session.' : 'Create a free student account to book appointments and track your sessions.'}
          </p>
          <button onClick={() => { setWantsToBook('demo'); onOpenLogin(); }}
            style={{ width: '100%', padding: '.75rem', background: '#059669', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 800, fontSize: '.95rem', cursor: 'pointer', fontFamily: 'Nunito', marginBottom: '.5rem' }}>
            ✨ Login & Try Free Demo
          </button>
          <button onClick={() => { setWantsToBook('paid'); onOpenLogin(); }}
            style={{ width: '100%', padding: '.65rem', background: 'none', color: '#4f46e5', border: '1.5px solid #c7d2fe', borderRadius: 10, fontWeight: 700, fontSize: '.88rem', cursor: 'pointer', fontFamily: 'Nunito' }}>
            📅 Login & Book Session
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Main TeacherFinder panel
// ─────────────────────────────────────────────────────────────────────
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
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 900 }} />
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
            <button onClick={onClose} aria-label="Close" style={{ background: 'rgba(255,255,255,.15)', border: 'none', color: '#fff', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '1.25rem 1.5rem' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: '#9ca3af' }}>
              <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>⏳</div>Loading teachers...
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
        @keyframes tfPulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
      `}</style>
    </>
  );
}
