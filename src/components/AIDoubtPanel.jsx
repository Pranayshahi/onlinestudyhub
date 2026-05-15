import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { getTopic, getClass, SUBJECT_META } from '../data/curriculum';

const CHAT_STORAGE_KEY = 'osh_ai_chat_history';
const FEEDBACK_STORAGE_KEY = 'osh_ai_feedback';

const LANGUAGES = [
  { code: 'en-IN', label: 'English' },
  { code: 'hi-IN', label: 'हिंदी' },
  { code: 'ta-IN', label: 'தமிழ்' },
  { code: 'te-IN', label: 'తెలుగు' },
  { code: 'kn-IN', label: 'ಕನ್ನಡ' },
  { code: 'ml-IN', label: 'മലയാളം' },
  { code: 'bn-IN', label: 'বাংলা' },
  { code: 'mr-IN', label: 'मराठी' },
  { code: 'gu-IN', label: 'ગુજરાતી' },
  { code: 'pa-IN', label: 'ਪੰਜਾਬੀ' },
  { code: 'od-IN', label: 'ଓଡ଼ିଆ' },
];

// Strip markdown so text is clean for TTS / Translation
function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/#{1,6}\s+/g, '')
    .replace(/```[\s\S]*?```/g, '[code block]')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^>\s+/gm, '')
    .replace(/\$\$[\s\S]*?\$\$/g, 'math formula')
    .replace(/\$([^$\n]+)\$/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const BASE_SYSTEM = `You are a world-class AI tutor for Indian school students (Class 6–12, JEE, NEET).
Explain concepts clearly with step-by-step reasoning. Use markdown formatting:
- Use **bold** for key terms
- Use numbered lists for steps
- Use LaTeX for math: inline with $...$ and block with $$...$$
- Use code blocks for formulas or code
Keep explanations precise and exam-focused.`;

function buildSystemPrompt(location) {
  const m = location.pathname.match(/\/class\/([^/]+)\/subject\/([^/]+)\/topic\/([^/]+)/);
  if (!m) return BASE_SYSTEM;
  const [, classId, subjectId, topicId] = m;
  const classData = getClass(classId);
  const topic = getTopic(classId, subjectId, topicId);
  const meta = SUBJECT_META[subjectId] || {};
  if (!topic) return BASE_SYSTEM;
  return `${BASE_SYSTEM}\n\nCURRENT CONTEXT: The student is studying "${topic.title}" in ${meta.label || subjectId} for ${classData?.label || classId}.\nTopic definition: ${topic.definition || 'N/A'}\nSubtopics: ${topic.subtopics || 'N/A'}\nPrioritise explanations related to this topic.`;
}

const WELCOME = `Hi! I'm your AI tutor 👋

Ask me any doubt — Maths, Physics, Chemistry, Biology, History, English — any subject!

**I can:**
- Solve step-by-step problems with formulas
- Explain concepts from your textbook
- Analyse photos of questions or diagrams
- Answer from your uploaded notes (PDF/DOCX)`;

function SourceBadge({ source }) {
  if (!source) return null;
  const map = {
    document: { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe', label: '📄 From your document' },
    image:    { bg: '#fdf4ff', color: '#7c3aed', border: '#e9d5ff', label: '🖼️ From your image' },
    general:  { bg: '#f0fdf4', color: '#16a34a', border: '#bbf7d0', label: '🧠 AI knowledge' },
  };
  const s = map[source] || map.general;
  return (
    <span style={{ display: 'inline-block', fontSize: '.68rem', fontWeight: 700, padding: '.2rem .55rem', borderRadius: 99, background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
      {s.label}
    </span>
  );
}

function MsgContent({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        p: ({ children }) => <p style={{ margin: '0 0 .5em', lineHeight: 1.7 }}>{children}</p>,
        ul: ({ children }) => <ul style={{ margin: '.3em 0 .5em 1.2em', padding: 0 }}>{children}</ul>,
        ol: ({ children }) => <ol style={{ margin: '.3em 0 .5em 1.4em', padding: 0 }}>{children}</ol>,
        li: ({ children }) => <li style={{ marginBottom: '.2em', lineHeight: 1.6 }}>{children}</li>,
        strong: ({ children }) => <strong style={{ color: '#1e1b4b' }}>{children}</strong>,
        code: ({ inline, children }) => inline
          ? <code style={{ background: '#f3f4f6', padding: '.1em .35em', borderRadius: 4, fontSize: '.85em', fontFamily: 'monospace', color: '#be185d' }}>{children}</code>
          : <pre style={{ background: '#1e1b4b', color: '#e0e7ff', padding: '.75rem 1rem', borderRadius: 8, fontSize: '.82em', overflowX: 'auto', margin: '.5em 0', fontFamily: 'monospace' }}><code>{children}</code></pre>,
        blockquote: ({ children }) => <blockquote style={{ borderLeft: '3px solid #4f46e5', margin: '.5em 0', padding: '.3em .75em', background: '#eef2ff', borderRadius: '0 6px 6px 0', color: '#3730a3' }}>{children}</blockquote>,
        h1: ({ children }) => <h1 style={{ fontSize: '1.1em', fontWeight: 800, margin: '.5em 0 .3em', color: '#1e1b4b' }}>{children}</h1>,
        h2: ({ children }) => <h2 style={{ fontSize: '1em', fontWeight: 700, margin: '.5em 0 .3em', color: '#1e1b4b' }}>{children}</h2>,
        h3: ({ children }) => <h3 style={{ fontSize: '.95em', fontWeight: 700, margin: '.4em 0 .2em', color: '#374151' }}>{children}</h3>,
        table: ({ children }) => <div style={{ overflowX: 'auto', margin: '.5em 0' }}><table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '.85em' }}>{children}</table></div>,
        th: ({ children }) => <th style={{ background: '#eef2ff', padding: '.4em .7em', border: '1px solid #c7d2fe', fontWeight: 700, textAlign: 'left' }}>{children}</th>,
        td: ({ children }) => <td style={{ padding: '.35em .7em', border: '1px solid #e5e7eb' }}>{children}</td>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default function AIDoubtPanel({ open, onClose, prefillText }) {
  const location = useLocation();

  // Load chat history from localStorage (exclude imagePreview blobs)
  const [messages, setMessages] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY) || '[]');
      return saved.length > 0 ? saved : [{ role: 'assistant', content: WELCOME }];
    } catch { return [{ role: 'assistant', content: WELCOME }]; }
  });
  const [feedback, setFeedback] = useState(() => {
    try { return JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY) || '{}'); } catch { return {}; }
  });

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');

  // Document upload
  const [uploadId, setUploadId] = useState(null);
  const uploadIdRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // Image upload
  const imageIdRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Sarvam STT
  const [listening, setListening] = useState(false);
  const [sttLoading, setSttLoading] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Sarvam TTS + Translation
  const [selectedLang, setSelectedLang] = useState('en-IN');
  const [ttsPlaying, setTtsPlaying] = useState(null);
  const [translations, setTranslations] = useState({});
  const [translating, setTranslating] = useState(null);
  const audioRef = useRef(null);

  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  // Persist messages (strip blob imagePreview URLs before saving)
  useEffect(() => {
    const toSave = messages.map(m => ({ ...m, imagePreview: undefined }));
    try { localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(toSave)); } catch {}
  }, [messages]);

  useEffect(() => {
    try { localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(feedback)); } catch {}
  }, [feedback]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, streamingContent]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 140) + 'px';
  }, [input]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Pre-fill when opened with selected text (doubt tagging)
  useEffect(() => {
    if (open && prefillText) {
      setInput(`Explain this to me: "${prefillText.trim()}"`);
      setTimeout(() => textareaRef.current?.focus(), 100);
    }
  }, [open, prefillText]);

  // ── Sarvam STT ─────────────────────────────────────────────────
  async function startSarvamSTT() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      mediaRecorderRef.current = mr;
      audioChunksRef.current = [];

      mr.ondataavailable = e => { if (e.data.size > 0) audioChunksRef.current.push(e.data); };
      mr.onstop = async () => {
        stream.getTracks().forEach(t => t.stop());
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setSttLoading(true);
        try {
          const fd = new FormData();
          fd.append('audio', blob, 'recording.webm');
          // Pass language hint if not English (Sarvam can auto-detect too)
          if (selectedLang !== 'en-IN') fd.append('language_code', selectedLang);
          const res = await fetch('/api/sarvam/stt', { method: 'POST', body: fd });
          const data = await res.json();
          if (data.transcript) setInput(prev => prev ? `${prev} ${data.transcript}` : data.transcript);
        } catch { /* silently fail */ }
        finally { setSttLoading(false); setListening(false); }
      };

      mr.start();
      setListening(true);
    } catch {
      setListening(false);
    }
  }

  function toggleVoice() {
    if (listening) {
      mediaRecorderRef.current?.stop();
      setListening(false);
    } else {
      startSarvamSTT();
    }
  }

  // ── Sarvam TTS ─────────────────────────────────────────────────
  async function speakMessage(idx, text) {
    // Toggle off
    if (ttsPlaying === idx) {
      window.speechSynthesis?.cancel();
      audioRef.current?.pause();
      audioRef.current = null;
      setTtsPlaying(null);
      return;
    }

    // English: use browser speech synthesis (Sarvam TTS doesn't support en-IN)
    if (selectedLang === 'en-IN') {
      if (!window.speechSynthesis) return;
      const utter = new SpeechSynthesisUtterance(stripMarkdown(text));
      utter.lang = 'en-IN';
      utter.rate = 0.92;
      utter.onend = () => setTtsPlaying(null);
      utter.onerror = () => setTtsPlaying(null);
      setTtsPlaying(idx);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
      return;
    }

    // Indian language: translate first (if no cached translation), then TTS
    setTtsPlaying(idx);
    try {
      let textToSpeak = translations[idx];
      if (!textToSpeak) {
        const tr = await fetch('/api/sarvam/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: stripMarkdown(text).slice(0, 1000),
            source_language_code: 'en-IN',
            target_language_code: selectedLang,
          }),
        });
        const trData = await tr.json();
        if (trData.translated_text) {
          textToSpeak = trData.translated_text;
          setTranslations(t => ({ ...t, [idx]: trData.translated_text }));
        } else {
          textToSpeak = stripMarkdown(text);
        }
      }

      const res = await fetch('/api/sarvam/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToSpeak.slice(0, 500), language_code: selectedLang }),
      });
      const data = await res.json();
      if (!data.audio) throw new Error(data.error || 'no audio returned');

      // AudioContext avoids autoplay restrictions after the async gap
      const bytes = Uint8Array.from(atob(data.audio), c => c.charCodeAt(0)).buffer;
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const audioBuffer = await ctx.decodeAudioData(bytes);
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      source.onended = () => { setTtsPlaying(null); ctx.close(); };
      source.start();
      audioRef.current = { pause: () => { source.stop(); ctx.close(); } };
    } catch (err) {
      console.error('TTS error:', err);
      setTtsPlaying(null);
    }
  }

  // ── Sarvam Translate ───────────────────────────────────────────
  async function translateMessage(idx, text) {
    if (translations[idx]) {
      setTranslations(t => { const n = { ...t }; delete n[idx]; return n; });
      return;
    }
    if (selectedLang === 'en-IN') return;
    setTranslating(idx);
    try {
      const res = await fetch('/api/sarvam/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: stripMarkdown(text).slice(0, 1000),
          source_language_code: 'en-IN',
          target_language_code: selectedLang,
        }),
      });
      const data = await res.json();
      if (data.translated_text) setTranslations(t => ({ ...t, [idx]: data.translated_text }));
    } catch { /* silently fail */ }
    finally { setTranslating(null); }
  }

  const topicMatch = location.pathname.match(/\/class\/([^/]+)\/subject\/([^/]+)\/topic\/([^/]+)/);
  let contextLabel = null;
  let currentTopicTitle = '';
  if (topicMatch) {
    const topic = getTopic(topicMatch[1], topicMatch[2], topicMatch[3]);
    const meta = SUBJECT_META[topicMatch[2]] || {};
    if (topic) { contextLabel = `${meta.icon || ''} ${topic.title}`; currentTopicTitle = topic.title; }
  }

  async function handleDocUpload(e) {
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
      uploadIdRef.current = data.uploadId;
      setUploadId(data.uploadId);
      setUploadedFile({ name: data.fileName, chunks: data.chunks });
      setMessages(prev => [...prev, { role: 'assistant', content: `✅ **${data.fileName}** loaded (${data.chunks} sections indexed)\n\nAsk me anything from this document!`, source: 'document' }]);
    } catch (err) { setUploadError(err.message); }
    finally { setUploading(false); e.target.value = ''; }
  }

  async function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingImage(true);
    setUploadError('');
    try {
      const preview = URL.createObjectURL(file);
      const formData = new FormData();
      formData.append('image', file);
      const res = await fetch('/api/ai-doubt/upload-image', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Image upload failed');
      imageIdRef.current = data.imageId;
      setUploadedImage({ name: data.fileName, preview });
      setMessages(prev => [...prev, { role: 'user', content: `[Image: ${data.fileName}]`, imagePreview: preview }]);
      if (!input.trim()) setInput('Solve this question step by step.');
    } catch (err) { setUploadError(err.message); }
    finally { setUploadingImage(false); e.target.value = ''; }
  }

  function removeDocument() { uploadIdRef.current = null; setUploadId(null); setUploadedFile(null); setUploadError(''); }
  function removeImage() {
    imageIdRef.current = null;
    if (uploadedImage?.preview) URL.revokeObjectURL(uploadedImage.preview);
    setUploadedImage(null);
  }

  function clearChat() {
    if (!window.confirm('Clear entire chat history?')) return;
    setMessages([{ role: 'assistant', content: WELCOME }]);
    setFeedback({});
    setTranslations({});
    localStorage.removeItem(CHAT_STORAGE_KEY);
    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
    removeDocument();
    removeImage();
  }

  const cancelTypewriter = useRef(false);

  // Typewriter animation — shows text char-by-char exactly like ChatGPT
  async function typewrite(fullText) {
    cancelTypewriter.current = false;
    const charsPerTick = fullText.length > 1200 ? 18 : fullText.length > 600 ? 10 : 5;
    const delay = 16;
    let i = 0;
    while (i < fullText.length) {
      if (cancelTypewriter.current) break;
      await new Promise(r => setTimeout(r, delay));
      i = Math.min(i + charsPerTick, fullText.length);
      setStreamingContent(fullText.slice(0, i));
    }
  }

  const sendMessage = useCallback(async (text, opts = {}) => {
    const { imageId: imgId } = opts;
    if (!text && !imgId) return;

    cancelTypewriter.current = true;
    const userMsg = { role: 'user', content: text || 'Solve this question step by step.' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setStreamingContent('');

    try {
      const history = messages
        .filter((_, i) => i > 0)
        .filter(m => !m.imagePreview && !m.error)
        .concat(userMsg)
        .map(m => ({ role: m.role, content: m.content }));

      const res = await fetch('/api/ai-doubt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history,
          system: buildSystemPrompt(location),
          uploadId: uploadIdRef.current || undefined,
          imageId: imgId || imageIdRef.current || undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        if (err.blocked) {
          setMessages(prev => [...prev, { role: 'assistant', content: `🚫 ${err.reason}`, blocked: true }]);
          return;
        }
        throw new Error(err.error || 'Request failed');
      }

      const data = await res.json();
      const fullText = data.reply || 'No response.';
      const source = data.source || 'general';

      await typewrite(fullText);

      setMessages(prev => [...prev, { role: 'assistant', content: fullText, source }]);
      setStreamingContent('');
      if (imageIdRef.current) { imageIdRef.current = null; setUploadedImage(null); }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Something went wrong: ${err.message}`, error: true, retryText: text }]);
      setStreamingContent('');
    } finally {
      setLoading(false);
    }
  }, [messages, location]); // eslint-disable-line

  function send() {
    const text = input.trim();
    if ((!text && !imageIdRef.current) || loading) return;
    sendMessage(text);
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  }

  function quickSend(text) {
    if (loading) return;
    setInput('');
    sendMessage(text);
  }

  async function copyToClipboard(text) {
    try { await navigator.clipboard.writeText(text); } catch {}
  }

  function giveFeedback(idx, type) {
    setFeedback(f => ({ ...f, [idx]: f[idx] === type ? null : type }));
  }

  const suggestions = contextLabel
    ? [
        `Explain ${currentTopicTitle}`,
        'Give me an example with solution',
        'What are common exam questions on this?',
        `Give me 5 practice MCQs on ${currentTopicTitle}`,
      ]
    : ["Solve: $x^2 - 5x + 6 = 0$", 'What is photosynthesis?', "Explain Newton's 2nd law", 'Give me 5 JEE-level MCQs'];

  const lastAiIdx = [...messages].reverse().findIndex(m => m.role === 'assistant' && !m.blocked);
  const lastAiAbsIdx = lastAiIdx >= 0 ? messages.length - 1 - lastAiIdx : -1;
  const selectedLangLabel = LANGUAGES.find(l => l.code === selectedLang)?.label || 'English';

  return (
    <>
      <div className={`ai-backdrop ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`ai-panel ${open ? 'open' : ''}`}>

        {/* Header */}
        <div className="ai-panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div className="ai-panel-avatar">
              <img src="/img/ai-robot.png" alt="AI" style={{ width: 52, height: 52, objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#fff' }}>AI Tutor</div>
              <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.65)' }}>
                {contextLabel ? `Studying: ${contextLabel}` : 'Ask anything · Class 6–12, JEE, NEET'}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            {messages.length > 1 && (
              <button onClick={clearChat} title="Clear chat"
                style={{ background: 'rgba(255,255,255,.15)', border: 'none', borderRadius: 8, padding: '.35rem .5rem', cursor: 'pointer', color: '#fff', fontSize: '.75rem', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                Clear
              </button>
            )}
            <button className="ai-close-btn" onClick={onClose} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Context pill */}
        {contextLabel && (
          <div style={{ padding: '.5rem 1.25rem', background: '#eef2ff', borderBottom: '1px solid #e5e7eb', fontSize: '.78rem', color: '#4f46e5', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span><span style={{ marginRight: '.3rem' }}>📍</span>{contextLabel}</span>
            <button onClick={() => quickSend(`Give me 5 practice MCQs on ${currentTopicTitle}`)}
              style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 6, padding: '.2rem .55rem', fontSize: '.7rem', fontWeight: 700, cursor: 'pointer' }}>
              📝 Practice Questions
            </button>
          </div>
        )}

        {/* Messages */}
        <div className="ai-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-msg-row ${msg.role}`}>
              {msg.role === 'assistant' && (
                <div className="ai-msg-avatar">
                  <img src="/img/ai-robot.png" alt="AI" style={{ width: 36, height: 36, objectFit: 'contain' }} />
                </div>
              )}
              <div className="ai-msg-body">
                {msg.imagePreview && (
                  <div style={{ marginBottom: '.5rem' }}>
                    <img src={msg.imagePreview} alt="uploaded" style={{ maxWidth: 220, maxHeight: 180, borderRadius: 10, border: '1.5px solid #e0e7ff', objectFit: 'contain' }} />
                  </div>
                )}
                <div className={`ai-bubble${msg.blocked ? ' ai-bubble-blocked' : ''}${msg.error ? ' ai-bubble-error' : ''}`}
                  style={{
                    ...(msg.blocked ? { background: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b' } : {}),
                    ...(msg.error ? { background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', fontSize: '.85rem' } : {}),
                  }}>
                  {msg.role === 'assistant' && !msg.imagePreview
                    ? <MsgContent content={msg.content} />
                    : <span style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</span>
                  }
                </div>

                {/* Translation panel */}
                {translations[i] && (
                  <div style={{ marginTop: '.4rem', padding: '.5rem .75rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, fontSize: '.82em', color: '#14532d', lineHeight: 1.6 }}>
                    <div style={{ fontSize: '.68rem', fontWeight: 700, color: '#16a34a', marginBottom: '.3rem' }}>
                      🌐 {selectedLangLabel}
                    </div>
                    {translations[i]}
                  </div>
                )}

                {/* AI message action row */}
                {msg.role === 'assistant' && !msg.blocked && !msg.error && i > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.35rem', rowGap: '.3rem', flexWrap: 'wrap' }}>
                    <SourceBadge source={msg.source} />

                    {/* Copy */}
                    <button onClick={() => copyToClipboard(msg.content)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: '.72rem', padding: '.1rem .3rem', borderRadius: 4, display: 'flex', alignItems: 'center', gap: '.2rem' }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                      Copy
                    </button>

                    {/* TTS listen */}
                    <button onClick={() => speakMessage(i, msg.content)}
                      title={ttsPlaying === i ? 'Stop audio' : 'Listen aloud'}
                      style={{ background: ttsPlaying === i ? '#eff6ff' : 'none', border: ttsPlaying === i ? '1px solid #bfdbfe' : 'none', cursor: 'pointer', color: ttsPlaying === i ? '#2563eb' : '#9ca3af', fontSize: '.72rem', padding: '.1rem .35rem', borderRadius: 4, display: 'flex', alignItems: 'center', gap: '.2rem' }}>
                      {ttsPlaying === i
                        ? <><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Stop</>
                        : <><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> Listen</>
                      }
                    </button>

                    {/* Translate */}
                    {selectedLang !== 'en-IN' && (
                      <button onClick={() => translateMessage(i, msg.content)}
                        disabled={translating === i}
                        title={translations[i] ? `Hide ${selectedLangLabel} translation` : `Translate to ${selectedLangLabel}`}
                        style={{ background: translations[i] ? '#f0fdf4' : 'none', border: translations[i] ? '1px solid #bbf7d0' : 'none', cursor: 'pointer', color: translations[i] ? '#16a34a' : '#9ca3af', fontSize: '.72rem', padding: '.1rem .35rem', borderRadius: 4, display: 'flex', alignItems: 'center', gap: '.2rem' }}>
                        {translating === i ? '⏳' : '🌐'} {selectedLangLabel}
                      </button>
                    )}

                    {/* Thumbs */}
                    <button onClick={() => giveFeedback(i, 'up')}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '.8rem', opacity: feedback[i] === 'up' ? 1 : 0.45, filter: feedback[i] === 'up' ? 'none' : 'grayscale(1)' }}
                      title="Helpful">👍</button>
                    <button onClick={() => giveFeedback(i, 'down')}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '.8rem', opacity: feedback[i] === 'down' ? 1 : 0.45, filter: feedback[i] === 'down' ? 'none' : 'grayscale(1)' }}
                      title="Not helpful">👎</button>

                    {/* Explain simpler / Go deeper — only on last AI message */}
                    {i === lastAiAbsIdx && !loading && (
                      <>
                        <button onClick={() => quickSend('Explain this more simply with a basic example, like I am a beginner.')}
                          style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#16a34a', borderRadius: 99, padding: '.15rem .55rem', fontSize: '.7rem', fontWeight: 700, cursor: 'pointer' }}>
                          🎯 Simpler
                        </button>
                        <button onClick={() => quickSend('Go deeper with advanced details, derivations, and exam-level insights.')}
                          style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#2563eb', borderRadius: 99, padding: '.15rem .55rem', fontSize: '.7rem', fontWeight: 700, cursor: 'pointer' }}>
                          🔬 Deeper
                        </button>
                      </>
                    )}
                  </div>
                )}

                {/* Retry button on error */}
                {msg.error && msg.retryText && (
                  <button onClick={() => { setMessages(prev => prev.filter((_, idx) => idx !== i)); sendMessage(msg.retryText); }}
                    style={{ marginTop: '.4rem', background: '#fff', border: '1.5px solid #fecaca', color: '#dc2626', borderRadius: 8, padding: '.3rem .75rem', fontSize: '.78rem', fontWeight: 700, cursor: 'pointer' }}>
                    🔄 Retry
                  </button>
                )}
              </div>
              {msg.role === 'user' && !msg.imagePreview && <div className="ai-msg-avatar user">👤</div>}
            </div>
          ))}

          {/* Streaming */}
          {loading && streamingContent && (
            <div className="ai-msg-row assistant">
              <div className="ai-msg-avatar"><img src="/img/ai-robot.png" alt="AI" style={{ width: 36, height: 36, objectFit: 'contain' }} /></div>
              <div className="ai-msg-body">
                <div className="ai-bubble">
                  <MsgContent content={streamingContent} />
                  <span style={{ display: 'inline-block', width: 8, height: 14, background: '#4f46e5', borderRadius: 2, marginLeft: 2, animation: 'blink .7s step-end infinite', verticalAlign: 'text-bottom' }} />
                </div>
              </div>
            </div>
          )}

          {/* Typing dots */}
          {loading && !streamingContent && (
            <div className="ai-msg-row assistant">
              <div className="ai-msg-avatar"><img src="/img/ai-robot.png" alt="AI" style={{ width: 36, height: 36, objectFit: 'contain' }} /></div>
              <div className="ai-bubble ai-typing-indicator"><span /><span /><span /></div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Suggestions (only on fresh chat) */}
        {messages.length === 1 && (
          <div className="ai-suggestions">
            {suggestions.filter(Boolean).map(q => (
              <button key={q} className="ai-suggestion-chip" onClick={() => setInput(q)}>{q}</button>
            ))}
          </div>
        )}

        {/* Attached image preview strip */}
        {uploadedImage && (
          <div style={{ padding: '.5rem 1rem', background: '#fdf4ff', borderTop: '1px solid #e9d5ff', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <img src={uploadedImage.preview} alt="" style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover', border: '1.5px solid #d8b4fe' }} />
            <div style={{ flex: 1, fontSize: '.78rem', color: '#6b21a8', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>🖼️ {uploadedImage.name}</div>
            <button onClick={removeImage} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
          </div>
        )}

        {uploadError && <div className="ai-upload-error">⚠️ {uploadError}</div>}

        {/* Compose */}
        <div className="ai-input-row">
          <input ref={fileInputRef} type="file" accept=".pdf,.docx,.txt" style={{ display: 'none' }} onChange={handleDocUpload} />
          <input ref={imageInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" style={{ display: 'none' }} onChange={handleImageUpload} />

          <div className="ai-compose-box">
            <textarea
              ref={textareaRef}
              className="ai-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={
                sttLoading ? '⏳ Transcribing…' :
                listening ? '🎙️ Recording… click Stop when done' :
                uploadedImage ? 'Ask about this image… (Enter to send)' :
                'Ask a doubt… (Enter to send, Shift+Enter for new line)'
              }
              disabled={loading}
              style={listening ? { background: '#fef2f2' } : {}}
            />
            <div className="ai-compose-toolbar">
              <div style={{ display: 'flex', gap: '.35rem', alignItems: 'center' }}>

                {/* Language selector */}
                <select
                  value={selectedLang}
                  onChange={e => { setSelectedLang(e.target.value); setTranslations({}); }}
                  title="Response language for voice, listen & translate"
                  style={{ fontSize: '.7rem', border: '1.5px solid #e5e7eb', borderRadius: 8, padding: '.22rem .35rem', background: '#f9fafb', color: '#374151', fontWeight: 600, cursor: 'pointer', outline: 'none', maxWidth: 88 }}>
                  {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
                </select>

                {/* Voice input — Sarvam STT */}
                <button className="ai-upload-btn" onClick={toggleVoice} disabled={loading || sttLoading}
                  title={listening ? 'Stop recording' : 'Speak your doubt in any Indian language'}
                  style={{ color: listening ? '#dc2626' : sttLoading ? '#9ca3af' : undefined, borderColor: listening ? '#fecaca' : undefined, background: listening ? '#fef2f2' : undefined }}>
                  {sttLoading ? '⏳' : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill={listening ? '#dc2626' : 'none'} stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="23"/>
                        <line x1="8" y1="23" x2="16" y2="23"/>
                      </svg>
                      {listening ? 'Stop' : 'Voice'}
                    </>
                  )}
                </button>

                {/* Image upload */}
                <button className="ai-upload-btn" onClick={() => imageInputRef.current?.click()}
                  disabled={uploadingImage || loading} title="Upload image of a question"
                  style={{ color: uploadedImage ? '#7c3aed' : undefined, borderColor: uploadedImage ? '#d8b4fe' : undefined }}>
                  {uploadingImage ? '⏳' : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                      Photo
                    </>
                  )}
                </button>

                {/* Doc upload */}
                {uploadedFile ? (
                  <div className="ai-doc-chip">
                    <span>📄</span>
                    <span title={uploadedFile.name}>{uploadedFile.name}</span>
                    <button onClick={removeDocument} title="Remove">✕</button>
                  </div>
                ) : (
                  <button className="ai-upload-btn" onClick={() => fileInputRef.current?.click()}
                    disabled={uploading || loading} title="Upload PDF, DOCX, or TXT">
                    {uploading ? '⏳' : (
                      <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                        Notes
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Send */}
              <button className="ai-send-btn" onClick={send} disabled={(!input.trim() && !imageIdRef.current) || loading} aria-label="Send">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
          .ai-bubble-error { background:#fef2f2; border:1px solid #fecaca; color:#dc2626; }
        `}</style>
      </div>
    </>
  );
}
