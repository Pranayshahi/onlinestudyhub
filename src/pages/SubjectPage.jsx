import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getClass, getSubject, getSubjectColor, SUBJECT_META } from '../data/curriculum';
import Breadcrumb from '../components/Breadcrumb';
import { useProgress } from '../hooks/useProgress';

export default function SubjectPage() {
  const { classId, subjectId } = useParams();
  const [search, setSearch] = useState('');
  const { isDone, countDone } = useProgress();

  const classData = getClass(classId);
  const subject = getSubject(classId, subjectId);
  const subjectColor = getSubjectColor(subjectId);
  const meta = SUBJECT_META[subjectId] || {};

  if (!classData || !subject) {
    return (
      <div className="container" style={{ padding: '4rem 1.25rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>😕</div>
        <h2 style={{ fontFamily: 'Nunito', color: '#1e1b4b' }}>Subject not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Go Home</Link>
      </div>
    );
  }

  const filtered = subject.topics.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    (t.subtopics || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero banner */}
      <div className={`${subjectColor}`} style={{
        background: 'linear-gradient(135deg, var(--sc) 0%, color-mix(in srgb, var(--sc) 70%, #000) 100%)',
        padding: '3rem 0 2.5rem',
        color: '#fff',
      }}>
        <div className="container">
          <Breadcrumb items={[
            { label: 'Home', to: '/' },
            { label: classData.label, to: `/class/${classId}` },
            { label: meta.label || subjectId }
          ]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{
              width: 72, height: 72,
              background: 'rgba(255,255,255,.15)',
              borderRadius: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.2rem', flexShrink: 0
            }}>
              {meta.icon || '📘'}
            </div>
            <div>
              <div style={{ fontSize: '.8rem', opacity: .75, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.35rem' }}>
                {classData.label} · {classData.board}
              </div>
              <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.7rem,4vw,2.4rem)', marginBottom: '.4rem' }}>
                {meta.label || subjectId}
              </h1>
              <p style={{ opacity: .8, fontSize: '.95rem' }}>
                {subject.topics.length} topics · Click any topic to start learning
              </p>
              {/* Progress bar */}
              {(() => {
                const done = countDone(classId, subjectId);
                const pct = Math.round((done / subject.topics.length) * 100);
                return done > 0 ? (
                  <div style={{ marginTop: '.75rem' }}>
                    <div style={{ fontSize: '.78rem', opacity: .8, marginBottom: '.3rem', fontWeight: 600 }}>
                      {done} / {subject.topics.length} completed ({pct}%)
                    </div>
                    <div style={{ height: 6, background: 'rgba(255,255,255,.2)', borderRadius: 99, maxWidth: 260 }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: '#4ade80', borderRadius: 99, transition: 'width .4s ease' }} />
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>

        {/* Search bar */}
        <div style={{ position: 'relative', marginBottom: '2rem', maxWidth: 480 }}>
          <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.1rem' }}>🔍</span>
          <input
            type="text"
            placeholder={`Search topics in ${meta.label || subjectId}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '.75rem 1rem .75rem 2.75rem',
              border: '1.5px solid #e5e7eb',
              borderRadius: 12,
              fontSize: '.95rem',
              outline: 'none',
              fontFamily: 'Inter, sans-serif',
              transition: 'border-color .2s',
            }}
            onFocus={e => e.target.style.borderColor = 'var(--sc, #4f46e5)'}
            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>

        {/* Results count */}
        {search && (
          <p style={{ fontSize: '.875rem', color: '#9ca3af', marginBottom: '1.25rem' }}>
            {filtered.length} topic{filtered.length !== 1 ? 's' : ''} found for "{search}"
          </p>
        )}

        {/* Topics grid */}
        {filtered.length > 0 ? (
          <div className={`topics-grid ${subjectColor}`}>
            {filtered.map((topic, i) => {
              const origIndex = subject.topics.indexOf(topic);
              return (
                <Link
                  key={topic.id}
                  to={`/class/${classId}/subject/${subjectId}/topic/${topic.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={`topic-card ${subjectColor}`} style={{ height: '100%', position: 'relative' }}>
                    {isDone(classId, subjectId, topic.id) && (
                      <div style={{
                        position: 'absolute', top: '.75rem', right: '.75rem',
                        background: '#22c55e', color: '#fff',
                        borderRadius: '50%', width: 22, height: 22,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '.7rem', fontWeight: 800, flexShrink: 0,
                      }}>✓</div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.75rem' }}>
                      <div className="topic-card-num">
                        {String(origIndex + 1).padStart(2, '0')}
                      </div>
                      <span style={{
                        fontSize: '.7rem', fontWeight: 700, color: 'var(--sc)',
                        background: 'var(--sl)', padding: '.2rem .6rem',
                        borderRadius: 999
                      }}>
                        {topic.qa?.length || 0} Q&A
                      </span>
                    </div>
                    <div className="topic-card-title">{topic.title}</div>
                    {topic.subtopics && (
                      <div className="topic-card-meta" style={{ marginTop: '.35rem' }}>
                        {topic.subtopics}
                      </div>
                    )}
                    {/* Definition snippet */}
                    {topic.definition && (
                      <p style={{
                        fontSize: '.8rem', color: '#6b7280', marginTop: '.75rem',
                        lineHeight: 1.6,
                        display: '-webkit-box', WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical', overflow: 'hidden'
                      }}>
                        {topic.definition}
                      </p>
                    )}
                    <div style={{
                      marginTop: '1rem',
                      paddingTop: '.75rem',
                      borderTop: '1px solid var(--sm)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}>
                      <span style={{ fontSize: '.78rem', color: 'var(--sc)', fontWeight: 600 }}>
                        Start learning →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p style={{ color: '#9ca3af' }}>No topics found for "{search}"</p>
            <button
              onClick={() => setSearch('')}
              className="btn btn-secondary"
              style={{ marginTop: '1rem', fontSize: '.9rem' }}
            >
              Clear search
            </button>
          </div>
        )}

        {/* Other subjects quick link */}
        <div style={{
          marginTop: '4rem', padding: '1.75rem',
          background: '#f9fafb', borderRadius: 16, border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#1e1b4b', marginBottom: '1rem', fontSize: '1rem' }}>
            Other subjects in {classData.label}
          </h3>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            {Object.keys(classData.subjects)
              .filter(sid => sid !== subjectId)
              .map(sid => {
                const m = SUBJECT_META[sid] || {};
                return (
                  <Link
                    key={sid}
                    to={`/class/${classId}/subject/${sid}`}
                    className={`badge badge-indigo ${getSubjectColor(sid)}`}
                    style={{
                      background: 'var(--sl)', color: 'var(--sc)',
                      padding: '.4rem 1rem', fontSize: '.83rem',
                      borderRadius: 999, fontWeight: 600, textDecoration: 'none',
                      border: '1px solid var(--sm)', transition: 'all .2s'
                    }}
                  >
                    {m.icon} {m.label || sid}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
