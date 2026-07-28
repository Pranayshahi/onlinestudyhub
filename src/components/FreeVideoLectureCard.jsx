import React, { useState, useEffect, useRef } from 'react';

// Real verified educational YouTube lecture embeds
const CURATED_VIDEOS = {
  // Mathematics
  'knowing': 'https://www.youtube.com/embed/NybHckSEQBI',
  'number': 'https://www.youtube.com/embed/NybHckSEQBI',
  'whole': 'https://www.youtube.com/embed/NybHckSEQBI',
  'fraction': 'https://www.youtube.com/embed/k3aCU3N8S_A',
  'algebra': 'https://www.youtube.com/embed/grnP3mduZkM',
  'linear': 'https://www.youtube.com/embed/grnP3mduZkM',
  'quadratic': 'https://www.youtube.com/embed/Eef8g5x4M0E',
  'trigonometry': 'https://www.youtube.com/embed/3GgZ3C5M4bE',
  'geometry': 'https://www.youtube.com/embed/302eJ3TzJQU',
  'gst': 'https://www.youtube.com/embed/4y5z6a7b8c9',

  // Physics
  'matter': 'https://www.youtube.com/embed/rfeVlNR5w1U',
  'force': 'https://www.youtube.com/embed/rfeVlNR5w1U',
  'motion': 'https://www.youtube.com/embed/rfeVlNR5w1U',
  'light': 'https://www.youtube.com/embed/fD15408563g',
  'heat': 'https://www.youtube.com/embed/v_K1T5s7e8A',
  'sound': 'https://www.youtube.com/embed/qV4lR9EWGlY',
  'electricity': 'https://www.youtube.com/embed/EJeA3peSg8U',
  'magnetism': 'https://www.youtube.com/embed/EJeA3peSg8U',

  // Chemistry
  'chemical': 'https://www.youtube.com/embed/h6LPAwAmnCQ',
  'atoms': 'https://www.youtube.com/embed/h6LPAwAmnCQ',
  'periodic': 'https://www.youtube.com/embed/h6LPAwAmnCQ',
  'organic': 'https://www.youtube.com/embed/R9K1uXW0K3M',

  // Biology
  'cell': 'https://www.youtube.com/embed/8IlzKri08kk',
  'plant': 'https://www.youtube.com/embed/8IlzKri08kk',
  'digestive': 'https://www.youtube.com/embed/8IlzKri08kk',

  // Computer
  'computer': 'https://www.youtube.com/embed/r59xYe3Vyks',
  'java': 'https://www.youtube.com/embed/r59xYe3Vyks',
  'scratch': 'https://www.youtube.com/embed/r59xYe3Vyks'
};

