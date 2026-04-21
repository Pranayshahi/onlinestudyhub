import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTopic, getClass, SUBJECT_META } from '../data/curriculum';

const BASE_SYSTEM = 'You are a friendly, patient study assistant for Indian school students (Class 6–12, JEE, NEET). Explain concepts clearly and concisely. Use simple language. When helpful, use numbered steps or bullet points. Stay focused on academic topics.';

function buildSystemPrompt(location) {
  const m = location.pathname.match(/\/class\/([^/]+)\/subject\/([^/]+)\/topic\/([^/]+)/);
  if (!m) return BASE_SYSTEM;

  const [, classId, subjectId, topicId] = m;
  const classData = getClass(classId);
  const topic = getTopic(classId, subjectId, topicId);
  const meta = SUBJECT_META[subjectId] || {};

  if (!topic) return BASE_SYSTEM;

  return `${BASE_SYSTEM}

CURRENT CONTEXT: The student is studying "${topic.title}" in ${meta.label || subjectId} for ${classData?.label || classId}.
Topic definition: ${topic.definition || 'N/A'}
Subtopics covered: ${topic.subtopics || 'N/A'}

Prioritise explanations related to this topic when relevant.`;
}

const WELCOME = 'Hi! I\'m your AI study helper 👋\nAsk me any doubt about Maths, Science, History, English — any subject!\n\nYou can also upload a PDF, DOCX, or TXT to ask questions from your own notes or textbook.';

function SourceBadge({ source }) {
  if (!source) return null;
  return (
    <span style={{
      display: 'inline-block', fontSize: '.68rem', fontWeight: 700,
      padding: '.2rem .55rem', borderRadius: 99, marginTop: '.35rem',
      background: source === 'document' ? '#eff6ff' : '#f0fdf4',
      color: source === 'document' ? '#2563eb' : '#16a34a',
      border: `1px solid ${source === 'document' ? '#bfdbfe' : '#bbf7d0'}`,
    }}>
      {source === 'document' ? '📄 From your document' : '🧠 General knowledge'}
    </span>
  );
}

