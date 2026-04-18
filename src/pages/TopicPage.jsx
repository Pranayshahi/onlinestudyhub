import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getClass, getSubject, getTopic, getSubjectColor, SUBJECT_META } from '../data/curriculum';
import Breadcrumb from '../components/Breadcrumb';

// ── Accordion item ──────────────────────────────────────────────
function AccordionItem({ number, question, answer, subjectColor, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${subjectColor}`}>
      <div
        className={`accordion-header ${isOpen ? 'open' : ''} ${subjectColor}`}
        onClick={onToggle}
        style={{ cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', flex: 1 }}>
          <span style={{
            flexShrink: 0,
            width: 28, height: 28,
            borderRadius: 8,
            background: isOpen ? 'var(--sc)' : 'var(--sl)',
            color: isOpen ? '#fff' : 'var(--sc)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: '.75rem',
            transition: 'all .2s',
            border: '1px solid var(--sm)',
          }}>
            Q{number}
          </span>
          <span style={{ fontSize: '.95rem', lineHeight: 1.5 }}>{question}</span>
        </div>
        <div className={`accordion-icon ${isOpen ? 'open' : ''}`}
          style={{ background: isOpen ? 'var(--sc)' : 'var(--sm)', color: isOpen ? '#fff' : 'var(--sc)' }}>
          ▾
        </div>
      </div>
      <div className={`accordion-body ${isOpen ? 'open' : ''}`} style={{ background: 'var(--sl)' }}>
        <div style={{
          padding: '.25rem 0 .25rem .5rem',
          borderLeft: '3px solid var(--sc)',
          paddingLeft: '1rem',
          fontSize: '.93rem',
          color: '#374151',
          lineHeight: 1.8,
        }}>
          {answer}
        </div>
      </div>
    </div>
  );
}

// ── Main TopicPage ──────────────────────────────────────────────
export default function TopicPage() {
  const { classId, subjectId, topicId } = useParams();
  const [openQA, setOpenQA] = useState(null);
  const [showAllQA, setShowAllQA] = useState(false);

  // Scroll to top when topic changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenQA(null);
    setShowAllQA(false);
  }, [topicId]);

  const classData = getClass(classId);
  const subject = getSubject(classId, subjectId);
  const topic = getTopic(classId, subjectId, topicId);
  const subjectColor = getSubjectColor(subjectId);
  const meta = SUBJECT_META[subjectId] || {};

  if (!classData || !subject || !topic) {
    return (
      <div className="container" style={{ padding: '5rem 1.25rem', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
        <h2 style={{ fontFamily: 'Nunito', color: '#1e1b4b', marginBottom: '.75rem' }}>Topic not found</h2>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>The topic you're looking for doesn't exist or has been moved.</p>
        <Link to={classId ? `/class/${classId}` : '/'} className="btn btn-primary">
          ← Go Back
        </Link>
      </div>
    );
  }

  // Neighboring topics for prev/next navigation
  const topicIndex = subject.topics.findIndex(t => t.id === topicId);
  const prevTopic = topicIndex > 0 ? subject.topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < subject.topics.length - 1 ? subject.topics[topicIndex + 1] : null;

  const visibleQA = showAllQA ? topic.qa : (topic.qa || []).slice(0, 4);

  return (
    <div>
      {/* ── Topic Hero Banner ── */}
      <div className={`${subjectColor}`} style={{
        background: 'linear-gradient(135deg, var(--sc) 0%, color-mix(in srgb, var(--sc) 65%, #000) 100%)',
        padding: '3.5rem 0 3rem',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', right: '-4rem', top: '-4rem',
          width: '20rem', height: '20rem',
          borderRadius: '50%',
          background: 'rgba(255,255,255,.06)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: '6rem', bottom: '-6rem',
          width: '14rem', height: '14rem',
          borderRadius: '50%',
          background: 'rgba(255,255,255,.04)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', to: '/' },
            { label: classData.label, to: `/class/${classId}` },
            { label: meta.label || subjectId, to: `/class/${classId}/subject/${subjectId}` },
            { label: topic.title }
          ]} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{
              background: 'rgba(255,255,255,.15)',
              border: '1px solid rgba(255,255,255,.25)',
              padding: '.3rem .9rem',
              borderRadius: 999,
              fontSize: '.78rem', fontWeight: 700,
              letterSpacing: '.04em', textTransform: 'uppercase',
            }}>
              {meta.icon} {meta.label}
            </span>
            <span style={{
              background: 'rgba(255,255,255,.12)',
              border: '1px solid rgba(255,255,255,.2)',
              padding: '.3rem .9rem',
              borderRadius: 999, fontSize: '.78rem', fontWeight: 600,
            }}>
              {classData.label}
            </span>
            <span style={{
              background: 'rgba(255,255,255,.12)',
              border: '1px solid rgba(255,255,255,.2)',
              padding: '.3rem .9rem',
              borderRadius: 999, fontSize: '.78rem', fontWeight: 600,
            }}>
              Topic {topicIndex + 1} of {subject.topics.length}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Nunito', fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
            marginBottom: '.75rem',
            lineHeight: 1.2,
          }}>
            {topic.title}
          </h1>

          {topic.subtopics && (
            <p style={{ opacity: .8, fontSize: '.93rem', lineHeight: 1.7, maxWidth: 640 }}>
              Covers: {topic.subtopics}
            </p>
          )}

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', opacity: .85, fontSize: '.85rem' }}>
              <span>📖</span> Detailed explanation
            </div>
            {topic.qa?.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', opacity: .85, fontSize: '.85rem' }}>
                <span>❓</span> {topic.qa.length} exam questions
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="container-sm" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>

        {/* ── 1. Definition Box ── */}
        <div className={`topic-definition ${subjectColor}`}>
          <div className="topic-definition-label">
            📌 Definition — What is {topic.title}?
          </div>
          <div className="topic-definition-text">
            {topic.definition}
          </div>
        </div>

        {/* ── 2. Learning Content ── */}
        {topic.content && (
          <section style={{ marginBottom: '3rem' }}>
            <h2 className="topic-section-title" style={{ '--sc': `var(--sc, #4f46e5)` }}>
              Understanding {topic.title}
            </h2>
            <div
              className={`topic-content ${subjectColor}`}
              dangerouslySetInnerHTML={{ __html: topic.content }}
            />
          </section>
        )}

        {/* ── 3. Q&A Accordion ── */}
        {topic.qa && topic.qa.length > 0 && (
          <section style={{ marginTop: '3rem' }}>
            {/* Section header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: '1.5rem', flexWrap: 'wrap', gap: '.75rem'
            }}>
              <div>
                <h2 className="topic-section-title" style={{ marginBottom: '.25rem' }}>
                  Important Questions &amp; Answers
                </h2>
                <p style={{ fontSize: '.85rem', color: '#9ca3af', marginLeft: '.6rem' }}>
                  Frequently asked in exams — {topic.qa.length} questions
                </p>
              </div>
              {topic.qa.length > 4 && (
                <div style={{ display: 'flex', gap: '.5rem' }}>
                  <button
                    onClick={() => { setOpenQA(null); }}
                    style={{
                      padding: '.35rem .9rem', borderRadius: 8,
                      border: '1px solid #e5e7eb', background: '#f9fafb',
                      fontSize: '.8rem', color: '#6b7280', cursor: 'pointer'
                    }}
                  >
                    Collapse all
                  </button>
                  <button
                    onClick={() => {
                      // Open all visible questions
                      setOpenQA('all');
                    }}
                    style={{
                      padding: '.35rem .9rem', borderRadius: 8,
                      border: '1px solid #e5e7eb', background: '#f9fafb',
                      fontSize: '.8rem', color: '#6b7280', cursor: 'pointer'
                    }}
                  >
                    Expand all
                  </button>
                </div>
              )}
            </div>

            {/* Accordion items */}
            <div className={subjectColor}>
              {visibleQA.map((item, i) => (
                <AccordionItem
                  key={i}
                  number={i + 1}
                  question={item.q}
                  answer={item.a}
                  subjectColor={subjectColor}
                  isOpen={openQA === i || openQA === 'all'}
                  onToggle={() => setOpenQA(prev => (prev === i ? null : i))}
                />
              ))}
            </div>

            {/* Show more / less */}
            {topic.qa.length > 4 && (
              <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <button
                  onClick={() => {
                    setShowAllQA(s => !s);
                    setOpenQA(null);
                  }}
                  className="btn btn-secondary"
                  style={{ fontSize: '.9rem' }}
                >
                  {showAllQA
                    ? `Show less ▲`
                    : `Show all ${topic.qa.length} questions ▼`}
                </button>
              </div>
            )}

            {/* Exam tip box */}
            <div style={{
              marginTop: '2rem',
              background: '#fffbeb',
              border: '1.5px solid #fde68a',
              borderRadius: 14,
              padding: '1.25rem 1.5rem',
              display: 'flex', gap: '1rem', alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
              <div>
                <div style={{ fontFamily: 'Nunito', fontWeight: 700, color: '#92400e', marginBottom: '.3rem' }}>
                  Exam Tip
                </div>
                <p style={{ fontSize: '.875rem', color: '#78350f', lineHeight: 1.7 }}>
                  These questions are based on common exam patterns for {classData.label} {meta.label}.
                  Practice writing answers in your own words — don't just memorise.
                  Understanding the concept is more important than memorisation.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── Prev / Next navigation ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: prevTopic && nextTopic ? '1fr 1fr' : '1fr',
          gap: '1rem',
          marginTop: '4rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid #e5e7eb',
        }}>
          {prevTopic && (
            <Link
              to={`/class/${classId}/subject/${subjectId}/topic/${prevTopic.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className={`card ${subjectColor}`} style={{
                padding: '1.25rem',
                border: '1px solid var(--sm)',
                background: 'var(--sl)',
                display: 'flex', alignItems: 'center', gap: '.75rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>←</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '.72rem', color: 'var(--sc)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '.2rem' }}>
                    Previous Topic
                  </div>
                  <div style={{ fontFamily: 'Nunito', fontWeight: 700, color: '#1e1b4b', fontSize: '.92rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {prevTopic.title}
                  </div>
                </div>
              </div>
            </Link>
          )}
          {nextTopic && (
            <Link
              to={`/class/${classId}/subject/${subjectId}/topic/${nextTopic.id}`}
              style={{ textDecoration: 'none', gridColumn: prevTopic ? 'auto' : '1 / -1' }}
            >
              <div className={`card ${subjectColor}`} style={{
                padding: '1.25rem',
                border: '1px solid var(--sm)',
                background: 'var(--sl)',
                display: 'flex', alignItems: 'center', gap: '.75rem',
                textAlign: 'right', flexDirection: 'row-reverse'
              }}>
                <span style={{ fontSize: '1.25rem' }}>→</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '.72rem', color: 'var(--sc)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '.2rem' }}>
                    Next Topic
                  </div>
                  <div style={{ fontFamily: 'Nunito', fontWeight: 700, color: '#1e1b4b', fontSize: '.92rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {nextTopic.title}
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* ── Back to subject / class ── */}
        <div style={{
          display: 'flex', gap: '.75rem', marginTop: '1.5rem',
          flexWrap: 'wrap', justifyContent: 'center'
        }}>
          <Link
            to={`/class/${classId}/subject/${subjectId}`}
            className="btn btn-ghost"
            style={{ fontSize: '.88rem', border: '1px solid #e5e7eb' }}
          >
            ← All {meta.label} topics
          </Link>
          <Link
            to={`/class/${classId}`}
            className="btn btn-ghost"
            style={{ fontSize: '.88rem', border: '1px solid #e5e7eb' }}
          >
            ← Back to {classData.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
