import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EXAMS, PYQS } from '../data/jeeNeetData';
import SEO from '../components/SEO';

const DIFF_COLOR = { easy: '#16a34a', medium: '#d97706', hard: '#dc2626' };
const DIFF_BG    = { easy: '#f0fdf4', medium: '#fffbeb', hard: '#fef2f2' };

export default function PYQPage() {
  const { examId } = useParams();
  const exam = EXAMS[examId];
  const allPYQs = PYQS[examId] || [];

  const [subjectFilter, setSubjectFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const [diffFilter, setDiffFilter] = useState('all');
  const [revealed, setRevealed] = useState({});
  const [selected, setSelected] = useState({});
  const [search, setSearch] = useState('');

  if (!exam) return <div className="container" style={{ padding: '3rem 1.25rem' }}>Exam not found.</div>;

  const years = [...new Set(allPYQs.map(q => q.year))].sort((a, b) => b - a);

  const filtered = useMemo(() => allPYQs.filter(q => {
    if (subjectFilter !== 'all' && q.subject !== subjectFilter) return false;
    if (yearFilter !== 'all' && q.year !== Number(yearFilter)) return false;
    if (diffFilter !== 'all' && q.difficulty !== diffFilter) return false;
    if (search && !q.question.toLowerCase().includes(search.toLowerCase()) && !q.chapter.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [allPYQs, subjectFilter, yearFilter, diffFilter, search]);

  function toggleReveal(id) {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  }

  function selectOption(qId, idx) {
    if (revealed[qId]) return;
    setSelected(prev => ({ ...prev, [qId]: idx }));
  }

  const attempted = Object.keys(selected).length;
  const correct = Object.entries(selected).filter(([id, ans]) => {
    const q = allPYQs.find(q => q.id === id);
    return q && ans === q.correct;
  }).length;

  const examLabel = exam.shortLabel || exam.label;

  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>
      <SEO
        title={`${examLabel} Previous Year Questions (PYQ) — Free Question Bank`}
        description={`Practice ${allPYQs.length}+ ${examLabel} previous year questions with answers. Filter by subject, year, and difficulty. Free ${examLabel} PYQ bank for 2025 preparation.`}
        path={`/exam/${examId}/pyq`}
        breadcrumbs={[
          { name: examLabel, url: `/exam/${examId}` },
          { name: 'Previous Year Questions', url: `/exam/${examId}/pyq` },
        ]}
      />
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, #1e1b4b 0%, ${exam.color} 100%)`, color: '#fff', padding: '2.5rem 0 2rem' }}>
        <div className="container">
          <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.6)', marginBottom: '.5rem' }}>
            <Link to={`/exam/${examId}`} style={{ color: 'rgba(255,255,255,.7)' }}>{exam.shortLabel}</Link> › PYQ Bank
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <span style={{ fontSize: '2rem' }}>📝</span>
            <div>
              <h1 style={{ fontWeight: 900, fontSize: '1.8rem', lineHeight: 1.2 }}>Previous Year Questions</h1>
              <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.9rem', marginTop: '.25rem' }}>
                {allPYQs.length} questions from {years[years.length-1]}–{years[0]} with step-by-step solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.25rem' }}>
        {/* Score tracker */}
        {attempted > 0 && (
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1rem 1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1rem' }}>📊 Practice Score:</span>
            <span style={{ color: '#16a34a', fontWeight: 700 }}>✅ {correct} Correct</span>
            <span style={{ color: '#dc2626', fontWeight: 700 }}>❌ {attempted - correct} Wrong</span>
            <span style={{ color: '#6b7280', fontWeight: 600 }}>📋 {attempted}/{filtered.length} Attempted</span>
            <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, color: exam.color }}>
              Score: {correct * 4 - (attempted - correct)} / {attempted * 4}
            </span>
          </div>
        )}

        {/* Filters */}
        <div className="pyq-filter-row" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.25rem 1.5rem', marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search questions or chapters..."
            style={{ flex: 1, minWidth: 200, padding: '.5rem .9rem', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: '.9rem', outline: 'none' }}
          />

          <select value={subjectFilter} onChange={e => setSubjectFilter(e.target.value)}
            style={{ padding: '.5rem .8rem', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: '.85rem', background: '#f9fafb' }}>
            <option value="all">All Subjects</option>
            {exam.subjects.map(s => <option key={s} value={s}>{exam.subjectEmojis[s]} {exam.subjectLabels[s]}</option>)}
          </select>

          <select value={yearFilter} onChange={e => setYearFilter(e.target.value)}
            style={{ padding: '.5rem .8rem', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: '.85rem', background: '#f9fafb' }}>
            <option value="all">All Years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>

          <select value={diffFilter} onChange={e => setDiffFilter(e.target.value)}
            style={{ padding: '.5rem .8rem', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: '.85rem', background: '#f9fafb' }}>
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <span style={{ color: '#6b7280', fontSize: '.82rem', fontWeight: 600, whiteSpace: 'nowrap' }}>{filtered.length} questions</span>
        </div>

        {/* Questions */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '.75rem' }}>🔍</div>
            <div style={{ fontWeight: 600 }}>No questions match your filters</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {filtered.map((q, qi) => {
              const isRevealed = revealed[q.id];
              const userAns = selected[q.id];
              const hasAns = userAns !== undefined;

              return (
                <div key={q.id} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, overflow: 'hidden' }}>
                  {/* Question header */}
                  <div style={{ padding: '1.25rem 1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ background: exam.lightColor, color: exam.color, fontSize: '.75rem', fontWeight: 700, padding: '.2rem .65rem', borderRadius: 99 }}>
                        {exam.subjectEmojis[q.subject]} {exam.subjectLabels[q.subject]}
                      </span>
                      <span style={{ background: '#f3f4f6', color: '#4b5563', fontSize: '.75rem', fontWeight: 600, padding: '.2rem .65rem', borderRadius: 99 }}>{q.chapter}</span>
                      <span style={{ background: DIFF_BG[q.difficulty], color: DIFF_COLOR[q.difficulty], fontSize: '.72rem', fontWeight: 700, padding: '.15rem .55rem', borderRadius: 99 }}>
                        {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
                      </span>
                    </div>
                    <span style={{ color: '#9ca3af', fontSize: '.82rem', fontWeight: 600, whiteSpace: 'nowrap' }}>📅 {q.year}</span>
                  </div>

                  {/* Question text */}
                  <div style={{ padding: '1rem 1.5rem', fontWeight: 600, fontSize: '1rem', color: '#1f2937', lineHeight: 1.65 }}>
                    Q{qi + 1}. {q.question}
                  </div>

                  {/* Options */}
                  <div className="pyq-options-grid" style={{ padding: '0 1.5rem 1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '.6rem' }}>
                    {q.options.map((opt, i) => {
                      let bg = '#f9fafb', border = '#e5e7eb', color = '#374151';
                      if (isRevealed) {
                        if (i === q.correct) { bg = '#f0fdf4'; border = '#86efac'; color = '#15803d'; }
                        else if (hasAns && i === userAns) { bg = '#fef2f2'; border = '#fca5a5'; color = '#dc2626'; }
                      } else if (hasAns && i === userAns) {
                        bg = exam.lightColor; border = exam.color; color = exam.color;
                      }
                      return (
                        <button key={i} onClick={() => selectOption(q.id, i)}
                          style={{ textAlign: 'left', padding: '.7rem 1rem', borderRadius: 10, border: `2px solid ${border}`, background: bg, color, fontSize: '.88rem', fontWeight: 500, cursor: isRevealed ? 'default' : 'pointer', transition: 'all .15s', lineHeight: 1.5 }}>
                          <span style={{ fontWeight: 700, marginRight: '.5rem' }}>{String.fromCharCode(65 + i)}.</span>{opt}
                          {isRevealed && i === q.correct && <span style={{ marginLeft: '.5rem' }}>✓</span>}
                          {isRevealed && hasAns && i === userAns && i !== q.correct && <span style={{ marginLeft: '.5rem' }}>✗</span>}
                        </button>
                      );
                    })}
                  </div>

                  {/* Solution */}
                  {isRevealed && (
                    <div style={{ margin: '0 1.5rem 1.5rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '1rem 1.25rem' }}>
                      <div style={{ fontWeight: 700, color: '#15803d', marginBottom: '.4rem', fontSize: '.85rem' }}>✅ Solution</div>
                      <div style={{ color: '#166534', fontSize: '.88rem', lineHeight: 1.7 }}>{q.solution}</div>
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ padding: '0 1.5rem 1.25rem', display: 'flex', gap: '.75rem' }}>
                    <button onClick={() => toggleReveal(q.id)}
                      style={{ padding: '.5rem 1.1rem', borderRadius: 8, border: `1px solid ${exam.color}`, background: isRevealed ? exam.lightColor : '#fff', color: exam.color, fontSize: '.82rem', fontWeight: 700, cursor: 'pointer' }}>
                      {isRevealed ? '🙈 Hide Solution' : '💡 Show Solution'}
                    </button>
                    {hasAns && !isRevealed && (
                      <button onClick={() => toggleReveal(q.id)}
                        style={{ padding: '.5rem 1.1rem', borderRadius: 8, border: '1px solid #16a34a', background: '#f0fdf4', color: '#15803d', fontSize: '.82rem', fontWeight: 700, cursor: 'pointer' }}>
                        Check Answer
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
