import React, { useState, useRef, useEffect } from 'react';

const WELCOME = 'Hi! I\'m your AI study helper 👋\nAsk me any doubt about Maths, Science, History, English — any subject!';

export default function AIDoubtPanel({ open, onClose }) {
  const [messages, setMessages] = useState([{ role: 'assistant', content: WELCOME }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const apiKey = process.env.REACT_APP_ANTHROPIC_API_KEY;
      if (!apiKey) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: '⚠️ API key not set up yet.\n\nTo enable real AI responses, add your key to .env.local:\n\nREACT_APP_ANTHROPIC_API_KEY=your-key-here\n\nThen restart the dev server.'
        }]);
        setLoading(false);
        return;
      }

      const history = messages
        .filter((m, i) => i > 0)
        .concat(userMsg)
        .map(m => ({ role: m.role, content: m.content }));

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1024,
          system: 'You are a friendly, patient study assistant for Indian school students (Class 6–12, JEE, NEET). Explain concepts clearly and concisely. Use simple language. When helpful, use numbered steps or bullet points. Stay focused on academic topics.',
          messages: history,
        }),
      });

      const data = await res.json();
      const reply = data?.content?.[0]?.text || 'Sorry, I could not process that. Please try again.';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Something went wrong. Please check your connection and try again.' }]);
    }
    setLoading(false);
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <>
      <div className={`ai-backdrop ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`ai-panel ${open ? 'open' : ''}`}>

        {/* Header */}
        <div className="ai-panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="ai-panel-avatar">🤖</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#fff' }}>AI Doubt Helper</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)' }}>Ask anything · Class 6–12, JEE, NEET</div>
            </div>
          </div>
          <button className="ai-close-btn" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="ai-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-msg-row ${msg.role}`}>
              {msg.role === 'assistant' && <div className="ai-msg-avatar">🤖</div>}
              <div className="ai-bubble">{msg.content}</div>
              {msg.role === 'user' && <div className="ai-msg-avatar user">👤</div>}
            </div>
          ))}
          {loading && (
            <div className="ai-msg-row assistant">
              <div className="ai-msg-avatar">🤖</div>
              <div className="ai-bubble ai-typing-indicator">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="ai-suggestions">
            {['Explain Newton\'s laws', 'What is photosynthesis?', 'Solve: 2x + 5 = 15'].map(q => (
              <button key={q} className="ai-suggestion-chip" onClick={() => { setInput(q); }}>
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="ai-input-row">
          <textarea
            className="ai-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type your doubt here… (Enter to send)"
            rows={2}
            disabled={loading}
          />
          <button className="ai-send-btn" onClick={send} disabled={!input.trim() || loading}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>

      </div>
    </>
  );
}
