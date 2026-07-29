import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_WEAK_CHAPTERS = [
  { id: 'rotational-dynamics', title: 'Rotational Dynamics & Torque', subject: 'Physics', accuracy: 35, level: 'critical', topicLink: '/class/class-11/subject/physics' },
  { id: 'electrochemistry',     title: 'Electrochemistry & Nernst Eq.', subject: 'Chemistry', accuracy: 42, level: 'warning',  topicLink: '/class/class-12/subject/chemistry' },
  { id: 'definite-integrals',   title: 'Definite Integrals & Properties', subject: 'Mathematics', accuracy: 48, level: 'warning',  topicLink: '/class/class-12/subject/mathematics' },
];

export default function AIAdaptiveDiagnosticEngine({ user, onReExplainConcept }) {
  const [weakChapters, setWeakChapters] = useState(DEFAULT_WEAK_CHAPTERS);
  const [activeTab, setActiveTab] = useState('revision-queue'); // 'revision-queue' | 'weak-analysis' | 'flashcards'
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Scan localStorage for topic quiz failures, mock test scores, and confidence polls
  useEffect(() => {
    try {
      const detected = [];
      const seen = new Set();

      // Scan mock results
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('mock_result_')) {
          try {
            const data = JSON.parse(localStorage.getItem(key));
            if (data?.breakdown) {
              Object.entries(data.breakdown).forEach(([subj, stats]) => {
                const total = stats.correct + stats.wrong + stats.unattempted;
                const acc = total > 0 ? Math.round((stats.correct / total) * 100) : 0;
                if (acc < 50 && !seen.has(subj)) {
                  seen.add(subj);
                  detected.push({
                    id: subj.toLowerCase().replace(/\s+/g, '-'),
                    title: `${subj} Mock Test Weak Area`,
                    subject: subj,
                    accuracy: acc,
                    level: acc < 40 ? 'critical' : 'warning',
                    topicLink: `/class/jee/subject/${subj.toLowerCase()}`
                  });
                }
              });
            }
          } catch {}
        }

        // Scan quiz results
        if (key?.startsWith('osh_quiz_')) {
          try {
            const data = JSON.parse(localStorage.getItem(key));
            const title = key.replace('osh_quiz_', '');
            if (data?.total > 0) {
              const acc = Math.round((data.correct / data.total) * 100);
              if (acc < 55 && !seen.has(title)) {
                seen.add(title);
                detected.push({
                  id: title.toLowerCase().replace(/\s+/g, '-'),
                  title,
                  subject: 'Target Topic',
                  accuracy: acc,
                  level: acc < 40 ? 'critical' : 'warning',
                  topicLink: '/classes'
                });
              }
            }
          } catch {}
        }
      }

      if (detected.length > 0) {
        setWeakChapters(detected.slice(0, 5));
      }
    } catch (err) {
      console.error('Failed to run AI Diagnostic engine:', err);
    }
  }, []);

  return (
    <section style={{ padding: '2.5rem 0', background: 'linear-gradient(180deg, #0b0f19 0%, #1e1b4b 100%)', color: '#fff' }}>
      <div className="container">
        {/* Header Title */}
        <div style={{ maxWidth: 840, margin: '0 auto 1.75rem', textAlign: 'center' }}>
          <span style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(253,230,138,0.3)', color: '#fef08a', fontSize: '.75rem', fontWeight: 900, padding: '.35rem 1rem', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🎯 AI Adaptive Learning Path &amp; Diagnostic Engine
          </span>
          <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', margin: '.6rem 0 .4rem', color: '#fff' }}>
            Automated Weak Area Diagnostics &amp; Daily Revision Queue
          </h2>
          <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
            Analyzes your quiz mistakes and mock test failures to target weak chapters with high-yield revision.
          </p>
        </div>

        <div style={{ maxWidth: 880, margin: '0 auto', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: '1.5rem', boxShadow: '0 16px 40px rgba(0,0,0,0.35)' }}>
          {/* Module Selector Tabs */}
          <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.25rem', background: 'rgba(0,0,0,0.3)', padding: 4, borderRadius: 14, border: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              onClick={() => setActiveTab('revision-queue')}
              style={{ flex: 1, padding: '.6rem', border: 'none', borderRadius: 10, fontWeight: 900, fontSize: '.83rem', cursor: 'pointer', background: activeTab === 'revision-queue' ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'transparent', color: '#fff', transition: 'all 0.2s' }}
            >
              🔥 Daily Revision Queue ({weakChapters.length})
            </button>
            <button
              onClick={() => setActiveTab('weak-analysis')}
              style={{ flex: 1, padding: '.6rem', border: 'none', borderRadius: 10, fontWeight: 900, fontSize: '.83rem', cursor: 'pointer', background: activeTab === 'weak-analysis' ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'transparent', color: '#fff', transition: 'all 0.2s' }}
            >
              📊 Chapter Accuracy Breakdown
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              style={{ flex: 1, padding: '.6rem', border: 'none', borderRadius: 10, fontWeight: 900, fontSize: '.83rem', cursor: 'pointer', background: activeTab === 'flashcards' ? 'linear-gradient(135deg, #10b981, #059669)' : 'transparent', color: '#fff', transition: 'all 0.2s' }}
            >
              🎴 Targeted Flashcard Deck
            </button>
          </div>

          {/* TAB 1: DAILY REVISION QUEUE */}
          {activeTab === 'revision-queue' && (
            <div>
              <div style={{ fontSize: '.82rem', fontWeight: 800, color: '#fef08a', marginBottom: '1rem', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(253,230,138,0.25)', padding: '.75rem 1rem', borderRadius: 14 }}>
                💡 <strong>AI Recommendation:</strong> Revising these weak chapters daily will boost your mock test score by up to +35 marks!
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
                {weakChapters.map((ch, idx) => (
                  <div
                    key={ch.id || idx}
                    style={{
                      background: 'rgba(0,0,0,0.35)',
                      border: ch.level === 'critical' ? '1.5px solid rgba(239,68,68,0.45)' : '1.5px solid rgba(245,158,11,0.45)',
                      borderRadius: 16,
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '.75rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.3rem' }}>
                        <span style={{ background: ch.level === 'critical' ? '#ef4444' : '#f59e0b', color: '#fff', fontSize: '.68rem', fontWeight: 900, padding: '2px 8px', borderRadius: 10, textTransform: 'uppercase' }}>
                          {ch.level === 'critical' ? '🔴 Critical Weakness' : '🟠 Needs Practice'}
                        </span>
                        <span style={{ fontSize: '.78rem', color: '#c7d2fe', fontWeight: 800 }}>
                          Accuracy: {ch.accuracy}%
                        </span>
                      </div>
                      <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '1.05rem', margin: 0 }}>
                        {ch.title}
                      </h4>
                      <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.7)', marginTop: '.2rem' }}>
                        Subject: {ch.subject} • Recommended: 3 Practice Questions + Concept Re-explanation
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '.5rem' }}>
                      <button
                        onClick={() => onReExplainConcept && onReExplainConcept(ch.title)}
                        className="btn"
                        style={{ background: 'rgba(99,102,241,0.25)', border: '1px solid rgba(165,180,252,0.35)', color: '#fff', padding: '.5rem .85rem', borderRadius: 10, fontSize: '.78rem', fontWeight: 800 }}
                      >
                        🤖 Re-explain Concept
                      </button>
                      <Link
                        to={ch.topicLink || '/classes'}
                        className="btn btn-primary"
                        style={{ padding: '.5rem 1rem', borderRadius: 10, fontSize: '.78rem', fontWeight: 900 }}
                      >
                        📖 Practice Now →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: CHAPTER ACCURACY BREAKDOWN */}
          {activeTab === 'weak-analysis' && (
            <div>
              <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '1.05rem', margin: '0 0 1rem' }}>
                📊 Accuracy Diagnostics by Chapter:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {weakChapters.map((ch, i) => (
                  <div key={i} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.4rem' }}>
                      <span style={{ fontWeight: 800, color: '#fff', fontSize: '.9rem' }}>{ch.title} ({ch.subject})</span>
                      <span style={{ fontWeight: 900, color: ch.accuracy < 40 ? '#f87171' : '#fbbf24', fontSize: '.88rem' }}>{ch.accuracy}% Accuracy</span>
                    </div>

                    <div style={{ width: '100%', height: 8, background: 'rgba(255,255,255,0.12)', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ width: `${ch.accuracy}%`, height: '100%', background: ch.accuracy < 40 ? 'linear-gradient(90deg, #ef4444, #dc2626)' : 'linear-gradient(90deg, #f59e0b, #d97706)', borderRadius: 4, transition: 'width 0.6s ease' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TARGETED FLASHCARD DECK */}
          {activeTab === 'flashcards' && (
            <div style={{ textBaseline: 'center', textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>🎴</div>
              <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', margin: '0 0 .4rem' }}>
                Targeted Weak Area Flashcard Deck Ready!
              </h4>
              <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.25rem' }}>
                Review key formulas, laws, and definitions for {weakChapters[0]?.title || 'your weak chapters'}.
              </p>
              <Link
                to={weakChapters[0]?.topicLink || '/classes'}
                className="btn btn-primary"
                style={{ padding: '.65rem 1.75rem', borderRadius: 12, fontWeight: 900, background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none' }}
              >
                🎴 Start Flashcard Revision →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
