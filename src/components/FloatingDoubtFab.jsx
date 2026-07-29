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
          border: '2px solid rgba(255,255,255,0.3)',
          borderRadius: 30,
          padding: '.85rem 1.4rem',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 900,
          fontSize: '.88rem',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(239, 68, 68, 0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '.65rem',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 36px rgba(239, 68, 68, 0.65)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.5)';
        }}
      >
        <span style={{ fontSize: '1.3rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>💬</span>
        <span>Need help with homework right now? Ask me!</span>
      </button>
    </div>
  );
}
