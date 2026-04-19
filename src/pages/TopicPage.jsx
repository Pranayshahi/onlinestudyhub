import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getClass, getSubject, getTopic, getSubjectColor, SUBJECT_META } from '../data/curriculum';
import { TEACHERS } from '../data/teachers';
import Breadcrumb from '../components/Breadcrumb';
import FlashcardModal from '../components/FlashcardModal';
import { useProgress } from '../hooks/useProgress';
import SEO from '../components/SEO';

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
          lineHeight: 1.8,
        }}>
          {answer}
        </div>
      </div>
    </div>
  );
}

// ── Main TopicPage ──────────────────────────────────────────────
export default function TopicPage({ user, onOpenLogin }) {
  const { classId, subjectId, topicId } = useParams();
  const [openQA, setOpenQA] = useState(null);
  const [showAllQA, setShowAllQA] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showFlashcards, setShowFlashcards] = useState(false);
  const { isDone, toggle } = useProgress();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenQA(null);
    setShowAllQA(false);
    setCopied(false);
  }, [topicId]);

  const classData = getClass(classId);
  const subject = getSubject(classId, subjectId);
  const topic = getTopic(classId, subjectId, topicId);
  const subjectColor = getSubjectColor(subjectId);
  const meta = SUBJECT_META[subjectId] || {};
  const done = isDone(classId, subjectId, topicId);

  // Find relevant teacher
  const classTeachers = TEACHERS[classId] || [];
  const relevantTeacher = classTeachers.find(t =>
    t.subject.toLowerCase().includes(subjectId.toLowerCase()) ||
    (t.topics && t.topics.some(tp => tp.toLowerCase().includes(topic?.title?.toLowerCase())))
  ) || classTeachers[0];

  const navigate = useNavigate();

  // Removed: const [bookingLoading, setBookingLoading] = useState(false);
  // Removed: const handleBookSession = async () => { ... };

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

  const topicIndex = subject.topics.findIndex(t => t.id === topicId);
  const prevTopic = topicIndex > 0 ? subject.topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < subject.topics.length - 1 ? subject.topics[topicIndex + 1] : null;
  const visibleQA = showAllQA ? topic.qa : (topic.qa || []).slice(0, 4);

  async function handleShare() {
    const url = window.location.href;
    const title = `${topic.title} — ${meta.label} | OnlineStudyHub`;
    if (navigator.share) {
      try { await navigator.share({ title, url }); return; } catch {}
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div>
      <SEO
        title={`${topic.title} — ${meta.label} ${classData.label} CBSE`}
        description={`${topic.definition?.slice(0, 140)} Study ${topic.title} for ${classData.label} ${meta.label} with topic notes, subtopics (${topic.subtopics}), and exam Q&A.`}
        path={`/class/${classId}/subject/${subjectId}/topic/${topicId}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: topic.title,
          description: topic.definition,
          educationalLevel: classData.label,
          about: { '@type': 'Thing', name: meta.label },
          provider: { '@type': 'Organization', name: 'OnlineStudyHub', url: 'https://www.onlinestudyhub.com' },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.onlinestudyhub.com' },
              { '@type': 'ListItem', position: 2, name: classData.label, item: `https://www.onlinestudyhub.com/class/${classId}` },
              { '@type': 'ListItem', position: 3, name: meta.label, item: `https://www.onlinestudyhub.com/class/${classId}/subject/${subjectId}` },
              { '@type': 'ListItem', position: 4, name: topic.title },
            ],
          },
        }}
      />
      {/* ── Topic Hero Banner ── */}
      <div className={`${subjectColor}`} style={{
        background: 'linear-gradient(135deg, var(--sc) 0%, color-mix(in srgb, var(--sc) 65%, #000) 100%)',
        padding: '3.5rem 0 3rem',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', right: '-4rem', top: '-4rem', width: '20rem', height: '20rem', borderRadius: '50%', background: 'rgba(255,255,255,.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: '6rem', bottom: '-6rem', width: '14rem', height: '14rem', borderRadius: '50%', background: 'rgba(255,255,255,.04)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', to: '/' },
            { label: classData.label, to: `/class/${classId}` },
            { label: meta.label || subjectId, to: `/class/${classId}/subject/${subjectId}` },
            { label: topic.title }
          ]} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', padding: '.3rem .9rem', borderRadius: 999, fontSize: '.78rem', fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase' }}>
              {meta.icon} {meta.label}
            </span>
            <span style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', padding: '.3rem .9rem', borderRadius: 999, fontSize: '.78rem', fontWeight: 600 }}>
              {classData.label}
            </span>
            <span style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', padding: '.3rem .9rem', borderRadius: 999, fontSize: '.78rem', fontWeight: 600 }}>
              Topic {topicIndex + 1} of {subject.topics.length}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: '.75rem', lineHeight: 1.2 }}>
            {topic.title}
          </h1>

          {topic.subtopics && (
            <p style={{ opacity: .8, fontSize: '.93rem', lineHeight: 1.7, maxWidth: 640 }}>
              Covers: {topic.subtopics}
            </p>
          )}

          {/* Action buttons row */}
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Progress toggle */}
            <button
              onClick={() => toggle(classId, subjectId, topicId)}
              className={`topic-action-btn ${done ? 'done' : ''}`}
            >
              {done ? '✅ Completed' : '○ Mark as Done'}
            </button>

            {/* Share button */}
            <button onClick={handleShare} className="topic-action-btn">
              {copied ? '✓ Link Copied!' : '🔗 Share Topic'}
            </button>

            {/* Stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', opacity: .8, fontSize: '.85rem', marginLeft: 'auto' }}>
              <span>📖</span> Detailed explanation
            </div>
            {topic.qa?.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', opacity: .8, fontSize: '.85rem' }}>
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
            <h2 className="topic-section-title">
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '.75rem' }}>
              <div>
                <h2 className="topic-section-title" style={{ marginBottom: '.25rem' }}>
                  Important Questions &amp; Answers
                </h2>
                <p style={{ fontSize: '.85rem', color: '#9ca3af', marginLeft: '.6rem' }}>
                  Frequently asked in exams — {topic.qa.length} questions
                </p>
              </div>
              <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                {/* Flashcard mode button */}
                <button
                  onClick={() => setShowFlashcards(true)}
                  className={`btn ${subjectColor}`}
                  style={{
                    padding: '.4rem 1rem', borderRadius: 10,
                    background: 'var(--sc)', color: '#fff',
                    fontSize: '.82rem', fontWeight: 700, border: 'none',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.4rem',
                  }}
                >
                  🃏 Flashcard Mode
                </button>
                {topic.qa.length > 4 && (
                  <>
                    <button onClick={() => setOpenQA(null)} style={{ padding: '.35rem .9rem', borderRadius: 8, border: '1px solid #e5e7eb', background: '#f9fafb', fontSize: '.8rem', color: '#6b7280', cursor: 'pointer' }}>
                      Collapse all
                    </button>
                    <button onClick={() => setOpenQA('all')} style={{ padding: '.35rem .9rem', borderRadius: 8, border: '1px solid #e5e7eb', background: '#f9fafb', fontSize: '.8rem', color: '#6b7280', cursor: 'pointer' }}>
                      Expand all
                    </button>
                  </>
                )}
              </div>
            </div>

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

            {topic.qa.length > 4 && (
              <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <button
                  onClick={() => { setShowAllQA(s => !s); setOpenQA(null); }}
                  className="btn btn-secondary"
                  style={{ fontSize: '.9rem' }}
                >
                  {showAllQA ? `Show less ▲` : `Show all ${topic.qa.length} questions ▼`}
                </button>
              </div>
            )}

            <div style={{ marginTop: '2rem', background: '#fffbeb', border: '1.5px solid #fde68a', borderRadius: 14, padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
              <div>
                <div style={{ fontFamily: 'Nunito', fontWeight: 700, color: '#92400e', marginBottom: '.3rem' }}>Exam Tip</div>
                <p style={{ fontSize: '.875rem', color: '#78350f', lineHeight: 1.7 }}>
                  These questions are based on common exam patterns for {classData.label} {meta.label}.
                  Practice writing answers in your own words — don't just memorise.
                  Understanding the concept is more important than memorisation.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── 4. Deep Learn with Teacher ── */}
        {relevantTeacher && (
          <section style={{ marginTop: '4rem', background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', borderRadius: 24, padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flexShrink: 0, width: 100, height: 100, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: '4px solid #fff' }}>
                {relevantTeacher.avatar}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.5rem' }}>
                  <span style={{ background: '#4f46e5', color: '#fff', fontSize: '.7rem', fontWeight: 800, padding: '.2rem .6rem', borderRadius: 6, textTransform: 'uppercase' }}>Expert Teacher</span>
                  <div style={{ display: 'flex', color: '#fbbf24', fontSize: '.9rem' }}>
                    {'★'.repeat(Math.floor(relevantTeacher.rating))}{relevantTeacher.rating % 1 !== 0 ? '½' : ''}
                    <span style={{ color: '#64748b', marginLeft: '.4rem', fontSize: '.8rem', fontWeight: 600 }}>({relevantTeacher.rating})</span>
                  </div>
                </div>
                <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.75rem', color: '#1e1b4b', marginBottom: '.5rem' }}>
                  Deep Learn with {relevantTeacher.name}
                </h2>
                <p style={{ color: '#475569', fontSize: '.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {relevantTeacher.bio}
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.85rem', color: '#64748b' }}>
                    <span style={{ fontSize: '1.1rem' }}>🎓</span> {relevantTeacher.qualification}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.85rem', color: '#64748b' }}>
                    <span style={{ fontSize: '1.1rem' }}>⏱️</span> {relevantTeacher.experience} Experience
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.85rem', color: '#64748b' }}>
                    <span style={{ fontSize: '1.1rem' }}>💰</span> {relevantTeacher.fee}
                  </div>
                </div>
                <Link
                  to={`/class/${classId}/subject/${subjectId}/topic/${topicId}/book?teacherId=${relevantTeacher.id}`}
                  className="btn btn-primary"
                  style={{
                    padding: '0.85rem 2rem',
                    fontSize: '1rem',
                    borderRadius: 12,
                    boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  🚀 Book a Deep Learn Session with {relevantTeacher.name}
                </Link>              </div>
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
            <Link to={`/class/${classId}/subject/${subjectId}/topic/${prevTopic.id}`} style={{ textDecoration: 'none' }}>
              <div className={`card ${subjectColor}`} style={{ padding: '1.25rem', border: '1px solid var(--sm)', background: 'var(--sl)', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <span style={{ fontSize: '1.25rem' }}>←</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '.72rem', color: 'var(--sc)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '.2rem' }}>Previous Topic</div>
                  <div style={{ fontFamily: 'Nunito', fontWeight: 700, color: '#1e1b4b', fontSize: '.92rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{prevTopic.title}</div>
                </div>
              </div>
            </Link>
          )}
          {nextTopic && (
            <Link to={`/class/${classId}/subject/${subjectId}/topic/${nextTopic.id}`} style={{ textDecoration: 'none', gridColumn: prevTopic ? 'auto' : '1 / -1' }}>
              <div className={`card ${subjectColor}`} style={{ padding: '1.25rem', border: '1px solid var(--sm)', background: 'var(--sl)', display: 'flex', alignItems: 'center', gap: '.75rem', textAlign: 'right', flexDirection: 'row-reverse' }}>
                <span style={{ fontSize: '1.25rem' }}>→</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '.72rem', color: 'var(--sc)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '.2rem' }}>Next Topic</div>
                  <div style={{ fontFamily: 'Nunito', fontWeight: 700, color: '#1e1b4b', fontSize: '.92rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{nextTopic.title}</div>
                </div>
              </div>
            </Link>
          )}
        </div>

        <div style={{ display: 'flex', gap: '.75rem', marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to={`/class/${classId}/subject/${subjectId}`} className="btn btn-ghost" style={{ fontSize: '.88rem', border: '1px solid #e5e7eb' }}>
            ← All {meta.label} topics
          </Link>
          <Link to={`/class/${classId}`} className="btn btn-ghost" style={{ fontSize: '.88rem', border: '1px solid #e5e7eb' }}>
            ← Back to {classData.label}
          </Link>
        </div>
      </div>

      {/* ── Flashcard Modal ── */}
      {showFlashcards && (
        <FlashcardModal
          qa={topic.qa}
          topicTitle={topic.title}
          onClose={() => setShowFlashcards(false)}
        />
      )}
    </div>
  );
}
