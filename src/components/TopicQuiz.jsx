import React, { useState } from 'react';

export default function TopicQuiz({ qa, topicTitle }) {
  const [phase, setPhase] = useState('idle'); // idle | quiz | result
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [scores, setScores] = useState([]);

  if (!qa || qa.length === 0) return null;

  function startQuiz() {
    setPhase('quiz');
    setCurrent(0);
    setRevealed(false);
    setScores([]);
  }

  function mark(got) {
    const newScores = [...scores, got];
    setScores(newScores);
    if (current + 1 >= qa.length) {
      try {
        localStorage.setItem(
          `osh_quiz_${topicTitle}`,
          JSON.stringify({ correct: newScores.filter(Boolean).length, total: qa.length, date: new Date().toISOString() })
        );
      } catch {}
      setPhase('result');
    } else {
      setCurrent(c => c + 1);
      setRevealed(false);
    }
  }

  const correct = scores.filter(Boolean).length;
  const pct = qa.length > 0 ? Math.round((correct / qa.length) * 100) : 0;
  const grade =
    pct >= 80 ? { msg: 'Excellent! 🏆', color: '#16a34a', bg: '#dcfce7', border: '#86efac' } :
    pct >= 60 ? { msg: 'Good Job! 😊', color: '#0284c7', bg: '#e0f2fe', border: '#7dd3fc' } :
    pct >= 40 ? { msg: 'Keep Practising! 💪', color: '#d97706', bg: '#fef3c7', border: '#fcd34d' } :
                { msg: 'Review & Retry 📚', color: '#dc2626', bg: '#fee2e2', border: '#fca5a5' };

  if (phase === 'idle') {
    return (
      <section className="topic-quiz-idle">
        <div className="topic-quiz-banner">
          <div>
            <div className="topic-quiz-banner-title">📝 Quick Quiz</div>
            <div className="topic-quiz-banner-sub">
              {qa.length} questions · Test your understanding of {topicTitle}
            </div>
          </div>
          <button className="topic-quiz-start-btn" onClick={startQuiz}>
            Start Quiz →
          </button>
        </div>
      </section>
    );
  }

  if (phase === 'result') {
    return (
      <section className="topic-quiz-section">
        <div className="topic-quiz-result" style={{ borderColor: grade.border, background: grade.bg }}>
          <div className="topic-quiz-result-score" style={{ color: grade.color }}>{pct}%</div>
          <div className="topic-quiz-result-msg" style={{ color: grade.color }}>{grade.msg}</div>
          <div className="topic-quiz-result-sub">
            You got <strong>{correct}</strong> out of <strong>{qa.length}</strong> correct
          </div>
          <div className="topic-quiz-dots">
            {scores.map((got, i) => (
              <div key={i} className={`topic-quiz-dot ${got ? 'correct' : 'wrong'}`}>
                {got ? '✓' : '✗'}
              </div>
            ))}
          </div>
          <div className="topic-quiz-result-btns">
            <button className="topic-quiz-retry-btn" onClick={startQuiz}>Try Again</button>
            <button className="topic-quiz-close-btn" onClick={() => setPhase('idle')}>Close</button>
          </div>
        </div>
      </section>
    );
  }

  const q = qa[current];
  const progress = (current / qa.length) * 100;

  return (
    <section className="topic-quiz-section">
      <div className="topic-quiz-card">
        {/* Progress bar */}
        <div className="topic-quiz-progress-track">
          <div className="topic-quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="topic-quiz-body">
          <div className="topic-quiz-meta">
            <span className="topic-quiz-counter">📝 Question {current + 1} / {qa.length}</span>
            <button className="topic-quiz-exit" onClick={() => setPhase('idle')}>✕ Exit</button>
          </div>

          <div className="topic-quiz-question">{q.q}</div>

          {!revealed ? (
            <div className="topic-quiz-reveal-area">
              <p className="topic-quiz-hint">Think of your answer, then reveal:</p>
              <button className="topic-quiz-reveal-btn" onClick={() => setRevealed(true)}>
                Show Answer 👁️
              </button>
            </div>
          ) : (
            <div className="topic-quiz-answer-area">
              <div className="topic-quiz-answer-box">
                <strong>Answer:</strong> {q.a}
              </div>
              <p className="topic-quiz-judge-label">Did you get it right?</p>
              <div className="topic-quiz-judge-btns">
                <button className="topic-quiz-got-it" onClick={() => mark(true)}>✓ Got it!</button>
                <button className="topic-quiz-review" onClick={() => mark(false)}>✗ Review again</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
