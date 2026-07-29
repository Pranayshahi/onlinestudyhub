import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { useGamification } from '../hooks/useGamification';

const TARGET_TABS = [
  { id: 'class-10', label: 'Class 10' },
  { id: 'class-11', label: 'Class 11' },
  { id: 'class-12', label: 'Class 12' },
  { id: 'jee',      label: 'JEE / NEET' },
];

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export default function DailyChallengeCard({ user }) {
  const [selectedTarget, setSelectedTarget] = useState('class-10');
  const [qotd, setQotd] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const { awardXP } = useGamification(user);

  // Fetch Question of the Day for selected target
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setSubmitted(false);
    setResult(null);
    setSelectedIndex(null);

    api(`/qotd?target=${selectedTarget}`)
      .then(data => {
        if (isMounted) {
          setQotd(data);
          try {
            const saved = localStorage.getItem(`osh_qotd_${selectedTarget}_${new Date().toISOString().slice(0, 10)}`);
            if (saved) {
              const parsed = JSON.parse(saved);
              setResult(parsed);
              setSelectedIndex(parsed.selectedIndex);
              setSubmitted(true);
            }
          } catch {}
        }
      })
      .catch(err => console.error('Failed to load QOTD:', err))
      .finally(() => { if (isMounted) setLoading(false); });

    return () => { isMounted = false; };
  }, [selectedTarget]);

  // Submit Answer
  async function handleSubmit(e) {
    e.preventDefault();
    if (selectedIndex === null || submitted || loading) return;

    setLoading(true);
    try {
      const res = await api('/qotd/submit', {
        method: 'POST',
        body: { target: selectedTarget, selectedIndex }
      });

      setResult(res);
      setSubmitted(true);

      // Award XP & Extend Streak
      awardXP({ action: 'quiz_completed', subjectId: selectedTarget });

      try {
        localStorage.setItem(
          `osh_qotd_${selectedTarget}_${new Date().toISOString().slice(0, 10)}`,
          JSON.stringify({ ...res, selectedIndex })
        );
      } catch {}
    } catch (err) {
      console.error('QOTD submit error:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        background: 'linear-gradient(145deg, rgba(30, 27, 75, 0.92) 0%, rgba(15, 23, 42, 0.96) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1.5px solid rgba(165, 180, 252, 0.35)',
        borderRadius: 24,
        padding: '1.5rem',
        boxShadow: '0 16px 40px rgba(79, 70, 229, 0.35)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background ambient glow */}
      <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: 140, height: 140, background: 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem', marginBottom: '1.1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <span style={{ background: 'linear-gradient(135deg, #ef4444, #f97316)', color: '#fff', fontSize: '.7rem', fontWeight: 900, padding: '3px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px', boxShadow: '0 2px 10px rgba(239,68,68,0.4)', display: 'inline-flex', alignItems: 'center', gap: '.3rem' }}>
            🔥 QOTD
          </span>
          <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.85)', fontWeight: 800 }}>
            Resets in 14h 22m ⏱️
          </span>
        </div>

        {/* Target Class Tabs */}
        <div style={{ display: 'flex', gap: '.25rem', background: 'rgba(0,0,0,0.35)', padding: 3, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
          {TARGET_TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTarget(tab.id)}
              style={{
                border: 'none',
                borderRadius: 9,
                padding: '.3rem .65rem',
                fontSize: '.75rem',
                fontWeight: 900,
                cursor: 'pointer',
                background: selectedTarget === tab.id ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'transparent',
                color: selectedTarget === tab.id ? '#fff' : 'rgba(255,255,255,0.7)',
                boxShadow: selectedTarget === tab.id ? '0 2px 8px rgba(245,158,11,0.4)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {loading && !qotd && (
        <div style={{ textAlign: 'center', padding: '2.5rem 0', color: 'rgba(255,255,255,0.7)', fontSize: '.9rem' }}>
          ⚡ Loading today's challenge question...
        </div>
      )}

      {qotd && (
        <div>
          {/* Question Tags & Reward Badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.75rem' }}>
            <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(99,102,241,0.25)', border: '1px solid rgba(165,180,252,0.35)', color: '#c7d2fe', fontSize: '.72rem', fontWeight: 800, padding: '3px 10px', borderRadius: 8 }}>
                {qotd.subject}
              </span>
              <span style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(253,230,138,0.3)', color: '#fef08a', fontSize: '.72rem', fontWeight: 800, padding: '3px 10px', borderRadius: 8 }}>
                {qotd.topic}
              </span>
            </div>
            <span style={{ background: 'linear-gradient(135deg,#fbbf24,#f97316)', color: '#000', fontSize: '.7rem', fontWeight: 900, padding: '2px 8px', borderRadius: 12 }}>
              +25 XP ⚡
            </span>
          </div>

          {/* Question Text */}
          <h4 style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1rem', lineHeight: 1.5, margin: '0 0 1.1rem', color: '#fff' }}>
            {qotd.question}
          </h4>

          {/* Options List */}
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', marginBottom: '1.25rem' }}>
              {qotd.options?.map((opt, idx) => {
                let bg = 'rgba(255,255,255,0.06)';
                let border = '1px solid rgba(255,255,255,0.14)';
                let letterBg = 'rgba(255,255,255,0.12)';
                let letterColor = '#fff';

                if (submitted && result) {
                  if (idx === result.correctIndex) {
                    bg = 'rgba(34,197,94,0.35)';
                    border = '1.5px solid #4ade80';
                    letterBg = '#22c55e';
                    letterColor = '#fff';
                  } else if (idx === selectedIndex && !result.isCorrect) {
                    bg = 'rgba(239,68,68,0.35)';
                    border = '1.5px solid #f87171';
                    letterBg = '#ef4444';
                    letterColor = '#fff';
                  }
                } else if (selectedIndex === idx) {
                  bg = 'rgba(245,158,11,0.25)';
                  border = '1.5px solid #fbbf24';
                  letterBg = '#f59e0b';
                  letterColor = '#000';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={submitted}
                    onClick={() => setSelectedIndex(idx)}
                    style={{
                      textAlign: 'left',
                      background: bg,
                      border,
                      borderRadius: 14,
                      padding: '.7rem .9rem',
                      color: '#fff',
                      fontSize: '.88rem',
                      fontFamily: 'Nunito',
                      fontWeight: 700,
                      cursor: submitted ? 'default' : 'pointer',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '.75rem',
                      boxShadow: selectedIndex === idx ? '0 4px 14px rgba(245,158,11,0.2)' : 'none',
                    }}
                  >
                    <span style={{ width: 26, height: 26, borderRadius: '50%', background: letterBg, color: letterColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '.75rem', flexShrink: 0 }}>
                      {OPTION_LETTERS[idx]}
                    </span>
                    <span style={{ flex: 1 }}>{opt}</span>
                    {submitted && result && idx === result.correctIndex && <span style={{ color: '#4ade80', fontWeight: 900, fontSize: '.8rem' }}>✓ Correct</span>}
                    {submitted && result && idx === selectedIndex && !result.isCorrect && <span style={{ color: '#f87171', fontWeight: 900, fontSize: '.8rem' }}>✗ Your Pick</span>}
                  </button>
                );
              })}
            </div>

            {!submitted ? (
              <button
                type="submit"
                disabled={selectedIndex === null || loading}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '.75rem',
                  borderRadius: 14,
                  fontWeight: 900,
                  fontSize: '.95rem',
                  opacity: selectedIndex === null ? 0.5 : 1,
                  cursor: selectedIndex === null ? 'not-allowed' : 'pointer',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                  border: 'none',
                  boxShadow: '0 6px 20px rgba(245,158,11,0.45)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                {loading ? 'Submitting...' : '🚀 Submit Answer & Claim +25 XP'}
              </button>
            ) : null}
          </form>

          {/* Submitted Result & Community Stats Bar */}
          {submitted && result && (
            <div style={{ marginTop: '1.25rem', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 16, padding: '1.1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.75rem', flexWrap: 'wrap', gap: '.4rem' }}>
                <div style={{ fontSize: '.92rem', fontWeight: 900, color: result.isCorrect ? '#4ade80' : '#f87171' }}>
                  {result.isCorrect ? '🎉 Correct! +25 XP & 🔥 Streak Extended!' : '💡 Keep Practising! +10 XP Awarded'}
                </div>
                <span style={{ fontSize: '.75rem', color: '#fbbf24', fontWeight: 800 }}>
                  📊 {result.pctCorrect}% got this right today ({result.totalAttempts} attempts)
                </span>
              </div>

              {/* Progress Bar for Community Accuracy */}
              <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 3, overflow: 'hidden', marginBottom: '.85rem' }}>
                <div style={{ width: `${result.pctCorrect}%`, height: '100%', background: 'linear-gradient(90deg, #4f46e5, #10b981)', transition: 'width 0.6s ease' }} />
              </div>

              <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5, whiteSpace: 'pre-line', marginBottom: '.75rem' }}>
                <strong style={{ color: '#a5b4fc' }}>Step-by-Step Breakdown:</strong><br />
                {result.explanation}
              </div>

              {result.examTip && (
                <div style={{ fontSize: '.8rem', color: '#fef08a', background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(253,230,138,0.3)', padding: '.65rem .85rem', borderRadius: 12 }}>
                  💡 <strong>Board Exam Trick:</strong> {result.examTip}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
