import React, { useState, useMemo } from 'react';

// ── SM-2 Spaced Repetition Algorithm ──────────────────────────────
const MIN_EF = 1.3;

function sm2Update({ interval = 0, repetitions = 0, ef = 2.5 }, quality) {
  // quality: 0=Again, 3=Hard, 4=Good, 5=Easy
  let newInterval, newReps;
  if (quality < 3) {
    newReps = 0;
    newInterval = 1;
  } else {
    newReps = repetitions + 1;
    if (repetitions === 0) newInterval = 1;
    else if (repetitions === 1) newInterval = 6;
    else newInterval = Math.round(interval * ef);
  }
  const newEf = Math.max(MIN_EF, ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  return { interval: newInterval, repetitions: newReps, ef: newEf, nextDue: Date.now() + newInterval * 86400000 };
}

function intervalLabel(days) {
  if (!days || days < 1) return 'again';
  if (days === 1) return '1 day';
  if (days < 7) return `${days} days`;
  if (days < 30) return `${Math.round(days / 7)}w`;
  return `${Math.round(days / 30)}mo`;
}

function loadSR(key) { try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch { return {}; } }
function saveSR(key, data) { try { localStorage.setItem(key, JSON.stringify(data)); } catch {} }

// ── Main Component ─────────────────────────────────────────────────
export default function FlashcardModal({ qa, aiCards, topicTitle, onClose }) {
  const allCards = aiCards?.length ? aiCards : (qa || []);
  const source   = aiCards?.length ? 'ai' : 'qa';
  const srKey    = `fc_sr_${(topicTitle || 'cards').replace(/\W+/g, '_')}`;

  const [srData, setSrData] = useState(() => loadSR(srKey));

  // Build session queue sorted by nextDue — overdue/new cards first
  const initialQueue = useMemo(() => {
    const now = Date.now();
    return allCards
      .map((_, i) => i)
      .sort((a, b) => {
        const da = srData[a]?.nextDue ?? 0;
        const db = srData[b]?.nextDue ?? 0;
        if (!da && !db) return 0;
        if (!da) return 1;
        if (!db) return -1;
        if (da <= now && db <= now) return da - db;
        if (da <= now) return -1;
        if (db <= now) return 1;
        return da - db;
      });
  }, []); // eslint-disable-line

  const [queue,      setQueue]      = useState(initialQueue);
  const [queueIdx,   setQueueIdx]   = useState(0);
  const [flipped,    setFlipped]    = useState(false);
  const [againSeen,  setAgainSeen]  = useState({});  // track resurfaced cards
  const [stats,      setStats]      = useState({ again: 0, hard: 0, good: 0, easy: 0 });
  const [done,       setDone]       = useState(false);

  if (!allCards.length) return null;

  const cardIdx = queue[queueIdx];
  const card    = allCards[cardIdx];
  const sr      = srData[cardIdx] || {};
  const now     = Date.now();

  const newCount  = allCards.filter((_, i) => !srData[i]?.nextDue).length;
  const dueCount  = allCards.filter((_, i) => srData[i]?.nextDue && srData[i].nextDue <= now).length;

  function previewDays(quality) { return intervalLabel(sm2Update(sr, quality).interval); }

  function rate(quality) {
    const updated = sm2Update(sr, quality);
    const newSrData = { ...srData, [cardIdx]: updated };
    setSrData(newSrData);
    saveSR(srKey, newSrData);

    const key = quality === 0 ? 'again' : quality === 3 ? 'hard' : quality === 4 ? 'good' : 'easy';
    setStats(s => ({ ...s, [key]: s[key] + 1 }));

    let newQueue = queue;
    if (quality === 0 && !againSeen[cardIdx]) {
      // Surface failed card once more at end of session
      newQueue = [...queue, cardIdx];
      setAgainSeen(s => ({ ...s, [cardIdx]: true }));
    }

    const nextIdx = queueIdx + 1;
    if (nextIdx >= newQueue.length) {
      setDone(true);
    } else {
      setQueue(newQueue);
      setQueueIdx(nextIdx);
      setFlipped(false);
    }
  }

  function restart() {
    setSrData(loadSR(srKey)); // re-read fresh after session
    setQueue(initialQueue);
    setQueueIdx(0);
    setFlipped(false);
    setAgainSeen({});
    setStats({ again: 0, hard: 0, good: 0, easy: 0 });
    setDone(false);
  }

  function handleKey(e) {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === ' ') { e.preventDefault(); setFlipped(f => !f); return; }
    if (flipped) {
      if (e.key === '1') rate(0);
      if (e.key === '2') rate(3);
      if (e.key === '3') rate(4);
      if (e.key === '4') rate(5);
    }
  }

  const total    = queue.length;
  const progress = Math.round((queueIdx / total) * 100);
  const mastered = stats.good + stats.easy;
  const struggling = stats.again + stats.hard;

  return (
    <div
      className="flashcard-overlay"
      onClick={e => e.target === e.currentTarget && onClose()}
      onKeyDown={handleKey}
      tabIndex={-1}
      ref={el => el?.focus()}
    >
      <div className="flashcard-modal">

        {/* Header */}
        <div className="flashcard-header">
          <div>
            <div style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', color: '#1e1b4b', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              Flashcard Mode
              {source === 'ai' && (
                <span style={{ background: '#ede9fe', color: '#7c3aed', fontSize: '.65rem', fontWeight: 800, padding: '.15rem .5rem', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '.04em' }}>✨ AI</span>
              )}
              <span style={{ background: '#f0fdf4', color: '#059669', fontSize: '.65rem', fontWeight: 800, padding: '.15rem .5rem', borderRadius: 999, letterSpacing: '.03em' }}>⚡ Spaced Rep</span>
            </div>
            <div style={{ fontSize: '.78rem', color: '#9ca3af', marginTop: '.15rem' }}>{topicTitle}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            {!done && (
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '.82rem', color: '#6b7280', fontWeight: 600 }}>{queueIdx + 1} / {total}</div>
                <div style={{ fontSize: '.7rem', color: '#9ca3af' }}>
                  {dueCount > 0 && <span style={{ color: '#dc2626' }}>{dueCount} due </span>}
                  {newCount > 0 && <span style={{ color: '#4f46e5' }}>{newCount} new</span>}
                </div>
              </div>
            )}
            <button className="flashcard-close-btn" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 4, background: '#f3f4f6' }}>
          <div style={{
            height: '100%',
            width: `${done ? 100 : progress}%`,
            background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
            borderRadius: '0 2px 2px 0',
            transition: 'width .3s ease',
          }} />
        </div>

        {/* SR streak badge on card */}
        {!done && sr.repetitions > 0 && (
          <div style={{ padding: '.4rem 1.25rem 0', display: 'flex', gap: '.5rem' }}>
            <span style={{ fontSize: '.7rem', background: '#fef3c7', color: '#92400e', border: '1px solid #fde68a', borderRadius: 99, padding: '.15rem .55rem', fontWeight: 700 }}>
              🔥 {sr.repetitions}× seen · next in {intervalLabel(sr.interval)}
            </span>
          </div>
        )}

        {done ? (
          /* ── Session complete ── */
          <div style={{ padding: '2rem 2rem 1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '.5rem' }}>🎉</div>
            <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', marginBottom: '.5rem' }}>Session complete!</h3>
            <p style={{ color: '#6b7280', fontSize: '.88rem', marginBottom: '1.25rem' }}>
              Your cards are scheduled. Come back tomorrow for the next review.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { label: 'Again', val: stats.again, bg: '#fef2f2', color: '#dc2626', border: '#fecaca' },
                { label: 'Hard',  val: stats.hard,  bg: '#fff7ed', color: '#d97706', border: '#fed7aa' },
                { label: 'Good',  val: stats.good,  bg: '#f0fdf4', color: '#059669', border: '#a7f3d0' },
                { label: 'Easy',  val: stats.easy,  bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
              ].map(s => (
                <div key={s.label} style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 10, padding: '.5rem .85rem', minWidth: 56 }}>
                  <div style={{ fontWeight: 900, fontSize: '1.2rem', color: s.color }}>{s.val}</div>
                  <div style={{ fontSize: '.7rem', color: s.color, fontWeight: 700 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '.8rem', color: '#9ca3af', marginBottom: '1.25rem' }}>
              {mastered >= struggling
                ? `💪 ${mastered} cards on track. Keep it up!`
                : `📖 Review ${struggling} cards again tomorrow — you're building the habit!`}
            </p>

            <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={restart}
                style={{ padding: '.65rem 1.4rem', borderRadius: 10, border: 'none', background: '#4f46e5', color: '#fff', fontWeight: 700, cursor: 'pointer', fontFamily: 'Nunito' }}>
                🔄 Study Again
              </button>
              <button onClick={onClose}
                style={{ padding: '.65rem 1.25rem', borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', color: '#374151', fontWeight: 700, cursor: 'pointer' }}>
                Close
              </button>
            </div>
          </div>

        ) : (
          <>
            {/* Flip card */}
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

            {/* Flip button */}
            {!flipped && (
              <div style={{ padding: '.5rem 1.5rem .25rem', display: 'flex', justifyContent: 'center' }}>
                <button className="flashcard-flip-btn" onClick={() => setFlipped(true)}>
                  👁 Reveal Answer
                </button>
              </div>
            )}

            {/* SR Rating buttons — shown after flip */}
            {flipped && (
              <div style={{ padding: '.75rem 1.25rem 1rem' }}>
                <div style={{ fontSize: '.73rem', color: '#9ca3af', textAlign: 'center', marginBottom: '.6rem', fontWeight: 600 }}>
                  How well did you know this?
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '.5rem' }}>
                  {[
                    { q: 0, label: 'Again', emoji: '😕', bg: '#fef2f2', border: '#fecaca', color: '#dc2626' },
                    { q: 3, label: 'Hard',  emoji: '🤔', bg: '#fff7ed', border: '#fed7aa', color: '#d97706' },
                    { q: 4, label: 'Good',  emoji: '😊', bg: '#f0fdf4', border: '#a7f3d0', color: '#059669' },
                    { q: 5, label: 'Easy',  emoji: '🎯', bg: '#eff6ff', border: '#bfdbfe', color: '#2563eb' },
                  ].map(({ q, label, emoji, bg, border, color }) => (
                    <button
                      key={q}
                      onClick={() => rate(q)}
                      style={{ padding: '.55rem .4rem', borderRadius: 10, border: `1.5px solid ${border}`, background: bg, color, fontWeight: 700, cursor: 'pointer', fontFamily: 'Nunito', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.15rem', transition: 'transform .1s' }}
                      onMouseDown={e => e.currentTarget.style.transform = 'scale(.96)'}
                      onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <span style={{ fontSize: '1.15rem' }}>{emoji}</span>
                      <span style={{ fontSize: '.78rem' }}>{label}</span>
                      <span style={{ fontSize: '.65rem', opacity: .75 }}>{previewDays(q)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div style={{ textAlign: 'center', fontSize: '.7rem', color: '#c4c9d4', paddingBottom: '.6rem' }}>
              Space to flip · 1 Again · 2 Hard · 3 Good · 4 Easy · Esc close
            </div>
          </>
        )}
      </div>
    </div>
  );
}