export default function AIDoubtPanel({ open, onClose }) {
  const location = useLocation();
  const [messages, setMessages] = useState([{ role: 'assistant', content: WELCOME }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadId, setUploadId] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Show context pill when on a topic page
  const topicMatch = location.pathname.match(/\/class\/([^/]+)\/subject\/([^/]+)\/topic\/([^/]+)/);
  let contextLabel = null;
  if (topicMatch) {
    const topic = getTopic(topicMatch[1], topicMatch[2], topicMatch[3]);
    const meta = SUBJECT_META[topicMatch[2]] || {};
    if (topic) contextLabel = `${meta.icon || ''} ${topic.title}`;
  }

  async function handleFileUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadError('');
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/ai-doubt/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      setUploadId(data.uploadId);
      setUploadedFile({ name: data.fileName, chunks: data.chunks });
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `✅ Document loaded: **${data.fileName}** (${data.chunks} sections indexed)\n\nNow ask me anything from this document!`,
      }]);
    } catch (err) {
      setUploadError(err.message);
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  }

  function removeDocument() {
    setUploadId(null);
    setUploadedFile(null);
    setUploadError('');
  }

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const history = messages
        .filter((_, i) => i > 0)
        .concat(userMsg)
        .map(m => ({ role: m.role, content: m.content }));

      const res = await fetch('/api/ai-doubt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history,
          system: buildSystemPrompt(location),
          uploadId: uploadId || undefined,
        }),
      });

      const data = await res.json();

      if (data.blocked) {
        setMessages(prev => [...prev, { role: 'assistant', content: `🚫 ${data.reason}`, blocked: true }]);
      } else if (!res.ok) {
        throw new Error(data.error || 'Request failed');
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply, source: data.source }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Something went wrong: ${err.message}` }]);
    }
    setLoading(false);
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  }

  const suggestions = contextLabel
    ? [`Explain ${topicMatch ? getTopic(topicMatch[1], topicMatch[2], topicMatch[3])?.title : ''}`, 'Give me an example', 'What are common exam questions on this?']
    : ['Explain Newton\'s laws', 'What is photosynthesis?', 'Solve: 2x + 5 = 15'];

  return (
    <>
      <div className={`ai-backdrop ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`ai-panel ${open ? 'open' : ''}`}>

        {/* Header */}
        <div className="ai-panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div className="ai-panel-avatar">🤖</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#fff' }}>AI Doubt Helper</div>
              <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.65)' }}>
                {contextLabel ? `Studying: ${contextLabel}` : 'Ask anything · Class 6–12, JEE, NEET'}
              </div>
            </div>
          </div>
          <button className="ai-close-btn" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Context pill */}
        {contextLabel && (
          <div style={{ padding: '.5rem 1.25rem', background: '#eef2ff', borderBottom: '1px solid #e5e7eb', fontSize: '.78rem', color: '#4f46e5', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '.4rem' }}>
            <span>📍</span> Context: {contextLabel}
          </div>
        )}

        {/* Document badge */}
        {uploadedFile && (
          <div style={{ padding: '.5rem 1rem', background: '#eff6ff', borderBottom: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem' }}>
            <span style={{ fontSize: '.78rem', color: '#1d4ed8', fontWeight: 600 }}>
              📄 {uploadedFile.name} <span style={{ fontWeight: 400, color: '#3b82f6' }}>· {uploadedFile.chunks} sections</span>
            </span>
            <button
              onClick={removeDocument}
              style={{ background: 'none', border: 'none', color: '#93c5fd', cursor: 'pointer', fontSize: '.8rem', padding: '.1rem .3rem', borderRadius: 4 }}
              title="Remove document"
            >✕</button>
          </div>
        )}

        {/* Messages */}
        <div className="ai-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-msg-row ${msg.role}`}>
              {msg.role === 'assistant' && <div className="ai-msg-avatar">🤖</div>}
              <div>
                <div className={`ai-bubble${msg.blocked ? ' ai-bubble-blocked' : ''}`}
                  style={msg.blocked ? { background: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b' } : {}}>
                  {msg.content}
                </div>
                {msg.role === 'assistant' && !msg.blocked && i > 0 && <SourceBadge source={msg.source} />}
              </div>
              {msg.role === 'user' && <div className="ai-msg-avatar user">👤</div>}
            </div>
          ))}
          {loading && (
            <div className="ai-msg-row assistant">
              <div className="ai-msg-avatar">🤖</div>
              <div className="ai-bubble ai-typing-indicator"><span /><span /><span /></div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="ai-suggestions">
            {suggestions.filter(Boolean).map(q => (
              <button key={q} className="ai-suggestion-chip" onClick={() => setInput(q)}>{q}</button>
            ))}
          </div>
        )}

        {/* Upload error */}
        {uploadError && (
          <div style={{ padding: '.4rem 1rem', background: '#fef2f2', fontSize: '.78rem', color: '#dc2626' }}>
            ⚠️ {uploadError}
          </div>
        )}

        {/* Input row */}
        <div className="ai-input-row" style={{ flexDirection: 'column', gap: '.5rem', padding: '.75rem 1rem' }}>
          <div style={{ display: 'flex', gap: '.5rem', alignItems: 'flex-end' }}>
            <textarea
              className="ai-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your doubt here… (Enter to send)"
              rows={2}
              disabled={loading}
              style={{ flex: 1 }}
            />
            <button className="ai-send-btn" onClick={send} disabled={!input.trim() || loading} aria-label="Send message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>

          {/* Upload button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,.txt"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              style={{
                display: 'flex', alignItems: 'center', gap: '.35rem',
                background: 'none', border: '1px dashed #d1d5db', borderRadius: 8,
                padding: '.3rem .75rem', fontSize: '.75rem', color: '#6b7280',
                cursor: uploading ? 'default' : 'pointer', transition: 'all .15s',
              }}
              onMouseEnter={e => { if (!uploading) { e.currentTarget.style.borderColor = '#4f46e5'; e.currentTarget.style.color = '#4f46e5'; }}}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = '#6b7280'; }}
            >
              {uploading ? '⏳ Processing…' : '📎 Upload PDF / DOCX / TXT'}
            </button>
            {uploadedFile && (
              <span style={{ fontSize: '.72rem', color: '#2563eb', fontWeight: 600 }}>✓ Document active</span>
            )}
          </div>
        </div>

      </div>
    </>
  );
}
