import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EXAMS, PYQS } from '../data/jeeNeetData';
import SEO from '../components/SEO';
import { api } from '../utils/api';

const FREE_LIMIT = 5;
const DIFF_COLOR = { easy: '#16a34a', medium: '#d97706', hard: '#dc2626' };
const DIFF_BG    = { easy: '#f0fdf4', medium: '#fffbeb', hard: '#fef2f2' };

// ── Pro Upgrade Modal ─────────────────────────────────────────────
function ProModal({ exam, onClose, onPay, paying, payError, user, onOpenLogin }) {
  return (
    <div className="pyq-modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="pyq-pro-modal">
        <button className="pyq-pro-modal-close" onClick={onClose}>✕</button>
        <div className="pyq-pro-modal-icon">🔓</div>
        <h2 className="pyq-pro-modal-title">Unlock PYQ Pro</h2>
        <div className="pyq-pro-modal-price">
          <span className="pyq-pro-price-amount">₹99</span>
          <span className="pyq-pro-price-period">/year</span>
        </div>
        <ul className="pyq-pro-modal-perks">
          {[
            `Unlimited solution reveals — all ${PYQS[exam?.id]?.length}+ questions`,
            'Chapter-wise performance tracking',
            'Bookmark & revisit any question',
            'Valid for both JEE & NEET banks',
            '1-year access from date of purchase',
          ].map(p => (
            <li key={p}><span className="pyq-perk-check">✓</span> {p}</li>
          ))}
        </ul>
        {payError && <p className="pyq-pro-modal-error">⚠️ {payError}</p>}
        {!user ? (
          <button className="pyq-pro-pay-btn" onClick={() => { onClose(); onOpenLogin?.(); }}>
            🔐 Login to Subscribe
          </button>
        ) : (
          <button className="pyq-pro-pay-btn" onClick={onPay} disabled={paying}>
            {paying ? '⏳ Processing…' : '💳 Pay ₹99 — Unlock Now'}
          </button>
        )}
        <p className="pyq-pro-modal-note">🔒 Secured by Razorpay · UPI, Cards, Net Banking accepted</p>
      </div>
    </div>
  );
}

