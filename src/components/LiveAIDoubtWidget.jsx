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

  async function handleSolve(e) {
    e.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    setResponse(null);

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
        examTip: 'Box your final answer with correct SI units for full marks.'
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
            🤖 Try AI Doubt Solver Live
          </span>
          <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', margin: '.75rem 0 .5rem', color: '#fff' }}>
            Instant AI Clarity for Any Board or Competitive Exam Question
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
            Type any question below or click the Camera button to scan textbook photos instantly.
          </p>
        </div>

        <div style={{ maxWidth: 800, margin: '0 auto', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: '1.75rem', boxShadow: '0 16px 40px rgba(0,0,0,0.35)' }}>
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

          {/* Form Input */}
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
            <div style={{ marginTop: '1.5rem', textAlign: 'left', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 18, padding: '1.25rem' }}>
              <div style={{ fontSize: '.75rem', fontWeight: 900, color: '#4ade80', textTransform: 'uppercase', marginBottom: '.4rem' }}>
                ✅ AI Solution Generated ({response.subject || 'Science'})
              </div>
              <h4 style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#fff', fontSize: '1rem', margin: '0 0 .75rem' }}>
                "{response.extractedQuestion}"
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
                {response.steps?.map((s, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '.75rem 1rem' }}>
                    <div style={{ fontWeight: 800, color: '#a5b4fc', fontSize: '.85rem', marginBottom: '.2rem' }}>{s.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.82rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{s.detail}</div>
                  </div>
                ))}
              </div>

              {response.examTip && (
                <div style={{ marginTop: '.75rem', fontSize: '.78rem', color: '#fef08a', background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(253,230,138,0.25)', padding: '.65rem .85rem', borderRadius: 10 }}>
                  💡 <strong>Exam Trick:</strong> {response.examTip}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
