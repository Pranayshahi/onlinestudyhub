import React, { useState, useEffect } from 'react';

const OPTIONS = [
  { emoji: '😕', label: 'Not clear', value: 1, color: '#dc2626', bg: '#fee2e2', border: '#fca5a5' },
  { emoji: '😐', label: 'Somewhat', value: 2, color: '#d97706', bg: '#fef3c7', border: '#fcd34d' },
  { emoji: '😊', label: 'Understood', value: 3, color: '#0284c7', bg: '#e0f2fe', border: '#7dd3fc' },
  { emoji: '🌟', label: 'Mastered!', value: 4, color: '#16a34a', bg: '#dcfce7', border: '#86efac' },
];

const TIPS = {
  4: '🎉 Outstanding! Mark this topic as done using the button above.',
  3: '👍 Great! Try the quiz to confirm your understanding.',
  2: '📖 Review the content, try flashcards and the quiz above.',
  1: '💡 Ask the AI Doubt Helper or post in the Community Q&A forum below.',
};

export default function TopicPoll({ classId, subjectId, topicId, topicTitle }) {
  const storageKey = `osh_poll_${classId}_${subjectId}_${topicId}`;
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setSelected(Number(saved));
    } catch {}
  }, [storageKey]);

  function vote(value) {
    setSelected(value);
    try { localStorage.setItem(storageKey, String(value)); } catch {}
  }

  const chosen = OPTIONS.find(o => o.value === selected);

  return (
    <div className="topic-poll-card">
      <div className="topic-poll-title">
        📊 How well do you understand <em>{topicTitle}</em>?
      </div>
      <div className="topic-poll-options">
        {OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => vote(opt.value)}
            className="topic-poll-btn"
            style={{
              borderColor: selected === opt.value ? opt.border : '#e5e7eb',
              background: selected === opt.value ? opt.bg : '#f9fafb',
              color: selected === opt.value ? opt.color : '#6b7280',
              fontWeight: selected === opt.value ? 700 : 500,
              transform: selected === opt.value ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            <span className="topic-poll-emoji">{opt.emoji}</span>
            {opt.label}
          </button>
        ))}
      </div>
      {chosen && (
        <div className="topic-poll-tip" style={{ color: chosen.color, background: chosen.bg, borderColor: chosen.border }}>
          {TIPS[chosen.value]}
        </div>
      )}
    </div>
  );
}
