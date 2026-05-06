import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';
import { useNotifications } from '../context/NotificationsContext';
import { useLang } from '../context/LanguageContext';

const BOOKING_CACHE_KEY = 'osh_booking_status_cache';

const STATUS_STYLE = {
  pending:   { bg: '#fff7ed', color: '#ea580c', label: '⏳ Pending' },
  confirmed: { bg: '#f0fdf4', color: '#16a34a', label: '✅ Confirmed' },
  cancelled: { bg: '#fef2f2', color: '#dc2626', label: '❌ Cancelled' },
  completed: { bg: '#eff6ff', color: '#2563eb', label: '🎓 Completed' },
};

// ── Rating Modal ─────────────────────────────────────────────────
function RatingModal({ booking, onClose, onSubmitted }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [review, setReview] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function submit() {
    if (!rating) { setError('Please select a star rating'); return; }
    setSubmitting(true);
    setError('');
    try {
      await api('/reviews', {
        method: 'POST',
        body: { teacherId: booking.teacher_id, bookingId: booking._id, rating, review },
      });
      onSubmitted(booking._id);
      onClose();
    } catch (e) {
      setError(e.message || 'Failed to submit review');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="media-modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="media-modal" style={{ maxWidth: 420 }}>
        <div className="media-modal-header" style={{ borderColor: '#f59e0b', color: '#d97706' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
            <span style={{ fontSize: '1.4rem' }}>⭐</span>
            <span className="media-modal-title">Rate Your Session</span>
          </div>
          <button className="media-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="media-modal-body">
          <p style={{ color: '#6b7280', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            How was your session on <strong>{booking.topic_id?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'this topic'}</strong>?
            Your review helps other students choose the right teacher.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '.5rem', marginBottom: '1.25rem' }}>
            {[1, 2, 3, 4, 5].map(star => (
              <button key={star}
                style={{ fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer', color: star <= (hovered || rating) ? '#f59e0b' : '#e5e7eb', transition: 'color .15s, transform .1s', transform: star <= (hovered || rating) ? 'scale(1.15)' : 'scale(1)' }}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => setRating(star)}
              >★</button>
            ))}
          </div>
          <div style={{ textAlign: 'center', fontSize: '.82rem', color: '#9ca3af', marginBottom: '1rem', minHeight: '1.2em' }}>
            {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent!'][rating]}
          </div>
          <textarea
            style={{ width: '100%', border: '1.5px solid #e5e7eb', borderRadius: 12, padding: '.75rem', fontSize: '.88rem', resize: 'vertical', minHeight: 90, boxSizing: 'border-box', fontFamily: 'inherit', outline: 'none' }}
            placeholder="Write a short review (optional) — what did you like most?"
            value={review}
            onChange={e => setReview(e.target.value)}
          />
          {error && <p style={{ color: '#dc2626', fontSize: '.8rem', margin: '.4rem 0 0' }}>{error}</p>}
          <button onClick={submit} disabled={submitting || !rating}
            style={{ width: '100%', marginTop: '1rem', padding: '.8rem', background: rating ? 'linear-gradient(135deg, #f59e0b, #d97706)' : '#e5e7eb', color: rating ? '#fff' : '#9ca3af', border: 'none', borderRadius: 12, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1rem', cursor: rating ? 'pointer' : 'default', transition: 'all .2s' }}>
            {submitting ? 'Submitting…' : 'Submit Review ⭐'}
          </button>
        </div>
      </div>
    </div>
  );
}

function BookingCard({ booking, onRate, reviewed, onCancel }) {
  const status = STATUS_STYLE[booking.status] || STATUS_STYLE.pending;
  const [cancelling, setCancelling] = useState(false);
  const { t } = useLang();
  const date = booking.scheduled_date
    ? new Date(booking.scheduled_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : '—';

  async function handleCancel() {
    if (!window.confirm('Cancel this booking? Both you and the teacher will be notified.')) return;
    setCancelling(true);
    try {
      await api(`/bookings/${booking._id}/cancel`, { method: 'PATCH' });
      onCancel(booking._id);
    } catch (e) {
      alert(e.message || 'Failed to cancel booking');
    } finally {
      setCancelling(false);
    }
  }

  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '.75rem', boxShadow: '0 1px 6px rgba(0,0,0,.06)', transition: 'box-shadow .2s' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.1)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,.06)'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '.5rem' }}>
        <div>
          <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#1e1b4b', marginBottom: '.2rem' }}>
            {booking.topic_id ? booking.topic_id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Session'}
          </div>
          <div style={{ fontSize: '.8rem', color: '#6b7280' }}>
            {booking.subject_id && <span style={{ marginRight: '.5rem', textTransform: 'capitalize' }}>{booking.subject_id}</span>}
            {booking.class_id && <span>· Class {booking.class_id.replace('class', '')}</span>}
          </div>
        </div>
        <span style={{ background: status.bg, color: status.color, fontSize: '.75rem', fontWeight: 700, padding: '.25rem .75rem', borderRadius: 99, whiteSpace: 'nowrap' }}>
          {status.label}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '.83rem', color: '#374151' }}>
        <div><span style={{ color: '#9ca3af' }}>{t('bookings_date')}</span><br /><strong>{date}</strong></div>
        <div><span style={{ color: '#9ca3af' }}>{t('bookings_time')}</span><br /><strong>{booking.time_slot || '—'}</strong></div>
        <div><span style={{ color: '#9ca3af' }}>{t('bookings_name')}</span><br /><strong>{booking.student_name}</strong></div>
        <div><span style={{ color: '#9ca3af' }}>{t('bookings_phone')}</span><br /><strong>{booking.student_phone}</strong></div>
      </div>

      {booking.status === 'confirmed' && booking.meet_link && (
        <a href={booking.meet_link} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: '#1e1b4b', color: '#fff', fontSize: '.82rem', fontWeight: 700, padding: '.45rem 1rem', borderRadius: 8, textDecoration: 'none', width: 'fit-content' }}>
          {t('bookings_join')}
        </a>
      )}

      {(booking.status === 'pending' || booking.status === 'confirmed') && (
        <button
          onClick={handleCancel}
          disabled={cancelling}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: '#fff', color: '#dc2626', border: '1.5px solid #fecaca', fontSize: '.82rem', fontWeight: 700, padding: '.45rem 1rem', borderRadius: 8, cursor: cancelling ? 'not-allowed' : 'pointer', width: 'fit-content', opacity: cancelling ? .6 : 1 }}
        >
          {cancelling ? t('bookings_cancelling') : t('bookings_cancel')}
        </button>
      )}

      {booking.status === 'completed' && (
        reviewed ? (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: '#f0fdf4', color: '#16a34a', fontSize: '.8rem', fontWeight: 700, padding: '.35rem .85rem', borderRadius: 8 }}>
            {t('bookings_reviewed')}
          </div>
        ) : (
          <button onClick={() => onRate(booking)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff', fontSize: '.82rem', fontWeight: 700, padding: '.45rem 1rem', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content' }}>
            {t('bookings_rate')}
          </button>
        )
      )}
    </div>
  );
}

