import React, { useState, useEffect, useRef } from 'react';
import { api } from '../utils/api';

// ── Resource config ──────────────────────────────────────────────
const RESOURCES = [
  { type: 'audio',       label: 'Audio Overview',  icon: '🎧', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
  { type: 'video',       label: 'Video Lesson',    icon: '🎬', color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
  { type: 'report',      label: 'Study Notes',     icon: '📄', color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd' },
  { type: 'quiz',        label: 'Take a Quiz',     icon: '🧠', color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
  { type: 'infographic', label: 'Infographic',     icon: '🖼️', color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
];

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
  const done = submitted;

  if (!questions.length) {
    return (
      <ModalShell onClose={onClose} title="Quiz" icon="🧠" color="#059669">
        <p style={{ textAlign: 'center', color: '#6b7280', padding: '2rem' }}>No questions added yet.</p>
      </ModalShell>
    );
  }

  if (done) {
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

// ── Demo fallback data ────────────────────────────────────────────
const DEMO_MEDIA = {
  audio: {
    _id: 'demo-audio', type: 'audio', title: 'Topic Audio Overview (Demo)',
    fileData: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    _isDemo: true,
  },
  video: {
    _id: 'demo-video', type: 'video', title: 'Video Explanation (Demo)',
    videoUrl: 'https://www.youtube.com/watch?v=NybHckSEQBI',
    _isDemo: true,
  },
  report: {
    _id: 'demo-report', type: 'report', title: 'Study Notes PDF (Demo)',
    fileData: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1',
    fileName: 'study-notes-demo.pdf', _isDemo: true,
  },
  infographic: {
    _id: 'demo-infographic', type: 'infographic', title: 'Visual Summary (Demo)',
    fileData: 'https://picsum.photos/seed/studyhub/900/600',
    fileName: 'infographic-demo.png', _isDemo: true,
  },
  quiz: {
    _id: 'demo-quiz', type: 'quiz', title: 'Practice Quiz (Demo)',
    _isDemo: true,
    quiz: [
      {
        question: 'Which of the following best describes the core concept of this topic?',
        options: ['A foundational principle used across many problems', 'An advanced technique for competitive exams only', 'A formula memorised without understanding', 'A concept only relevant to higher classes'],
        correct: 0,
        explanation: 'Core concepts are foundational — understanding them deeply helps solve a wide range of problems.',
      },
      {
        question: 'What is the most effective way to study this topic?',
        options: ['Rote memorisation of formulas', 'Understanding the concept and practising varied problems', 'Reading once before the exam', 'Skipping derivations and focusing on answers only'],
        correct: 1,
        explanation: 'Conceptual understanding combined with practice is the proven method for long-term retention.',
      },
      {
        question: 'How many questions are typically asked from this chapter in board exams?',
        options: ['0–1 questions', '1–2 questions', '2–4 questions', '5+ questions'],
        correct: 2,
        explanation: 'Most chapters in this subject contribute 2–4 marks in board exams through short-answer or MCQ format.',
      },
    ],
  },
};

// ── Main TopicMediaSection ────────────────────────────────────────
export default function TopicMediaSection({ classId, subjectId, topicId }) {
  const [mediaMap, setMediaMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [fetchingId, setFetchingId] = useState(null);

  useEffect(() => {
    setLoading(true);
    api(`/media/${classId}/${subjectId}/${topicId}`)
      .then(items => {
        if (items.length > 0) {
          const map = {};
          items.forEach(item => { map[item.type] = item; });
          setMediaMap(map);
          setIsDemo(false);
        } else {
          // No real content yet — show demo so teachers/students see how it looks
          setMediaMap(DEMO_MEDIA);
          setIsDemo(true);
        }
      })
      .catch(() => { setMediaMap(DEMO_MEDIA); setIsDemo(true); })
      .finally(() => setLoading(false));
  }, [classId, subjectId, topicId]);

  async function openModal(resource) {
    const item = mediaMap[resource.type];
    if (!item) return;
    // Demo items and quiz/video open directly — no API fetch needed
    if (item._isDemo || resource.type === 'quiz' || resource.type === 'video') {
      setActiveModal(resource.type);
      setActiveItem(item);
      return;
    }
    setFetchingId(resource.type);
    try {
      const full = await api(`/media/item/${item._id}`);
      setActiveItem(full);
      setActiveModal(resource.type);
    } catch {
      setActiveItem(item);
      setActiveModal(resource.type);
    } finally {
      setFetchingId(null);
    }
  }

  if (loading) return null;

  return (
    <section className="topic-media-section">
      <div className="topic-media-header">
        <h2 className="topic-section-title" style={{ marginBottom: 0 }}>📚 Learning Resources</h2>
        <p className="topic-media-sub">
          {isDemo
            ? 'Preview — upload real content from the Teacher Portal → Content Manager'
            : 'Interactive materials uploaded for this topic'}
        </p>
        {isDemo && (
          <div className="topic-media-demo-banner">
            🎨 Demo Preview — click any card to see how it works
          </div>
        )}
      </div>

      <div className="topic-media-grid">
        {RESOURCES.map(res => {
          const item = mediaMap[res.type];
          const available = Boolean(item);
          const isFetching = fetchingId === res.type;
          return (
            <button
              key={res.type}
              className={`topic-media-card ${available ? 'available' : 'unavailable'} ${item?._isDemo ? 'demo-card' : ''}`}
              style={{ '--mc': res.color, '--mb': res.bg, '--mbo': res.border }}
              onClick={() => available && openModal(res)}
              disabled={!available || isFetching}
            >
              <div className="topic-media-card-icon">{isFetching ? '⏳' : res.icon}</div>
              <div className="topic-media-card-label">{res.label}</div>
              {item?.title && <div className="topic-media-card-title">{item.title}</div>}
              <div className={`topic-media-card-badge ${available ? 'badge-ready' : 'badge-soon'}`}>
                {available ? (item?._isDemo ? '👁 Preview' : '▶ Open') : 'Coming Soon'}
              </div>
            </button>
          );
        })}
      </div>

      {activeModal === 'audio'       && activeItem && <AudioModal       item={activeItem} onClose={() => { setActiveModal(null); setActiveItem(null); }} />}
      {activeModal === 'video'       && activeItem && <VideoModal       item={activeItem} onClose={() => { setActiveModal(null); setActiveItem(null); }} />}
      {activeModal === 'report'      && activeItem && <ReportModal      item={activeItem} onClose={() => { setActiveModal(null); setActiveItem(null); }} />}
      {activeModal === 'infographic' && activeItem && <InfographicModal item={activeItem} onClose={() => { setActiveModal(null); setActiveItem(null); }} />}
      {activeModal === 'quiz'        && activeItem && <QuizModal        item={activeItem} onClose={() => { setActiveModal(null); setActiveItem(null); }} />}
    </section>
  );
}
