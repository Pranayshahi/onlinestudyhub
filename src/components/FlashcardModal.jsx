import React, { useState } from 'react';

export default function FlashcardModal({ qa, aiCards, topicTitle, onClose }) {
  const allCards = aiCards?.length ? aiCards : (qa || []);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState({});
  const source = aiCards?.length ? 'ai' : 'qa';

  if (!allCards.length) return null;

  const card = allCards[index];
  const total = allCards.length;
  const knownCount = Object.values(known).filter(Boolean).length;

  function next() { setIndex(i => (i + 1) % total); setFlipped(false); }
  function prev() { setIndex(i => (i - 1 + total) % total); setFlipped(false); }

  function markKnown(val) {
    setKnown(k => ({ ...k, [index]: val }));
    if (index < total - 1) next();
  }

  function handleKey(e) {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === ' ') { e.preventDefault(); setFlipped(f => !f); }
    if (e.key === 'ArrowUp') markKnown(true);
    if (e.key === 'ArrowDown') markKnown(false);
  }

  const isDone = Object.keys(known).length === total;

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
            <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#1e1b4b', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              Flashcard Mode
              {source === 'ai' && (
                <span style={{ background: '#ede9fe', color: '#7c3aed', fontSize: '.65rem', fontWeight: 800, padding: '.15rem .5rem', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '.04em' }}>
                  ✨ AI
                </span>
              )}
            </div>
            <div style={{ fontSize: '.78rem', color: '#9ca3af' }}>{topicTitle}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <span style={{ fontSize: '.85rem', color: '#6b7280', fontWeight: 600 }}>
              {index + 1} / {total}
            </span>
            {knownCount > 0 && (
              <span style={{ fontSize: '.78rem', color: '#059669', fontWeight: 700 }}>
                ✓ {knownCount} known
              </span>
            )}
            <button className="flashcard-close-btn" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 4, background: '#f3f4f6', borderRadius: 0 }}>
          <div style={{
            height: '100%',
            width: `${((index + 1) / total) * 100}%`,
            background: source === 'ai'
              ? 'linear-gradient(90deg, #7c3aed, #4f46e5)'
              : 'linear-gradient(90deg, #4f46e5, #7c3aed)',
            borderRadius: '0 2px 2px 0',
            transition: 'width .3s ease',
          }} />
        </div>

        {isDone ? (
          /* ── Completion screen ── */
          <div style={{ padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '.75rem' }}>🎉</div>
            <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.5rem' }}>
              All done!
            </h3>
            <p style={{ color: '#6b7280', fontSize: '.9rem', marginBottom: '1.5rem' }}>
              You marked <strong style={{ color: '#059669' }}>{knownCount} of {total}</strong> cards as known.
            </p>
            <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => { setIndex(0); setFlipped(false); setKnown({}); }}
                style={{ padding: '.6rem 1.25rem', borderRadius: 10, border: 'none', background: '#4f46e5', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>
                🔄 Restart
              </button>
              <button onClick={onClose}
                style={{ padding: '.6rem 1.25rem', borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', fontWeight: 700, cursor: 'pointer' }}>
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Card */}
            <div className="flashcard-scene" onClick={() => setFlipped(f => !f)}>
              <div className={`flashcard-card ${flipped ? 'flipped' : ''}`}>
                <div className="flashcard-face flashcard-front">
                  <div className="flashcard-label">Question</div>
                  <div className="flashcard-text">{card.q}</div>
                  <div className="flashcard-hint">Click to reveal answer</div>
                </div>
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

            {/* Know / Don't know */}
            {flipped && (
              <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', padding: '.5rem 1.5rem 1rem' }}>
                <button onClick={() => markKnown(false)}
                  style={{ flex: 1, padding: '.5rem', borderRadius: 10, border: '1.5px solid #fecaca', background: '#fef2f2', color: '#dc2626', fontWeight: 700, fontSize: '.82rem', cursor: 'pointer' }}>
                  ✗ Still learning
                </button>
                <button onClick={() => markKnown(true)}
                  style={{ flex: 1, padding: '.5rem', borderRadius: 10, border: '1.5px solid #a7f3d0', background: '#ecfdf5', color: '#059669', fontWeight: 700, fontSize: '.82rem', cursor: 'pointer' }}>
                  ✓ Got it!
                </button>
              </div>
            )}

            <div style={{ textAlign: 'center', fontSize: '.73rem', color: '#9ca3af', paddingBottom: '.75rem' }}>
              ← → navigate · Space to flip · ↑ Got it · ↓ Still learning · Esc close
            </div>
          </>
        )}
      </div>
    </div>
  );
}
