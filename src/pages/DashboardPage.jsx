import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';
import { getAllClasses, SUBJECT_META } from '../data/curriculum';
import { usePushNotifications } from '../hooks/usePushNotifications';
import { useLang } from '../context/LanguageContext';

const SUB_EMOJI = { mathematics:'📐', physics:'⚡', chemistry:'🧪', biology:'🧬', english:'📖', science:'🔬', social:'🌍', history:'🏛️', geography:'🗺️', civics:'⚖️', economics:'💹' };
const AVATAR_OPTIONS = ['🧑‍🎓','👦','👧','🧑','👨','👩','🧒','🧑‍💻','👨‍🏫','👩‍🏫','🦸','🦸‍♀️','🧙','🤓','😎','🦊'];

// ── localStorage helpers ─────────────────────────────────────────
function loadProgress() {
  try { return JSON.parse(localStorage.getItem('osh_progress') || '{}'); } catch { return {}; }
}
function loadLastTopic() {
  try { return JSON.parse(localStorage.getItem('osh_last_topic') || 'null'); } catch { return null; }
}
function loadMockResults() {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('mock_result_')) {
      try { const r = JSON.parse(localStorage.getItem(key)); if (r) results.push({ ...r, key }); } catch {}
    }
  }
  return results;
}
function loadQuizData() {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('osh_quiz_')) {
      try {
        const r = JSON.parse(localStorage.getItem(key));
        if (r && r.total > 0) results.push({ ...r, topicTitle: key.replace('osh_quiz_', '') });
      } catch {}
    }
  }
  return results;
}
function loadWeakTopics() {
  const weak = [];
  const seen = new Set();
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('osh_poll_')) {
      const val = Number(localStorage.getItem(key));
      if (val <= 2) {
        const m = key.match(/^osh_poll_(class-[^_]+)_([^_]+)_(.+)$/);
        if (m && !seen.has(m[3])) {
          seen.add(m[3]);
          weak.push({ classId: m[1], subjectId: m[2], topicId: m[3], type: 'poll', confidence: val });
        }
      }
    }
    if (key?.startsWith('osh_quiz_')) {
      try {
        const r = JSON.parse(localStorage.getItem(key));
        const title = key.replace('osh_quiz_', '');
        if (r && r.total > 0 && r.correct / r.total < 0.5 && !seen.has(title)) {
          seen.add(title);
          weak.push({ topicTitle: title, type: 'quiz', correct: r.correct, total: r.total });
        }
      } catch {}
    }
  }
  return weak.slice(0, 6);
}
function getNudgeDismissKey() {
  return `osh_nudge_${new Date().toISOString().slice(0, 10)}`;
}
function isNudgeDismissed() {
  try { return localStorage.getItem(getNudgeDismissKey()) === '1'; } catch { return false; }
}
function dismissNudgeStorage() {
  try { localStorage.setItem(getNudgeDismissKey(), '1'); } catch {}
}
function getOverdueFlashcardTopic() {
  const now = Date.now();
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('fc_sr_')) {
      try {
        const data = JSON.parse(localStorage.getItem(key));
        if (data?.nextDue && data.nextDue <= now) {
          // key: fc_sr_<classId>_<subjectId>_<topicId>
          const raw = key.replace('fc_sr_', '');
          const m = raw.match(/^(class-[^_]+)_([^_]+)_(.+)$/);
          if (m) {
            const topicTitle = m[3].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            return { type: 'flashcard', topicTitle, topicId: m[3], classId: m[1], subjectId: m[2] };
          }
        }
      } catch {}
    }
  }
  return null;
}
function pickTopUrgentTopic(weakTopics) {
  const quizWeak = weakTopics
    .filter(t => t.type === 'quiz')
    .sort((a, b) => (a.correct / a.total) - (b.correct / b.total));
  if (quizWeak.length) return quizWeak[0];
  const notClear = weakTopics.filter(t => t.type === 'poll' && t.confidence === 1);
  if (notClear.length) return notClear[0];
  return weakTopics[0] || null;
}
function computeStreak() {
  try {
    const dates = JSON.parse(localStorage.getItem('osh_study_dates') || '[]').sort().reverse();
    if (!dates.length) return 0;
    let streak = 0;
    const d = new Date();
    for (const date of dates) {
      if (date === d.toISOString().slice(0, 10)) { streak++; d.setDate(d.getDate() - 1); }
      else break;
    }
    return streak;
  } catch { return 0; }
}
function computeProgressByClass(progress) {
  const doneByClass = {};
  Object.keys(progress).forEach(key => {
    const [classId] = key.split('/');
    doneByClass[classId] = (doneByClass[classId] || 0) + 1;
  });
  const totalByClass = {};
  getAllClasses().forEach(cls => {
    let total = 0;
    Object.values(cls.subjects || {}).forEach(s => { total += (s.topics || []).length; });
    totalByClass[cls.id] = total;
  });
  return Object.keys(doneByClass).map(classId => ({
    classId,
    label: `Class ${classId.replace('class-', '')}`,
    done: doneByClass[classId],
    total: totalByClass[classId] || 1,
    pct: Math.round((doneByClass[classId] / (totalByClass[classId] || 1)) * 100),
  })).sort((a, b) => b.pct - a.pct);
}
function loadStudyPlan() {
  try { return JSON.parse(localStorage.getItem('osh_study_plan') || '[]'); } catch { return []; }
}
function saveStudyPlan(plan) {
  try { localStorage.setItem('osh_study_plan', JSON.stringify(plan)); } catch {}
}
function loadLPSettings() {
  try { return JSON.parse(localStorage.getItem('osh_lp_settings') || 'null'); } catch { return null; }
}
function saveLPSettings(s) {
  try { localStorage.setItem('osh_lp_settings', JSON.stringify(s)); } catch {}
}

