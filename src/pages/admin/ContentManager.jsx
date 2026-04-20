import React, { useState, useEffect, useRef } from 'react';
import { CURRICULUM, SUBJECT_META, NAV_CLASSES } from '../../data/curriculum';

// ── constants ────────────────────────────────────────────────────
const RESOURCE_TYPES = [
  { type: 'audio',       label: 'Audio Overview',  icon: '🎧', accept: 'audio/*',       maxMB: 15, color: '#7c3aed', bg: '#f5f3ff' },
  { type: 'video',       label: 'Video Lesson',    icon: '🎬', accept: null,             maxMB: null, color: '#dc2626', bg: '#fef2f2' },
  { type: 'report',      label: 'Study Notes',     icon: '📄', accept: '.pdf,application/pdf', maxMB: 15, color: '#0369a1', bg: '#f0f9ff' },
  { type: 'quiz',        label: 'Quiz',            icon: '🧠', accept: null,             maxMB: null, color: '#059669', bg: '#ecfdf5' },
  { type: 'infographic', label: 'Infographic',     icon: '🖼️', accept: 'image/*',        maxMB: 8,  color: '#d97706', bg: '#fffbeb' },
];

const ALL_CLASSES = [
  ...NAV_CLASSES,
  { id: 'jee', label: 'JEE' },
  { id: 'neet', label: 'NEET' },
];