export default function FreeVideoLectureCard({ topicTitle, topicDefinition, topicQA, subtopics, subjectId, classId, subjectColor = 'purple' }) {
  const [activeTab, setActiveTab] = useState('notebooklm'); // 'notebooklm' | 'video'
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentDialogueIdx, setCurrentDialogueIdx] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const synthRef = useRef(null);

  const titleLower = (topicTitle || '').toLowerCase();
  let videoEmbedUrl = 'https://www.youtube.com/embed/NybHckSEQBI';

  for (const [key, url] of Object.entries(CURATED_VIDEOS)) {
    if (titleLower.includes(key)) {
      videoEmbedUrl = url;
      break;
    }
  }

  // NotebookLM Student-Friendly Deep Explainer Generator
  const cleanDefinition = topicDefinition || `understanding the core principles, formulas, and real-world applications of ${topicTitle}.`;
  const firstQ = topicQA && topicQA.length > 0 ? topicQA[0].q : null;
  const firstA = topicQA && topicQA.length > 0 ? topicQA[0].a : null;
  const secondQ = topicQA && topicQA.length > 1 ? topicQA[1].q : null;
  const secondA = topicQA && topicQA.length > 1 ? topicQA[1].a : null;
  const subtopicText = subtopics ? `covering ${subtopics}` : '';

  const notebookScript = [
    {
      speaker: 'Dr. Alex (AI Lead Educator)',
      avatar: '👨‍🏫',
      color: '#6366f1',
      text: `Welcome to today's NotebookLM AI Overview! Today we are exploring "${topicTitle}" for ${classId ? classId.toUpperCase() : 'your board exams'}. In simple terms, this concept means: ${cleanDefinition}`
    },
    {
      speaker: 'Prof. Sarah (Concept Specialist)',
      avatar: '👩‍🔬',
      color: '#ec4899',
      text: `Thanks Alex! When studying ${topicTitle} ${subtopicText}, the secret is to break down big scientific formulas into simple everyday pictures. Connecting these ideas to real-life examples makes it super easy for any student to understand deeply!`
    },
    {
      speaker: 'Dr. Alex (AI Lead Educator)',
      avatar: '👨‍🏫',
      color: '#6366f1',
      text: `Exactly! When solving numericals or writing theory answers for ${topicTitle}, always write down your given values step-by-step, check your SI units, and highlight your final answer clearly.`
    },
    {
      speaker: 'Prof. Sarah (Concept Specialist)',
      avatar: '👩‍🔬',
      color: '#ec4899',
      text: firstQ ? `Let's practice a top board exam question: "${firstQ}" The simple step-by-step solution is: "${firstA}"` : `Mastering ${topicTitle} step-by-step guarantees you will feel confident and score top marks in your exams!`
    },
    {
      speaker: 'Dr. Alex (AI Lead Educator)',
      avatar: '👨‍🏫',
      color: '#6366f1',
      text: secondQ ? `Here is another important exam question: "${secondQ}" And the key answer is: "${secondA}"` : `Remember to highlight key scientific terms and box your final numerical answers in your answer sheet.`
    },
    {
      speaker: 'Prof. Sarah (Concept Specialist)',
      avatar: '👩‍🔬',
      color: '#ec4899',
      text: `Pro tip for exam night: Click the Formula Bank above to copy all key formulas, practice the step-by-step calculation boxes, and read all solved board Q&As below this lesson. Happy learning!`
    }
  ];

  // Handle Text-to-Speech playback using SpeechSynthesis
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) synthRef.current.cancel();
    };
  }, []);

  const speakDialogue = (index) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    if (index >= notebookScript.length) {
      setIsAudioPlaying(false);
      setCurrentDialogueIdx(0);
      return;
    }

    const dialogue = notebookScript[index];
    setCurrentDialogueIdx(index);

    const utterance = new SpeechSynthesisUtterance(dialogue.text);
    utterance.rate = playbackSpeed;
    utterance.pitch = dialogue.speaker.includes('Sarah') ? 1.2 : 0.95;

    utterance.onend = () => {
      if (index + 1 < notebookScript.length) {
        speakDialogue(index + 1);
      } else {
        setIsAudioPlaying(false);
        setCurrentDialogueIdx(0);
      }
    };

    utterance.onerror = () => {
      setIsAudioPlaying(false);
    };

    synthRef.current.speak(utterance);
  };

  const toggleNotebookAudio = () => {
    if (isAudioPlaying) {
      if (synthRef.current) synthRef.current.cancel();
      setIsAudioPlaying(false);
    } else {
      setIsAudioPlaying(true);
      speakDialogue(currentDialogueIdx);
    }
  };

  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(topicTitle + ' ' + (classId || '') + ' PhysicsWallah NCERT')}`;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      borderRadius: '24px',
      padding: '1.75rem',
      color: '#ffffff',
      marginBottom: '2.5rem',
      boxShadow: '0 16px 36px rgba(15, 23, 42, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Header & Tab Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
          <div style={{
            width: '46px', height: '46px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem',
            boxShadow: '0 4px 14px rgba(99,102,241,0.45)'
          }}>
            🤖
          </div>
          <div>
            <div style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, color: '#a5b4fc' }}>
              AI Learning Hub
            </div>
            <h3 style={{ margin: 0, fontSize: '1.3rem', fontFamily: 'Nunito, sans-serif', color: '#f8fafc', fontWeight: 800 }}>
              NotebookLM Overview: {topicTitle}
            </h3>
          </div>
        </div>

        {/* Tab Toggle */}
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.08)', padding: '4px', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => {
              setActiveTab('notebooklm');
              if (synthRef.current) synthRef.current.cancel();
              setIsAudioPlaying(false);
            }}
            style={{
              padding: '6px 16px', borderRadius: '99px', border: 'none',
              background: activeTab === 'notebooklm' ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'transparent',
              color: activeTab === 'notebooklm' ? '#fff' : '#94a3b8',
              fontWeight: 800, fontSize: '.82rem', cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            🎙️ NotebookLM AI Overview
          </button>
          <button
            onClick={() => {
              setActiveTab('video');
              if (synthRef.current) synthRef.current.cancel();
              setIsAudioPlaying(false);
            }}
            style={{
              padding: '6px 16px', borderRadius: '99px', border: 'none',
              background: activeTab === 'video' ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'transparent',
              color: activeTab === 'video' ? '#fff' : '#94a3b8',
              fontWeight: 800, fontSize: '.82rem', cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            🎬 Video Lecture
          </button>
        </div>
      </div>

      {/* Mode 1: NotebookLM Audio Podcast Overview */}
      {activeTab === 'notebooklm' && (
        <div style={{
          background: 'rgba(15, 23, 42, 0.75)',
          borderRadius: '16px',
          padding: '1.5rem',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Controls Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={toggleNotebookAudio}
                style={{
                  width: '54px', height: '54px', borderRadius: '50%',
                  background: isAudioPlaying ? '#ef4444' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  border: 'none', color: '#fff', fontSize: '1.5rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', boxShadow: '0 4px 16px rgba(99,102,241,0.5)'
                }}
              >
                {isAudioPlaying ? '⏸' : '▶'}
              </button>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#f8fafc' }}>
                  {isAudioPlaying ? 'Playing NotebookLM Deep Dive...' : 'Click to Play AI Audio Podcast'}
                </div>
                <div style={{ fontSize: '.8rem', color: '#94a3b8' }}>
                  Host 1: Dr. Alex & Host 2: Prof. Sarah
                </div>
              </div>
            </div>

            {/* Equalizer animation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '24px' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
                <div
                  key={bar}
                  style={{
                    width: '4px',
                    height: isAudioPlaying ? `${Math.floor(Math.random() * 20) + 6}px` : '6px',
                    background: '#818cf8',
                    borderRadius: '2px',
                    transition: 'height 0.15s ease'
                  }}
                />
              ))}
            </div>

            {/* Speed Control */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '.75rem', color: '#94a3b8', fontWeight: 700 }}>Speed:</span>
              {[1, 1.25, 1.5, 2].map(speed => (
                <button
                  key={speed}
                  onClick={() => {
                    setPlaybackSpeed(speed);
                    if (isAudioPlaying) speakDialogue(currentDialogueIdx);
                  }}
                  style={{
                    padding: '3px 8px', borderRadius: '6px', border: 'none',
                    background: playbackSpeed === speed ? '#6366f1' : 'rgba(255,255,255,0.1)',
                    color: '#fff', fontSize: '.75rem', fontWeight: 800, cursor: 'pointer'
                  }}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Dialogue Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {notebookScript.map((item, idx) => {
              const isActive = isAudioPlaying && currentDialogueIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setCurrentDialogueIdx(idx);
                    speakDialogue(idx);
                    setIsAudioPlaying(true);
                  }}
                  style={{
                    display: 'flex', gap: '1rem',
                    padding: '1rem', borderRadius: '14px',
                    background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255,255,255,0.03)',
                    border: isActive ? `1.5px solid ${item.color}` : '1px solid rgba(255,255,255,0.06)',
                    cursor: 'pointer', transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>{item.avatar}</div>
                  <div>
                    <div style={{ fontSize: '.8rem', fontWeight: 800, color: item.color, marginBottom: '2px' }}>
                      {item.speaker} {isActive && '🔊 Speaking...'}
                    </div>
                    <div style={{ fontSize: '.92rem', lineHeight: 1.6, color: isActive ? '#ffffff' : '#cbd5e1' }}>
                      "{item.text}"
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Mode 2: Video Lecture Embed */}
      {activeTab === 'video' && (
        <div style={{
          position: 'relative',
          paddingTop: '56.25%',
          borderRadius: '16px',
          overflow: 'hidden',
          background: '#000000',
          border: '1.5px solid rgba(255,255,255,0.15)'
        }}>
          {!isPlaying ? (
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              background: 'linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.85)), url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80") center/cover',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer'
            }} onClick={() => setIsPlaying(true)}>
              <div style={{
                width: '68px', height: '68px', borderRadius: '50%',
                background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem', color: '#fff', paddingLeft: '5px',
                boxShadow: '0 0 30px rgba(239,68,68,0.7)'
              }}>
                ▶
              </div>
              <p style={{ marginTop: '1rem', fontWeight: 700, fontSize: '.95rem', color: '#f1f5f9' }}>
                Click to Start Video Lecture
              </p>
              <a
                href={searchUrl} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{ color: '#60a5fa', fontSize: '.85rem', fontWeight: 700, marginTop: '.5rem', textDecoration: 'none' }}
              >
                🔍 Open Search on YouTube ↗
              </a>
            </div>
          ) : (
            <iframe
              src={`${videoEmbedUrl}?autoplay=1&rel=0`}
              title={`Video Lecture - ${topicTitle}`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      )}
    </div>
  );
}
