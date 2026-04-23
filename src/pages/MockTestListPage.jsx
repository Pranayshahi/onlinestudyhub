import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { EXAMS, MOCK_TESTS } from '../data/jeeNeetData';

export default function MockTestListPage() {
  const { examId } = useParams();
  const exam = EXAMS[examId];
  const tests = MOCK_TESTS.filter(t => t.examId === examId);

  if (!exam) return <div className="container" style={{ padding: '3rem 1.25rem' }}>Exam not found.</div>;

  function getResult(testId) {
    try { return JSON.parse(localStorage.getItem(`mock_result_${testId}`) || 'null'); } catch { return null; }
  }

  const DIFF_COLOR = { easy: '#16a34a', medium: '#d97706', hard: '#dc2626' };
  const DIFF_BG = { easy: '#f0fdf4', medium: '#fffbeb', hard: '#fef2f2' };

  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, #1e1b4b 0%, ${exam.color} 100%)`, color: '#fff', padding: '2.5rem 0 2rem' }}>
        <div className="container">
          <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.6)', marginBottom: '.5rem' }}>
            <Link to={`/exam/${examId}`} style={{ color: 'rgba(255,255,255,.7)' }}>{exam.shortLabel}</Link> › Mock Tests
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <span style={{ fontSize: '2rem' }}>⏱️</span>
            <div>
              <h1 style={{ fontWeight: 900, fontSize: '1.8rem', lineHeight: 1.2 }}>Mock Tests</h1>
              <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.9rem', marginTop: '.25rem' }}>
                Full-length timed tests with {exam.marking.correct}/−{Math.abs(exam.marking.wrong)} marking — just like the real exam
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.25rem' }}>
        {/* Tips banner */}
        <div style={{ background: exam.lightColor, border: `1px solid`, borderColor: exam.color + '33', borderRadius: 14, padding: '1rem 1.5rem', marginBottom: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { icon: '✅', text: `+${exam.marking.correct} marks for correct answer` },
            { icon: '❌', text: `${exam.marking.wrong} mark for wrong answer` },
            { icon: '⬜', text: '0 for unattempted' },
            { icon: '⏱️', text: 'Timer runs in real-time' },
          ].map(tip => (
            <div key={tip.text} style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontSize: '.85rem', fontWeight: 600, color: exam.color }}>
              <span>{tip.icon}</span><span>{tip.text}</span>
            </div>
          ))}
        </div>

        {/* Test list */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
          {tests.map(test => {
            const result = getResult(test.id);
            const pct = result ? Math.round((result.score / test.totalMarks) * 100) : null;

            return (
              <div key={test.id} className="card" style={{ padding: '1.75rem', borderTop: `4px solid ${exam.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.75rem' }}>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#1f2937', flex: 1 }}>{test.title}</div>
                  <span style={{ background: DIFF_BG[test.difficulty], color: DIFF_COLOR[test.difficulty], fontSize: '.72rem', fontWeight: 700, padding: '.2rem .6rem', borderRadius: 99, marginLeft: '.75rem', whiteSpace: 'nowrap' }}>
                    {test.difficulty.charAt(0).toUpperCase() + test.difficulty.slice(1)}
                  </span>
                </div>

                <p style={{ color: '#6b7280', fontSize: '.87rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{test.description}</p>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  {[
                    { icon: '❓', label: 'Questions', val: test.questionIds.length },
                    { icon: '🏅', label: 'Total Marks', val: test.totalMarks },
                    { icon: '⏱️', label: 'Duration', val: `${test.duration} min` },
                    { icon: '📅', label: 'Pattern', val: test.year },
                  ].map(s => (
                    <div key={s.label}>
                      <div style={{ fontSize: '.7rem', color: '#9ca3af', fontWeight: 600 }}>{s.icon} {s.label}</div>
                      <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#1f2937' }}>{s.val}</div>
                    </div>
                  ))}
                </div>

                {/* Previous result */}
                {result && (
                  <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '.75rem 1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '.75rem', color: '#16a34a', fontWeight: 700 }}>✅ Last Attempt</div>
                      <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, color: '#15803d' }}>{result.score}/{test.totalMarks} — {pct}%</div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '.75rem', color: '#16a34a' }}>
                      <div>{result.correct} correct</div>
                      <div>{result.wrong} wrong</div>
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '.75rem' }}>
                  <Link to={`/exam/${examId}/mock-test/${test.id}`} style={{ flex: 1 }}>
                    <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      {result ? '🔁 Retake Test' : '▶ Start Test'}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {tests.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#9ca3af' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚧</div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Mock tests coming soon for {exam.label}</div>
          </div>
        )}
      </div>
    </div>
  );
}
