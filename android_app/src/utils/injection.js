// ─── Injected CSS ─────────────────────────────────────────────────────────────
// Setting html font-size smaller scales ALL rem-based sizes in the web app.
// Targeting 13px base (down from browser default 16px) shrinks everything ~19%.

const NATIVE_CSS = `

/* ══ BASE SCALE (most impactful single change) ═══════════════════════════════
   Every rem unit on the page is relative to this.
   16px default → 13px = ~19% smaller across the board.              */
html {
  font-size: 13px !important;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  scroll-behavior: smooth;
}

/* ══ RESET ════════════════════════════════════════════════════════════════════ */
*, *::before, *::after {
  box-sizing: border-box !important;
  -webkit-tap-highlight-color: transparent !important;
}
::-webkit-scrollbar { display: none !important; }
* { scrollbar-width: none !important; }

/* ══ HIDE WEB CHROME ══════════════════════════════════════════════════════════ */
.navbar, nav.navbar, header.navbar,
.navbar-wrapper, [class*="nav-bar"]  { display: none !important; }
footer, .footer                      { display: none !important; }
[class*="app-banner"],
[id*="cookie"], [id*="banner"]       { display: none !important; }

/* ══ CONTAINERS ═══════════════════════════════════════════════════════════════ */
.container, .container-sm {
  padding-left: 14px  !important;
  padding-right: 14px !important;
  max-width: 100% !important;
  width: 100%    !important;
}

/* ══ GLOBAL BODY PADDING (clears native tab bar) ═════════════════════════════ */
body {
  padding-bottom: max(84px, calc(84px + env(safe-area-inset-bottom))) !important;
  overscroll-behavior-y: none;
  -webkit-overflow-scrolling: touch;
}

/* ══ PREVENT IOS ZOOM ON INPUT FOCUS ═════════════════════════════════════════ */
input, textarea, select {
  font-size: 16px !important;
  min-height: 44px !important;
  border-radius: 10px !important;
}

/* ══ TOUCH TARGETS ════════════════════════════════════════════════════════════ */
.btn, button, a[class*="btn"] {
  min-height: 40px !important;
  border-radius: 10px !important;
}

/* ══ FONT-SIZE CONTROLS (useless on mobile, wastes space) ════════════════════ */
.font-size-controls { display: none !important; }

/* ══ HERO SECTIONS ════════════════════════════════════════════════════════════ */
.hero-section, .page-header {
  padding: 22px 14px 18px !important;
}
.page-header h1 {
  font-size: 1.45rem !important;
  line-height: 1.25  !important;
}

/* ══ HOMEPAGE CLASS CARD GRID ════════════════════════════════════════════════
   Desktop renders 9 in a row — force 3 columns on mobile.            */
.classes-grid,
[style*="grid-template-columns: repeat(9"],
[style*="grid-template-columns: repeat(8"],
[style*="grid-template-columns: repeat(7"],
[style*="grid-template-columns: repeat(6"],
[style*="grid-template-columns: repeat(5"],
[style*="grid-template-columns: repeat(4"],
[style*="grid-template-columns: repeat(3"] {
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 8px !important;
}
/* Card padding tighter */
.class-card, [class*="class-card"] {
  padding: 12px 8px  !important;
  border-radius: 14px !important;
}

/* ══ SECTION HEADINGS ═════════════════════════════════════════════════════════ */
.section-title { font-size: 1.1rem  !important; }
.section-sub   { font-size: 0.8rem  !important; }

/* ══ SUBJECT PAGE TOPIC LIST ═════════════════════════════════════════════════
   auto-fill grids become single column.                              */
[style*="minmax(280"], [style*="minmax(300"],
[style*="minmax(320"], [style*="minmax(340"] {
  grid-template-columns: 1fr !important;
  gap: 8px !important;
}
[style*="minmax(200"], [style*="minmax(220"],
[style*="minmax(240"] {
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 8px !important;
}

/* ══ TOPIC PAGE ══════════════════════════════════════════════════════════════ */
.topic-definition {
  padding: 12px 14px  !important;
  border-radius: 12px !important;
  margin-bottom: 1rem !important;
}
.topic-definition-label { font-size: 0.72rem !important; }
.topic-definition-text  { font-size: 0.88rem !important; line-height: 1.7 !important; }

.topic-content {
  font-size: 14px    !important;
  line-height: 1.78  !important;
}
.topic-content h2, .topic-content h3 { font-size: 0.95rem !important; }
.topic-content h4                    { font-size: 0.88rem !important; }
.topic-content p, .topic-content li  { font-size: 0.88rem !important; }
div.formula {
  font-size: 0.85rem !important;
  padding: 7px 10px  !important;
  margin: 3px 0      !important;
  border-radius: 7px !important;
}

.topic-section-title { font-size: 0.97rem !important; }

/* Accordion */
.accordion-header   { padding: 11px 12px  !important; font-size: 0.88rem !important; }
.accordion-body div { font-size: 0.85rem  !important; line-height: 1.7  !important; }

/* Prev / Next nav */
[class*="topic-nav"], [class*="prev-next"] {
  font-size: 0.82rem !important;
}

/* ══ FORMULA BANK CARD ═══════════════════════════════════════════════════════ */
[style*="minmax(240px, 1fr)"] {
  grid-template-columns: repeat(2, 1fr) !important;
}

/* ══ DASHBOARD ═══════════════════════════════════════════════════════════════ */
.db-hero { padding: 16px 14px !important; }
.db-hero-name { font-size: 1.15rem !important; }
.db-greeting  { font-size: 0.75rem !important; }
.db-hero-sub  { font-size: 0.75rem !important; }
.db-streak-badge { transform: scale(.82) !important; transform-origin: right center !important; }

/* 2×2 stats grid */
.db-stats-grid {
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 8px !important;
}
.db-stat-card  { padding: 11px 10px !important; border-radius: 12px !important; }
.db-stat-value { font-size: 1.25rem !important; }
.db-stat-label { font-size: 0.68rem !important; }
.db-stat-icon  { width: 32px !important; height: 32px !important; font-size: 1rem !important; }

/* Single column layout */
.dashboard-main-grid {
  grid-template-columns: 1fr !important;
  gap: 12px !important;
}
.db-card { border-radius: 14px !important; padding: 12px !important; }
.db-card-title { font-size: 0.85rem !important; }
.db-card-head  { margin-bottom: 10px !important; }

/* Badges — no description text, smaller icons */
.db-badges-strip { gap: 7px !important; padding: 2px 0 !important; }
.db-badge        { width: 68px !important; padding: 7px 5px !important; border-radius: 10px !important; }
.db-badge-emoji  { font-size: 1.2rem !important; }
.db-badge-title  { font-size: 0.6rem  !important; }
.db-badge-desc   { display: none !important; }

/* Progress rows */
.db-progress-row   { padding: 5px 0   !important; }
.db-progress-label { font-size: 0.8rem !important; }
.db-progress-pct   { font-size: 0.75rem !important; }
.db-progress-count { font-size: 0.68rem !important; }

/* Plan items */
.db-plan-item { padding: 9px 10px   !important; border-radius: 10px !important; }
.db-plan-text { font-size: 0.82rem  !important; }

/* Weak topic rows */
.db-weak-row    { padding: 7px 0    !important; }
.db-weak-title  { font-size: 0.82rem !important; }
.db-weak-reason { font-size: 0.7rem  !important; }
.db-weak-btn    { font-size: 0.72rem !important; padding: 4px 8px !important; }

/* Mock test rows */
.db-mock-row   { padding: 6px 0     !important; }
.db-mock-title { font-size: 0.82rem !important; }
.db-mock-sub   { font-size: 0.7rem  !important; }
.db-mock-pct   { font-size: 1rem    !important; }

/* Resume card */
.db-resume-card  { padding: 10px 12px !important; border-radius: 12px !important; }
.db-resume-title { font-size: 0.88rem !important; }
.db-resume-sub   { font-size: 0.72rem !important; }

/* Quick links grid — 2×2 */
.dashboard-quick-links {
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 8px !important;
}

/* ══ BREADCRUMB ══════════════════════════════════════════════════════════════ */
.breadcrumb, [class*="breadcrumb"] {
  font-size: 0.72rem !important;
  flex-wrap: wrap    !important;
  gap: 0.2rem        !important;
  margin-bottom: 8px !important;
  line-height: 1.5   !important;
  overflow: hidden   !important;
  white-space: normal !important;
}
.breadcrumb a { font-size: 0.72rem !important; }
.breadcrumb-sep { margin: 0 1px !important; }
/* Pyq hero breadcrumb */
.pyq-hero-breadcrumb { font-size: 0.72rem !important; margin-bottom: 6px !important; }

/* ══ SMART NUDGE BANNER ══════════════════════════════════════════════════════ */
/* Dashboard nudge — shrink on mobile */
div[style*="fef3c7"], div[style*="fde68a"] {
  padding: 10px 12px !important;
  border-radius: 12px !important;
  margin-bottom: 10px !important;
  gap: 10px !important;
}
div[style*="fef3c7"] > div:first-child,
div[style*="fde68a"] > div:first-child {
  font-size: 1.2rem !important;
}

/* ══ TOPIC QUIZ BANNER ═══════════════════════════════════════════════════════ */
.topic-quiz-banner {
  padding: 14px 14px !important;
  border-radius: 12px !important;
  flex-direction: column !important;
  align-items: flex-start !important;
}
.topic-quiz-banner-title { font-size: 0.95rem !important; }
.topic-quiz-banner-sub   { font-size: 0.78rem !important; }
.topic-quiz-start-btn    { font-size: 0.82rem !important; padding: 8px 16px !important; }

/* ══ TOPIC MEDIA DEMO BANNER ═════════════════════════════════════════════════ */
.topic-media-demo-banner {
  font-size: 0.72rem !important;
  padding: 0.3rem 0.7rem !important;
}

/* ══ PYQ PRO BANNER ══════════════════════════════════════════════════════════ */
.pyq-pro-banner {
  font-size: 0.78rem !important;
  padding: 8px 12px  !important;
  gap: 8px !important;
  flex-direction: column !important;
  text-align: center !important;
}
.pyq-pro-banner-btn { font-size: 0.78rem !important; padding: 6px 14px !important; }

/* ══ BADGES / PILLS ══════════════════════════════════════════════════════════ */
.badge, [class*="badge"] {
  font-size: 0.68rem !important;
  padding: .15rem .45rem !important;
}

/* ══ MOCK TEST ═══════════════════════════════════════════════════════════════ */
[class*="mock-question"], [class*="option"] {
  font-size: 0.88rem !important;
  padding: 10px 12px !important;
}

/* ══ TEACHERS LIST ════════════════════════════════════════════════════════════ */
[style*="minmax(320px, 1fr)"] {
  grid-template-columns: 1fr !important;
}

/* ══ SEARCH ══════════════════════════════════════════════════════════════════ */
[class*="search-result"] {
  font-size: 0.85rem !important;
  padding: 10px 12px !important;
}

/* ══ TABLES ══════════════════════════════════════════════════════════════════ */
table { width: 100% !important; font-size: 0.8rem !important; }
th, td { padding: 7px 8px !important; }

/* ══ TOPIC ACTION BUTTONS ════════════════════════════════════════════════════ */
.topic-action-btn {
  font-size: 0.8rem  !important;
  padding: .45rem 1rem !important;
  min-height: 36px !important;
}

/* ══ PAGE HEADER (subject/topic hero) ════════════════════════════════════════ */
.page-header {
  padding: 20px 14px 16px !important;
  margin-bottom: 16px !important;
}
.page-header h1 { font-size: 1.3rem !important; margin-bottom: 0.2rem !important; }
.page-header p  { font-size: 0.8rem !important; }

/* ══ TOPIC CARDS (subject page grid) ════════════════════════════════════════ */
.topic-card {
  padding: 12px 12px !important;
  border-radius: 12px !important;
}
.topic-card-num {
  width: 26px !important;
  height: 26px !important;
  font-size: 0.72rem !important;
  border-radius: 6px !important;
  margin-bottom: 8px !important;
}
.topic-card-title { font-size: 0.88rem !important; margin-bottom: 0.2rem !important; }
.topic-card-meta  { font-size: 0.72rem !important; }

/* ══ FLASHCARD MODAL ═════════════════════════════════════════════════════════ */
.flashcard-modal {
  border-radius: 16px !important;
  max-height: 88vh !important;
}
.flashcard-header {
  padding: 10px 14px !important;
}
.flashcard-scene {
  padding: 12px !important;
  min-height: 180px !important;
}
.flashcard-card  { height: 180px !important; }
.flashcard-face  { padding: 12px !important; border-radius: 12px !important; }
.flashcard-label { font-size: 0.65rem !important; }
.flashcard-text  { font-size: 0.9rem  !important; line-height: 1.5 !important; }
.flashcard-hint  { font-size: 0.7rem  !important; }
.flashcard-controls { padding: 8px 12px 12px !important; gap: 6px !important; }
.flashcard-nav-btn  { font-size: 0.78rem !important; padding: 8px 12px !important; }
.flashcard-flip-btn { font-size: 0.82rem !important; padding: 10px 20px !important; }

/* ══ QUIZ ════════════════════════════════════════════════════════════════════ */
.quiz-question    { font-size: 0.92rem !important; line-height: 1.55 !important; }
.quiz-option      { font-size: 0.82rem !important; padding: 10px 12px !important; gap: 10px !important; border-radius: 10px !important; }
.quiz-option-letter { width: 24px !important; height: 24px !important; font-size: 0.72rem !important; }
.quiz-explanation { font-size: 0.78rem !important; padding: 8px 10px !important; }
.quiz-next-btn    { font-size: 0.82rem !important; padding: 8px 18px !important; }
.quiz-counter     { font-size: 0.72rem !important; }

/* Quiz result screen */
.quiz-result         { padding: 16px !important; }
.quiz-result-circle  { width: 80px !important; height: 80px !important; }
.quiz-result-circle span { font-size: 1.4rem !important; }

/* ══ CERTIFICATE / COMPLETION CARD ══════════════════════════════════════════ */
[class*="cert-"], [class*="certificate"] {
  padding: 16px !important;
  border-radius: 14px !important;
  font-size: 0.85rem !important;
}

/* ══ SMOOTH SCROLL & OVERSCROLL ══════════════════════════════════════════════ */
html { overflow-x: hidden; }

`;

