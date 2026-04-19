import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getClass, getSubjectColor, SUBJECT_META } from '../data/curriculum';
import { TEACHERS } from '../data/teachers';
import Breadcrumb from '../components/Breadcrumb';

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i <= Math.round(rating) ? '#f59e0b' : 'none'}
          stroke="#f59e0b" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span style={{ fontSize: '.82rem', fontWeight: 700, color: '#374151', marginLeft: '.2rem' }}>{rating}</span>
    </div>
  );
}

function TeacherModal({ teacher, classLabel, onClose }) {
  if (!teacher) return null;
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)',
          zIndex: 900, animation: 'fadeIn .2s ease',
        }}
      />
      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff', borderRadius: 20, zIndex: 901,
        width: 'min(480px, 92vw)', maxHeight: '85vh',
        overflowY: 'auto', boxShadow: '0 24px 64px rgba(0,0,0,.2)',
        animation: 'slideUp .25s ease',
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)',
          borderRadius: '20px 20px 0 0', padding: '1.75rem',
          position: 'relative',
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'rgba(255,255,255,.15)', border: 'none', color: '#fff',
              width: 32, height: 32, borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem',
            }}
          >✕</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'rgba(255,255,255,.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.5rem', flexShrink: 0,
            }}>
              {teacher.avatar}
            </div>
            <div>
              <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.6)', marginBottom: '.25rem', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                {classLabel} · Class Teacher
              </div>
              <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.3rem', color: '#fff' }}>
                {teacher.name}
              </div>
              <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.75)', marginTop: '.2rem' }}>
                {teacher.subject} · {teacher.experience} experience
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Rating', value: <StarRating rating={teacher.rating} /> },
              { label: 'Students', value: `${teacher.students}+` },
              { label: 'Experience', value: teacher.experience },
            ].map(s => (
              <div key={s.label} style={{
                background: 'rgba(255,255,255,.12)', borderRadius: 10,
                padding: '.4rem .85rem', flex: 1, minWidth: 90,
              }}>
                <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.55)', marginBottom: '.2rem' }}>{s.label}</div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '.88rem' }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem' }}>
          {/* Qualification */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '.7rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.5rem' }}>
              Qualification
            </div>
            <div style={{ fontSize: '.9rem', color: '#374151', fontWeight: 500 }}>{teacher.qualification}</div>
          </div>

          {/* Bio */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '.7rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.5rem' }}>
              About
            </div>
            <p style={{ fontSize: '.9rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{teacher.bio}</p>
          </div>

          {/* Topics */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '.7rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.5rem' }}>
              Key Topics Taught
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
              {teacher.topics.map(t => (
                <span key={t} style={{
                  background: '#eef2ff', color: '#4f46e5',
                  padding: '.3rem .75rem', borderRadius: 20,
                  fontSize: '.8rem', fontWeight: 600,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div style={{
            background: '#f9fafb', borderRadius: 12, padding: '1rem',
            marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '.75rem',
          }}>
            <span style={{ fontSize: '1.25rem' }}>🕐</span>
            <div>
              <div style={{ fontSize: '.75rem', color: '#9ca3af', fontWeight: 700 }}>AVAILABILITY</div>
              <div style={{ fontSize: '.88rem', color: '#374151', fontWeight: 600 }}>{teacher.available}</div>
            </div>
          </div>

          {/* Contact */}
          <a
            href={`mailto:${teacher.contact}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '.5rem', width: '100%', padding: '.85rem',
              background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)',
              color: '#fff', borderRadius: 12, fontWeight: 700,
              fontSize: '.95rem', textDecoration: 'none',
              fontFamily: 'Nunito',
            }}
          >
            ✉️ Contact {teacher.name.split(' ')[0]}
          </a>
        </div>
      </div>
    </>
  );
}

export default function ClassPage({ user, onOpenLogin }) {
  const { classId } = useParams();
  const classData = getClass(classId);
  const [activeSubject, setActiveSubject] = useState(null);
  const [showTeacher, setShowTeacher] = useState(false);
  const [apiTeacher, setApiTeacher] = useState(null);

  // Try fetching teachers from API; fall back to static data silently
  useEffect(() => {
    fetch(`/api/teachers?classId=${classId}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data?.length) setApiTeacher(data[0]); })
      .catch(() => {});
  }, [classId]);

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
  // API teacher takes priority over static data
  const teacher = apiTeacher || TEACHERS[classId]?.[0];

  const handleTeacherClick = () => {
    if (!user) {
      onOpenLogin();
    } else {
      setShowTeacher(true);
    }
  };

  return (
    <div>
      {/* Teacher modal */}
      {showTeacher && (
        <TeacherModal
          teacher={teacher}
          classLabel={classData.label}
          onClose={() => setShowTeacher(false)}
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
            {teacher && (
              <button
                onClick={handleTeacherClick}
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
                <span style={{ fontSize: '1.2rem' }}>{teacher.avatar}</span>
                Find Teacher
              </button>
            )}
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
            {teacher && (
              <div style={{ background: 'rgba(255,255,255,.1)', borderRadius: 10, padding: '.5rem 1rem', fontSize: '.85rem', color: 'rgba(255,255,255,.9)' }}>
                👩‍🏫 {teacher.name}
              </div>
            )}
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
