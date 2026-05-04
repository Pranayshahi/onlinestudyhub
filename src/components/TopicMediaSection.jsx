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

// ── Self Learning Tab Content ─────────────────────────────────────
function SelfLearningContent() {
  return (
    <div>
      <p style={{ color: '#6b7280', fontSize: '.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        Explore these resource types at your own pace — no login needed.
      </p>
      <div className="teacher-resource-cards" style={{ flexWrap: 'wrap' }}>
        {RESOURCES.map(res => (
          <div
            key={res.type}
            className="teacher-resource-card"
            style={{ '--trc': res.color, '--trb': res.bg, '--trbo': res.border, opacity: 0.85 }}
          >
            <div className="teacher-resource-top">
              <span className="teacher-resource-icon">{res.icon}</span>
              <div className="teacher-resource-info">
                <div className="teacher-resource-title">{res.label}</div>
                <div className="teacher-resource-type">Self-study resource</div>
              </div>
            </div>
            <div style={{
              marginTop: '1rem',
              background: res.bg,
              border: `1px dashed ${res.border}`,
              borderRadius: 10,
              padding: '.75rem 1rem',
              fontSize: '.82rem',
              color: res.color,
              textAlign: 'center',
              fontWeight: 600,
            }}>
              Coming soon — study independently
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── By Mentor Login Gate ──────────────────────────────────────────
function MentorLoginGate({ onOpenLogin }) {
  return (
    <div className="media-login-gate">
      <div className="media-login-gate-icons">
        {RESOURCES.map(r => (
          <span key={r.type} className="media-login-gate-icon" style={{ background: r.bg, color: r.color }}>{r.icon}</span>
        ))}
      </div>
      <h3 className="media-login-gate-title">Login to access mentor resources</h3>
      <p className="media-login-gate-desc">
        Sign in to unlock video lessons, audio overviews, study notes, practice quizzes, and infographics uploaded by our expert teachers.
      </p>
      <button className="media-login-gate-btn" onClick={onOpenLogin}>
        🔐 Login / Sign Up — It's Free
      </button>
      <p className="media-login-gate-note">Already have an account? Click above to sign in instantly.</p>
    </div>
  );
}

// ── Notes Payment Gate Card ───────────────────────────────────────
function NotesPaymentGate({ bestTeacher, onPay, paying }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      border: '2px solid #bae6fd',
      borderRadius: 16,
      padding: '1.75rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>🔒</div>
      <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.1rem', color: '#0369a1', marginBottom: '.4rem' }}>
        Advanced Study Notes
      </h3>
      {bestTeacher && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.4rem', marginBottom: '.75rem' }}>
          <span style={{ fontSize: '1.1rem' }}>{bestTeacher.avatar || '👨‍🏫'}</span>
          <span style={{ fontSize: '.82rem', color: '#475569', fontWeight: 600 }}>
            by {bestTeacher.name} · {'★'.repeat(Math.round(bestTeacher.rating ?? 5))} {(bestTeacher.rating ?? 5).toFixed(1)}
          </span>
        </div>
      )}
      <p style={{ fontSize: '.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem', maxWidth: 300, margin: '0 auto 1.25rem' }}>
        Unlock detailed PDF notes crafted by our best-rated teachers — formulas, solved examples & exam tips.
      </p>
      <div style={{ display: 'flex', align: 'center', justifyContent: 'center', gap: '.75rem', flexWrap: 'wrap' }}>
        <div style={{
          background: '#0369a1',
          color: '#fff',
          borderRadius: 12,
          padding: '.35rem 1rem',
          fontFamily: 'Nunito',
          fontWeight: 900,
          fontSize: '1.25rem',
          letterSpacing: '-.01em',
        }}>
          ₹25
        </div>
        <button
          onClick={onPay}
          disabled={paying}
          style={{
            background: paying ? '#94a3b8' : 'linear-gradient(135deg, #0369a1, #0284c7)',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            padding: '.7rem 1.75rem',
            fontFamily: 'Nunito',
            fontWeight: 800,
            fontSize: '1rem',
            cursor: paying ? 'not-allowed' : 'pointer',
            boxShadow: paying ? 'none' : '0 4px 14px rgba(3,105,161,.35)',
            transition: 'all .2s',
          }}
        >
          {paying ? '⏳ Processing…' : '🔓 Unlock Notes'}
        </button>
      </div>
      <p style={{ fontSize: '.72rem', color: '#94a3b8', marginTop: '.85rem' }}>
        🔒 Secured by Razorpay · UPI, Cards, Net Banking accepted
      </p>
    </div>
  );
}

// ── Main TopicMediaSection ────────────────────────────────────────
export default function TopicMediaSection({ classId, subjectId, topicId, user, onOpenLogin }) {
  const [activeTab, setActiveTab] = useState('self');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [fetchingId, setFetchingId] = useState(null);
  const [filterTeacher, setFilterTeacher] = useState('all');
  const [notesUnlocked, setNotesUnlocked] = useState(false);
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState('');

  // Load Razorpay script once
  useEffect(() => {
    if (document.getElementById('razorpay-script')) return;
    const s = document.createElement('script');
    s.id = 'razorpay-script';
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(s);
  }, []);

  // Fetch mentor media + notes unlock status when on mentor tab & logged in
  useEffect(() => {
    if (activeTab !== 'mentor' || !user) { setLoading(false); return; }
    setLoading(true);
    Promise.all([
      api(`/media/${classId}/${subjectId}/${topicId}`).catch(() => []),
      api(`/payments/notes-status/${classId}/${subjectId}/${topicId}`).catch(() => ({ unlocked: false })),
    ]).then(([mediaData, statusData]) => {
      setItems(Array.isArray(mediaData) ? mediaData : []);
      setNotesUnlocked(statusData?.unlocked ?? false);
    }).finally(() => setLoading(false));
  }, [classId, subjectId, topicId, user, activeTab]);

  async function handlePayNotes(bestTeacher) {
    setPayError('');
    setPaying(true);
    try {
      const order = await api('/payments/notes-order', {
        method: 'POST',
        body: JSON.stringify({ classId, subjectId, topicId }),
      });
      const options = {
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'OnlineStudyHub',
        description: 'Advanced Study Notes Unlock',
        order_id: order.orderId,
        prefill: { name: user.name, email: user.email },
        theme: { color: '#0369a1' },
        handler: async (response) => {
          try {
            await api('/payments/notes-verify', {
              method: 'POST',
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                classId, subjectId, topicId,
              }),
            });
            setNotesUnlocked(true);
          } catch {
            setPayError('Payment verified but unlock failed. Please refresh.');
          } finally {
            setPaying(false);
          }
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', () => { setPayError('Payment failed. Please try again.'); setPaying(false); });
      rzp.open();
    } catch (e) {
      setPayError(e.message || 'Failed to initiate payment');
      setPaying(false);
    }
  }

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

  // Mentor tab content when logged in
  function renderMentorContent() {
    if (loading) return null;

    if (!items.length) {
      return (
        <div style={{ background: '#f9fafb', border: '2px dashed #e5e7eb', borderRadius: 16, padding: '2.5rem', textAlign: 'center', color: '#9ca3af' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '.75rem' }}>📭</div>
          <div style={{ fontWeight: 600, marginBottom: '.25rem' }}>No resources yet</div>
          <div style={{ fontSize: '.85rem' }}>Teachers will upload videos, notes, and quizzes soon.</div>
        </div>
      );
    }

    const teacherMap = {};
    items.forEach(item => {
      const t = item.uploadedBy;
      if (t?._id && !teacherMap[t._id]) teacherMap[t._id] = t;
    });
    const teachers = Object.values(teacherMap);

    const visibleItems = filterTeacher === 'all'
      ? items
      : items.filter(item => String(item.uploadedBy?._id) === filterTeacher);

    const byType = {};
    visibleItems.forEach(item => {
      if (!byType[item.type]) byType[item.type] = [];
      byType[item.type].push(item);
    });

    const bestRatedId = {};
    Object.entries(byType).forEach(([type, typeItems]) => {
      const best = typeItems.reduce((a, b) => (b.uploadedBy?.rating ?? 0) > (a.uploadedBy?.rating ?? 0) ? b : a, typeItems[0]);
      bestRatedId[type] = best._id;
    });

    const activeTypes = RESOURCES.filter(r => byType[r.type]?.length > 0);
    const emptyTypes = RESOURCES.filter(r => !byType[r.type]?.length);

    return (
      <>
        <p style={{ color: '#6b7280', fontSize: '.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          {items.length} resource{items.length !== 1 ? 's' : ''} from {teachers.length} teacher{teachers.length !== 1 ? 's' : ''}
        </p>

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

        {payError && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: 10, padding: '.75rem 1rem', fontSize: '.85rem', marginBottom: '1rem' }}>
            ⚠️ {payError}
          </div>
        )}

        {activeTypes.map(res => (
          <div key={res.type} className="teacher-resource-type-section">
            <div className="teacher-resource-type-header" style={{ color: res.color }}>
              {res.icon} {res.label}
              {res.type !== 'report' && (
                <span className="teacher-resource-type-count">{byType[res.type].length} version{byType[res.type].length > 1 ? 's' : ''}</span>
              )}
              {res.type === 'report' && notesUnlocked && (
                <span className="teacher-resource-type-count" style={{ color: '#059669' }}>✓ Unlocked</span>
              )}
            </div>
            <div className="teacher-resource-cards">
              {res.type === 'report' && !notesUnlocked ? (
                <NotesPaymentGate
                  bestTeacher={byType['report'].reduce((a, b) => (b.uploadedBy?.rating ?? 0) > (a.uploadedBy?.rating ?? 0) ? b : a, byType['report'][0])?.uploadedBy}
                  onPay={() => handlePayNotes()}
                  paying={paying}
                />
              ) : (
                byType[res.type].map(item => (
                  <TeacherResourceCard
                    key={item._id}
                    item={item}
                    res={res}
                    isBestRated={byType[res.type].length > 1 && item._id === bestRatedId[res.type]}
                    onOpen={openModal}
                    fetching={fetchingId === item._id}
                  />
                ))
              )}
            </div>
          </div>
        ))}

        {emptyTypes.length > 0 && (
          <div className="teacher-resource-coming-soon">
            {emptyTypes.map(res => (
              <div key={res.type} className="teacher-resource-soon-pill" style={{ background: res.bg, color: res.color, border: `1px solid ${res.border}` }}>
                {res.icon} {res.label} — Coming Soon
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <section className="topic-media-section">
      {/* Header */}
      <div className="topic-media-header">
        <h2 className="topic-section-title" style={{ marginBottom: 0 }}>📚 Learning Resources</h2>
      </div>

      {/* Tabs */}
      <div className="media-tabs">
        <button
          className={`media-tab ${activeTab === 'self' ? 'active' : ''}`}
          onClick={() => setActiveTab('self')}
        >
          📖 Self Learning
        </button>
        <button
          className={`media-tab ${activeTab === 'mentor' ? 'active' : ''}`}
          onClick={() => setActiveTab('mentor')}
        >
          👨‍🏫 By Mentor
          <span
            className="media-tab-tooltip-anchor"
            title="Leave it on us, don't worry."
            aria-label="Leave it on us, don't worry."
          >
            ℹ
          </span>
        </button>
      </div>

      {/* Tab content */}
      <div className="media-tab-content">
        {activeTab === 'self' && <SelfLearningContent />}
        {activeTab === 'mentor' && (
          user ? renderMentorContent() : <MentorLoginGate onOpenLogin={onOpenLogin} />
        )}
      </div>

      {activeModal === 'audio'       && activeItem && <AudioModal       item={activeItem} onClose={closeModal} />}
      {activeModal === 'video'       && activeItem && <VideoModal       item={activeItem} onClose={closeModal} />}
      {activeModal === 'report'      && activeItem && <ReportModal      item={activeItem} onClose={closeModal} />}
      {activeModal === 'infographic' && activeItem && <InfographicModal item={activeItem} onClose={closeModal} />}
      {activeModal === 'quiz'        && activeItem && <QuizModal        item={activeItem} onClose={closeModal} />}
    </section>
  );
}
