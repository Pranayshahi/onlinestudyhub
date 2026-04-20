import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getClass, getSubjectColor, SUBJECT_META } from '../data/curriculum';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import TeacherFinder from '../components/TeacherFinder';


export default function ClassPage({ user, onOpenLogin }) {
  const { classId } = useParams();
  const classData = getClass(classId);
  const [activeSubject, setActiveSubject] = useState(null);
  const [showFinder, setShowFinder] = useState(false);

  if (!classData) {
    return (
      <div className="container" style={{ padding: '4rem 1.25rem', textAlign: 'center' }}>
        <h2>Class not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Go Home</Link>
      </div>
    );
  }

  const subjectIds = Object.keys(classData.subjects);
  const currentSubjectId = activeSubject || subjectIds[0];
  const currentSubject = classData.subjects[currentSubjectId];
  const subjectColor = getSubjectColor(currentSubjectId);
  const meta = SUBJECT_META[currentSubjectId] || SUBJECT_META.mathematics;

  const topicCount = Object.keys(classData.subjects).reduce((acc, sid) => acc + classData.subjects[sid].topics.length, 0);

  return (
    <div>
      <SEO
        title={`${classData.label} Online Tuition — CBSE Subjects & Topics`}
        description={`Study ${classData.label} online with expert teachers. ${topicCount} topics covering ${Object.keys(classData.subjects).map(s => SUBJECT_META[s]?.label || s).join(', ')}. CBSE curriculum with Q&A.`}
        path={`/class/${classId}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: `${classData.label} — CBSE`,
          description: classData.description,
          provider: { '@type': 'Organization', name: 'OnlineStudyHub', url: 'https://www.onlinestudyhub.com' },
        }}
      />
      {/* Teacher finder panel */}
      {showFinder && (
        <TeacherFinder
          classId={classId}
          subjectId={currentSubjectId}
          onClose={() => setShowFinder(false)}
          user={user}
          onOpenLogin={onOpenLogin}
        />
      )}

      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[
            { label: 'Home', to: '/' },
            { label: classData.label }
          ]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '3rem' }}>{classData.emoji}</div>
              <div>
                <h1 style={{ fontFamily: 'Nunito', fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900 }}>
                  {classData.label}
                </h1>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.95rem', marginTop: '.25rem' }}>
                  {classData.description}
                </p>
              </div>
            </div>

            {/* Find Teacher button */}
            <button
              onClick={() => setShowFinder(true)}
              style={{
                display: 'flex', alignItems: 'center', gap: '.6rem',
                background: 'rgba(255,255,255,.15)', border: '1.5px solid rgba(255,255,255,.3)',
                borderRadius: 12, padding: '.6rem 1.2rem', cursor: 'pointer',
                color: '#fff', fontFamily: 'Nunito', fontWeight: 700, fontSize: '.9rem',
                transition: 'background .2s', flexShrink: 0,
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.25)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.15)'}
            >
              👩‍🏫 Find Teacher
            </button>
          </div>

          {/* Quick stats */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,.1)', borderRadius: 10, padding: '.5rem 1rem', fontSize: '.85rem', color: 'rgba(255,255,255,.9)' }}>
              📚 {subjectIds.length} Subjects
            </div>
            <div style={{ background: 'rgba(255,255,255,.1)', borderRadius: 10, padding: '.5rem 1rem', fontSize: '.85rem', color: 'rgba(255,255,255,.9)' }}>
              📖 {subjectIds.reduce((acc, sid) => acc + classData.subjects[sid].topics.length, 0)} Topics
            </div>
            <div style={{ background: 'rgba(255,255,255,.1)', borderRadius: 10, padding: '.5rem 1rem', fontSize: '.85rem', color: 'rgba(255,255,255,.9)' }}>
              🏫 {classData.board}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>

        {/* Subject tab bar */}
        <div className="tab-bar">
          {subjectIds.map(sid => {
            const m = SUBJECT_META[sid] || {};
            return (
              <button
                key={sid}
                className={`tab-btn ${currentSubjectId === sid ? 'active' : ''}`}
                onClick={() => setActiveSubject(sid)}
              >
                {m.icon || '📘'} {m.label || sid}
              </button>
            );
          })}
        </div>

        {/* Subject info + topics grid */}
        {currentSubject && (
          <div>
            {/* Subject header */}
            <div className={`${subjectColor}`} style={{
              background: 'var(--sl)',
              border: '1.5px solid var(--sm)',
              borderRadius: 16,
              padding: '1.5rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>{meta.icon}</span>
                  <div>
                    <h2 style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.4rem', color: 'var(--sc)' }}>
                      {meta.label}
                    </h2>
                    <p style={{ fontSize: '.875rem', color: '#6b7280', marginTop: '.2rem' }}>
                      {currentSubject.topics.length} topics available
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to={`/class/${classId}/subject/${currentSubjectId}`}
                className={`btn btn-secondary ${subjectColor}`}
                style={{ borderColor: 'var(--sc)', color: 'var(--sc)' }}
              >
                View All Topics →
              </Link>
            </div>

            {/* Topics grid */}
            <h3 style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.15rem', color: '#1e1b4b', marginBottom: '1rem' }}>
              Topics in {meta.label}
            </h3>
            <div className={`topics-grid ${subjectColor}`}>
              {currentSubject.topics.map((topic, i) => (
                <Link
                  key={topic.id}
                  to={`/class/${classId}/subject/${currentSubjectId}/topic/${topic.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={`topic-card ${subjectColor}`}>
                    <div className="topic-card-num">T{String(i + 1).padStart(2, '0')}</div>
                    <div className="topic-card-title">{topic.title}</div>
                    <div className="topic-card-meta">
                      {topic.subtopics ? topic.subtopics.split(',').slice(0, 2).join(' · ') : ''}
                    </div>
                    <div style={{ marginTop: '.75rem', fontSize: '.78rem', color: 'var(--sc)', fontWeight: 600 }}>
                      {topic.qa?.length || 0} practice questions →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All subjects overview */}
        <div style={{ marginTop: '3.5rem' }}>
          <h3 style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '1.15rem', color: '#1e1b4b', marginBottom: '1.25rem' }}>
            All subjects in {classData.label}
          </h3>
          <div className="subjects-grid">
            {subjectIds.map(sid => {
              const m = SUBJECT_META[sid] || {};
              const subj = classData.subjects[sid];
              return (
                <Link
                  key={sid}
                  to={`/class/${classId}/subject/${sid}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={`subject-card ${getSubjectColor(sid)}`}>
                    <div className="subject-card-icon">{m.icon || '📘'}</div>
                    <div className="subject-card-title">{m.label || sid}</div>
                    <div className="subject-card-count">{subj.topics.length} topics</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
