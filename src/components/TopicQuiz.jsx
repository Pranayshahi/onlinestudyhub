import React, { useState, useEffect } from 'react';
import { useGamification } from '../hooks/useGamification';

export default function TopicQuiz({ qa, topicTitle, subjectId, user, onPracticeQuestion }) {
  const [phase, setPhase] = useState('idle'); // idle | quiz | result
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [scores, setScores] = useState([]);
  const [timeLeft, setTimeLeft] = useState(120); // 2-minute timer (120 seconds)

  const { awardXP } = useGamification(user);

  // 2-minute countdown timer during quiz
  useEffect(() => {
    if (phase !== 'quiz') return;
    if (timeLeft <= 0) {
      finishQuiz();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, timeLeft]);

  if (!qa || qa.length === 0) return null;

  function startQuiz() {
    setPhase('quiz');
    setCurrent(0);
    setRevealed(false);
    setScores([]);
    setTimeLeft(120);
  }

  function mark(got) {
    const newScores = [...scores, got];
    setScores(newScores);
    if (current + 1 >= qa.length) {
      finishQuiz(newScores);
    } else {
      setCurrent(c => c + 1);
      setRevealed(false);
    }
  }

  function finishQuiz(finalScores = scores) {
    try {
      localStorage.setItem(
        `osh_quiz_${topicTitle}`,
        JSON.stringify({
          correct: finalScores.filter(Boolean).length,
          total: qa.length,
          date: new Date().toISOString()
        })
      );
    } catch {}

    // Award XP for completing a flash quiz
    awardXP({ action: 'quiz_completed', subjectId });
    setPhase('result');
  }

  const correct = scores.filter(Boolean).length;
  const pct = qa.length > 0 ? Math.round((correct / qa.length) * 100) : 0;
  const wrongIndices = scores.map((got, idx) => (!got ? idx : null)).filter(val => val !== null);

  const grade =
    pct >= 80 ? { msg: 'Mastery Achieved! 🏆', color: '#16a34a', bg: '#f0fdf4', border: '#86efac' } :
    pct >= 60 ? { msg: 'Good Concept Retention! 😊', color: '#0284c7', bg: '#f0f9ff', border: '#7dd3fc' } :
    pct >= 40 ? { msg: 'Needs Focused Revision! 💪', color: '#d97706', bg: '#fffbeb', border: '#fcd34d' } :
                { msg: 'Requires Step-by-Step Review 📚', color: '#dc2626', bg: '#fef2f2', border: '#fca5a5' };

  // Format time (MM:SS)
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');

  if (phase === 'idle') {
    return (
      <section className="topic-quiz-idle">
        <div className="topic-quiz-banner" style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', padding: '1.25rem 1.5rem', borderRadius: 20, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', boxShadow: '0 8px 25px rgba(49,46,129,0.3)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.25rem' }}>
              <span style={{ fontSize: '1.2rem' }}>⚡</span>
              <span style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.1rem', color: '#fff' }}>
                Post-Chapter 2-Minute Flash Quiz
              </span>
              <span style={{ background: 'rgba(245,158,11,0.25)', border: '1px solid rgba(253,230,138,0.3)', color: '#fef08a', fontSize: '.7rem', fontWeight: 900, padding: '2px 8px', borderRadius: 10 }}>
                ⏱️ 120s Flash
              </span>
            </div>
            <div style={{ fontSize: '.83rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              {qa.length} active recall questions · Test your retention &amp; get instant weakness diagnostic report
            </div>
          </div>
          <button
            onClick={startQuiz}
            className="btn btn-primary"
            style={{ padding: '.65rem 1.5rem', borderRadius: 12, fontWeight: 900, fontSize: '.9rem', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', border: 'none', boxShadow: '0 4px 15px rgba(245,158,11,0.4)' }}
          >
            🚀 Start 2-Min Flash Quiz →
          </button>
        </div>
      </section>
    );
  }

  if (phase === 'result') {
    return (
      <section className="topic-quiz-section" style={{ margin: '1.5rem 0' }}>
        <div style={{ background: '#fff', border: `2px solid ${grade.border}`, borderRadius: 24, padding: '1.75rem', boxShadow: '0 12px 32px rgba(0,0,0,0.06)' }}>
          {/* Header Score & Grade */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '2.4rem', fontFamily: 'Nunito', fontWeight: 900, color: grade.color, margin: 0 }}>
              {pct}% Score
            </div>
            <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: grade.color, fontSize: '1.2rem', margin: '.2rem 0 .4rem' }}>
              {grade.msg}
            </h3>
            <p style={{ fontSize: '.88rem', color: '#64748b', margin: 0 }}>
              Answered <strong>{correct}</strong> out of <strong>{qa.length}</strong> questions correctly
            </p>
          </div>

          {/* Dots Overview */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '.5rem', marginBottom: '1.5rem' }}>
            {scores.map((got, i) => (
              <div
                key={i}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: got ? '#dcfce7' : '#fee2e2',
                  color: got ? '#16a34a' : '#dc2626',
                  border: `1.5px solid ${got ? '#86efac' : '#fca5a5'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '.85rem'
                }}
              >
                {got ? '✓' : '✗'}
              </div>
            ))}
          </div>

          {/* WEAKNESS ANALYSIS DIAGNOSTIC REPORT */}
          <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: 18, padding: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.65rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📊</span>
              <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.05rem', margin: 0, color: '#1e1b4b' }}>
                Weakness Analysis &amp; Diagnostic Report
              </h4>
            </div>

            <div style={{ fontSize: '.88rem', color: '#334155', lineHeight: 1.5, marginBottom: '1rem' }}>
              {pct >= 80 ? (
                <span>🎉 <strong>Strong Mastery!</strong> You have demonstrated exceptional conceptual grip over <strong>{topicTitle}</strong>. Keep practicing edge-case numericals to lock in 100% board marks.</span>
              ) : pct >= 50 ? (
                <span>💡 <strong>Concept Grip: Medium ({pct}%).</strong> Your basic formulas are solid, but problem-solving speed &amp; tricky application areas need targeted practice.</span>
              ) : (
                <span>⚠️ <strong>Revision Alert: Weakness Detected ({pct}%).</strong> You missed key step-by-step applications. We recommend reviewing the 3 practice questions below before moving to the next chapter.</span>
              )}
            </div>

            {/* Recommended Actionable Practice Questions */}
            {wrongIndices.length > 0 && (
              <div>
                <div style={{ fontWeight: 800, color: '#4338ca', fontSize: '.82rem', textTransform: 'uppercase', marginBottom: '.5rem', letterSpacing: '0.5px' }}>
                  🎯 Recommended Practice Questions to Review:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                  {wrongIndices.slice(0, 3).map(idx => {
                    const item = qa[idx];
                    return (
                      <div key={idx} style={{ background: '#fff', border: '1px solid #cbd5e1', borderRadius: 12, padding: '.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem' }}>
                        <div>
                          <div style={{ fontSize: '.75rem', fontWeight: 800, color: '#ef4444' }}>Question {idx + 1} Needed Review:</div>
                          <div style={{ fontSize: '.85rem', fontWeight: 700, color: '#1e293b' }}>{item.q}</div>
                        </div>
                        <button
                          onClick={() => {
                            if (onPracticeQuestion) onPracticeQuestion(item);
                            else alert(`Question ${idx + 1} Answer:\n\n${item.a}`);
                          }}
                          className="btn btn-secondary"
                          style={{ fontSize: '.78rem', padding: '.35rem .75rem', borderRadius: 8, flexShrink: 0 }}
                        >
                          👁️ View Key Answer
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button
              onClick={startQuiz}
              className="btn btn-primary"
              style={{ padding: '.65rem 1.75rem', borderRadius: 12, fontWeight: 900 }}
            >
              🔄 Retake 2-Min Flash Quiz
            </button>
            <button
              onClick={() => setPhase('idle')}
              className="btn btn-secondary"
              style={{ padding: '.65rem 1.5rem', borderRadius: 12, fontWeight: 800 }}
            >
              Close
            </button>
          </div>
        </div>
      </section>
    );
  }

  const q = qa[current];
  const progress = (current / qa.length) * 100;

  return (
    <section className="topic-quiz-section" style={{ margin: '1.5rem 0' }}>
      <div style={{ background: '#fff', border: '1.5px solid #cbd5e1', borderRadius: 22, padding: '1.5rem', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
        {/* Progress bar & Timer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.75rem' }}>
          <span style={{ fontSize: '.82rem', fontWeight: 900, color: '#4f46e5' }}>
            📝 Question {current + 1} / {qa.length}
          </span>
          <span style={{ background: timeLeft <= 20 ? '#fef2f2' : '#f0fdf4', color: timeLeft <= 20 ? '#dc2626' : '#16a34a', border: `1px solid ${timeLeft <= 20 ? '#fecaca' : '#bbf7d0'}`, fontSize: '.8rem', fontWeight: 900, padding: '3px 10px', borderRadius: 10 }}>
            ⏱️ Timer: {mins}:{secs}
          </span>
        </div>

        <div style={{ width: '100%', height: 6, background: '#e2e8f0', borderRadius: 3, overflow: 'hidden', marginBottom: '1.25rem' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #4f46e5, #ec4899)', transition: 'width 0.3s' }} />
        </div>

        {/* Question text */}
        <h3 style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#1e1b4b', fontSize: '1.05rem', lineHeight: 1.5, margin: '0 0 1.25rem' }}>
          {q.q}
        </h3>

        {!revealed ? (
          <div style={{ textAlign: 'center', padding: '1.5rem', background: '#f8fafc', borderRadius: 16, border: '1px dashed #cbd5e1' }}>
            <p style={{ fontSize: '.88rem', color: '#64748b', margin: '0 0 .85rem' }}>Active Recall: Formulate your answer in your mind first, then reveal:</p>
            <button
              onClick={() => setRevealed(true)}
              className="btn btn-primary"
              style={{ padding: '.65rem 1.75rem', borderRadius: 12, fontWeight: 900, background: '#4f46e5' }}
            >
              Show Model Answer 👁️
            </button>
          </div>
        ) : (
          <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: 16, padding: '1.25rem' }}>
            <div style={{ fontSize: '.8rem', fontWeight: 800, color: '#64748b', marginBottom: '.3rem' }}>Model Answer &amp; Solution:</div>
            <div style={{ fontFamily: 'Nunito', fontWeight: 700, color: '#1e293b', fontSize: '.95rem', lineHeight: 1.6, marginBottom: '1.25rem', whiteSpace: 'pre-line' }}>
              {q.a}
            </div>

            <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: '1rem', textAlign: 'center' }}>
              <p style={{ fontSize: '.83rem', fontWeight: 800, color: '#475569', margin: '0 0 .75rem' }}>Self-Assessment: Did you answer correctly?</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button
                  onClick={() => mark(true)}
                  className="btn"
                  style={{ background: '#16a34a', color: '#fff', padding: '.6rem 1.5rem', borderRadius: 12, fontWeight: 900, fontSize: '.88rem', border: 'none' }}
                >
                  ✓ Got it Right!
                </button>
                <button
                  onClick={() => mark(false)}
                  className="btn"
                  style={{ background: '#ef4444', color: '#fff', padding: '.6rem 1.5rem', borderRadius: 12, fontWeight: 900, fontSize: '.88rem', border: 'none' }}
                >
                  ✗ Review Needed
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
