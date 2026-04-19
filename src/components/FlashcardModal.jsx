import React, { useState } from 'react';

export default function FlashcardModal({ qa, topicTitle, onClose }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!qa || qa.length === 0) return null;

  const card = qa[index];
  const total = qa.length;

  function next() { setIndex(i => (i + 1) % total); setFlipped(false); }
  function prev() { setIndex(i => (i - 1 + total) % total); setFlipped(false); }

  function handleKey(e) {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === ' ') { e.preventDefault(); setFlipped(f => !f); }
  }

  return (
    <div
      className="flashcard-overlay"
      onClick={e => e.target === e.currentTarget && onClose()}
      onKeyDown={handleKey}
      tabIndex={-1}
      ref={el => el && el.focus()}
    >
      <div className="flashcard-modal">
        {/* Header */}
        <div className="flashcard-header">
          <div>
            <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#1e1b4b' }}>
              Flashcard Mode
            </div>
            <div style={{ fontSize: '.78rem', color: '#9ca3af' }}>{topicTitle}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <span style={{ fontSize: '.85rem', color: '#6b7280', fontWeight: 600 }}>
              {index + 1} / {total}
            </span>
            <button className="flashcard-close-btn" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 4, background: '#f3f4f6', borderRadius: 0 }}>
          <div style={{
            height: '100%',
            width: `${((index + 1) / total) * 100}%`,
            background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
            borderRadius: '0 2px 2px 0',
            transition: 'width .3s ease',
          }} />
        </div>

        {/* Card */}
        <div className="flashcard-scene" onClick={() => setFlipped(f => !f)}>
          <div className={`flashcard-card ${flipped ? 'flipped' : ''}`}>
            {/* Front - Question */}
            <div className="flashcard-face flashcard-front">
              <div className="flashcard-label">Question</div>
              <div className="flashcard-text">{card.q}</div>
              <div className="flashcard-hint">Click to reveal answer</div>
            </div>
            {/* Back - Answer */}
            <div className="flashcard-face flashcard-back">
              <div className="flashcard-label" style={{ background: 'rgba(255,255,255,.2)' }}>Answer</div>
              <div className="flashcard-text" style={{ color: '#fff', fontSize: '.97rem' }}>{card.a}</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flashcard-controls">
          <button className="flashcard-nav-btn" onClick={prev} disabled={total <= 1} aria-label="Previous card">
            ← Prev
          </button>
          <button
            className="flashcard-flip-btn"
            onClick={() => setFlipped(f => !f)}
            aria-label={flipped ? 'Show question' : 'Reveal answer'}
          >
            {flipped ? '🔄 Show Question' : '👁 Reveal Answer'}
          </button>
          <button className="flashcard-nav-btn" onClick={next} disabled={total <= 1} aria-label="Next card">
            Next →
          </button>
        </div>

        <div style={{ textAlign: 'center', fontSize: '.73rem', color: '#9ca3af', paddingBottom: '.75rem' }}>
          ← → arrow keys to navigate · Space to flip · Esc to close
        </div>
      </div>
    </div>
  );
}