// ── helpers ──────────────────────────────────────────────────────
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function fmtSize(bytes) {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ── QuizBuilder sub-component ─────────────────────────────────────
function QuizBuilder({ quiz, onChange }) {
  function addQ() {
    onChange([...quiz, { question: '', options: ['', '', '', ''], correct: 0, explanation: '' }]);
  }
  function removeQ(i) { onChange(quiz.filter((_, idx) => idx !== i)); }
  function setQ(i, field, val) {
    const updated = quiz.map((q, idx) => idx === i ? { ...q, [field]: val } : q);
    onChange(updated);
  }
  function setOption(qi, oi, val) {
    const updated = quiz.map((q, idx) => {
      if (idx !== qi) return q;
      const opts = [...q.options];
      opts[oi] = val;
      return { ...q, options: opts };
    });
    onChange(updated);
  }

  return (
    <div className="cm-quiz-builder">
      {quiz.map((q, qi) => (
        <div key={qi} className="cm-quiz-question-card">
          <div className="cm-quiz-q-header">
            <span className="cm-quiz-q-num">Q{qi + 1}</span>
            <button type="button" className="cm-quiz-remove-btn" onClick={() => removeQ(qi)}>✕</button>
          </div>
          <textarea
            className="cm-input cm-textarea"
            placeholder="Question text…"
            value={q.question}
            onChange={e => setQ(qi, 'question', e.target.value)}
            rows={2}
          />
          <div className="cm-quiz-options-grid">
            {q.options.map((opt, oi) => (
              <label key={oi} className={`cm-quiz-option-row ${q.correct === oi ? 'correct-option' : ''}`}>
                <input
                  type="radio" name={`correct-${qi}`} checked={q.correct === oi}
                  onChange={() => setQ(qi, 'correct', oi)}
                />
                <input
                  type="text" className="cm-input cm-option-input"
                  placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                  value={opt}
                  onChange={e => setOption(qi, oi, e.target.value)}
                />
              </label>
            ))}
          </div>
          <input
            type="text" className="cm-input"
            placeholder="Explanation (optional)"
            value={q.explanation}
            onChange={e => setQ(qi, 'explanation', e.target.value)}
          />
        </div>
      ))}
      <button type="button" className="cm-add-question-btn" onClick={addQ}>
        + Add Question
      </button>
    </div>
  );
}

// ── Upload Card ──────────────────────────────────────────────────
function UploadCard({ rtype, item, topicTitle, onSave, onDelete, saving }) {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState(item?.title || '');
  const [videoUrl, setVideoUrl] = useState(item?.videoUrl || '');
  const [quiz, setQuiz] = useState(item?.quiz || []);
  const [fileInfo, setFileInfo] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [err, setErr] = useState('');
  const fileRef = useRef();

  const hasContent = Boolean(item);
  const isFile = rtype.accept !== null && rtype.type !== 'quiz';

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setErr('');
    if (rtype.maxMB && file.size > rtype.maxMB * 1024 * 1024) {
      setErr(`File too large. Max ${rtype.maxMB} MB.`); return;
    }
    try {
      const b64 = await fileToBase64(file);
      setFileData(b64);
      setFileInfo({ name: file.name, size: file.size, mime: file.type });
    } catch { setErr('Could not read file.'); }
  }

  async function handleSave() {
    setErr('');
    const payload = { type: rtype.type, title };
    if (isFile) {
      if (!fileData && !hasContent) { setErr('Please select a file.'); return; }
      if (fileData) {
        payload.fileData = fileData;
        payload.fileName = fileInfo?.name;
        payload.mimeType = fileInfo?.mime;
        payload.fileSize = fileInfo?.size;
      }
    } else if (rtype.type === 'video') {
      if (!videoUrl.trim()) { setErr('Please enter a YouTube URL.'); return; }
      payload.videoUrl = videoUrl.trim();
    } else if (rtype.type === 'quiz') {
      if (!quiz.length) { setErr('Add at least one question.'); return; }
      payload.quiz = quiz;
    }
    await onSave(payload);
    setExpanded(false);
    setFileData(null);
    setFileInfo(null);
  }

  return (
    <div
      className={`cm-upload-card ${hasContent ? 'has-content' : ''}`}
      style={{ '--cc': rtype.color, '--cbg': rtype.bg }}
    >
      <div className="cm-card-top" onClick={() => setExpanded(e => !e)}>
        <div className="cm-card-icon">{rtype.icon}</div>
        <div className="cm-card-info">
          <div className="cm-card-label">{rtype.label}</div>
          {hasContent && item.title && <div className="cm-card-title">{item.title}</div>}
          {hasContent && item.fileName && <div className="cm-card-meta">{item.fileName} · {fmtSize(item.fileSize)}</div>}
          {hasContent && item.videoUrl && <div className="cm-card-meta">YouTube linked</div>}
          {hasContent && item.quiz?.length > 0 && <div className="cm-card-meta">{item.quiz.length} questions</div>}
        </div>
        <div className="cm-card-status">
          {hasContent
            ? <span className="cm-badge cm-badge-ready">✓ Uploaded</span>
            : <span className="cm-badge cm-badge-empty">+ Add</span>
          }
          <span className="cm-expand-icon">{expanded ? '▲' : '▼'}</span>
        </div>
      </div>

      {expanded && (
        <div className="cm-card-form">
          <input
            type="text" className="cm-input"
            placeholder={`Title for this ${rtype.label} (optional)`}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          {isFile && (
            <div className="cm-file-upload-area" onClick={() => fileRef.current.click()}>
              <input ref={fileRef} type="file" accept={rtype.accept} style={{ display: 'none' }} onChange={handleFile} />
              {fileInfo ? (
                <div className="cm-file-selected">
                  <span>{rtype.icon}</span>
                  <span>{fileInfo.name}</span>
                  <span className="cm-file-size">{fmtSize(fileInfo.size)}</span>
                </div>
              ) : hasContent && !fileData ? (
                <div className="cm-file-selected cm-file-existing">
                  <span>{rtype.icon}</span>
                  <span>Current: {item?.fileName || 'file uploaded'}</span>
                  <span className="cm-file-size">Click to replace</span>
                </div>
              ) : (
                <div className="cm-file-placeholder">
                  <span style={{ fontSize: '2rem' }}>{rtype.icon}</span>
                  <span>Click to upload {rtype.label}</span>
                  <span className="cm-file-hint">Max {rtype.maxMB} MB</span>
                </div>
              )}
            </div>
          )}

          {rtype.type === 'video' && (
            <input
              type="url" className="cm-input"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={e => setVideoUrl(e.target.value)}
            />
          )}

          {rtype.type === 'quiz' && (
            <QuizBuilder quiz={quiz} onChange={setQuiz} />
          )}

          {err && <div className="cm-error">{err}</div>}

          <div className="cm-card-actions">
            <button
              type="button" className="cm-save-btn"
              onClick={handleSave} disabled={saving}
            >
              {saving ? '⏳ Saving…' : hasContent ? '💾 Update' : '⬆ Upload'}
            </button>
            {hasContent && (
              <button type="button" className="cm-delete-btn" onClick={() => onDelete(item._id)}>
                🗑 Remove
              </button>
            )}
            <button type="button" className="cm-cancel-btn" onClick={() => setExpanded(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Sidebar: uploaded items list ──────────────────────────────────
function SidebarItem({ item, onSelect, active }) {
  const rtype = RESOURCE_TYPES.find(r => r.type === item.type);
  return (
    <button
      className={`cm-sidebar-item ${active ? 'active' : ''}`}
      onClick={() => onSelect(item)}
    >
      <span className="cm-sidebar-icon">{rtype?.icon}</span>
      <div className="cm-sidebar-info">
        <div className="cm-sidebar-title">{item.title || rtype?.label}</div>
        <div className="cm-sidebar-meta">{item.topicId} · {item.classId}</div>
      </div>
      <span className="cm-sidebar-dot" style={{ background: rtype?.color }} />
    </button>
  );
}

// ── Main ContentManager ───────────────────────────────────────────
export default function ContentManager({ token }) {
  // Topic selector state
  const [selClass,   setSelClass]   = useState('');
  const [selSubject, setSelSubject] = useState('');
  const [selTopic,   setSelTopic]   = useState('');

  // Media state for selected topic
  const [mediaMap, setMediaMap]   = useState({});
  const [loading,  setLoading]    = useState(false);
  const [saving,   setSaving]     = useState(null);
  const [toast,    setToast]      = useState('');

  // All uploaded items (sidebar)
  const [allItems, setAllItems]   = useState([]);
  const [sidebarSearch, setSidebarSearch] = useState('');

  const classData    = selClass   ? CURRICULUM[selClass]   : null;
  const subjectData  = selSubject ? classData?.subjects?.[selSubject] : null;
  const subjects     = classData  ? Object.keys(classData.subjects || {}) : [];
  const topics       = subjectData ? subjectData.topics : [];
  const topicObj     = topics.find(t => t.id === selTopic);

  // Load all uploaded items on mount
  useEffect(() => {
    fetch('/api/media/mine/all', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.ok ? r.json() : [])
      .then(setAllItems)
      .catch(() => {});
  }, [token]);

  // Load media for selected topic
  useEffect(() => {
    if (!selClass || !selSubject || !selTopic) { setMediaMap({}); return; }
    setLoading(true);
    fetch(`/api/media/${selClass}/${selSubject}/${selTopic}`)
      .then(r => r.ok ? r.json() : [])
      .then(items => {
        const map = {};
        items.forEach(i => { map[i.type] = i; });
        setMediaMap(map);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [selClass, selSubject, selTopic]);

  function showToast(msg) { setToast(msg); setTimeout(() => setToast(''), 3000); }

  async function handleSave(rtype, payload) {
    setSaving(rtype.type);
    try {
      const res = await fetch('/api/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ classId: selClass, subjectId: selSubject, topicId: selTopic, ...payload }),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      const saved = await res.json();
      setMediaMap(m => ({ ...m, [rtype.type]: saved }));
      setAllItems(prev => {
        const idx = prev.findIndex(i => i.type === rtype.type && i.classId === selClass && i.subjectId === selSubject && i.topicId === selTopic);
        if (idx >= 0) { const n = [...prev]; n[idx] = saved; return n; }
        return [saved, ...prev];
      });
      showToast(`✅ ${rtype.label} saved!`);
    } catch (e) {
      showToast(`❌ ${e.message}`);
    }
    setSaving(null);
  }

  async function handleDelete(id) {
    if (!window.confirm('Remove this resource?')) return;
    try {
      const res = await fetch(`/api/media/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Delete failed');
      setMediaMap(m => {
        const n = { ...m };
        Object.keys(n).forEach(k => { if (n[k]?._id === id) delete n[k]; });
        return n;
      });
      setAllItems(prev => prev.filter(i => i._id !== id));
      showToast('🗑 Removed');
    } catch (e) {
      showToast(`❌ ${e.message}`);
    }
  }

  // Jump to a sidebar item's topic
  function handleSidebarSelect(item) {
    setSelClass(item.classId);
    setTimeout(() => {
      setSelSubject(item.subjectId);
      setTimeout(() => setSelTopic(item.topicId), 50);
    }, 50);
  }

  const filteredSidebar = allItems.filter(i => {
    if (!sidebarSearch) return true;
    const q = sidebarSearch.toLowerCase();
    return i.topicId.includes(q) || i.title?.toLowerCase().includes(q) || i.classId.includes(q);
  });

  return (
    <div className="cm-root">
      {/* ── Toast ── */}
      {toast && <div className="cm-toast">{toast}</div>}

      {/* ── Layout ── */}
      <div className="cm-layout">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="cm-sidebar">
          <div className="cm-sidebar-header">
            <div className="cm-sidebar-title-row">
              <span>📂</span>
              <span>Uploaded Resources</span>
            </div>
            <input
              type="text" className="cm-sidebar-search"
              placeholder="Search…"
              value={sidebarSearch}
              onChange={e => setSidebarSearch(e.target.value)}
            />
          </div>
          <div className="cm-sidebar-list">
            {filteredSidebar.length === 0 ? (
              <div className="cm-sidebar-empty">
                {allItems.length === 0 ? 'No uploads yet' : 'No matches'}
              </div>
            ) : filteredSidebar.map(item => (
              <SidebarItem
                key={item._id}
                item={item}
                active={item.classId === selClass && item.subjectId === selSubject && item.topicId === selTopic}
                onSelect={handleSidebarSelect}
              />
            ))}
          </div>
          <div className="cm-sidebar-stats">
            <span>{allItems.length} resource{allItems.length !== 1 ? 's' : ''}</span>
            <span>{RESOURCE_TYPES.filter(r => allItems.some(i => i.type === r.type)).length}/{RESOURCE_TYPES.length} types</span>
          </div>
        </aside>

        {/* ── MAIN PANEL ── */}
        <main className="cm-main">

          {/* Topic Selector */}
          <div className="cm-selector">
            <div className="cm-selector-title">Select Topic</div>
            <div className="cm-selector-row">
              <select className="cm-select" value={selClass} onChange={e => { setSelClass(e.target.value); setSelSubject(''); setSelTopic(''); }}>
                <option value="">— Class —</option>
                {ALL_CLASSES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>

              <select className="cm-select" value={selSubject} onChange={e => { setSelSubject(e.target.value); setSelTopic(''); }} disabled={!selClass}>
                <option value="">— Subject —</option>
                {subjects.map(s => <option key={s} value={s}>{SUBJECT_META[s]?.label || s}</option>)}
              </select>

              <select className="cm-select" value={selTopic} onChange={e => setSelTopic(e.target.value)} disabled={!selSubject}>
                <option value="">— Topic —</option>
                {topics.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
              </select>
            </div>

            {topicObj && (
              <div className="cm-topic-pill">
                <span>{CURRICULUM[selClass]?.emoji}</span>
                <strong>{CURRICULUM[selClass]?.label}</strong>
                <span>›</span>
                <span>{SUBJECT_META[selSubject]?.icon} {SUBJECT_META[selSubject]?.label || selSubject}</span>
                <span>›</span>
                <span>{topicObj.title}</span>
              </div>
            )}
          </div>

          {/* Upload cards */}
          {!selTopic ? (
            <div className="cm-empty-state">
              <div className="cm-empty-icon">📚</div>
              <h3>Select a topic to manage its resources</h3>
              <p>Choose a Class, Subject, and Topic above to upload or edit its audio, video, notes, quiz, and infographic.</p>
            </div>
          ) : loading ? (
            <div className="cm-loading">Loading…</div>
          ) : (
            <div className="cm-cards-grid">
              {RESOURCE_TYPES.map(rtype => (
                <UploadCard
                  key={rtype.type}
                  rtype={rtype}
                  item={mediaMap[rtype.type] || null}
                  topicTitle={topicObj?.title}
                  onSave={(payload) => handleSave(rtype, payload)}
                  onDelete={handleDelete}
                  saving={saving === rtype.type}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
