import React from 'react';

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.25rem' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24"
          fill={i <= Math.round(rating) ? '#f59e0b' : 'none'}
          stroke="#f59e0b" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span style={{ fontSize: '.75rem', fontWeight: 700, color: '#6b7280', marginLeft: '.2rem' }}>{rating}</span>
    </div>
  );
}

export default function TeacherProfileCard({ teacher, onBook }) {
  if (!teacher) return null;

  return (
    <div className="teacher-profile-card">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{
          width: 64, height: 64, borderRadius: 16,
          background: '#f3f4f6', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: '2rem', flexShrink: 0,
          boxShadow: '0 4px 12px rgba(0,0,0,.05)'
        }}>
          {teacher.avatar || '👨‍🏫'}
        </div>
        <div>
          <h3 style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.1rem', margin: 0, color: '#111827' }}>
            {teacher.name}
          </h3>
          <p style={{ fontSize: '.85rem', color: '#6366f1', fontWeight: 700, marginTop: '.1rem' }}>
            {teacher.subject}
          </p>
          <div style={{ marginTop: '.35rem' }}>
            <StarRating rating={teacher.rating || 4.5} />
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <p style={{ fontSize: '.88rem', color: '#4b5563', lineHeight: 1.6, margin: '0 0 1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {teacher.bio}
        </p>

        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <div style={{ background: '#f9fafb', borderRadius: 8, padding: '.3rem .6rem', fontSize: '.75rem', color: '#6b7280', fontWeight: 600 }}>
            💼 {teacher.experience} Exp.
          </div>
          <div style={{ background: '#f9fafb', borderRadius: 8, padding: '.3rem .6rem', fontSize: '.75rem', color: '#6b7280', fontWeight: 600 }}>
            💰 {teacher.fee}
          </div>
        </div>

        <div style={{ fontSize: '.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.4rem' }}>
          Key Topics
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem' }}>
          {(teacher.topics || []).slice(0, 3).map(t => (
            <span key={t} style={{
              background: '#eef2ff', color: '#4338ca',
              padding: '.2rem .6rem', borderRadius: 6,
              fontSize: '.72rem', fontWeight: 600,
            }}>
              {t}
            </span>
          ))}
          {(teacher.topics || []).length > 3 && (
            <span style={{ fontSize: '.72rem', color: '#9ca3af', fontWeight: 600, padding: '.2rem .3rem' }}>
              +{teacher.topics.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="teacher-card-btn-container">
        <button
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', height: '48px' }}
          onClick={(e) => {
            e.stopPropagation();
            onBook(teacher);
          }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
