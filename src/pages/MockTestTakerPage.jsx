import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { EXAMS, getMockTestQuestions } from '../data/jeeNeetData';

const STATUS = { unanswered: 'unanswered', answered: 'answered', marked: 'marked' };

export default function MockTestTakerPage() {
  const { examId, testId } = useParams();
  const navigate = useNavigate();
  const exam = EXAMS[examId];

  const { test, questions } = getMockTestQuestions(testId);

  const [phase, setPhase] = useState('start'); // start | test | result
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({}); // qId → optionIndex
  const [statuses, setStatuses] = useState({}); // qId → STATUS
  const [timeLeft, setTimeLeft] = useState(0);
  const [result, setResult] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (test) setTimeLeft(test.duration * 60);
  }, [test]);

  useEffect(() => {
    if (phase !== 'test') return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current); submitTest(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [phase]);

  const submitTest = useCallback(() => {
    clearInterval(timerRef.current);
    let score = 0, correct = 0, wrong = 0, unattempted = 0;
    const breakdown = {};
    questions.forEach(q => {
      const ans = answers[q.id];
      if (ans === undefined) { unattempted++; breakdown[q.subject] = breakdown[q.subject] || { correct: 0, wrong: 0, unattempted: 0 }; breakdown[q.subject].unattempted++; }
      else if (ans === q.correct) { correct++; score += exam.marking.correct; breakdown[q.subject] = breakdown[q.subject] || { correct: 0, wrong: 0, unattempted: 0 }; breakdown[q.subject].correct++; }
      else { wrong++; score += exam.marking.wrong; breakdown[q.subject] = breakdown[q.subject] || { correct: 0, wrong: 0, unattempted: 0 }; breakdown[q.subject].wrong++; }
    });
    const res = { score, correct, wrong, unattempted, breakdown, answers, total: questions.length };
    setResult(res);
    setPhase('result');
    try { localStorage.setItem(`mock_result_${testId}`, JSON.stringify(res)); } catch {}
  }, [answers, questions, exam, testId]);

  function selectAnswer(qId, idx) {
    setAnswers(prev => ({ ...prev, [qId]: idx }));
    setStatuses(prev => ({ ...prev, [qId]: STATUS.answered }));
  }

  function toggleMark(qId) {
    setStatuses(prev => ({
      ...prev,
      [qId]: prev[qId] === STATUS.marked ? (answers[qId] !== undefined ? STATUS.answered : STATUS.unanswered) : STATUS.marked,
    }));
  }

  function formatTime(secs) {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return h > 0 ? `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}` : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  function statusColor(qId) {
    const st = statuses[qId] || STATUS.unanswered;
    if (st === STATUS.marked) return { bg: '#fef3c7', border: '#f59e0b', color: '#92400e' };
    if (st === STATUS.answered) return { bg: '#dcfce7', border: '#86efac', color: '#15803d' };
    return { bg: '#f3f4f6', border: '#e5e7eb', color: '#9ca3af' };
  }

  if (!exam || !test || questions.length === 0) {
    return (
      <div className="container" style={{ padding: '3rem 1.25rem', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤔</div>
        <h2>Test not found</h2>
        <Link to={`/exam/${examId}/mock-test`} style={{ color: exam?.color || '#4f46e5', fontWeight: 700 }}>← Back to mock tests</Link>
      </div>
    );
  }

  // ── Start screen ───────────────────────────────────────────────
  if (phase === 'start') {
    const subjectGroups = {};
    questions.forEach(q => { subjectGroups[q.subject] = (subjectGroups[q.subject] || 0) + 1; });
    return (
      <div style={{ background: '#f9fafb', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: '2.5rem', maxWidth: 520, width: '100%', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,.08)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏱️</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#1f2937', marginBottom: '.5rem' }}>{test.title}</h2>
          <p style={{ color: '#6b7280', fontSize: '.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{test.description}</p>

          <div className="mock-start-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Questions', val: questions.length },
              { label: 'Duration', val: `${test.duration} min` },
              { label: 'Total Marks', val: test.totalMarks },
              { label: 'Marking', val: `+${exam.marking.correct} / ${exam.marking.wrong}` },
            ].map(s => (
              <div key={s.label} style={{ background: '#f9fafb', borderRadius: 10, padding: '.75rem' }}>
                <div style={{ fontSize: '.72rem', color: '#9ca3af', fontWeight: 600 }}>{s.label}</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: exam.color }}>{s.val}</div>
              </div>
            ))}
          </div>

          <div style={{ background: exam.lightColor, borderRadius: 12, padding: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
            <div style={{ fontWeight: 700, color: exam.color, marginBottom: '.5rem', fontSize: '.85rem' }}>Subject Distribution</div>
            {Object.entries(subjectGroups).map(([s, count]) => (
              <div key={s} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.85rem', color: '#374151', padding: '.2rem 0' }}>
                <span>{exam.subjectEmojis[s]} {exam.subjectLabels[s]}</span>
                <span style={{ fontWeight: 700 }}>{count} questions</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 10, padding: '.85rem', marginBottom: '1.75rem', fontSize: '.82rem', color: '#92400e', textAlign: 'left' }}>
            ⚠️ Once you start, the timer begins. The test auto-submits when time runs out.
          </div>

          <div style={{ display: 'flex', gap: '.75rem' }}>
            <Link to={`/exam/${examId}/mock-test`} style={{ flex: 1 }}>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>← Back</button>
            </Link>
            <button className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }} onClick={() => setPhase('test')}>
              ▶ Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Result screen ──────────────────────────────────────────────
  if (phase === 'result' && result) {
    const pct = Math.max(0, Math.round((result.score / test.totalMarks) * 100));
    const rank = pct >= 90 ? 'Top 1%' : pct >= 75 ? 'Top 5%' : pct >= 60 ? 'Top 15%' : pct >= 45 ? 'Top 35%' : 'Need more practice';
    const rankColor = pct >= 75 ? '#16a34a' : pct >= 50 ? '#d97706' : '#dc2626';

    return (
      <div style={{ background: '#f9fafb', minHeight: '100vh', padding: '2rem 1.25rem' }}>
        <div className="container-sm">
          {/* Score card */}
          <div style={{ background: `linear-gradient(135deg, #1e1b4b, ${exam.color})`, borderRadius: 20, padding: '2.5rem', color: '#fff', textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>🎯</div>
            <h2 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.5rem', marginBottom: '.25rem' }}>Test Completed!</h2>
            <div style={{ fontSize: '4rem', fontFamily: 'Nunito, sans-serif', fontWeight: 900, margin: '1rem 0' }}>{result.score}</div>
            <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '1rem' }}>out of {test.totalMarks} marks</div>
            <div style={{ marginTop: '1rem', display: 'inline-block', background: 'rgba(255,255,255,.15)', borderRadius: 99, padding: '.4rem 1.2rem', fontWeight: 700 }}>{rank}</div>
          </div>

          {/* Stats row */}
          <div className="mock-result-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Correct', val: result.correct, color: '#16a34a', bg: '#f0fdf4', icon: '✅' },
              { label: 'Wrong', val: result.wrong, color: '#dc2626', bg: '#fef2f2', icon: '❌' },
              { label: 'Skipped', val: result.unattempted, color: '#6b7280', bg: '#f3f4f6', icon: '⬜' },
              { label: 'Score %', val: `${pct}%`, color: rankColor, bg: '#fff', icon: '📊' },
            ].map(s => (
              <div key={s.label} style={{ background: s.bg, border: '1px solid #e5e7eb', borderRadius: 14, padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.3rem', marginBottom: '.25rem' }}>{s.icon}</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.5rem', color: s.color }}>{s.val}</div>
                <div style={{ fontSize: '.72rem', color: '#9ca3af', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Subject breakdown */}
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, marginBottom: '1rem', color: '#1f2937' }}>Subject Breakdown</h3>
            {Object.entries(result.breakdown).map(([s, data]) => {
              const total = data.correct + data.wrong + data.unattempted;
              const sPct = total > 0 ? Math.round((data.correct / total) * 100) : 0;
              return (
                <div key={s} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.4rem' }}>
                    <span style={{ fontWeight: 700, color: '#1f2937' }}>{exam.subjectEmojis[s]} {exam.subjectLabels[s]}</span>
                    <span style={{ color: sPct >= 60 ? '#16a34a' : '#dc2626', fontWeight: 700 }}>{data.correct}/{total} ({sPct}%)</span>
                  </div>
                  <div style={{ height: 8, background: '#f3f4f6', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${sPct}%`, background: sPct >= 60 ? '#16a34a' : sPct >= 40 ? '#f59e0b' : '#dc2626', borderRadius: 99 }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Answer review */}
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, marginBottom: '1rem', color: '#1f2937' }}>Answer Review</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {questions.map((q, i) => {
                const userAns = result.answers[q.id];
                const isCorrect = userAns === q.correct;
                const isUnattempted = userAns === undefined;
                const borderColor = isUnattempted ? '#e5e7eb' : isCorrect ? '#86efac' : '#fca5a5';
                const bg = isUnattempted ? '#f9fafb' : isCorrect ? '#f0fdf4' : '#fef2f2';

                return (
                  <div key={q.id} style={{ border: `2px solid ${borderColor}`, borderRadius: 12, padding: '1rem 1.25rem', background: bg }}>
                    <div style={{ fontWeight: 600, color: '#1f2937', marginBottom: '.75rem', fontSize: '.9rem' }}>
                      Q{i + 1}. {q.question}
                    </div>
                    <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
                      {q.options.map((opt, oi) => {
                        let optBg = 'transparent', optColor = '#6b7280', optBorder = 'transparent', fw = 500;
                        if (oi === q.correct) { optBg = '#dcfce7'; optColor = '#15803d'; optBorder = '#86efac'; fw = 700; }
                        if (!isUnattempted && oi === userAns && oi !== q.correct) { optBg = '#fee2e2'; optColor = '#dc2626'; optBorder = '#fca5a5'; fw = 700; }
                        return (
                          <span key={oi} style={{ padding: '.3rem .7rem', borderRadius: 8, border: `1.5px solid ${optBorder}`, background: optBg, color: optColor, fontSize: '.82rem', fontWeight: fw }}>
                            {String.fromCharCode(65 + oi)}. {opt}
                            {oi === q.correct && ' ✓'}
                          </span>
                        );
                      })}
                    </div>
                    {isUnattempted && <div style={{ fontSize: '.8rem', color: '#9ca3af', fontStyle: 'italic' }}>Not attempted</div>}
                    <div style={{ marginTop: '.5rem', fontSize: '.82rem', color: '#374151', background: '#fff8', borderRadius: 8, padding: '.5rem .75rem' }}>
                      <span style={{ fontWeight: 700 }}>Solution: </span>{q.solution}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '.75rem' }}>
            <Link to={`/exam/${examId}/mock-test`} style={{ flex: 1 }}>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>← All Tests</button>
            </Link>
            <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => { setAnswers({}); setStatuses({}); setResult(null); setTimeLeft(test.duration * 60); setCurrent(0); setPhase('start'); }}>
              🔁 Retake
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Test screen ────────────────────────────────────────────────
  const q = questions[current];
  const answered = Object.keys(answers).length;
  const marked = Object.values(statuses).filter(s => s === STATUS.marked).length;
  const timeWarn = timeLeft < 120;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f9fafb', overflow: 'hidden' }}>
      {/* Top bar */}
      <div style={{ background: '#1e1b4b', color: '#fff', padding: '.6rem 1rem', display: 'flex', alignItems: 'center', gap: '.75rem', flexWrap: 'wrap', zIndex: 20, boxShadow: '0 2px 12px rgba(0,0,0,.3)' }}>
        <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '.9rem', flex: 1, minWidth: 80, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{test.title}</div>

        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.6)' }}>
            <span style={{ color: '#86efac' }}>✓ {answered}</span>
            {' · '}
            <span style={{ color: '#fbbf24' }}>⚑ {marked}</span>
            {' · '}
            <span style={{ color: '#9ca3af' }}>○ {questions.length - answered}</span>
          </div>

          <div style={{ background: timeWarn ? '#dc2626' : 'rgba(255,255,255,.1)', borderRadius: 8, padding: '.35rem .9rem', fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.1rem', color: timeWarn ? '#fff' : '#fff', minWidth: 80, textAlign: 'center', border: timeWarn ? '1px solid #f87171' : 'none', transition: 'background .5s' }}>
            {formatTime(timeLeft)}
          </div>

          <button onClick={() => setNavOpen(o => !o)} style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', borderRadius: 8, padding: '.35rem .8rem', color: '#fff', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer' }}>
            📋 {navOpen ? 'Hide' : 'Questions'}
          </button>

          <button onClick={() => { if (window.confirm('Submit the test now?')) submitTest(); }}
            style={{ background: '#f97316', border: 'none', borderRadius: 8, padding: '.4rem 1rem', color: '#fff', fontWeight: 700, fontSize: '.85rem', cursor: 'pointer' }}>
            Submit
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Question panel */}
        <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {/* Subject + chapter */}
            <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: exam.lightColor, color: exam.color, fontSize: '.75rem', fontWeight: 700, padding: '.2rem .65rem', borderRadius: 99 }}>
                {exam.subjectEmojis[q.subject]} {exam.subjectLabels[q.subject]}
              </span>
              <span style={{ background: '#f3f4f6', color: '#4b5563', fontSize: '.75rem', fontWeight: 600, padding: '.2rem .65rem', borderRadius: 99 }}>{q.chapter}</span>
              <span style={{ color: '#9ca3af', fontSize: '.78rem', fontWeight: 600 }}>Q {current + 1} / {questions.length}</span>
            </div>

            {/* Question */}
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, padding: '1.75rem', marginBottom: '1.25rem' }}>
              <p style={{ fontWeight: 600, fontSize: '1.02rem', color: '#1f2937', lineHeight: 1.7, marginBottom: '1.5rem' }}>{q.question}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                {q.options.map((opt, i) => {
                  const userAns = answers[q.id];
                  const isSelected = userAns === i;
                  return (
                    <button key={i} onClick={() => selectAnswer(q.id, i)}
                      style={{ textAlign: 'left', padding: '.9rem 1.25rem', borderRadius: 12, border: `2px solid ${isSelected ? exam.color : '#e5e7eb'}`, background: isSelected ? exam.lightColor : '#fff', color: isSelected ? exam.color : '#374151', fontSize: '.95rem', fontWeight: isSelected ? 700 : 500, cursor: 'pointer', transition: 'all .15s', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                      <span style={{ width: 28, height: 28, borderRadius: 8, background: isSelected ? exam.color : '#f3f4f6', color: isSelected ? '#fff' : '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.85rem', flexShrink: 0 }}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action bar */}
            <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '.5rem' }}>
                <button onClick={() => toggleMark(q.id)}
                  style={{ padding: '.5rem 1rem', borderRadius: 8, border: `1px solid ${statuses[q.id] === STATUS.marked ? '#f59e0b' : '#e5e7eb'}`, background: statuses[q.id] === STATUS.marked ? '#fffbeb' : '#fff', color: statuses[q.id] === STATUS.marked ? '#d97706' : '#6b7280', fontSize: '.82rem', fontWeight: 700, cursor: 'pointer' }}>
                  ⚑ {statuses[q.id] === STATUS.marked ? 'Unmark' : 'Mark for Review'}
                </button>
                <button onClick={() => { setAnswers(prev => { const n = {...prev}; delete n[q.id]; return n; }); setStatuses(prev => ({ ...prev, [q.id]: STATUS.unanswered })); }}
                  style={{ padding: '.5rem 1rem', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', fontSize: '.82rem', fontWeight: 600, cursor: 'pointer' }}>
                  ✕ Clear
                </button>
              </div>
              <div style={{ display: 'flex', gap: '.5rem' }}>
                <button disabled={current === 0} onClick={() => setCurrent(c => c - 1)}
                  style={{ padding: '.5rem 1.1rem', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff', color: current === 0 ? '#d1d5db' : '#374151', fontWeight: 700, cursor: current === 0 ? 'not-allowed' : 'pointer', fontSize: '.88rem' }}>
                  ← Prev
                </button>
                <button disabled={current === questions.length - 1} onClick={() => setCurrent(c => c + 1)}
                  style={{ padding: '.5rem 1.1rem', borderRadius: 8, border: `1px solid ${current === questions.length - 1 ? '#e5e7eb' : exam.color}`, background: current === questions.length - 1 ? '#f3f4f6' : exam.lightColor, color: current === questions.length - 1 ? '#9ca3af' : exam.color, fontWeight: 700, cursor: current === questions.length - 1 ? 'not-allowed' : 'pointer', fontSize: '.88rem' }}>
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Side nav — overlays on mobile, inline on desktop */}
        {navOpen && (
          <div style={{ width: 'min(280px, 100vw)', background: '#fff', borderLeft: '1px solid #e5e7eb', overflow: 'auto', padding: '1rem', flexShrink: 0, position: 'relative', zIndex: 10 }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, marginBottom: '1rem', color: '#1f2937', fontSize: '.95rem' }}>Question Navigator</div>
            <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {[{ label: '✓ Answered', bg: '#dcfce7', color: '#15803d' }, { label: '⚑ Marked', bg: '#fef3c7', color: '#92400e' }, { label: '○ Not Attempted', bg: '#f3f4f6', color: '#9ca3af' }].map(l => (
                <span key={l.label} style={{ background: l.bg, color: l.color, fontSize: '.68rem', fontWeight: 700, padding: '.15rem .5rem', borderRadius: 99 }}>{l.label}</span>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
              {questions.map((qs, i) => {
                const sc = statusColor(qs.id);
                const isCur = i === current;
                return (
                  <button key={qs.id} onClick={() => setCurrent(i)}
                    style={{ width: 36, height: 36, borderRadius: 8, border: `2px solid ${isCur ? exam.color : sc.border}`, background: isCur ? exam.color : sc.bg, color: isCur ? '#fff' : sc.color, fontWeight: 700, fontSize: '.82rem', cursor: 'pointer' }}>
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
