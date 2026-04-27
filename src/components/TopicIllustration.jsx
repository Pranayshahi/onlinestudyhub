import React, { useState } from 'react';

// ── Subject → image mapping ───────────────────────────────────────
// Images live in /public/img/subjects/
const SUBJECT_IMAGES = {
  mathematics:      '/img/subjects/mathematics.png',
  science:          '/img/subjects/science.png',
  physics:          '/img/subjects/physics.png',
  chemistry:        '/img/subjects/chemistry.png',
  biology:          '/img/subjects/biology.png',
  history:          '/img/subjects/history.png',
  // Fallback to science for geography/civics/economics/english/social
  // until more images are generated
  geography:        '/img/subjects/science.png',
  civics:           '/img/subjects/history.png',
  economics:        '/img/subjects/history.png',
  english:          '/img/subjects/mathematics.png',
  social:           '/img/subjects/history.png',
  political_science:'/img/subjects/history.png',
};

// ── Topic-keyword → gradient accent colour override ───────────────
const TOPIC_ACCENT = {
  // Physics
  'motion':       '#1d4ed8',
  'electricity':  '#7c3aed',
  'light':        '#0891b2',
  'waves':        '#0f766e',
  'gravitation':  '#1e40af',
  'magnetism':    '#6d28d9',
  'heat':         '#b45309',
  'optics':       '#0369a1',
  // Chemistry
  'atom':         '#d97706',
  'periodic':     '#b45309',
  'acid':         '#dc2626',
  'organic':      '#16a34a',
  'metal':        '#6b7280',
  // Biology
  'cell':         '#16a34a',
  'dna':          '#db2777',
  'plant':        '#15803d',
  'human':        '#dc2626',
  'genetics':     '#9333ea',
  'ecosystem':    '#0d9488',
  // Math
  'algebra':      '#7c3aed',
  'geometry':     '#2563eb',
  'trigonometry': '#7c3aed',
  'statistics':   '#0891b2',
  'calculus':     '#6d28d9',
  // History
  'mughal':       '#92400e',
  'ancient':      '#78350f',
  'civilisation': '#92400e',
  // Geography
  'climate':      '#0369a1',
  'river':        '#0891b2',
  'mountain':     '#4b5563',
};

function getAccentColor(topicTitle) {
  const lower = (topicTitle || '').toLowerCase();
  for (const [kw, color] of Object.entries(TOPIC_ACCENT)) {
    if (lower.includes(kw)) return color;
  }
  return null;
}

// ── Subject meta for badge display ───────────────────────────────
const SUBJECT_META = {
  mathematics:      { label: 'Mathematics',       icon: '📐', bg: '#eef2ff', text: '#4338ca' },
  science:          { label: 'Science',            icon: '🔬', bg: '#f0fdf4', text: '#15803d' },
  physics:          { label: 'Physics',            icon: '⚡', bg: '#eff6ff', text: '#1d4ed8' },
  chemistry:        { label: 'Chemistry',          icon: '🧪', bg: '#fff7ed', text: '#c2410c' },
  biology:          { label: 'Biology',            icon: '🧬', bg: '#fdf2f8', text: '#be185d' },
  history:          { label: 'History',            icon: '📜', bg: '#fffbeb', text: '#92400e' },
  geography:        { label: 'Geography',          icon: '🌍', bg: '#ecfdf5', text: '#065f46' },
  civics:           { label: 'Civics',             icon: '🏛️', bg: '#f5f3ff', text: '#5b21b6' },
  economics:        { label: 'Economics',          icon: '📊', bg: '#fef9c3', text: '#854d0e' },
  english:          { label: 'English',            icon: '📚', bg: '#fff1f2', text: '#be123c' },
  social:           { label: 'Social Science',     icon: '🌐', bg: '#ecfdf5', text: '#065f46' },
  political_science:{ label: 'Political Science',  icon: '⚖️', bg: '#f5f3ff', text: '#5b21b6' },
};

export default function TopicIllustration({ subjectId, topicTitle, classLabel, classId, topicId }) {
  const [topicImgError, setTopicImgError] = useState(false);
  const [subjectImgError, setSubjectImgError] = useState(false);

  const topicImgSrc = classId && topicId ? `/img/topics/${classId}/${topicId}.svg` : null;
  const imgSrc = SUBJECT_IMAGES[subjectId] || SUBJECT_IMAGES['science'];
  const useTopicImg = topicImgSrc && !topicImgError;
  const accentColor = getAccentColor(topicTitle);
  const meta = SUBJECT_META[subjectId] || { label: subjectId, icon: '📖', bg: '#f3f4f6', text: '#374151' };

  return (
    <div style={{
      width: '100%',
      borderRadius: 20,
      overflow: 'hidden',
      position: 'relative',
      marginBottom: '2rem',
      boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
      border: '1px solid #e5e7eb',
      background: accentColor
        ? `linear-gradient(135deg, ${accentColor}11 0%, ${accentColor}22 100%)`
        : '#f8fafc',
    }}>
      {/* Image — topic-specific first, subject fallback, then gradient */}
      {useTopicImg ? (
        <img
          src={topicImgSrc}
          alt={`${topicTitle} illustration`}
          onError={() => setTopicImgError(true)}
          style={{ width: '100%', height: 260, objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
      ) : !subjectImgError ? (
        <img
          src={imgSrc}
          alt={`${meta.label} illustration`}
          onError={() => setSubjectImgError(true)}
          style={{ width: '100%', height: 260, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        />
      ) : (
        // Fallback gradient banner when image fails
        <div style={{
          width: '100%',
          height: 200,
          background: `linear-gradient(135deg, ${accentColor || '#4f46e5'} 0%, ${accentColor || '#7c3aed'} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '5rem',
        }}>
          {meta.icon}
        </div>
      )}

      {/* Overlay bar at the bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
        padding: '2.5rem 1.5rem 1rem',
        display: 'flex',
        alignItems: 'flex-end',
        gap: '0.75rem',
        flexWrap: 'wrap',
      }}>
        {/* Subject badge */}
        <span style={{
          background: 'rgba(255,255,255,0.92)',
          color: meta.text,
          fontWeight: 800,
          fontSize: '0.78rem',
          padding: '0.3rem 0.85rem',
          borderRadius: 999,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          backdropFilter: 'blur(4px)',
        }}>
          {meta.icon} {meta.label}
        </span>

        {classLabel && (
          <span style={{
            background: 'rgba(255,255,255,0.8)',
            color: '#374151',
            fontWeight: 700,
            fontSize: '0.75rem',
            padding: '0.3rem 0.85rem',
            borderRadius: 999,
            backdropFilter: 'blur(4px)',
          }}>
            {classLabel}
          </span>
        )}

        <span style={{
          background: 'rgba(255,255,255,0.85)',
          color: '#1e1b4b',
          fontWeight: 700,
          fontSize: '0.8rem',
          padding: '0.3rem 0.85rem',
          borderRadius: 999,
          backdropFilter: 'blur(4px)',
          maxWidth: '60%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          📖 {topicTitle}
        </span>
      </div>
    </div>
  );
}