// Returns array of plan items with real topic links, sorted with weak topics first
function buildSchedule({ classId, examDate, hoursPerDay, subjectIds, progress, weakTopics }) {
  const cls = getAllClasses().find(c => c.id === classId);
  if (!cls) return [];

  const doneSet = new Set(Object.keys(progress));
  const weakSet = new Set([
    ...weakTopics.map(w => w.topicId ? `${w.classId || classId}/${w.subjectId || ''}/${w.topicId}` : null).filter(Boolean),
    ...weakTopics.map(w => w.topicTitle ? w.topicTitle : null).filter(Boolean),
  ]);

  // Collect all remaining topics across selected subjects
  const remaining = [];
  const subjects = Object.entries(cls.subjects || {});
  for (const [subId, sub] of subjects) {
    if (subjectIds.length > 0 && !subjectIds.includes(subId)) continue;
    const icon = SUBJECT_META[subId]?.icon || '📚';
    for (const topic of (sub.topics || [])) {
      const key = `${classId}/${subId}/${topic.id}`;
      if (doneSet.has(key)) continue;
      const isWeak = weakSet.has(key) || weakSet.has(topic.title);
      remaining.push({ classId, subjectId: subId, topicId: topic.id, title: topic.title, icon, isWeak });
    }
  }

  // Sort: weak first, then normal order
  remaining.sort((a, b) => (b.isWeak ? 1 : 0) - (a.isWeak ? 1 : 0));

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exam = new Date(examDate);
  exam.setHours(0, 0, 0, 0);

  const daysLeft = Math.max(1, Math.min(90, Math.round((exam - today) / 86400000)));
  const topicsPerDay = Math.max(1, Math.round(hoursPerDay / 1.5));
  const totalSlots = daysLeft * topicsPerDay;
  const topicSlice = remaining.slice(0, totalSlots);

  const items = [];
  for (let dayIdx = 0; dayIdx < daysLeft && items.length < topicSlice.length; dayIdx++) {
    const d = new Date(today);
    d.setDate(today.getDate() + dayIdx + 1); // start from tomorrow
    const dateStr = d.toISOString().slice(0, 10);
    const dayTopics = topicSlice.slice(dayIdx * topicsPerDay, (dayIdx + 1) * topicsPerDay);
    for (const t of dayTopics) {
      items.push({
        id: `lp_${t.classId}_${t.subjectId}_${t.topicId}_${dateStr}`,
        text: `${t.icon} ${t.title}`,
        done: false,
        date: dateStr,
        path: `/class/${t.classId}/subject/${t.subjectId}/topic/${t.topicId}`,
        classId: t.classId,
        subjectId: t.subjectId,
        topicId: t.topicId,
        generated: true,
        isWeak: t.isWeak,
      });
    }
  }
  return items;
}
function computeBadges(totalDone, mockCount, quizData) {
  const highScoreQuizzes = quizData.filter(q => q.correct / q.total >= 0.8).length;
  return [
    { id: 'first',   emoji:'🌱', title:'First Steps',      desc:'Completed first topic',     earned: totalDone >= 1 },
    { id: 'five',    emoji:'📖', title:'Quick Learner',    desc:'5 topics done',             earned: totalDone >= 5 },
    { id: 'ten',     emoji:'📚', title:'Book Worm',        desc:'10 topics done',            earned: totalDone >= 10 },
    { id: 'twenty5', emoji:'⭐', title:'Rising Star',      desc:'25 topics done',            earned: totalDone >= 25 },
    { id: 'fifty',   emoji:'🧠', title:'Knowledge Seeker', desc:'50 topics done',            earned: totalDone >= 50 },
    { id: 'hundred', emoji:'💯', title:'Century Club',     desc:'100 topics done',           earned: totalDone >= 100 },
    { id: 'mock1',   emoji:'🎯', title:'Test Taker',       desc:'First mock test done',      earned: mockCount >= 1 },
    { id: 'mock3',   emoji:'🏆', title:'Mock Master',      desc:'3+ mock tests completed',   earned: mockCount >= 3 },
    { id: 'quiz1',   emoji:'✨', title:'Sharp Mind',       desc:'80%+ on a quiz',            earned: highScoreQuizzes >= 1 },
    { id: 'quiz5',   emoji:'🌟', title:'Quiz Champion',    desc:'80%+ on 5+ quizzes',        earned: highScoreQuizzes >= 5 },
    { id: 'streak3', emoji:'🔥', title:'On Fire',          desc:'3-day study streak',        earned: computeStreak() >= 3 },
    { id: 'streak7', emoji:'⚡', title:'Unstoppable',      desc:'7-day study streak',        earned: computeStreak() >= 7 },
  ];
}

// ── Sub-components ────────────────────────────────────────────────
function StatCard({ icon, label, value, color }) {
  return (
    <div className="db-stat-card">
      <div className="db-stat-icon" style={{ background: color + '18', color }}>{icon}</div>
      <div>
        <div className="db-stat-value" style={{ color }}>{value}</div>
        <div className="db-stat-label">{label}</div>
      </div>
    </div>
  );
}

function SectionCard({ icon, title, action, children }) {
  return (
    <div className="db-card">
      <div className="db-card-head">
        <div className="db-card-title"><span>{icon}</span> {title}</div>
        {action}
      </div>
      {children}
    </div>
  );
}

function SmartNudgeBanner({ weakTopics, onDismiss }) {
  const urgent = pickTopUrgentTopic(weakTopics) || getOverdueFlashcardTopic();
  if (!urgent) return null;

  const topicName = urgent.topicTitle
    || (urgent.topicId?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));

  let message, icon;
  if (urgent.type === 'quiz') {
    const pct = Math.round((urgent.correct / urgent.total) * 100);
    message = `You scored ${pct}% on "${topicName}" — review it today`;
    icon = '📝';
  } else if (urgent.type === 'poll') {
    message = urgent.confidence === 1
      ? `You marked "${topicName}" as unclear — revisit it now`
      : `You found "${topicName}" tricky — strengthen it today`;
    icon = '💡';
  } else {
    message = `Your "${topicName}" flashcards are overdue — drill them now`;
    icon = '🃏';
  }

  const link = (urgent.classId && urgent.subjectId && urgent.topicId)
    ? `/class/${urgent.classId}/subject/${urgent.subjectId}/topic/${urgent.topicId}`
    : null;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      border: '1.5px solid #f59e0b',
      borderRadius: 16,
      padding: '1rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.25rem',
      boxShadow: '0 2px 10px rgba(245,158,11,.18)',
    }}>
      <div style={{ fontSize: '1.75rem', flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#92400e', fontSize: '.88rem', textTransform: 'uppercase', letterSpacing: '.04em' }}>
          Today's Focus
        </div>
        <div style={{ color: '#78350f', fontSize: '.92rem', marginTop: '.15rem', fontWeight: 600 }}>{message}</div>
      </div>
      {link && (
        <Link to={link} style={{
          background: '#f59e0b',
          color: '#fff',
          fontWeight: 700,
          fontSize: '.82rem',
          padding: '.45rem .9rem',
          borderRadius: 10,
          textDecoration: 'none',
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}>
          Review →
        </Link>
      )}
      <button onClick={onDismiss} title="Dismiss for today" style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#92400e',
        fontSize: '1.1rem',
        padding: '.25rem .35rem',
        flexShrink: 0,
        lineHeight: 1,
        opacity: .7,
      }}>✕</button>
    </div>
  );
}

