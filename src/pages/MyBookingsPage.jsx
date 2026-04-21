import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';

const STATUS_STYLE = {
  pending:   { bg: '#fff7ed', color: '#ea580c', label: '⏳ Pending' },
  confirmed: { bg: '#f0fdf4', color: '#16a34a', label: '✅ Confirmed' },
  cancelled: { bg: '#fef2f2', color: '#dc2626', label: '❌ Cancelled' },
  completed: { bg: '#eff6ff', color: '#2563eb', label: '🎓 Completed' },
};

function BookingCard({ booking }) {
  const status = STATUS_STYLE[booking.status] || STATUS_STYLE.pending;
  const date = booking.scheduled_date
    ? new Date(booking.scheduled_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : '—';

  return (
    <div style={{
      background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16,
      padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '.75rem',
      boxShadow: '0 1px 6px rgba(0,0,0,.06)', transition: 'box-shadow .2s',
    }}
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
        <div><span style={{ color: '#9ca3af' }}>Date</span><br /><strong>{date}</strong></div>
        <div><span style={{ color: '#9ca3af' }}>Time</span><br /><strong>{booking.time_slot || '—'}</strong></div>
        <div><span style={{ color: '#9ca3af' }}>Name</span><br /><strong>{booking.student_name}</strong></div>
        <div><span style={{ color: '#9ca3af' }}>Phone</span><br /><strong>{booking.student_phone}</strong></div>
      </div>

      {booking.meet_link && booking.status === 'confirmed' && (
        <a
          href={booking.meet_link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', background: '#1e1b4b', color: '#fff', fontSize: '.82rem', fontWeight: 700, padding: '.45rem 1rem', borderRadius: 8, textDecoration: 'none', width: 'fit-content' }}
        >
          📹 Join Meet
        </a>
      )}
    </div>
  );
}

export default function MyBookingsPage({ user }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    api('/bookings/student')
      .then(data => setBookings(Array.isArray(data) ? data : []))
      .catch(err => setError(err.message || 'Failed to load bookings'))
      .finally(() => setLoading(false));
  }, [user]);

  if (!user) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem' }}>🔒</div>
        <h2 style={{ fontFamily: 'Nunito', color: '#1e1b4b', fontWeight: 900 }}>Login Required</h2>
        <p style={{ color: '#6b7280' }}>Please login to view your booking history.</p>
        <Link to="/" className="btn btn-primary">← Go Home</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '80vh', background: '#f8fafc' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', color: '#fff', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.5rem' }}>
            <span style={{ fontSize: '1.75rem' }}>📅</span>
            <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2rem)', margin: 0 }}>My Bookings</h1>
          </div>
          <p style={{ opacity: .75, fontSize: '.9rem', margin: 0 }}>All your session requests and upcoming classes</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        {loading && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#9ca3af' }}>
            <div style={{ width: 36, height: 36, border: '3px solid #e0e7ff', borderTopColor: '#4f46e5', borderRadius: '50%', animation: 'spin 0.7s linear infinite', margin: '0 auto 1rem' }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            Loading your bookings…
          </div>
        )}

        {error && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: '1rem 1.25rem', color: '#dc2626', fontSize: '.9rem', marginBottom: '1.5rem' }}>
            ⚠️ {error}
          </div>
        )}

        {!loading && !error && bookings.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>📭</div>
            <h3 style={{ fontFamily: 'Nunito', color: '#1e1b4b', fontWeight: 800, marginBottom: '.5rem' }}>No bookings yet</h3>
            <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Book a session with a teacher to get started.</p>
            <Link to="/teachers" className="btn btn-primary">Find a Teacher</Link>
          </div>
        )}

        {!loading && bookings.length > 0 && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '.5rem' }}>
              <p style={{ color: '#6b7280', fontSize: '.9rem', margin: 0 }}>{bookings.length} booking{bookings.length !== 1 ? 's' : ''} found</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {bookings.map(b => <BookingCard key={b._id} booking={b} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
