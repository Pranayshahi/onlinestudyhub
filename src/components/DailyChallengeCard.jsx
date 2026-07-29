import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { useGamification } from '../hooks/useGamification';

const TARGET_TABS = [
  { id: 'class-10', label: 'Class 10' },
  { id: 'class-11', label: 'Class 11' },
  { id: 'class-12', label: 'Class 12' },
  { id: 'jee',      label: 'JEE / NEET' },
];

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
          // Check if already answered today in localStorage
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

      // Save submission state to localStorage
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
        background: 'rgba(255, 255, 255, 0.07)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: 22,
        padding: '1.5rem',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
        color: '#fff',
      }}
    >
      {/* Top Banner & Target Selector */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <span style={{ fontSize: '1.3rem' }}>⚡</span>
          <div>
            <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.05rem', margin: 0, color: '#fff' }}>
              Daily Challenge (QOTD)
            </h3>
            <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              Resets every 24h • Earn XP & Extend Streak 🔥
            </p>
          </div>
        </div>

        {/* Target Tabs */}
        <div style={{ display: 'flex', gap: '.25rem', background: 'rgba(0,0,0,0.25)', padding: 3, borderRadius: 10 }}>
          {TARGET_TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTarget(tab.id)}
              style={{
                border: 'none',
                borderRadius: 7,
                padding: '.25rem .55rem',
                fontSize: '.72rem',
                fontWeight: 800,
                cursor: 'pointer',
                background: selectedTarget === tab.id ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'transparent',
                color: '#fff',
                transition: 'all 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {loading && !qotd && (
        <div style={{ textAlign: 'center', padding: '2rem 0', color: 'rgba(255,255,255,0.7)', fontSize: '.85rem' }}>
          ⚡ Loading today's challenge question...
        </div>
      )}

      {qotd && (
        <div>
          {/* Question Meta */}
          <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.65rem' }}>
            <span style={{ background: 'rgba(99,102,241,0.3)', border: '1px solid rgba(165,180,252,0.3)', color: '#a5b4fc', fontSize: '.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: 8 }}>
              {qotd.subject}
            </span>
            <span style={{ background: 'rgba(245,158,11,0.25)', border: '1px solid rgba(253,230,138,0.3)', color: '#fef08a', fontSize: '.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: 8 }}>
              {qotd.topic}
            </span>
          </div>

          {/* Question Text */}
          <p style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: '.95rem', lineHeight: 1.5, margin: '0 0 1rem', color: '#fff' }}>
            {qotd.question}
          </p>

          {/* Options */}
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1rem' }}>
              {qotd.options?.map((opt, idx) => {
                let bg = 'rgba(255,255,255,0.06)';
                let border = '1px solid rgba(255,255,255,0.15)';
                let color = 'rgba(255,255,255,0.9)';

                if (submitted && result) {
                  if (idx === result.correctIndex) {
                    bg = 'rgba(34,197,94,0.35)';
                    border = '1px solid #4ade80';
                    color = '#fff';
                  } else if (idx === selectedIndex && !result.isCorrect) {
                    bg = 'rgba(239,68,68,0.35)';
                    border = '1px solid #f87171';
                    color = '#fff';
                  }
                } else if (selectedIndex === idx) {
                  bg = 'rgba(245,158,11,0.3)';
                  border = '1.5px solid #fbbf24';
                  color = '#fff';
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
                      borderRadius: 12,
                      padding: '.65rem .85rem',
                      color,
                      fontSize: '.85rem',
                      fontFamily: 'Nunito',
                      fontWeight: 700,
                      cursor: submitted ? 'default' : 'pointer',
                      transition: 'all 0.15s',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                    }}
                  >
                    <span>{opt}</span>
                    {submitted && result && idx === result.correctIndex && <span>✓ Correct</span>}
                    {submitted && result && idx === selectedIndex && !result.isCorrect && <span>✗ Your Pick</span>}
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
                  padding: '.65rem',
                  borderRadius: 12,
                  fontWeight: 900,
                  fontSize: '.9rem',
                  opacity: selectedIndex === null ? 0.5 : 1,
                  cursor: selectedIndex === null ? 'not-allowed' : 'pointer',
                  background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(245,158,11,0.4)',
                }}
              >
                {loading ? 'Submitting...' : '🚀 Submit Answer & Earn +25 XP'}
              </button>
            ) : null}
          </form>

          {/* Submitted Result Breakdown & Leaderboard Stats */}
          {submitted && result && (
            <div style={{ marginTop: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.6rem' }}>
                <div style={{ fontSize: '.9rem', fontWeight: 900, color: result.isCorrect ? '#4ade80' : '#f87171' }}>
                  {result.isCorrect ? '🎉 Correct! +25 XP & 🔥 Streak Extended!' : '💡 Keep Practising! +10 XP Awarded'}
                </div>
                <div style={{ fontSize: '.75rem', fontWeight: 800, color: '#fbbf24' }}>
                  📊 {result.pctCorrect}% got this right today ({result.totalAttempts} answers)
                </div>
              </div>

              <div style={{ fontSize: '.83rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, whiteSpace: 'pre-line', marginBottom: '.6rem' }}>
                <strong>Step-by-Step Breakdown:</strong><br />
                {result.explanation}
              </div>

              {result.examTip && (
                <div style={{ fontSize: '.78rem', color: '#fef08a', background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(253,230,138,0.25)', padding: '.5rem .75rem', borderRadius: 10 }}>
                  💡 <strong>Exam Trick:</strong> {result.examTip}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