// ─── JavaScript bridge ────────────────────────────────────────────────────────
export const INJECTED_JAVASCRIPT = `
(function() {
  if (window.__OSH_INJECTED__) return;
  window.__OSH_INJECTED__ = true;

  window.__NATIVE_APP__   = true;
  window.__APP_PLATFORM__ = 'android';

  /* ── Force correct viewport ──────────────────────────────────────────────── */
  (function() {
    var m = document.querySelector('meta[name="viewport"]');
    if (!m) { m = document.createElement('meta'); m.name = 'viewport'; document.head.appendChild(m); }
    m.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover';
  })();

  /* ── Inject CSS ──────────────────────────────────────────────────────────── */
  function injectCSS() {
    if (document.getElementById('__osh_native__')) return;
    var s = document.createElement('style');
    s.id = '__osh_native__';
    s.innerHTML = \`${NATIVE_CSS.replace(/`/g, '\\`')}\`;
    (document.head || document.documentElement).appendChild(s);
  }
  injectCSS();
  new MutationObserver(injectCSS).observe(document.documentElement, { childList: true, subtree: false });

  /* ── Message bridge ──────────────────────────────────────────────────────── */
  window.nativePostMessage = function(d) {
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify(d));
  };
  window.nativeHaptic = function(style) {
    window.nativePostMessage({ type: 'haptic', style: style || 'light' });
  };

  /* Override navigator.share */
  if (!window.__shareOverridden) {
    window.__shareOverridden = true;
    navigator.share = function(data) {
      window.nativePostMessage({ type: 'share', title: data.title || '', url: data.url || location.href });
      return Promise.resolve();
    };
  }

  /* ── Title polling ───────────────────────────────────────────────────────── */
  var _t = '';
  setInterval(function() {
    if (document.title !== _t) {
      _t = document.title;
      window.nativePostMessage({ type: 'titleChange', title: _t });
    }
  }, 600);

  /* ── SPA navigation reporting ────────────────────────────────────────────── */
  function reportNav() { window.nativePostMessage({ type: 'navigate', url: location.href }); }
  var _ps = history.pushState.bind(history);
  var _rs = history.replaceState.bind(history);
  history.pushState    = function() { _ps.apply(history, arguments);    reportNav(); };
  history.replaceState = function() { _rs.apply(history, arguments);    reportNav(); };
  window.addEventListener('popstate', reportNav);

})();
true;
`;
