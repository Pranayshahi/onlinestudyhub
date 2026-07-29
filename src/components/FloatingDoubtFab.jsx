import React from 'react';

export default function FloatingDoubtFab({ onOpenSnapSolve }) {
  if (!onOpenSnapSolve) return null;

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      <button
        onClick={onOpenSnapSolve}
        style={{
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 30,
          padding: '.8rem 1.4rem',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 900,
          fontSize: '.9rem',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(239, 68, 68, 0.45)',
          display: 'flex',
          alignItems: 'center',
          gap: '.6rem',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <span style={{ fontSize: '1.2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>📷</span>
        <span>Stuck? Snap Doubt</span>
      </button>
    </div>
  );
}