// ── Learning Path Card ────────────────────────────────────────────
function LearningPathCard({ user, progress, weakTopics, studyPlan, onPlanChange }) {
  const allClasses = getAllClasses().filter(c => c.id.startsWith('class-'));
  const defaultClassId = user?.class_id
    || (allClasses.find(c => c.id === 'class-10')?.id)
    || allClasses[0]?.id;

  const saved = loadLPSettings();
  const [form, setForm] = useState({
    classId: saved?.classId || defaultClassId || 'class-10',
    examDate: saved?.examDate || '',
    hoursPerDay: saved?.hoursPerDay || 3,
    subjectIds: saved?.subjectIds || [],
  });
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const [generated, setGenerated] = useState(!!saved?.generatedOn);

  const classData = getAllClasses().find(c => c.id === form.classId);
  const subjectOptions = classData ? Object.entries(classData.subjects || {}).map(([id]) => ({
    id,
    label: SUBJECT_META[id]?.label || id,
    icon: SUBJECT_META[id]?.icon || '📚',
  })) : [];

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const minDateStr = minDate.toISOString().slice(0, 10);
  const maxDateStr = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate()).toISOString().slice(0, 10);

  // Days until exam
  const daysUntil = form.examDate
    ? Math.max(0, Math.round((new Date(form.examDate) - today) / 86400000))
    : null;

  function toggleSubject(id) {
    setForm(f => ({
      ...f,
      subjectIds: f.subjectIds.includes(id) ? f.subjectIds.filter(s => s !== id) : [...f.subjectIds, id],
    }));
    setPreview(null);
  }

  function buildPreview() {
    if (!form.examDate) return;
    const items = buildSchedule({ ...form, progress, weakTopics });
    setPreview(items);
  }

  function generate() {
    if (!form.examDate) return;
    const items = buildSchedule({ ...form, progress, weakTopics });

    // Remove previous generated items from future dates
    const todayStr = today.toISOString().slice(0, 10);
    const kept = studyPlan.filter(p => !p.generated || p.date < todayStr);
    const merged = [...kept, ...items];

    onPlanChange(merged);
    saveLPSettings({ ...form, generatedOn: new Date().toISOString() });
    setGenerated(true);
    setPreview(items);
    setOpen(false);
  }

  // Existing generated plan summary
  const todayStr = today.toISOString().slice(0, 10);
  const generatedItems = studyPlan.filter(p => p.generated && p.date >= todayStr);
  const doneGenerated = generatedItems.filter(p => p.done).length;
  const upcomingDays = [...new Set(generatedItems.map(p => p.date))].sort().slice(0, 7);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      borderRadius: 16,
      padding: '1.25rem',
      marginBottom: '1.5rem',
      color: '#fff',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.75rem' }}>
        <div>
          <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            🗓️ AI Learning Path
          </div>
          {generated && form.examDate && (
            <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.65)', marginTop: '.15rem' }}>
              {daysUntil !== null ? `${daysUntil} days to exam` : ''} · {generatedItems.length} topics scheduled · {doneGenerated} done
            </div>
          )}
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            background: 'rgba(255,255,255,.15)',
            border: '1px solid rgba(255,255,255,.25)',
            color: '#fff',
            borderRadius: 10,
            padding: '.4rem .9rem',
            fontSize: '.78rem',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          {open ? 'Cancel' : generated ? '⚙️ Edit' : '✨ Set Up'}
        </button>
      </div>

      {/* Setup form */}
      {open && (
        <div style={{ background: 'rgba(255,255,255,.08)', borderRadius: 12, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
          {/* Class */}
          <div>
            <label style={{ fontSize: '.75rem', fontWeight: 700, opacity: .8, display: 'block', marginBottom: '.3rem' }}>Target Class</label>
            <select
              value={form.classId}
              onChange={e => { setForm(f => ({ ...f, classId: e.target.value, subjectIds: [] })); setPreview(null); }}
              style={{ width: '100%', padding: '.5rem .75rem', borderRadius: 8, border: 'none', fontWeight: 600, fontSize: '.88rem', background: 'rgba(255,255,255,.92)', color: '#1e1b4b' }}
            >
              {allClasses.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </div>

          {/* Exam date */}
          <div>
            <label style={{ fontSize: '.75rem', fontWeight: 700, opacity: .8, display: 'block', marginBottom: '.3rem' }}>
              Exam / Target Date {daysUntil !== null && form.examDate && (
                <span style={{ fontWeight: 600, opacity: .7 }}>— {daysUntil} days away</span>
              )}
            </label>
            <input
              type="date"
              value={form.examDate}
              min={minDateStr}
              max={maxDateStr}
              onChange={e => { setForm(f => ({ ...f, examDate: e.target.value })); setPreview(null); }}
              style={{ width: '100%', padding: '.5rem .75rem', borderRadius: 8, border: 'none', fontWeight: 600, fontSize: '.88rem', background: 'rgba(255,255,255,.92)', color: '#1e1b4b', boxSizing: 'border-box' }}
            />
          </div>

          {/* Hours per day */}
          <div>
            <label style={{ fontSize: '.75rem', fontWeight: 700, opacity: .8, display: 'block', marginBottom: '.3rem' }}>
              Daily Study Hours: <span style={{ color: '#a5b4fc', fontWeight: 800 }}>{form.hoursPerDay}h</span>
              <span style={{ opacity: .6, fontWeight: 600 }}> (~{Math.max(1, Math.round(form.hoursPerDay / 1.5))} topics/day)</span>
            </label>
            <input
              type="range" min="1" max="8" step="0.5"
              value={form.hoursPerDay}
              onChange={e => { setForm(f => ({ ...f, hoursPerDay: Number(e.target.value) })); setPreview(null); }}
              style={{ width: '100%', accentColor: '#818cf8' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.68rem', opacity: .55, marginTop: '.1rem' }}>
              <span>1h</span><span>4h</span><span>8h</span>
            </div>
          </div>

          {/* Subjects (optional filter) */}
          <div>
            <label style={{ fontSize: '.75rem', fontWeight: 700, opacity: .8, display: 'block', marginBottom: '.4rem' }}>
              Focus Subjects <span style={{ fontWeight: 500, opacity: .65 }}>(leave blank = all)</span>
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
              {subjectOptions.map(s => (
                <button
                  key={s.id}
                  onClick={() => toggleSubject(s.id)}
                  style={{
                    padding: '.3rem .7rem',
                    borderRadius: 8,
                    border: '1.5px solid',
                    borderColor: form.subjectIds.includes(s.id) ? '#818cf8' : 'rgba(255,255,255,.25)',
                    background: form.subjectIds.includes(s.id) ? 'rgba(129,140,248,.3)' : 'transparent',
                    color: '#fff',
                    fontSize: '.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {s.icon} {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preview / Generate */}
          {preview && (
            <div style={{ background: 'rgba(129,140,248,.15)', borderRadius: 10, padding: '.75rem 1rem', fontSize: '.82rem' }}>
              <div style={{ fontWeight: 800, marginBottom: '.3rem' }}>📊 Plan Preview</div>
              <div style={{ opacity: .85 }}>
                {preview.length} topics across {Math.min(daysUntil || 0, Math.ceil(preview.length / Math.max(1, Math.round(form.hoursPerDay / 1.5))))} days
                {weakTopics.length > 0 && ` · ${preview.filter(p => p.isWeak).length} weak topics prioritised first`}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: '.65rem' }}>
            <button
              onClick={buildPreview}
              disabled={!form.examDate}
              style={{
                flex: 1,
                padding: '.6rem',
                borderRadius: 10,
                border: '1.5px solid rgba(255,255,255,.3)',
                background: 'transparent',
                color: '#fff',
                fontWeight: 700,
                fontSize: '.85rem',
                cursor: form.examDate ? 'pointer' : 'not-allowed',
                opacity: form.examDate ? 1 : .5,
              }}
            >
              Preview
            </button>
            <button
              onClick={generate}
              disabled={!form.examDate}
              style={{
                flex: 2,
                padding: '.6rem',
                borderRadius: 10,
                border: 'none',
                background: form.examDate ? '#818cf8' : 'rgba(255,255,255,.2)',
                color: '#fff',
                fontFamily: 'Nunito',
                fontWeight: 800,
                fontSize: '.88rem',
                cursor: form.examDate ? 'pointer' : 'not-allowed',
              }}
            >
              {generated ? '🔄 Regenerate Plan' : '✨ Generate My Plan'}
            </button>
          </div>
        </div>
      )}

      {/* Upcoming week strip (when generated and form closed) */}
      {!open && generated && upcomingDays.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.45rem', marginTop: '.25rem' }}>
          {upcomingDays.slice(0, 3).map(dateStr => {
            const dayItems = generatedItems.filter(p => p.date === dateStr);
            const allDone = dayItems.every(p => p.done);
            const isToday = dateStr === today.toISOString().slice(0, 10);
            const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
            const isTmr = dateStr === tomorrow.toISOString().slice(0, 10);
            const label = isToday ? 'Today' : isTmr ? 'Tomorrow' : new Date(dateStr).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
            return (
              <div key={dateStr} style={{
                background: allDone ? 'rgba(16,185,129,.2)' : 'rgba(255,255,255,.09)',
                borderRadius: 10,
                padding: '.55rem .85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '.6rem',
              }}>
                <div style={{ fontSize: '.7rem', fontWeight: 800, minWidth: 60, opacity: .85 }}>{label}</div>
                <div style={{ flex: 1, fontSize: '.78rem', opacity: .8, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  {dayItems.map(p => p.text).join(' · ')}
                </div>
                {allDone && <span style={{ fontSize: '.7rem', color: '#6ee7b7', fontWeight: 700 }}>✓ Done</span>}
              </div>
            );
          })}
          {!generated && (
            <div style={{ textAlign: 'center', fontSize: '.78rem', opacity: .55, padding: '.5rem 0' }}>
              Set up your plan to see your schedule here
            </div>
          )}
        </div>
      )}

      {!open && !generated && (
        <div style={{ fontSize: '.82rem', opacity: .65, textAlign: 'center', padding: '.5rem 0' }}>
          Tell us your exam date + daily hours → we build a day-by-day topic schedule linked to the curriculum.
        </div>
      )}
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────
export default function DashboardPage({ user, onOpenLogin, onUpdateUser }) {
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [planInput, setPlanInput] = useState('');
  const [studyPlan, setStudyPlan] = useState(loadStudyPlan);
  const [profileEditOpen, setProfileEditOpen] = useState(false);
  const [profileForm, setProfileForm] = useState({ name: '', avatar: '🧑‍🎓', phone: '', class_id: '', bio: '' });
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileError, setProfileError] = useState('');
  const [pwOpen, setPwOpen] = useState(false);
  const [pwForm, setPwForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [pwSaving, setPwSaving] = useState(false);
  const [pwError, setPwError] = useState('');
  const [pwSuccess, setPwSuccess] = useState('');
  const [referral, setReferral] = useState(null);
  const [refCopied, setRefCopied] = useState(false);
  const [groupClasses, setGroupClasses] = useState([]);
  const [jitsiOpen, setJitsiOpen] = useState(null);
  const { permission, subscribed, subscribe, loading: pushLoading, supported: pushSupported } = usePushNotifications(user);
  const { t } = useLang();
  const [nudgeDismissed, setNudgeDismissed] = useState(isNudgeDismissed);

  const progress   = loadProgress();
  const lastTopic  = loadLastTopic();
  const mockResults = loadMockResults();
  const quizData   = loadQuizData();
  const weakTopics = loadWeakTopics();
  const progressByClass = computeProgressByClass(progress);
  const totalDone  = Object.keys(progress).length;
  const streak     = computeStreak();
  const badges     = computeBadges(totalDone, mockResults.length, quizData);
  const earnedBadges = badges.filter(b => b.earned);

  // Mark today as a study day
  useEffect(() => {
    if (!user) return;
    const today = new Date().toISOString().slice(0, 10);
    try {
      const dates = JSON.parse(localStorage.getItem('osh_study_dates') || '[]');
      if (!dates.includes(today)) {
        localStorage.setItem('osh_study_dates', JSON.stringify([...dates, today]));
      }
    } catch {}
  }, [user]);

  useEffect(() => {
    if (!user) return;
    api('/bookings/student')
      .then(data => setBookings(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoadingBookings(false));
  }, [user]);

  useEffect(() => {
    if (!user) return;
    api('/students/me/referral').then(setReferral).catch(() => {});
  }, [user]);

  useEffect(() => {
    if (!user) return;
    api('/group-classes/joined').then(d => setGroupClasses(Array.isArray(d) ? d : [])).catch(() => {});
  }, [user]);

  if (!user) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '4rem' }}>🔒</div>
        <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b' }}>{t('dash_login_title')}</h2>
        <p style={{ color: '#6b7280' }}>{t('dash_login_sub')}</p>
        <button className="btn btn-primary" onClick={onOpenLogin}>{t('dash_login_btn')}</button>
      </div>
    );
  }

  const firstName = user.name?.split(' ')[0] || 'Student';
  const hour = new Date().getHours();
  const greeting = hour < 12 ? t('dash_greeting_morning') : hour < 17 ? t('dash_greeting_afternoon') : t('dash_greeting_evening');
  const upcoming = bookings.filter(b => b.status === 'confirmed' || b.status === 'pending')
    .sort((a, b) => new Date(a.scheduled_date) - new Date(b.scheduled_date)).slice(0, 3);
  const completed = bookings.filter(b => b.status === 'completed').length;

  // Study plan helpers
  const today = new Date().toISOString().slice(0, 10);
  const todayPlan = studyPlan.filter(t => t.date === today);
  const doneTodayCount = todayPlan.filter(t => t.done).length;

  function addPlanItem() {
    if (!planInput.trim()) return;
    const updated = [...studyPlan, { id: Date.now(), text: planInput.trim(), done: false, date: today }];
    setStudyPlan(updated); saveStudyPlan(updated); setPlanInput('');
  }
  function togglePlanItem(id) {
    const updated = studyPlan.map(t => t.id === id ? { ...t, done: !t.done } : t);
    setStudyPlan(updated); saveStudyPlan(updated);
  }
  function removePlanItem(id) {
    const updated = studyPlan.filter(t => t.id !== id);
    setStudyPlan(updated); saveStudyPlan(updated);
  }

  function shareReferral() {
    if (!referral) return;
    const link = `${window.location.origin}/?ref=${referral.referral_code}`;
    const text = `Study smarter on OnlineStudyHub — India's best FREE study platform for Class 6-12! Use my code ${referral.referral_code} to join: ${link}`;
    if (navigator.share) {
      navigator.share({ title: 'Join me on OnlineStudyHub!', text, url: link }).catch(() => {});
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
  }

  function copyReferralLink() {
    if (!referral) return;
    const link = `${window.location.origin}/?ref=${referral.referral_code}`;
    navigator.clipboard.writeText(link).then(() => {
      setRefCopied(true);
      setTimeout(() => setRefCopied(false), 2500);
    }).catch(() => {});
  }

  function openProfileEdit() {
    setProfileForm({
      name: user.name || '',
      avatar: user.avatar || '🧑‍🎓',
      phone: user.phone || '',
      class_id: user.class_id || '',
      bio: user.bio || '',
    });
    setProfileError('');
    setProfileEditOpen(true);
  }

  async function saveProfile() {
    if (!profileForm.name.trim()) { setProfileError('Name is required'); return; }
    setProfileSaving(true);
    setProfileError('');
    try {
      const data = await api('/students/me', { method: 'PATCH', body: profileForm });
      onUpdateUser?.({ ...user, ...data, token: data.token || user.token });
      setProfileEditOpen(false);
    } catch (err) {
      setProfileError(err.message || 'Failed to save');
    } finally {
      setProfileSaving(false);
    }
  }

  async function changePassword(e) {
    e.preventDefault();
    setPwError(''); setPwSuccess('');
    if (pwForm.newPassword !== pwForm.confirmPassword) { setPwError('New passwords do not match'); return; }
    if (pwForm.newPassword.length < 6) { setPwError('New password must be at least 6 characters'); return; }
    setPwSaving(true);
    try {
      await api('/students/me/password', { method: 'PATCH', body: { currentPassword: pwForm.currentPassword, newPassword: pwForm.newPassword } });
      setPwSuccess('Password updated successfully!');
      setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setTimeout(() => { setPwSuccess(''); setPwOpen(false); }, 2000);
    } catch (err) {
      setPwError(err.message || 'Failed to update password');
    } finally {
      setPwSaving(false);
    }
  }

  return (
    <div style={{ background: '#f0f2f8', minHeight: '100vh' }}>

      {/* ── Hero header ── */}
      <div className="db-hero">
        <div className="container">
          <div className="db-hero-row">
            <div>
              <div className="db-greeting">{greeting} 👋</div>
              <h1 className="db-hero-name">Welcome back, {firstName}!</h1>
              <p className="db-hero-sub">Here's your personalised learning snapshot.</p>
            </div>
            <div className="db-streak-badge">
              <div className="db-streak-fire">🔥</div>
              <div className="db-streak-num">{streak}</div>
              <div className="db-streak-label">day streak</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container db-body">

        {/* ── Smart Nudge banner ── */}
        {!nudgeDismissed && weakTopics.length > 0 && (
          <SmartNudgeBanner
            weakTopics={weakTopics}
            onDismiss={() => { dismissNudgeStorage(); setNudgeDismissed(true); }}
          />
        )}

        {/* ── Stats row ── */}
        <div className="db-stats-grid">
          <StatCard icon="✅" label="Topics Completed" value={totalDone} color="#059669" />
          <StatCard icon="🏅" label="Badges Earned" value={earnedBadges.length} color="#d97706" />
          <StatCard icon="🎯" label="Mock Tests" value={mockResults.length} color="#4f46e5" />
          <StatCard icon="📅" label="Sessions Done" value={completed} color="#dc2626" />
        </div>

        {/* ── Achievements strip ── */}
        <div className="db-card" style={{ marginBottom: '1.5rem' }}>
          <div className="db-card-head">
            <div className="db-card-title"><span>🏆</span> Achievements & Badges</div>
            <span style={{ fontSize: '.75rem', color: '#6b7280' }}>{earnedBadges.length}/{badges.length} earned</span>
          </div>
          <div className="db-badges-strip">
            {badges.map(b => (
              <div key={b.id} className={`db-badge ${b.earned ? 'earned' : 'locked'}`} title={b.desc}>
                <div className="db-badge-emoji">{b.emoji}</div>
                <div className="db-badge-title">{b.title}</div>
                <div className="db-badge-desc">{b.desc}</div>
                {!b.earned && <div className="db-badge-lock">🔒</div>}
              </div>
            ))}
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="dashboard-main-grid">

          {/* LEFT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Resume */}
            {lastTopic && (
              <SectionCard icon="▶️" title="Resume Where You Left Off">
                <Link to={lastTopic.path} style={{ textDecoration: 'none' }}>
                  <div className="db-resume-card">
                    <div style={{ fontSize: '2rem' }}>{SUB_EMOJI[lastTopic.subjectId] || '📚'}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="db-resume-title">{lastTopic.topicTitle}</div>
                      <div className="db-resume-sub">Class {lastTopic.classId?.replace('class-', '')} · {lastTopic.subjectId}</div>
                    </div>
                    <span className="db-resume-cta">Continue →</span>
                  </div>
                </Link>
              </SectionCard>
            )}

            {/* Progress % by class */}
            <SectionCard icon="📈" title="Progress Tracking">
              {progressByClass.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
                  {progressByClass.slice(0, 6).map(cls => (
                    <Link key={cls.classId} to={`/class/${cls.classId}`} style={{ textDecoration: 'none' }}>
                      <div className="db-progress-row">
                        <div className="db-progress-label">{cls.label}</div>
                        <div className="db-progress-track">
                          <div className="db-progress-fill" style={{ width: `${cls.pct}%` }} />
                        </div>
                        <div className="db-progress-pct">{cls.pct}%</div>
                        <div className="db-progress-count">{cls.done}/{cls.total}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="db-empty">
                  <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>🌱</div>
                  <div>Start completing topics and your progress will appear here.</div>
                  <Link to="/classes" className="db-empty-link">Browse Classes →</Link>
                </div>
              )}
            </SectionCard>

            {/* Weak topic suggestions */}
            {weakTopics.length > 0 && (
              <SectionCard icon="🧠" title="Topics to Review">
                <p style={{ fontSize: '.82rem', color: '#6b7280', marginBottom: '1rem' }}>
                  Based on your quiz scores and confidence ratings — revisit these topics:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
                  {weakTopics.map((t, i) => (
                    <div key={i} className="db-weak-row">
                      <div className="db-weak-icon">{t.type === 'poll' ? '😕' : '📝'}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="db-weak-title">
                          {t.topicTitle || t.topicId?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        </div>
                        <div className="db-weak-reason">
                          {t.type === 'poll'
                            ? t.confidence === 1 ? 'Marked: Not clear' : 'Marked: Somewhat understood'
                            : `Quiz score: ${t.correct}/${t.total}`}
                        </div>
                      </div>
                      {t.classId && t.subjectId && t.topicId && (
                        <Link to={`/class/${t.classId}/subject/${t.subjectId}/topic/${t.topicId}`} className="db-weak-btn">
                          Review →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}

            {/* Mock test results */}
            {mockResults.length > 0 && (
              <SectionCard icon="🎯" title="Recent Mock Tests"
                action={<Link to="/exam/jee" style={{ fontSize: '.78rem', color: '#4f46e5', fontWeight: 700, textDecoration: 'none' }}>View All →</Link>}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
                  {mockResults.slice(0, 3).map((r, i) => {
                    const pct = r.total > 0 ? Math.round((r.correct / r.total) * 100) : 0;
                    const color = pct >= 70 ? '#059669' : pct >= 40 ? '#d97706' : '#dc2626';
                    return (
                      <div key={i} className="db-mock-row">
                        <div className="db-mock-pct" style={{ color }}>{pct}%</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="db-mock-title">Mock Test {i + 1}</div>
                          <div className="db-mock-sub">{r.correct}/{r.total} correct</div>
                        </div>
                        <div className="db-mock-bar-wrap">
                          <div className="db-mock-bar" style={{ width: `${pct}%`, background: color }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SectionCard>
            )}

            {/* Quick links */}
            <SectionCard icon="⚡" title="Quick Links">
              <div className="dashboard-quick-links">
                {[
                  { to: '/classes',     icon: '📚', label: 'Browse Classes', color: '#4f46e5', bg: '#eef2ff' },
                  { to: '/teachers',    icon: '👨‍🏫', label: 'Find Teacher',  color: '#059669', bg: '#ecfdf5' },
                  { to: '/study-plan',  icon: '✨', label: 'AI Study Plan',  color: '#7c3aed', bg: '#f5f3ff' },
                  { to: '/exam/jee',    icon: '🏆', label: 'JEE Prep',      color: '#d97706', bg: '#fffbeb' },
                  { to: '/exam/neet',   icon: '🩺', label: 'NEET Prep',     color: '#dc2626', bg: '#fef2f2' },
                  { to: '/my-bookings',    icon: '📅', label: 'My Bookings',    color: '#7c3aed', bg: '#f5f3ff' },
                  { to: '/group-classes', icon: '🎥', label: 'Group Classes',  color: '#dc2626', bg: '#fef2f2' },
                ].map(l => (
                  <Link key={l.to} to={l.to} style={{ textDecoration: 'none' }}>
                    <div className="db-quick-item" style={{ background: l.bg, color: l.color }}>
                      <span style={{ fontSize: '1.2rem' }}>{l.icon}</span> {l.label}
                    </div>
                  </Link>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* RIGHT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Profile Card */}
            <SectionCard icon="👤" title="My Profile"
              action={!profileEditOpen ? (
                <button onClick={openProfileEdit} style={{ fontSize: '.78rem', color: '#4f46e5', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Edit →
                </button>
              ) : null}>
              {!profileEditOpen ? (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ fontSize: '3rem', lineHeight: 1, flexShrink: 0 }}>{user.avatar || '🧑‍🎓'}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '1rem', marginBottom: '.2rem' }}>{user.name}</div>
                    <div style={{ color: '#6b7280', fontSize: '.82rem', marginBottom: '.15rem' }}>✉️ {user.email}</div>
                    {user.phone && <div style={{ color: '#6b7280', fontSize: '.82rem', marginBottom: '.15rem' }}>📞 {user.phone}</div>}
                    {user.class_id && <div style={{ color: '#6b7280', fontSize: '.82rem', marginBottom: '.15rem' }}>🏫 Class {user.class_id.replace('class-', '')}</div>}
                    {user.bio && <div style={{ color: '#374151', fontSize: '.82rem', marginTop: '.35rem', fontStyle: 'italic' }}>"{user.bio}"</div>}
                    {!user.phone && !user.bio && <div style={{ color: '#9ca3af', fontSize: '.78rem', marginTop: '.35rem' }}>Tap Edit to complete your profile.</div>}
                  </div>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); saveProfile(); }} style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  <div>
                    <div style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', marginBottom: '.4rem' }}>Avatar</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
                      {AVATAR_OPTIONS.map(em => (
                        <button key={em} type="button"
                          onClick={() => setProfileForm(f => ({ ...f, avatar: em }))}
                          style={{ fontSize: '1.4rem', width: 38, height: 38, border: profileForm.avatar === em ? '2px solid #4f46e5' : '2px solid transparent', borderRadius: 8, background: profileForm.avatar === em ? '#eef2ff' : '#f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {em}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Full Name *</label>
                    <input value={profileForm.name} onChange={e => setProfileForm(f => ({ ...f, name: e.target.value }))}
                      style={{ width: '100%', padding: '.45rem .65rem', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: '.88rem', boxSizing: 'border-box' }}
                      placeholder="Your name" maxLength={60} required />
                  </div>
                  <div>
                    <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Email</label>
                    <input value={user.email} disabled
                      style={{ width: '100%', padding: '.45rem .65rem', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: '.88rem', boxSizing: 'border-box', background: '#f3f4f6', color: '#9ca3af' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Phone</label>
                    <input value={profileForm.phone} onChange={e => setProfileForm(f => ({ ...f, phone: e.target.value }))}
                      style={{ width: '100%', padding: '.45rem .65rem', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: '.88rem', boxSizing: 'border-box' }}
                      placeholder="+91 98765 43210" maxLength={20} type="tel" />
                  </div>
                  <div>
                    <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Class</label>
                    <select value={profileForm.class_id} onChange={e => setProfileForm(f => ({ ...f, class_id: e.target.value }))}
                      style={{ width: '100%', padding: '.45rem .65rem', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: '.88rem', boxSizing: 'border-box' }}>
                      <option value="">— Select class —</option>
                      {getAllClasses().map(cls => (
                        <option key={cls.id} value={cls.id}>{cls.label || cls.id.replace('class-', 'Class ')}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>Bio</label>
                    <textarea value={profileForm.bio} onChange={e => setProfileForm(f => ({ ...f, bio: e.target.value }))}
                      style={{ width: '100%', padding: '.45rem .65rem', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: '.88rem', boxSizing: 'border-box', resize: 'vertical', minHeight: 60 }}
                      placeholder="Tell us a bit about yourself…" maxLength={200} rows={2} />
                  </div>
                  {profileError && <div style={{ color: '#dc2626', fontSize: '.8rem' }}>{profileError}</div>}
                  <div style={{ display: 'flex', gap: '.65rem' }}>
                    <button type="submit" disabled={profileSaving}
                      style={{ flex: 1, padding: '.5rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '.88rem', cursor: profileSaving ? 'not-allowed' : 'pointer', opacity: profileSaving ? .7 : 1 }}>
                      {profileSaving ? 'Saving…' : 'Save Profile'}
                    </button>
                    <button type="button" onClick={() => setProfileEditOpen(false)}
                      style={{ padding: '.5rem 1rem', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: '.88rem', cursor: 'pointer' }}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </SectionCard>

            {/* Change Password */}
            <SectionCard icon="🔒" title="Change Password"
              action={
                <button onClick={() => { setPwOpen(o => !o); setPwError(''); setPwSuccess(''); setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' }); }}
                  style={{ fontSize: '.78rem', color: '#4f46e5', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  {pwOpen ? 'Cancel' : 'Change →'}
                </button>
              }>
              {!pwOpen ? (
                <div style={{ color: '#9ca3af', fontSize: '.82rem' }}>Keep your account secure with a strong password.</div>
              ) : (
                <form onSubmit={changePassword} style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
                  {[
                    ['currentPassword', 'Current Password'],
                    ['newPassword',     'New Password'],
                    ['confirmPassword', 'Confirm New Password'],
                  ].map(([field, label]) => (
                    <div key={field}>
                      <label style={{ fontSize: '.75rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '.3rem' }}>{label}</label>
                      <input type="password" value={pwForm[field]}
                        onChange={e => setPwForm(f => ({ ...f, [field]: e.target.value }))}
                        style={{ width: '100%', padding: '.45rem .65rem', borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: '.88rem', boxSizing: 'border-box' }}
                        placeholder="••••••••" required minLength={field === 'currentPassword' ? 1 : 6} />
                    </div>
                  ))}
                  {pwError   && <div style={{ color: '#dc2626', fontSize: '.8rem' }}>{pwError}</div>}
                  {pwSuccess && <div style={{ color: '#059669', fontSize: '.8rem', fontWeight: 700 }}>{pwSuccess}</div>}
                  <button type="submit" disabled={pwSaving}
                    style={{ padding: '.5rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '.88rem', cursor: pwSaving ? 'not-allowed' : 'pointer', opacity: pwSaving ? .7 : 1 }}>
                    {pwSaving ? 'Updating…' : 'Update Password'}
                  </button>
                </form>
              )}
            </SectionCard>

            {/* Referral Card */}
            {referral && (
              <SectionCard icon="🎁" title="Refer Friends">
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '.82rem', color: '#6b7280', marginBottom: '1rem', lineHeight: 1.5 }}>
                    Invite friends to OnlineStudyHub. Every friend who joins adds to your count!
                  </p>

                  {/* Code badge */}
                  <div style={{
                    background: 'linear-gradient(135deg, #eef2ff, #f5f3ff)',
                    border: '2px dashed #818cf8',
                    borderRadius: 14, padding: '1rem 1.25rem',
                    marginBottom: '1rem',
                  }}>
                    <div style={{ fontSize: '.7rem', fontWeight: 700, color: '#6b7280', marginBottom: '.3rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                      Your Referral Code
                    </div>
                    <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.9rem', color: '#4f46e5', letterSpacing: '.14em' }}>
                      {referral.referral_code}
                    </div>
                    <div style={{ fontSize: '.75rem', color: '#059669', fontWeight: 700, marginTop: '.3rem' }}>
                      {referral.referral_count} {referral.referral_count === 1 ? 'friend' : 'friends'} joined
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
                    <button
                      onClick={shareReferral}
                      style={{
                        padding: '.6rem 1rem', background: '#25D366', color: '#fff',
                        border: 'none', borderRadius: 10, fontWeight: 700, fontSize: '.88rem',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem',
                      }}
                    >
                      <span>📱</span> Share via WhatsApp
                    </button>
                    <button
                      onClick={copyReferralLink}
                      style={{
                        padding: '.6rem 1rem',
                        background: refCopied ? '#059669' : '#f3f4f6',
                        color: refCopied ? '#fff' : '#374151',
                        border: '1.5px solid #e5e7eb', borderRadius: 10,
                        fontWeight: 600, fontSize: '.88rem',
                        cursor: 'pointer', transition: 'all .2s',
                      }}
                    >
                      {refCopied ? '✓ Link Copied!' : '🔗 Copy Referral Link'}
                    </button>
                  </div>
                </div>
              </SectionCard>
            )}

            {/* Push Notifications */}
            {pushSupported && permission !== 'granted' && !subscribed && (
              <SectionCard icon="🔔" title="Session Reminders">
                <p style={{ fontSize: '.82rem', color: '#6b7280', marginBottom: '1rem', lineHeight: 1.5 }}>
                  Get push notifications when your sessions are confirmed or upcoming.
                </p>
                <button
                  onClick={() => subscribe()}
                  disabled={pushLoading || permission === 'denied'}
                  style={{
                    width: '100%', padding: '.65rem',
                    background: permission === 'denied' ? '#f3f4f6' : '#4f46e5',
                    color: permission === 'denied' ? '#9ca3af' : '#fff',
                    border: 'none', borderRadius: 10, fontWeight: 700, fontSize: '.88rem',
                    cursor: permission === 'denied' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {pushLoading ? '…' : permission === 'denied' ? '🚫 Notifications blocked' : '🔔 Enable Notifications'}
                </button>
                {permission === 'denied' && (
                  <p style={{ fontSize: '.72rem', color: '#9ca3af', marginTop: '.5rem', textAlign: 'center' }}>
                    Allow in browser settings to enable.
                  </p>
                )}
              </SectionCard>
            )}
            {(subscribed || permission === 'granted') && (
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '.75rem 1rem', fontSize: '.82rem', color: '#166534', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                ✅ Push notifications are enabled
              </div>
            )}

            {/* AI Learning Path */}
            <LearningPathCard
              user={user}
              progress={progress}
              weakTopics={weakTopics}
              studyPlan={studyPlan}
              onPlanChange={updated => { setStudyPlan(updated); saveStudyPlan(updated); }}
            />

            {/* Study Planner */}
            <SectionCard icon="📅" title="Today's Study Plan">
              {todayPlan.length > 0 && (
                <div style={{ marginBottom: '.75rem', fontSize: '.78rem', color: '#6b7280', fontWeight: 600 }}>
                  {doneTodayCount}/{todayPlan.length} goals done today
                  <div className="db-progress-track" style={{ marginTop: '.35rem', height: 6 }}>
                    <div className="db-progress-fill" style={{ width: todayPlan.length ? `${(doneTodayCount/todayPlan.length)*100}%` : '0%', background: '#16a34a' }} />
                  </div>
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '.85rem' }}>
                {todayPlan.map(item => (
                  <div key={item.id} className={`db-plan-item ${item.done ? 'done' : ''}`}>
                    <button className="db-plan-check" onClick={() => togglePlanItem(item.id)}>
                      {item.done ? '✅' : '⬜'}
                    </button>
                    {item.path ? (
                      <Link to={item.path} className="db-plan-text" style={{ color: 'inherit', textDecoration: 'none', flex: 1, minWidth: 0 }}>
                        {item.text}
                        {item.isWeak && <span style={{ marginLeft: '.4rem', fontSize: '.65rem', background: '#fef3c7', color: '#92400e', padding: '.1rem .35rem', borderRadius: 6, fontWeight: 700, whiteSpace: 'nowrap' }}>review</span>}
                        <span style={{ marginLeft: '.35rem', fontSize: '.7rem', opacity: .5 }}>→</span>
                      </Link>
                    ) : (
                      <span className="db-plan-text">{item.text}</span>
                    )}
                    <button className="db-plan-del" onClick={() => removePlanItem(item.id)}>✕</button>
                  </div>
                ))}
                {todayPlan.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '1rem', color: '#9ca3af', fontSize: '.82rem' }}>
                    📋 No goals set for today yet.
                  </div>
                )}
              </div>
              <div className="db-plan-input-row">
                <input
                  className="db-plan-input"
                  value={planInput}
                  onChange={e => setPlanInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && addPlanItem()}
                  placeholder="Add a study goal…"
                  maxLength={80}
                />
                <button className="db-plan-add" onClick={addPlanItem}>Add</button>
              </div>
            </SectionCard>

            {/* Upcoming sessions */}
            <SectionCard icon="🗓️" title="Upcoming Sessions"
              action={<Link to="/my-bookings" style={{ fontSize: '.78rem', color: '#4f46e5', fontWeight: 700, textDecoration: 'none' }}>All →</Link>}>
              {loadingBookings && <div className="db-empty">Loading…</div>}
              {!loadingBookings && upcoming.length === 0 && (
                <div className="db-empty">
                  <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>📭</div>
                  <div style={{ marginBottom: '.75rem' }}>No upcoming sessions</div>
                  <Link to="/teachers" className="db-empty-link">Book a Session →</Link>
                </div>
              )}
              {upcoming.map(b => {
                const date = b.scheduled_date ? new Date(b.scheduled_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—';
                const confirmed = b.status === 'confirmed';
                return (
                  <div key={b._id} className={`db-session-card ${confirmed ? 'confirmed' : 'pending'}`}>
                    <div className="db-session-topic">
                      {b.topic_id?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Session'}
                    </div>
                    <div className="db-session-meta">{date} · {b.time_slot}</div>
                    <div className="db-session-footer">
                      <span className="db-session-badge">{confirmed ? '✅ Confirmed' : '⏳ Pending'}</span>
                      {confirmed && b.meet_link && (
                        <a href={b.meet_link} target="_blank" rel="noopener noreferrer" className="db-session-join">📹 Join</a>
                      )}
                    </div>
                  </div>
                );
              })}
            </SectionCard>

            {/* Group Classes */}
            <SectionCard icon="🎥" title="My Group Classes"
              action={<Link to="/group-classes" style={{ fontSize: '.78rem', color: '#4f46e5', fontWeight: 700, textDecoration: 'none' }}>Browse All →</Link>}>
              {groupClasses.length === 0 ? (
                <div className="db-empty">
                  <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>🎥</div>
                  <div style={{ marginBottom: '.75rem' }}>No group classes registered</div>
                  <Link to="/group-classes" className="db-empty-link">Find Live Classes →</Link>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
                  {groupClasses.map(gc => {
                    const isLive = gc.status === 'live';
                    const dt = new Date(gc.scheduledAt);
                    const dateStr = dt.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
                    const timeStr = dt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
                    return (
                      <div key={gc._id} className={`db-session-card ${isLive ? 'confirmed' : 'pending'}`}>
                        <div className="db-session-topic" style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                          {isLive && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#dc2626', flexShrink: 0, animation: 'liveDot 1.5s ease-in-out infinite' }} />}
                          {gc.title}
                        </div>
                        <div className="db-session-meta">{dateStr} · {timeStr} · {gc.durationMin}m</div>
                        <div className="db-session-footer">
                          <span className="db-session-badge">{isLive ? '🔴 Live Now' : '🗓 Upcoming'}</span>
                          {isLive && (
                            <button
                              onClick={() => setJitsiOpen(gc)}
                              style={{ fontSize: '.75rem', color: '#fff', background: '#dc2626', border: 'none', borderRadius: 6, padding: '.25rem .65rem', fontWeight: 700, cursor: 'pointer' }}
                            >
                              🎥 Join
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </SectionCard>

            {/* Jitsi inline join */}
            {jitsiOpen && (
              <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,.85)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
                onClick={e => e.target === e.currentTarget && setJitsiOpen(null)}>
                <div style={{ width: '100%', maxWidth: 960, background: '#000', borderRadius: 16, overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,.6)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.75rem 1.25rem', background: '#1e1b4b' }}>
                    <div style={{ color: '#fff', fontFamily: 'Nunito', fontWeight: 800, fontSize: '.95rem' }}>🎥 {jitsiOpen.title}</div>
                    <button onClick={() => setJitsiOpen(null)} style={{ background: 'rgba(255,255,255,.15)', border: 'none', color: '#fff', borderRadius: 8, padding: '.35rem .75rem', cursor: 'pointer', fontWeight: 700 }}>✕ Leave</button>
                  </div>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={`https://meet.jit.si/${jitsiOpen.jitsiRoomId}#config.prejoinPageEnabled=false`}
                      allow="camera; microphone; fullscreen; display-capture"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                      title="Live Class"
                    />
                  </div>
                </div>
              </div>
            )}
            <style>{`@keyframes liveDot { 0%,100% { opacity:1; } 50% { opacity:.3; } }`}</style>

            {/* Study tip */}
            <div className="db-tip-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>💡</div>
              <h3 className="db-tip-title">Study Tip</h3>
              <p className="db-tip-body">
                Complete <strong>3 topics a day</strong> and use the quiz after each one.
                Students who quiz themselves retain <strong>50% more</strong> than passive readers.
                Check the weak topics panel above to prioritise your revision!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
