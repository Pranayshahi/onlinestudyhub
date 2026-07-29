import React, { useState } from 'react';
import { api } from '../utils/api';

const QUICK_DOUBT_TAGS = [
  '⚡ Lens Formula (Physics)',
  '📐 Quadratic Roots (Math)',
  '🧪 Nernst Equation (Chem)',
  '🧬 DNA Replication (Bio)',
];

export default function LiveAIDoubtWidget({ onOpenSnapSolve }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [viewMode, setViewMode] = useState('socratic'); // 'socratic' | 'full'
  const [activeHintIndex, setActiveHintIndex] = useState(0);

  async function handleSolve(e) {
    e.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    setResponse(null);
    setActiveHintIndex(0);

    try {
      const data = await api('/ai/snap-solve', {
        method: 'POST',
        body: { questionText: query.trim() }
      });
      setResponse(data);
    } catch (err) {
      console.error('Homepage AI Trial error:', err);
      setResponse({
        extractedQuestion: query,
        subject: 'Science & Mathematics',
        chapter: 'Board Exam Concepts',
        steps: [
          { title: 'Step 1: Formula Identification', detail: 'Identify given parameters and governing physical/mathematical relations.' },
          { title: 'Step 2: Step-by-Step Resolution', detail: 'Substitute values into equations and perform precise calculations.' }
        ],
        formulas: ['Governing Formula'],
        examTip: 'Box your final answer with correct SI units for full marks.',
        socraticHints: [
          { hintNum: 1, Clue: 'Identify given parameters and check unit consistency.', question: 'What formula relates the given physical/mathematical quantities?' },
          { hintNum: 2, Clue: 'Substitute known values into governing relation.', question: 'What is the intermediate simplified value?' }
        ],
        videoMatch: {
          title: 'Master Concept & Board Exam PYQ Breakdown',
          timestamp: '04:15',
          conceptName: 'Derivation & Step-by-step Application',
          videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0?start=255'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={{ padding: '3.5rem 0', background: 'linear-gradient(180deg, #0a0f1a 0%, #1e1b4b 100%)', color: '#fff', position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ background: 'rgba(99,102,241,0.25)', border: '1px solid rgba(165,180,252,0.3)', color: '#c7d2fe', fontSize: '.78rem', fontWeight: 900, padding: '.35rem 1rem', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🤖 AI Multi-Modal Doubt Engine
          </span>
          <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', margin: '.75rem 0 .5rem', color: '#fff' }}>
            Stuck on a Question? Snap a Photo or Type It Below
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
            Get Socratic guided hints, video timestamp matches, and instant step-by-step master solutions.
          </p>
        </div>

        <div style={{ maxWidth: 840, margin: '0 auto', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: '1.75rem', boxShadow: '0 16px 40px rgba(0,0,0,0.35)' }}>
          {/* Quick Tag Pills */}
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1rem', justifyContent: 'center' }}>
            {QUICK_DOUBT_TAGS.map((tag, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setQuery(tag.replace(/ \([^)]+\)/, '')); setResponse(null); }}
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', borderRadius: 12, padding: '.35rem .75rem', fontSize: '.78rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSolve} style={{ display: 'flex', gap: '.65rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Type any question or equation — e.g. Solve 2x² - 7x + 3 = 0 using quadratic formula..."
              style={{ flex: 1, minWidth: 260, borderRadius: 14, border: '1.5px solid rgba(255,255,255,0.25)', background: 'rgba(0,0,0,0.3)', color: '#fff', padding: '.85rem 1.1rem', fontFamily: 'Nunito', fontSize: '.95rem' }}
            />
            {onOpenSnapSolve && (
              <button
                type="button"
                onClick={onOpenSnapSolve}
                title="Camera Snap & Solve"
                style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', color: '#fff', border: 'none', borderRadius: 14, padding: '.85rem 1.25rem', fontWeight: 900, cursor: 'pointer', boxShadow: '0 4px 14px rgba(239,68,68,0.4)', fontSize: '.95rem', display: 'flex', alignItems: 'center', gap: '.4rem' }}
              >
                📷 Camera
              </button>
            )}
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="btn btn-primary"
              style={{ borderRadius: 14, padding: '.85rem 1.5rem', fontWeight: 900, fontSize: '.95rem', background: 'linear-gradient(135deg, #f59e0b, #d97706)', border: 'none' }}
            >
              {loading ? 'Solving...' : '⚡ Solve Live'}
            </button>
          </form>

          {/* AI Response Display */}
          {response && (
            <div style={{ marginTop: '1.5rem', textAlign: 'left', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 20, padding: '1.25rem' }}>
              {/* Header & Mode Switcher */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '.75rem' }}>
                <div>
                  <div style={{ fontSize: '.75rem', fontWeight: 900, color: '#4ade80', textTransform: 'uppercase' }}>
                    ✅ AI Multi-Modal Response ({response.subject || 'Science'})
                  </div>
                  <h4 style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#fff', fontSize: '1rem', margin: '.2rem 0 0' }}>
                    "{response.extractedQuestion}"
                  </h4>
                </div>

                {/* Socratic vs Full Mode Tabs */}
                <div style={{ display: 'flex', gap: '.25rem', background: 'rgba(0,0,0,0.3)', padding: 3, borderRadius: 10 }}>
                  <button
                    type="button"
                    onClick={() => setViewMode('socratic')}
                    style={{ border: 'none', borderRadius: 8, padding: '.35rem .75rem', fontSize: '.75rem', fontWeight: 900, cursor: 'pointer', background: viewMode === 'socratic' ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'transparent', color: '#fff' }}
                  >
                    🧠 Socratic Hints
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('full')}
                    style={{ border: 'none', borderRadius: 8, padding: '.35rem .75rem', fontSize: '.75rem', fontWeight: 900, cursor: 'pointer', background: viewMode === 'full' ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'transparent', color: '#fff' }}
                  >
                    ⚡ Full Master Solution
                  </button>
                </div>
              </div>

              {/* MODE A: SOCRATIC GUIDED HINTS */}
              {viewMode === 'socratic' && (
                <div style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(165,180,252,0.3)', borderRadius: 16, padding: '1.1rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '.8rem', fontWeight: 900, color: '#a5b4fc', marginBottom: '.6rem', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                    💡 Socratic Guide — Learn How to Think:
                  </div>

                  {response.socraticHints?.map((h, idx) => (
                    <div
                      key={idx}
                      style={{
                        marginBottom: '.85rem',
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: 12,
                        padding: '.85rem',
                        borderLeft: idx <= activeHintIndex ? '3.5px solid #fbbf24' : '3.5px solid rgba(255,255,255,0.2)',
                        opacity: idx <= activeHintIndex ? 1 : 0.45,
                        transition: 'all 0.3s'
                      }}
                    >
                      <div style={{ fontWeight: 800, color: '#fef08a', fontSize: '.85rem', marginBottom: '.3rem' }}>
                        Hint {h.hintNum || idx + 1}: {h.Clue}
                      </div>
                      <div style={{ fontSize: '.83rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
                        ❓ <strong>Guided Question:</strong> {h.question}
                      </div>
                    </div>
                  ))}

                  {activeHintIndex < (response.socraticHints?.length || 2) - 1 ? (
                    <button
                      type="button"
                      onClick={() => setActiveHintIndex(prev => prev + 1)}
                      style={{ background: '#4f46e5', border: 'none', color: '#fff', borderRadius: 10, padding: '.45rem .95rem', fontSize: '.8rem', fontWeight: 800, cursor: 'pointer' }}
                    >
                      💡 Unlock Next Socratic Hint →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setViewMode('full')}
                      style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)', border: 'none', color: '#fff', borderRadius: 10, padding: '.45rem .95rem', fontSize: '.8rem', fontWeight: 800, cursor: 'pointer' }}
                    >
                      ⚡ Reveal Full Master Solution →
                    </button>
                  )}
                </div>
              )}

              {/* MODE B: FULL MASTER SOLUTION */}
              {viewMode === 'full' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem', marginBottom: '1.25rem' }}>
                  {response.steps?.map((s, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '.75rem 1rem' }}>
                      <div style={{ fontWeight: 800, color: '#a5b4fc', fontSize: '.85rem', marginBottom: '.2rem' }}>{s.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.82rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{s.detail}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* STRUCTURED VIDEO TIMESTAMP MATCH CARD */}
              {response.videoMatch && (
                <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 16, padding: '1rem', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.75rem' }}>
                  <div>
                    <div style={{ fontSize: '.72rem', fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      🎥 Video Lecture Timestamp Match
                    </div>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '.9rem', marginTop: '.2rem' }}>
                      {response.videoMatch.title} ({response.videoMatch.timestamp})
                    </div>
                    <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.7)', marginTop: '.1rem' }}>
                      Concept: {response.videoMatch.conceptName}
                    </div>
                  </div>
                  <a
                    href={response.videoMatch.videoUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    style={{ background: 'linear-gradient(135deg,#ef4444,#dc2626)', color: '#fff', textDecoration: 'none', padding: '.5rem 1rem', borderRadius: 10, fontSize: '.8rem', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '.4rem', boxShadow: '0 4px 12px rgba(239,68,68,0.4)' }}
                  >
                    ▶️ Play at Timestamp ({response.videoMatch.timestamp})
                  </a>
                </div>
              )}

              {response.examTip && (
                <div style={{ marginTop: '.85rem', fontSize: '.78rem', color: '#fef08a', background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(253,230,138,0.25)', padding: '.65rem .85rem', borderRadius: 10 }}>
                  💡 <strong>Exam Scoring Trick:</strong> {response.examTip}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
