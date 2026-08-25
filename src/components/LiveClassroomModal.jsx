import React, { useState, useRef, useEffect } from 'react';

export default function LiveClassroomModal({ isOpen, onClose, topicTitle = "Rotational Dynamics & Torque Masterclass", teacherName = "Dr. H. C. Verma", user }) {
  const [activeTab, setActiveTab] = useState('classroom'); // 'classroom' | 'whiteboard' | 'polls'
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);

  // Raise Hand state
  const [handRaised, setHandRaised] = useState(false);
  const [unmutedByTeacher, setUnmutedByTeacher] = useState(false);
  const [raisedHandList, setRaisedHandList] = useState([
    { id: 1, name: 'Ananya Sharma', class: 'Class 12', time: '2 mins ago' },
    { id: 2, name: 'Rohan Gupta', class: 'JEE Aspirant', time: 'Just now' }
  ]);

  // Poll state
  const [pollVoted, setPollVoted] = useState(null);
  const [pollCounts, setPollCounts] = useState({ A: 14, B: 52, C: 22, D: 8 });

  // Whiteboard Canvas State
  const [tool, setTool] = useState('pen'); // 'pen' | 'eraser' | 'rect' | 'circle'
  const [color, setColor] = useState('#ec4899');
  const [lineWidth, setLineWidth] = useState(4);
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isOpen || activeTab !== 'whiteboard') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Draw initial grid line background on canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 30) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 30) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
  }, [isOpen, activeTab]);

  function getCanvasCoords(e) {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  function startDrawing(e) {
    const coords = getCanvasCoords(e);
    isDrawingRef.current = true;
    startPosRef.current = coords;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    ctx.strokeStyle = tool === 'eraser' ? '#0f172a' : color;
    ctx.lineWidth = tool === 'eraser' ? 24 : lineWidth;
    ctx.lineCap = 'round';
  }

  function draw(e) {
    if (!isDrawingRef.current) return;
    const coords = getCanvasCoords(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (tool === 'pen' || tool === 'eraser') {
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();
    }
  }

  function stopDrawing(e) {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const coords = getCanvasCoords(e);

    if (tool === 'rect') {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      const w = coords.x - startPosRef.current.x;
      const h = coords.y - startPosRef.current.y;
      ctx.strokeRect(startPosRef.current.x, startPosRef.current.y, w, h);
    } else if (tool === 'circle') {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      const radius = Math.hypot(coords.x - startPosRef.current.x, coords.y - startPosRef.current.y);
      ctx.beginPath();
      ctx.arc(startPosRef.current.x, startPosRef.current.y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }

  function clearWhiteboard() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function handleToggleRaiseHand() {
    if (!handRaised) {
      setHandRaised(true);
      const studentName = user?.name || 'You';
      setRaisedHandList(prev => [{ id: Date.now(), name: studentName, class: 'Current Student', time: 'Just now' }, ...prev]);
      // Simulate teacher approval after 3.5 seconds
      setTimeout(() => {
        setUnmutedByTeacher(true);
      }, 3500);
    } else {
      setHandRaised(false);
      setUnmutedByTeacher(false);
    }
  }

  function handleVote(optionKey) {
    if (pollVoted) return;
    setPollVoted(optionKey);
    setPollCounts(prev => ({ ...prev, [optionKey]: prev[optionKey] + 1 }));
  }

  const totalPollVotes = Object.values(pollCounts).reduce((a, b) => a + b, 0);

  if (!isOpen) return null;

  return (
    <div className="media-modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="media-modal" style={{ maxWidth: 1060, width: '96vw', maxHeight: '94vh', overflowY: 'auto', borderRadius: 24, padding: 0, background: '#090d16', color: '#fff', border: '1.5px solid rgba(255,255,255,0.15)' }}>
        
        {/* Top Header */}
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', padding: '1.1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopLeftRadius: 24, borderTopRightRadius: 24, flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.85rem' }}>
            <div style={{ background: '#ef4444', color: '#fff', fontSize: '.7rem', fontWeight: 900, padding: '3px 10px', borderRadius: 20, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '.4rem', boxShadow: '0 0 12px rgba(239,68,68,0.6)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
              LIVE WEBRTC CLASSROOM
            </div>
            <div>
              <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.15rem', margin: 0 }}>
                {topicTitle}
              </h3>
              <p style={{ fontSize: '.8rem', opacity: .85, margin: 0 }}>Instructor: <strong>{teacherName}</strong> • 148 Students Connected</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
            <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: 36, height: 36, borderRadius: '50%', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ✕
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '.5rem', padding: '.75rem 1.5rem', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <button
            onClick={() => setActiveTab('classroom')}
            style={{ padding: '.5rem 1.25rem', border: 'none', borderRadius: 10, fontWeight: 900, fontSize: '.85rem', cursor: 'pointer', background: activeTab === 'classroom' ? 'linear-gradient(135deg,#6366f1,#4f46e5)' : 'transparent', color: '#fff' }}
          >
            📹 Live Video &amp; Stage
          </button>
          <button
            onClick={() => setActiveTab('whiteboard')}
            style={{ padding: '.5rem 1.25rem', border: 'none', borderRadius: 10, fontWeight: 900, fontSize: '.85rem', cursor: 'pointer', background: activeTab === 'whiteboard' ? 'linear-gradient(135deg,#ec4899,#d946ef)' : 'transparent', color: '#fff' }}
          >
            🎨 Collaborative Whiteboard
          </button>
          <button
            onClick={() => setActiveTab('polls')}
            style={{ padding: '.5rem 1.25rem', border: 'none', borderRadius: 10, fontWeight: 900, fontSize: '.85rem', cursor: 'pointer', background: activeTab === 'polls' ? 'linear-gradient(135deg,#f59e0b,#d97706)' : 'transparent', color: '#fff' }}
          >
            📊 In-Class MCQ Polls
          </button>
        </div>

        <div style={{ padding: '1.5rem' }}>
          {/* VIEW 1: LIVE CLASSROOM & STAGE */}
          {activeTab === 'classroom' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {/* Teacher Video Stream Canvas */}
              <div style={{ background: '#020617', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 20, overflow: 'hidden', position: 'relative', height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80" alt="Teacher Stage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Overlay Badge */}
                <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', padding: '.35rem .85rem', borderRadius: 10, fontSize: '.78rem', fontWeight: 800, color: '#38bdf8', border: '1px solid rgba(56,189,248,0.3)' }}>
                  👨‍🏫 Mentor Stage: {teacherName}
                </div>

                {/* Raise Hand Audio Banner when unmuted */}
                {unmutedByTeacher && (
                  <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, background: 'linear-gradient(90deg, #10b981, #059669)', padding: '.65rem 1rem', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 8px 24px rgba(16,185,129,0.5)' }}>
                    <span style={{ fontSize: '.83rem', fontWeight: 900, color: '#fff' }}>
                      🎙️ Teacher unmuted your microphone! Speak your doubt now.
                    </span>
                    <span style={{ fontSize: '.72rem', background: '#fff', color: '#047857', padding: '2px 8px', borderRadius: 8, fontWeight: 900 }}>
                      AUDIO LIVE
                    </span>
                  </div>
                )}
              </div>

              {/* Student Controls & Raised Hand Queue */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Control Panel */}
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: '1.25rem' }}>
                  <h4 style={{ fontFamily: 'Nunito', fontWeight: 900, margin: '0 0 .75rem', fontSize: '1rem', color: '#fff' }}>
                    🎛️ Audio / Video Stream Controls
                  </h4>

                  <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    <button
                      onClick={() => setMicOn(!micOn)}
                      style={{ flex: 1, padding: '.65rem', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: '.82rem', cursor: 'pointer', background: micOn ? '#10b981' : '#ef4444', color: '#fff' }}
                    >
                      {micOn ? '🎙️ Mic ON' : '🔇 Mic Muted'}
                    </button>
                    <button
                      onClick={() => setCamOn(!camOn)}
                      style={{ flex: 1, padding: '.65rem', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: '.82rem', cursor: 'pointer', background: camOn ? '#3b82f6' : '#64748b', color: '#fff' }}
                    >
                      {camOn ? '📹 Camera ON' : '📷 Cam Off'}
                    </button>
                    <button
                      onClick={() => setScreenSharing(!screenSharing)}
                      style={{ flex: 1, padding: '.65rem', border: 'none', borderRadius: 12, fontWeight: 800, fontSize: '.82rem', cursor: 'pointer', background: screenSharing ? '#8b5cf6' : 'rgba(255,255,255,0.15)', color: '#fff' }}
                    >
                      {screenSharing ? '🖥️ Sharing' : '💻 Share Screen'}
                    </button>
                  </div>

                  {/* Raise Hand Feature Button */}
                  <button
                    onClick={handleToggleRaiseHand}
                    style={{
                      width: '100%',
                      padding: '.85rem',
                      border: 'none',
                      borderRadius: 14,
                      fontWeight: 900,
                      fontSize: '.95rem',
                      cursor: 'pointer',
                      background: handRaised ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'linear-gradient(135deg, #f59e0b, #d97706)',
                      color: '#fff',
                      boxShadow: handRaised ? '0 4px 20px rgba(239,68,68,0.5)' : '0 4px 20px rgba(245,158,11,0.4)',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '.5rem'
                    }}
                  >
                    <span style={{ fontSize: '1.3rem' }}>✋</span>
                    {handRaised ? 'Lower Hand (Request Pending)' : 'Raise Hand to Ask Verbal Doubt'}
                  </button>
                </div>

                {/* Live Verbal Doubt Queue */}
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: '1.25rem', flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: '.88rem', color: '#fbbf24', marginBottom: '.65rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>✋ Live Verbal Doubt Queue ({raisedHandList.length})</span>
                    <span style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.6)' }}>Mentor Queue</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', maxHeight: 160, overflowY: 'auto' }}>
                    {raisedHandList.map((item, i) => (
                      <div key={item.id} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '.5rem .75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ fontSize: '.83rem', fontWeight: 800, color: '#fff' }}>✋ {item.name}</div>
                          <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.6)' }}>{item.class} • {item.time}</div>
                        </div>
                        <span style={{ fontSize: '.7rem', background: 'rgba(245,158,11,0.2)', color: '#fef08a', padding: '2px 6px', borderRadius: 6, fontWeight: 800 }}>
                          Queue #{i + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: COLLABORATIVE WHITEBOARD */}
          {activeTab === 'whiteboard' && (
            <div>
              {/* Toolbar */}
              <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem', background: 'rgba(255,255,255,0.06)', padding: '.75rem 1rem', borderRadius: 16, border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ fontSize: '.8rem', fontWeight: 800, color: '#ec4899', textTransform: 'uppercase' }}>🎨 Whiteboard Tools:</span>
                
                <div style={{ display: 'flex', gap: '.35rem' }}>
                  {[
                    { id: 'pen', label: '✏️ Pen' },
                    { id: 'eraser', label: '🧹 Eraser' },
                    { id: 'rect', label: '🔲 Rectangle' },
                    { id: 'circle', label: '⚪ Circle' },
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTool(t.id)}
                      style={{ background: tool === t.id ? '#ec4899' : 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: 8, padding: '.4rem .75rem', fontSize: '.78rem', fontWeight: 800, cursor: 'pointer' }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                  <span style={{ fontSize: '.78rem', opacity: .8 }}>Color:</span>
                  {['#ec4899', '#38bdf8', '#f59e0b', '#4ade80', '#ffffff'].map(c => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      style={{ width: 22, height: 22, borderRadius: '50%', background: c, border: color === c ? '2px solid #fff' : 'none', cursor: 'pointer' }}
                    />
                  ))}
                </div>

                <button
                  onClick={clearWhiteboard}
                  style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(248,113,113,0.3)', color: '#fca5a5', borderRadius: 8, padding: '.4rem .85rem', fontSize: '.78rem', fontWeight: 800, cursor: 'pointer', marginLeft: 'auto' }}
                >
                  🗑️ Clear Board
                </button>
              </div>

              {/* Canvas Board */}
              <canvas
                ref={canvasRef}
                width={980}
                height={420}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                style={{ width: '100%', height: 'auto', borderRadius: 18, border: '1.5px solid rgba(255,255,255,0.18)', cursor: tool === 'eraser' ? 'cell' : 'crosshair' }}
              />
            </div>
          )}

          {/* VIEW 3: IN-CLASS MCQ POLLS */}
          {activeTab === 'polls' && (
            <div style={{ maxWidth: 680, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 22, padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ background: 'rgba(245,158,11,0.2)', color: '#fef08a', fontSize: '.75rem', fontWeight: 900, padding: '.3rem .8rem', borderRadius: 10, textTransform: 'uppercase' }}>
                  📊 Live In-Class MCQ Poll
                </span>
                <span style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.7)' }}>
                  Total Votes: <strong>{totalPollVotes}</strong>
                </span>
              </div>

              <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#fff', fontSize: '1.15rem', lineHeight: 1.5, margin: '0 0 1.25rem' }}>
                Q: What happens to the angular velocity (ω) of a spinning ice skater when she pulls her arms inward?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
                {[
                  { key: 'A', text: 'Decreases due to increased moment of inertia' },
                  { key: 'B', text: 'Increases due to conservation of angular momentum (L = Iω)' },
                  { key: 'C', text: 'Remains unchanged' },
                  { key: 'D', text: 'Becomes zero' }
                ].map(opt => {
                  const count = pollCounts[opt.key];
                  const pct = totalPollVotes > 0 ? Math.round((count / totalPollVotes) * 100) : 0;
                  const isSelected = pollVoted === opt.key;

                  return (
                    <div
                      key={opt.key}
                      onClick={() => handleVote(opt.key)}
                      style={{
                        background: isSelected ? 'rgba(99,102,241,0.25)' : 'rgba(0,0,0,0.35)',
                        border: isSelected ? '2px solid #6366f1' : '1px solid rgba(255,255,255,0.12)',
                        borderRadius: 14,
                        padding: '1rem 1.25rem',
                        cursor: pollVoted ? 'default' : 'pointer',
                        transition: 'all 0.2s',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Bar Fill Chart */}
                      {pollVoted && (
                        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: `${pct}%`, background: isSelected ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.06)', transition: 'width 0.6s ease' }} />
                      )}

                      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                          <span style={{ background: isSelected ? '#4f46e5' : 'rgba(255,255,255,0.15)', color: '#fff', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '.85rem' }}>
                            {opt.key}
                          </span>
                          <span style={{ fontWeight: 800, fontSize: '.9rem', color: '#fff' }}>{opt.text}</span>
                        </div>
                        {pollVoted && (
                          <span style={{ fontWeight: 900, color: isSelected ? '#a5b4fc' : 'rgba(255,255,255,0.8)', fontSize: '.9rem' }}>
                            {pct}% ({count})
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
