import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';

// ── Resource config ──────────────────────────────────────────────
const RESOURCES = [
  { type: 'audio',       label: 'Audio Overview',  icon: '🎧', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
  { type: 'video',       label: 'Video Lesson',    icon: '🎬', color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
  { type: 'report',      label: 'Study Notes',     icon: '📄', color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd' },
  { type: 'quiz',        label: 'Take a Quiz',     icon: '🧠', color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
  { type: 'infographic', label: 'Infographic',     icon: '🖼️', color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
];

const RES_MAP = Object.fromEntries(RESOURCES.map(r => [r.type, r]));

function youtubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|watch\?v=|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

// ── Audio Player Modal ────────────────────────────────────────────
function AudioModal({ item, onClose }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const fmt = (s) => `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;

  return (
    <ModalShell onClose={onClose} title={item.title || 'Audio Overview'} icon="🎧" color="#7c3aed">
      <div className="media-audio-player">
        <audio
          ref={audioRef}
          src={item.fileData}
          onTimeUpdate={() => {
            const a = audioRef.current;
            if (a) setProgress((a.currentTime / a.duration) * 100 || 0);
          }}
          onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
          onEnded={() => setPlaying(false)}
        />
        <div className="media-audio-wave">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className={`media-audio-bar ${playing ? 'playing' : ''}`}
              style={{ animationDelay: `${(i * 0.08) % 1}s`, height: `${20 + Math.sin(i) * 14 + Math.cos(i*0.7)*10}px` }} />
          ))}
        </div>
        <div className="media-audio-controls">
          <button className="media-play-btn" onClick={() => {
            const a = audioRef.current;
            if (!a) return;
            if (playing) { a.pause(); setPlaying(false); }
            else { a.play(); setPlaying(true); }
          }}>
            {playing ? '⏸' : '▶'}
          </button>
          <div className="media-progress-wrap" onClick={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = (e.clientX - rect.left) / rect.width;
            if (audioRef.current) audioRef.current.currentTime = pct * audioRef.current.duration;
          }}>
            <div className="media-progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <span className="media-time">{fmt((progress/100) * duration)} / {fmt(duration)}</span>
        </div>
      </div>
    </ModalShell>
  );
}

// ── Video Modal ───────────────────────────────────────────────────
function VideoModal({ item, onClose }) {
  const vid = youtubeId(item.videoUrl);
  return (
    <ModalShell onClose={onClose} title={item.title || 'Video Lesson'} icon="🎬" color="#dc2626" wide>
      {vid ? (
        <div className="media-video-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`}
            title={item.title || 'Video'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <p style={{ color: '#6b7280', textAlign: 'center', padding: '2rem' }}>Invalid or missing video URL.</p>
      )}
    </ModalShell>
  );
}

// ── Report Modal ──────────────────────────────────────────────────
function ReportModal({ item, onClose }) {
  const isUrl = item.fileData && !item.fileData.startsWith('data:');
  const iframeSrc = isUrl
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(item.fileData)}&embedded=true`
    : item.fileData;
  return (
    <ModalShell onClose={onClose} title={item.title || 'Study Notes'} icon="📄" color="#0369a1" wide>
      {item._isDemo ? (
        <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
          <div style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: '1rem', color: '#1f2937', marginBottom: '.5rem' }}>PDF Study Notes</div>
          <p style={{ color: '#6b7280', fontSize: '.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Upload a PDF from the <strong>Content Manager</strong> and it will display here as a full inline viewer with download option.
          </p>
          <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 12, padding: '1rem', fontSize: '.82rem', color: '#0369a1' }}>
            📋 Supports: lecture notes, NCERT summaries, formula sheets, past papers
          </div>
        </div>
      ) : (
        <>
          <div className="media-pdf-wrap">
            <iframe src={iframeSrc} title={item.title || 'PDF'} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a href={item.fileData} download={item.fileName || 'notes.pdf'} className="media-download-btn">
              ⬇ Download PDF
            </a>
          </div>
        </>
      )}
    </ModalShell>
  );
}

// ── Infographic Modal ─────────────────────────────────────────────
function InfographicModal({ item, onClose }) {
  return (
    <ModalShell onClose={onClose} title={item.title || 'Infographic'} icon="🖼️" color="#d97706" wide>
      <div className="media-infographic-wrap">
        <img src={item.fileData} alt={item.title || 'Infographic'} />
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a href={item.fileData} download={item.fileName || 'infographic.png'} className="media-download-btn">
          ⬇ Download Image
        </a>
      </div>
    </ModalShell>
  );
}

// ── Quiz Modal ────────────────────────────────────────────────────
function QuizModal({ item, onClose }) {
  const questions = item.quiz || [];
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const q = questions[idx];
  const score = Object.entries(answers).filter(([i, a]) => a === questions[i]?.correct).length;

  if (!questions.length) {
    return (
      <ModalShell onClose={onClose} title="Quiz" icon="🧠" color="#059669">
        <p style={{ textAlign: 'center', color: '#6b7280', padding: '2rem' }}>No questions added yet.</p>
      </ModalShell>
    );
  }

  if (submitted) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <ModalShell onClose={onClose} title="Quiz Results" icon="🏆" color="#059669">
        <div className="quiz-result">
          <div className="quiz-result-circle" style={{ '--pct': pct }}>
            <span>{pct}%</span>
          </div>
          <h3>{score}/{questions.length} Correct</h3>
          <p>{pct >= 80 ? '🎉 Excellent work!' : pct >= 60 ? '👍 Good effort!' : '📚 Keep practicing!'}</p>
          <div className="quiz-review">
            {questions.map((q, i) => (
              <div key={i} className={`quiz-review-item ${answers[i] === q.correct ? 'correct' : 'wrong'}`}>
                <div className="quiz-review-q">Q{i+1}: {q.question}</div>
                <div className="quiz-review-a">
                  {answers[i] === q.correct ? '✅' : '❌'} Your answer: <strong>{q.options[answers[i]] ?? '—'}</strong>
                  {answers[i] !== q.correct && <><br/>✅ Correct: <strong>{q.options[q.correct]}</strong></>}
                </div>
                {q.explanation && <div className="quiz-review-exp">💡 {q.explanation}</div>}
              </div>
            ))}
          </div>
          <button className="quiz-retry-btn" onClick={() => { setIdx(0); setSelected(null); setAnswers({}); setSubmitted(false); }}>
            🔄 Retry Quiz
          </button>
        </div>
      </ModalShell>
    );
  }

  return (
    <ModalShell onClose={onClose} title={item.title || 'Quiz'} icon="🧠" color="#059669">
      <div className="quiz-container">
        <div className="quiz-progress-bar-wrap">
          <div className="quiz-progress-bar-fill" style={{ width: `${((idx) / questions.length) * 100}%` }} />
        </div>
        <div className="quiz-counter">Question {idx + 1} of {questions.length}</div>
        <div className="quiz-question">{q.question}</div>
        <div className="quiz-options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`quiz-option ${selected === i ? 'selected' : ''} ${selected !== null && i === q.correct ? 'reveal-correct' : ''} ${selected !== null && selected !== q.correct && selected === i ? 'reveal-wrong' : ''}`}
              onClick={() => selected === null && setSelected(i)}
            >
              <span className="quiz-option-letter">{String.fromCharCode(65+i)}</span>
              {opt}
            </button>
          ))}
        </div>
        {selected !== null && q.explanation && (
          <div className="quiz-explanation">💡 {q.explanation}</div>
        )}
        <div className="quiz-nav">
          {selected !== null && (
            idx < questions.length - 1 ? (
              <button className="quiz-next-btn" onClick={() => {
                setAnswers(a => ({ ...a, [idx]: selected }));
                setIdx(i => i + 1);
                setSelected(null);
              }}>Next →</button>
            ) : (
              <button className="quiz-next-btn" onClick={() => {
                setAnswers(a => ({ ...a, [idx]: selected }));
                setSubmitted(true);
              }}>Submit Quiz ✓</button>
            )
          )}
        </div>
      </div>
    </ModalShell>
  );
}

// ── Shared Modal Shell ────────────────────────────────────────────
function ModalShell({ children, onClose, title, icon, color, wide }) {
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  return (
    <div className="media-modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={`media-modal ${wide ? 'media-modal-wide' : ''}`}>
        <div className="media-modal-header" style={{ borderColor: color, color }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
            <span style={{ fontSize: '1.4rem' }}>{icon}</span>
            <span className="media-modal-title">{title}</span>
          </div>
          <button className="media-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="media-modal-body">{children}</div>
      </div>
    </div>
  );
}

// ── Teacher Resource Card ─────────────────────────────────────────
function TeacherResourceCard({ item, res, isBestRated, onOpen, fetching }) {
  const teacher = item.uploadedBy;
  const teacherName = teacher?.name || 'Teacher';
  const teacherAvatar = teacher?.avatar || '👨‍🏫';
  const rating = teacher?.rating ?? 4.5;
  const teacherId = teacher?._id;

  return (
    <div className="teacher-resource-card" style={{ '--trc': res.color, '--trb': res.bg, '--trbo': res.border }}>
      {isBestRated && (
        <div className="teacher-resource-best-badge">⭐ Best Rated</div>
      )}
      <div className="teacher-resource-top">
        <span className="teacher-resource-icon">{res.icon}</span>
        <div className="teacher-resource-info">
          <div className="teacher-resource-title">{item.title || res.label}</div>
          <div className="teacher-resource-type">{res.label}</div>
        </div>
      </div>
      <div className="teacher-resource-teacher">
        <span className="teacher-resource-avatar">{teacherAvatar}</span>
        <div>
          <div className="teacher-resource-tname">{teacherName}</div>
          <div className="teacher-resource-rating">
            {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))} {rating.toFixed(1)}
          </div>
        </div>
        {teacherId && (
          <Link to={`/teachers?highlight=${teacherId}`} className="teacher-resource-book-btn">Book</Link>
        )}
      </div>
      <button
        className="teacher-resource-open-btn"
        onClick={() => onOpen(item, res.type)}
        disabled={fetching}
      >
        {fetching ? '⏳ Loading…' : `${res.icon} Open ${res.label}`}
      </button>
    </div>
  );
}

// ── Login Gate Banner ─────────────────────────────────────────────
function LoginGateBanner({ onOpenLogin }) {
  return (
    <section className="topic-media-section">
      <div className="topic-media-header">
        <h2 className="topic-section-title" style={{ marginBottom: 0 }}>📚 Learning Resources</h2>
        <p className="topic-media-sub">Videos, audio, notes, quizzes and more — uploaded by our teachers</p>
      </div>
      <div className="media-login-gate">
        <div className="media-login-gate-icons">
          {RESOURCES.map(r => (
            <span key={r.type} className="media-login-gate-icon" style={{ background: r.bg, color: r.color }}>{r.icon}</span>
          ))}
        </div>
        <h3 className="media-login-gate-title">Login to access learning resources</h3>
        <p className="media-login-gate-desc">
          Sign in to unlock video lessons, audio overviews, study notes, practice quizzes, and infographics uploaded by our expert teachers.
        </p>
        <button className="media-login-gate-btn" onClick={onOpenLogin}>
          🔐 Login / Sign Up — It's Free
        </button>
        <p className="media-login-gate-note">Already have an account? Click above to sign in instantly.</p>
      </div>
    </section>
  );
}

// ── Main TopicMediaSection ────────────────────────────────────────
export default function TopicMediaSection({ classId, subjectId, topicId, user, onOpenLogin }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [fetchingId, setFetchingId] = useState(null);
  const [filterTeacher, setFilterTeacher] = useState('all');

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    setLoading(true);
    api(`/media/${classId}/${subjectId}/${topicId}`)
      .then(data => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [classId, subjectId, topicId, user]);

  // Not logged in → show gate
  if (!user) return <LoginGateBanner onOpenLogin={onOpenLogin} />;

  if (loading) return null;

  // No content yet
  if (!items.length) {
    return (
      <section className="topic-media-section">
        <div className="topic-media-header">
          <h2 className="topic-section-title" style={{ marginBottom: 0 }}>📚 Learning Resources</h2>
          <p className="topic-media-sub">No content uploaded for this topic yet — check back soon!</p>
        </div>
        <div style={{ background: '#f9fafb', border: '2px dashed #e5e7eb', borderRadius: 16, padding: '2.5rem', textAlign: 'center', color: '#9ca3af' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '.75rem' }}>📭</div>
          <div style={{ fontWeight: 600, marginBottom: '.25rem' }}>No resources yet</div>
          <div style={{ fontSize: '.85rem' }}>Teachers will upload videos, notes, and quizzes soon.</div>
        </div>
      </section>
    );
  }

  // Gather unique teachers across all items
  const teacherMap = {};
  items.forEach(item => {
    const t = item.uploadedBy;
    if (t?._id && !teacherMap[t._id]) teacherMap[t._id] = t;
  });
  const teachers = Object.values(teacherMap);

  // Filter items by selected teacher
  const visibleItems = filterTeacher === 'all'
    ? items
    : items.filter(item => String(item.uploadedBy?._id) === filterTeacher);

  // Group visible items by type
  const byType = {};
  visibleItems.forEach(item => {
    if (!byType[item.type]) byType[item.type] = [];
    byType[item.type].push(item);
  });

  // Best-rated item per type (highest teacher rating)
  const bestRatedId = {};
  Object.entries(byType).forEach(([type, typeItems]) => {
    const best = typeItems.reduce((a, b) => (b.uploadedBy?.rating ?? 0) > (a.uploadedBy?.rating ?? 0) ? b : a, typeItems[0]);
    bestRatedId[type] = best._id;
  });

  async function openModal(item, type) {
    if (type === 'quiz' || type === 'video') {
      setActiveModal(type);
      setActiveItem(item);
      return;
    }
    setFetchingId(item._id);
    try {
      const full = await api(`/media/item/${item._id}`);
      setActiveItem(full);
      setActiveModal(type);
    } catch {
      setActiveItem(item);
      setActiveModal(type);
    } finally {
      setFetchingId(null);
    }
  }

  const closeModal = () => { setActiveModal(null); setActiveItem(null); };

  // Ordered resource types that have content
  const activeTypes = RESOURCES.filter(r => byType[r.type]?.length > 0);
  const emptyTypes = RESOURCES.filter(r => !byType[r.type]?.length);

  return (
    <section className="topic-media-section">
      <div className="topic-media-header">
        <h2 className="topic-section-title" style={{ marginBottom: 0 }}>📚 Learning Resources</h2>
        <p className="topic-media-sub">
          {items.length} resource{items.length !== 1 ? 's' : ''} from {teachers.length} teacher{teachers.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Teacher filter */}
      {teachers.length > 1 && (
        <div className="teacher-filter-bar">
          <span className="teacher-filter-label">Filter by teacher:</span>
          <div className="teacher-filter-pills">
            <button
              className={`teacher-filter-pill ${filterTeacher === 'all' ? 'active' : ''}`}
              onClick={() => setFilterTeacher('all')}
            >
              All Teachers
            </button>
            {teachers.map(t => (
              <button
                key={t._id}
                className={`teacher-filter-pill ${filterTeacher === String(t._id) ? 'active' : ''}`}
                onClick={() => setFilterTeacher(String(t._id))}
              >
                {t.avatar} {t.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Resources by type */}
      {activeTypes.map(res => (
        <div key={res.type} className="teacher-resource-type-section">
          <div className="teacher-resource-type-header" style={{ color: res.color }}>
            {res.icon} {res.label}
            <span className="teacher-resource-type-count">{byType[res.type].length} version{byType[res.type].length > 1 ? 's' : ''}</span>
          </div>
          <div className="teacher-resource-cards">
            {byType[res.type].map(item => (
              <TeacherResourceCard
                key={item._id}
                item={item}
                res={res}
                isBestRated={byType[res.type].length > 1 && item._id === bestRatedId[res.type]}
                onOpen={openModal}
                fetching={fetchingId === item._id}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Coming soon types */}
      {emptyTypes.length > 0 && (
        <div className="teacher-resource-coming-soon">
          {emptyTypes.map(res => (
            <div key={res.type} className="teacher-resource-soon-pill" style={{ background: res.bg, color: res.color, border: `1px solid ${res.border}` }}>
              {res.icon} {res.label} — Coming Soon
            </div>
          ))}
        </div>
      )}

      {activeModal === 'audio'       && activeItem && <AudioModal       item={activeItem} onClose={closeModal} />}
      {activeModal === 'video'       && activeItem && <VideoModal       item={activeItem} onClose={closeModal} />}
      {activeModal === 'report'      && activeItem && <ReportModal      item={activeItem} onClose={closeModal} />}
      {activeModal === 'infographic' && activeItem && <InfographicModal item={activeItem} onClose={closeModal} />}
      {activeModal === 'quiz'        && activeItem && <QuizModal        item={activeItem} onClose={closeModal} />}
    </section>
  );
}