// ── Question Card ─────────────────────────────────────────────────
function QuestionCard({ q, qi, exam, isPro, freeLeft, onReveal, revealed, selected, onSelect, onToggleBookmark, bookmarked }) {
  const isRevealed = revealed[q.id];
  const userAns    = selected[q.id];
  const hasAns     = userAns !== undefined;
  const isBookmarked = bookmarked.has(q.id);
  const canReveal  = isPro || freeLeft > 0;

  return (
    <div className={`pyq-card ${isRevealed ? 'pyq-card-revealed' : ''}`} id={`q-${q.id}`}>
      {/* Card header */}
      <div className="pyq-card-header">
        <div className="pyq-card-badges">
          <span className="pyq-badge" style={{ background: exam.lightColor, color: exam.color }}>
            {exam.subjectEmojis[q.subject]} {exam.subjectLabels[q.subject]}
          </span>
          <span className="pyq-badge pyq-badge-chapter">{q.chapter}</span>
          <span className="pyq-badge" style={{ background: DIFF_BG[q.difficulty], color: DIFF_COLOR[q.difficulty] }}>
            {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
          </span>
        </div>
        <div className="pyq-card-meta-right">
          <span className="pyq-year-badge">📅 {q.year}</span>
          <button
            className={`pyq-bookmark-btn ${isBookmarked ? 'active' : ''}`}
            onClick={() => onToggleBookmark(q.id)}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
          >
            {isBookmarked ? '🔖' : '📌'}
          </button>
        </div>
      </div>

      {/* Question */}
      <div className="pyq-question-text">
        Q{qi + 1}. {q.question}
      </div>

      {/* Options */}
      <div className="pyq-options-grid">
        {q.options.map((opt, i) => {
          let cls = 'pyq-option';
          if (isRevealed) {
            if (i === q.correct) cls += ' pyq-option-correct';
            else if (hasAns && i === userAns) cls += ' pyq-option-wrong';
          } else if (hasAns && i === userAns) {
            cls += ' pyq-option-selected';
          }
          return (
            <button key={i} className={cls} onClick={() => onSelect(q.id, i)}
              style={isRevealed && i === q.correct ? { borderColor: '#86efac' } :
                     isRevealed && hasAns && i === userAns ? { borderColor: '#fca5a5' } :
                     hasAns && i === userAns ? { borderColor: exam.color } : {}}>
              <span className="pyq-option-letter">{String.fromCharCode(65 + i)}</span>
              <span>{opt}</span>
              {isRevealed && i === q.correct && <span className="pyq-opt-tick">✓</span>}
              {isRevealed && hasAns && i === userAns && i !== q.correct && <span className="pyq-opt-cross">✗</span>}
            </button>
          );
        })}
      </div>

      {/* Solution */}
      {isRevealed && (
        <div className="pyq-solution">
          <div className="pyq-solution-label">✅ Step-by-Step Solution</div>
          <div className="pyq-solution-text">{q.solution}</div>
        </div>
      )}

      {/* Actions */}
      <div className="pyq-card-actions">
        <button
          className={`pyq-reveal-btn ${isRevealed ? 'pyq-reveal-btn-hide' : ''} ${!canReveal && !isRevealed ? 'pyq-reveal-btn-locked' : ''}`}
          onClick={() => onReveal(q.id)}
          style={!isRevealed ? { borderColor: exam.color, color: exam.color } : {}}
        >
          {isRevealed ? '🙈 Hide Solution' : !canReveal ? '🔒 Pro — Show Solution' : '💡 Show Solution'}
        </button>
        {hasAns && !isRevealed && canReveal && (
          <button className="pyq-check-btn" onClick={() => onReveal(q.id)}
            style={{ borderColor: '#16a34a', color: '#15803d' }}>
            ✓ Check Answer
          </button>
        )}
        {!isPro && !isRevealed && (
          <span className="pyq-free-left-pill">
            {freeLeft > 0 ? `${freeLeft} free reveal${freeLeft !== 1 ? 's' : ''} left` : '🔒 Upgrade for more'}
          </span>
        )}
        {isPro && <span className="pyq-pro-pill">⭐ Pro</span>}
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────
export default function PYQPage({ user, onOpenLogin }) {
  const { examId } = useParams();
  const exam    = EXAMS[examId];
  const allPYQs = PYQS[examId] || [];

  // Filters
  const [subjectFilter,  setSubjectFilter]  = useState('all');
  const [yearFilter,     setYearFilter]     = useState('all');
  const [diffFilter,     setDiffFilter]     = useState('all');
  const [chapterFilter,  setChapterFilter]  = useState('all');
  const [search,         setSearch]         = useState('');
  const [bmOnly,         setBmOnly]         = useState(false);

  // Interaction
  const [revealed,  setRevealed]  = useState({});
  const [selected,  setSelected]  = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Pro
  const [isPro,        setIsPro]        = useState(false);
  const [freeLeft,     setFreeLeft]     = useState(FREE_LIMIT);
  const [showProModal, setShowProModal] = useState(false);
  const [payingPro,    setPayingPro]    = useState(false);
  const [payError,     setPayError]     = useState('');

  // Bookmarks
  const [bookmarked, setBookmarked] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem(`pyq_bm_${examId}`) || '[]')); }
    catch { return new Set(); }
  });

  // Load Razorpay script
  useEffect(() => {
    if (document.getElementById('razorpay-script')) return;
    const s = document.createElement('script');
    s.id = 'razorpay-script';
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(s);
  }, []);

  // Fetch Pro status
  useEffect(() => {
    if (!user) return;
    api('/payments/pyq-pro-status').then(d => setIsPro(!!d.isPro)).catch(() => {});
  }, [user]);

  if (!exam) return (
    <div className="container" style={{ padding: '3rem 1.25rem', textAlign: 'center', color: '#9ca3af' }}>
      Exam not found. Try <Link to="/exam/jee">JEE</Link> or <Link to="/exam/neet">NEET</Link>.
    </div>
  );

  const years = [...new Set(allPYQs.map(q => q.year))].sort((a, b) => b - a);

  // Build chapter list with counts
  const chapters = useMemo(() => {
    const map = {};
    allPYQs.forEach(q => {
      const k = q.chapter;
      if (!map[k]) map[k] = { chapter: k, subject: q.subject, count: 0 };
      map[k].count++;
    });
    return Object.values(map).sort((a, b) => b.count - a.count);
  }, [allPYQs]);

  // Filter
  const filtered = useMemo(() => allPYQs.filter(q => {
    if (subjectFilter !== 'all' && q.subject !== subjectFilter) return false;
    if (yearFilter    !== 'all' && q.year !== Number(yearFilter)) return false;
    if (diffFilter    !== 'all' && q.difficulty !== diffFilter) return false;
    if (chapterFilter !== 'all' && q.chapter !== chapterFilter) return false;
    if (bmOnly && !bookmarked.has(q.id)) return false;
    if (search && !q.question.toLowerCase().includes(search.toLowerCase()) &&
        !q.chapter.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [allPYQs, subjectFilter, yearFilter, diffFilter, chapterFilter, bmOnly, search, bookmarked]);

  // Score
  const attempted = Object.keys(selected).length;
  const correct   = Object.entries(selected).filter(([id, ans]) => {
    const q = allPYQs.find(q => q.id === id);
    return q && ans === q.correct;
  }).length;
  const score = correct * 4 - (attempted - correct);

  function toggleReveal(id) {
    if (revealed[id]) { setRevealed(p => ({ ...p, [id]: false })); return; }
    if (!isPro && freeLeft <= 0) { setShowProModal(true); return; }
    setRevealed(p => ({ ...p, [id]: true }));
    if (!isPro) setFreeLeft(n => n - 1);
  }

  function selectOption(qId, idx) {
    if (revealed[qId]) return;
    setSelected(p => ({ ...p, [qId]: idx }));
  }

  function toggleBookmark(id) {
    setBookmarked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      localStorage.setItem(`pyq_bm_${examId}`, JSON.stringify([...next]));
      return next;
    });
  }

  async function handlePayPro() {
    setPayError('');
    setPayingPro(true);
    try {
      const order = await api('/payments/pyq-pro-order', { method: 'POST' });
      const options = {
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'OnlineStudyHub',
        description: 'PYQ Pro — 1 Year Unlimited Access',
        order_id: order.orderId,
        prefill: { name: user?.name, email: user?.email },
        theme: { color: exam.color },
        handler: async (response) => {
          try {
            await api('/payments/pyq-pro-verify', {
              method: 'POST',
              body: JSON.stringify({
                razorpay_order_id:    response.razorpay_order_id,
                razorpay_payment_id:  response.razorpay_payment_id,
                razorpay_signature:   response.razorpay_signature,
              }),
            });
            setIsPro(true);
            setShowProModal(false);
          } catch {
            setPayError('Payment successful but activation failed. Please refresh.');
          } finally {
            setPayingPro(false);
          }
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', () => { setPayError('Payment failed. Please try again.'); setPayingPro(false); });
      rzp.open();
    } catch (e) {
      setPayError(e.message || 'Failed to initiate payment');
      setPayingPro(false);
    }
  }

  // ── SEO schemas ──────────────────────────────────────────────────
  const isJEE     = examId === 'jee';
  const examLabel = exam.shortLabel;
  const seoTitle  = isJEE
    ? `JEE Main & Advanced Previous Year Questions (PYQ) 2019–2024 with Solutions — Free | OnlineStudyHub`
    : `NEET-UG Previous Year Questions (PYQ) 2019–2024 with Solutions — Free | OnlineStudyHub`;
  const seoDesc   = isJEE
    ? `Practice ${allPYQs.length}+ JEE Main & Advanced previous year questions (2019–2024) with step-by-step solutions. Filter by Physics, Chemistry, Mathematics, chapter & difficulty. Free JEE PYQ bank — no registration required.`
    : `Practice ${allPYQs.length}+ NEET-UG previous year questions (2019–2024) with detailed solutions. Filter by Physics, Chemistry, Biology, chapter & difficulty. Free NEET PYQ bank with answer explanations.`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How many ${examLabel} previous year questions are available on OnlineStudyHub?`,
        acceptedAnswer: { '@type': 'Answer', text: `OnlineStudyHub has ${allPYQs.length}+ ${examLabel} previous year questions from ${years[years.length-1]} to ${years[0]}, covering all subjects and chapters with step-by-step solutions.` },
      },
      {
        '@type': 'Question',
        name: `Are ${examLabel} PYQ solutions available for free?`,
        acceptedAnswer: { '@type': 'Answer', text: `Yes, the first ${FREE_LIMIT} solution reveals are completely free for every student. For unlimited access to all solutions, subscribe to PYQ Pro at just ₹99 per year.` },
      },
      {
        '@type': 'Question',
        name: `Which years of ${examLabel} papers are available?`,
        acceptedAnswer: { '@type': 'Answer', text: `${examLabel} questions from ${years.join(', ')} are available on OnlineStudyHub, covering all major chapters and topics.` },
      },
      {
        '@type': 'Question',
        name: `Can I filter ${examLabel} PYQs by chapter or subject?`,
        acceptedAnswer: { '@type': 'Answer', text: `Yes. You can filter by subject (${exam.subjects.map(s => exam.subjectLabels[s]).join(', ')}), year, difficulty (Easy/Medium/Hard), and individual chapters. You can also search by keyword.` },
      },
      {
        '@type': 'Question',
        name: `What is the marking scheme for ${examLabel}?`,
        acceptedAnswer: { '@type': 'Answer', text: `${examLabel} follows +${exam.marking.correct} marks for correct answers and ${exam.marking.wrong} mark for wrong answers. Unattempted questions carry 0 marks. The total marks are ${exam.totalMarks} for ${exam.totalQuestions} questions in ${exam.duration} minutes.` },
      },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${examLabel} Previous Year Papers — Year-wise`,
    description: `${examLabel} PYQ papers from ${years[years.length-1]} to ${years[0]}`,
    numberOfItems: years.length,
    itemListElement: years.map((y, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${examLabel} ${y} Previous Year Questions`,
      url: `https://www.onlinestudyhub.com/exam/${examId}/pyq`,
    })),
  };

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${exam.label} Previous Year Questions Bank`,
    description: seoDesc,
    provider: { '@type': 'Organization', name: 'OnlineStudyHub', url: 'https://www.onlinestudyhub.com' },
    educationalLevel: 'Undergraduate Entrance Exam',
    numberOfCredits: allPYQs.length,
    hasCourseInstance: years.map(y => ({
      '@type': 'CourseInstance',
      name: `${examLabel} ${y} Paper`,
      courseMode: 'online',
    })),
  };

  // Active filter count (for mobile indicator)
  const activeFilters = [subjectFilter, yearFilter, diffFilter, chapterFilter].filter(f => f !== 'all').length;

  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>
      <SEO
        title={seoTitle}
        description={seoDesc}
        path={`/exam/${examId}/pyq`}
        breadcrumbs={[
          { name: isJEE ? 'JEE' : 'NEET', url: `/exam/${examId}` },
          { name: 'PYQ Bank', url: `/exam/${examId}/pyq` },
        ]}
        schemas={[faqSchema, itemListSchema, courseSchema]}
      />

      {/* ── Hero ── */}
      <div className="pyq-hero" style={{ background: `linear-gradient(135deg, #1e1b4b 0%, ${exam.color} 100%)` }}>
        <div className="container">
          <div className="pyq-hero-breadcrumb">
            <Link to={`/exam/${examId}`} style={{ color: 'rgba(255,255,255,.65)' }}>{examLabel}</Link>
            <span style={{ color: 'rgba(255,255,255,.4)', margin: '0 .4rem' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,.85)' }}>PYQ Bank</span>
          </div>
          <div className="pyq-hero-row">
            <div>
              <h1 className="pyq-hero-title">
                {examLabel} Previous Year Questions
              </h1>
              <p className="pyq-hero-sub">
                {allPYQs.length} questions · {years[years.length-1]}–{years[0]} · Step-by-step solutions
              </p>
              <div className="pyq-hero-pills">
                {exam.subjects.map(s => (
                  <span key={s} className="pyq-hero-pill">
                    {exam.subjectEmojis[s]} {exam.subjectLabels[s]}
                  </span>
                ))}
                <span className="pyq-hero-pill">+{exam.marking.correct}/−{Math.abs(exam.marking.wrong)} marking</span>
              </div>
            </div>
            <div className="pyq-hero-stats">
              {[
                { v: allPYQs.length, l: 'Questions' },
                { v: years.length, l: 'Years' },
                { v: chapters.length, l: 'Chapters' },
              ].map(s => (
                <div key={s.l} className="pyq-hero-stat">
                  <div className="pyq-hero-stat-num">{s.v}</div>
                  <div className="pyq-hero-stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Pro banner (when limit hit) ── */}
      {!isPro && freeLeft === 0 && (
        <div className="pyq-pro-banner">
          <span>🔒 You've used all {FREE_LIMIT} free solution reveals.</span>
          <button className="pyq-pro-banner-btn" onClick={() => setShowProModal(true)}>
            Upgrade to Pro — ₹99/year
          </button>
        </div>
      )}

      <div className="container pyq-layout">
        {/* ── Chapter Sidebar ── */}
        <aside className={`pyq-sidebar ${sidebarOpen ? 'pyq-sidebar-open' : ''}`}>
          <div className="pyq-sidebar-header">
            <span style={{ fontWeight: 800, fontSize: '.9rem', color: '#1f2937' }}>📚 Chapters</span>
            <button className="pyq-sidebar-close" onClick={() => setSidebarOpen(false)}>✕</button>
          </div>
          <button
            className={`pyq-chapter-item ${chapterFilter === 'all' ? 'active' : ''}`}
            style={chapterFilter === 'all' ? { background: exam.lightColor, color: exam.color } : {}}
            onClick={() => { setChapterFilter('all'); setSidebarOpen(false); }}
          >
            <span>All Chapters</span>
            <span className="pyq-chapter-count">{allPYQs.length}</span>
          </button>
          {chapters.map(ch => (
            <button
              key={ch.chapter}
              className={`pyq-chapter-item ${chapterFilter === ch.chapter ? 'active' : ''}`}
              style={chapterFilter === ch.chapter ? { background: exam.lightColor, color: exam.color } : {}}
              onClick={() => { setChapterFilter(ch.chapter); setSubjectFilter('all'); setSidebarOpen(false); }}
            >
              <span className="pyq-chapter-name">{ch.chapter}</span>
              <span className="pyq-chapter-count">{ch.count}</span>
            </button>
          ))}
        </aside>
        {sidebarOpen && <div className="pyq-sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

        {/* ── Main content ── */}
        <div className="pyq-main">

          {/* ── Filters ── */}
          <div className="pyq-filters-wrap">
            {/* Mobile chapter toggle */}
            <button className="pyq-chapter-toggle" onClick={() => setSidebarOpen(true)}>
              📚 Chapters {activeFilters > 0 && <span className="pyq-filter-badge">{activeFilters}</span>}
            </button>

            {/* Subject pills */}
            <div className="pyq-subject-pills">
              <button className={`pyq-subject-pill ${subjectFilter === 'all' ? 'active' : ''}`}
                style={subjectFilter === 'all' ? { background: exam.color, color: '#fff' } : {}}
                onClick={() => setSubjectFilter('all')}>All</button>
              {exam.subjects.map(s => (
                <button key={s}
                  className={`pyq-subject-pill ${subjectFilter === s ? 'active' : ''}`}
                  style={subjectFilter === s ? { background: exam.subjectColors?.[s] || exam.color, color: '#fff' } : {}}
                  onClick={() => setSubjectFilter(s)}>
                  {exam.subjectEmojis[s]} {exam.subjectLabels[s]}
                </button>
              ))}
            </div>

            {/* Year pills */}
            <div className="pyq-year-pills">
              <button className={`pyq-year-pill ${yearFilter === 'all' ? 'active' : ''}`}
                onClick={() => setYearFilter('all')}>All Years</button>
              {years.map(y => (
                <button key={y}
                  className={`pyq-year-pill ${yearFilter === String(y) ? 'active' : ''}`}
                  onClick={() => setYearFilter(String(y))}>{y}</button>
              ))}
            </div>

            {/* Bottom row — difficulty + search + bookmarks */}
            <div className="pyq-filter-bottom">
              <select value={diffFilter} onChange={e => setDiffFilter(e.target.value)} className="pyq-select">
                <option value="all">All Difficulties</option>
                <option value="easy">🟢 Easy</option>
                <option value="medium">🟡 Medium</option>
                <option value="hard">🔴 Hard</option>
              </select>
              <input
                className="pyq-search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search questions or chapters…"
              />
              <button
                className={`pyq-bm-toggle ${bmOnly ? 'active' : ''}`}
                onClick={() => setBmOnly(b => !b)}
                title="Show bookmarked only"
              >
                🔖 {bmOnly ? 'All' : 'Saved'}
              </button>
            </div>

            <div className="pyq-result-count">
              {filtered.length} question{filtered.length !== 1 ? 's' : ''}
              {chapterFilter !== 'all' && <span className="pyq-active-chapter"> — {chapterFilter}</span>}
            </div>
          </div>

          {/* ── Score tracker ── */}
          {attempted > 0 && (
            <div className="pyq-score-bar">
              <span className="pyq-score-title">📊 Practice Score</span>
              <span style={{ color: '#16a34a', fontWeight: 700 }}>✅ {correct} Correct</span>
              <span style={{ color: '#dc2626', fontWeight: 700 }}>❌ {attempted - correct} Wrong</span>
              <span style={{ color: '#6b7280' }}>📋 {attempted}/{filtered.length} Attempted</span>
              <span style={{ color: exam.color, fontWeight: 800 }}>Score: {score}/{attempted * 4}</span>
            </div>
          )}

          {/* ── Question list ── */}
          {filtered.length === 0 ? (
            <div className="pyq-empty">
              <div style={{ fontSize: '2.5rem', marginBottom: '.75rem' }}>🔍</div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#374151' }}>No questions match</div>
              <p style={{ color: '#9ca3af', fontSize: '.85rem', marginTop: '.25rem' }}>Try changing your filters.</p>
            </div>
          ) : (
            <div className="pyq-list">
              {filtered.map((q, qi) => (
                <QuestionCard
                  key={q.id}
                  q={q}
                  qi={qi}
                  exam={exam}
                  isPro={isPro}
                  freeLeft={freeLeft}
                  onReveal={toggleReveal}
                  revealed={revealed}
                  selected={selected}
                  onSelect={selectOption}
                  onToggleBookmark={toggleBookmark}
                  bookmarked={bookmarked}
                />
              ))}
            </div>
          )}

          {/* ── Bottom Pro CTA ── */}
          {!isPro && (
            <div className="pyq-bottom-cta">
              <div className="pyq-bottom-cta-inner">
                <div>
                  <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.15rem', color: '#1e1b4b', marginBottom: '.3rem' }}>
                    🔓 Unlock all solutions with PYQ Pro
                  </div>
                  <div style={{ color: '#6b7280', fontSize: '.85rem' }}>
                    {FREE_LIMIT} free reveals used up? Get unlimited access to every {examLabel} solution — both JEE & NEET banks.
                  </div>
                </div>
                <button className="pyq-bottom-cta-btn" onClick={() => setShowProModal(true)}
                  style={{ background: exam.color }}>
                  Subscribe — ₹99/yr
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Pro Modal ── */}
      {showProModal && (
        <ProModal
          exam={exam}
          onClose={() => { setShowProModal(false); setPayError(''); }}
          onPay={handlePayPro}
          paying={payingPro}
          payError={payError}
          user={user}
          onOpenLogin={onOpenLogin}
        />
      )}
    </div>
  );
}