export default function MyBookingsPage({ user, onBadgeUpdate }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [ratingBooking, setRatingBooking] = useState(null);
  const [reviewed, setReviewed] = useState(new Set());
  const { addNotification } = useNotifications();
  const { t } = useLang();

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    api('/bookings/student')
      .then(data => {
        const list = Array.isArray(data) ? data : [];
        setBookings(list);

        // Detect status changes vs cached, push bell notifications
        const cached = (() => { try { return JSON.parse(localStorage.getItem(BOOKING_CACHE_KEY) || '{}'); } catch { return {}; } })();
        list.forEach(b => {
          const prev = cached[b._id];
          const topic = b.topic_id ? b.topic_id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Your session';
          if (prev && prev !== b.status) {
            if (b.status === 'confirmed') {
              addNotification({ type: 'achievement', title: '✅ Session Confirmed!', body: `${topic} is confirmed. Check My Bookings for the Meet link.`, link: '/my-bookings' });
            } else if (b.status === 'cancelled') {
              addNotification({ type: 'reminder', title: '❌ Session Cancelled', body: `${topic} session was cancelled. Book a new slot anytime.`, link: '/my-bookings' });
            }
          }
        });

        // Update cache with current statuses
        const newCache = {};
        list.forEach(b => { newCache[b._id] = b.status; });
        localStorage.setItem(BOOKING_CACHE_KEY, JSON.stringify(newCache));

        // Clear navbar badge — user is now viewing their bookings
        if (onBadgeUpdate) onBadgeUpdate(0);
      })
      .catch(err => setError(err.message || 'Failed to load bookings'))
      .finally(() => setLoading(false));
  }, [user]); // eslint-disable-line

  if (!user) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem' }}>🔒</div>
        <h2 style={{ fontFamily: 'Nunito', color: '#1e1b4b', fontWeight: 900 }}>{t('bookings_login_required')}</h2>
        <p style={{ color: '#6b7280' }}>{t('bookings_login_sub')}</p>
        <Link to="/" className="btn btn-primary">← Go Home</Link>
      </div>
    );
  }

  const upcoming = bookings.filter(b => b.status === 'confirmed' || b.status === 'pending');
  const past = bookings.filter(b => b.status === 'completed' || b.status === 'cancelled');

  return (
    <div style={{ minHeight: '80vh', background: '#f8fafc' }}>
      <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', color: '#fff', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.5rem' }}>
            <span style={{ fontSize: '1.75rem' }}>📅</span>
            <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2rem)', margin: 0 }}>{t('bookings_title')}</h1>
          </div>
          <p style={{ opacity: .75, fontSize: '.9rem', margin: 0 }}>{t('bookings_sub')}</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        {loading && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#9ca3af' }}>
            <div style={{ width: 36, height: 36, border: '3px solid #e0e7ff', borderTopColor: '#4f46e5', borderRadius: '50%', animation: 'spin 0.7s linear infinite', margin: '0 auto 1rem' }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            {t('bookings_loading')}
          </div>
        )}
        {error && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: '1rem 1.25rem', color: '#dc2626', fontSize: '.9rem', marginBottom: '1.5rem' }}>⚠️ {error}</div>
        )}
        {!loading && !error && bookings.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>📭</div>
            <h3 style={{ fontFamily: 'Nunito', color: '#1e1b4b', fontWeight: 800, marginBottom: '.5rem' }}>{t('bookings_none')}</h3>
            <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>{t('bookings_none_sub')}</p>
            <Link to="/teachers" className="btn btn-primary">{t('bookings_find_teacher')}</Link>
          </div>
        )}
        {!loading && upcoming.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.1rem', color: '#1f2937', marginBottom: '1rem' }}>{t('bookings_upcoming')} ({upcoming.length})</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {upcoming.map(b => <BookingCard key={b._id} booking={b} onRate={setRatingBooking} reviewed={reviewed.has(b._id)} onCancel={id => setBookings(bs => bs.map(x => x._id === id ? { ...x, status: 'cancelled' } : x))} />)}
            </div>
          </div>
        )}
        {!loading && past.length > 0 && (
          <div>
            <h2 style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.1rem', color: '#1f2937', marginBottom: '1rem' }}>{t('bookings_past')} ({past.length})</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {past.map(b => <BookingCard key={b._id} booking={b} onRate={setRatingBooking} reviewed={reviewed.has(b._id)} />)}
            </div>
          </div>
        )}
      </div>

      {ratingBooking && (
        <RatingModal booking={ratingBooking} onClose={() => setRatingBooking(null)} onSubmitted={id => setReviewed(s => new Set([...s, id]))} />
      )}
    </div>
  );
}
