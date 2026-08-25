import React, { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';

const INITIAL_MESSAGES = [
  { id: 1, sender: 'Rahul S. (Class 12)', text: 'Just finished 50 Electrostatics PYQs! Starting Ray Optics now 🚀', time: '12:40 PM', avatar: '👨‍🎓' },
  { id: 2, sender: 'Ananya P. (JEE 2027)', text: 'Anyone solving Quadratic Equations? Is D > 0 for real roots?', time: '12:42 PM', avatar: '👩‍🎓' },
  { id: 3, sender: 'Aarav M. (NEET 2026)', text: 'Yes! D = b^2 - 4ac > 0 means distinct real roots. Keep going! 💪', time: '12:43 PM', avatar: '🧑‍🔬' },
];

export default function StudyRoomPage({ user }) {
  const [onlineCount, setOnlineCount] = useState(1428);
  const [pomodoroMode, setPomodoroMode] = useState('focus'); // 'focus' (25m) | 'break' (5m)
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [chatInput, setChatInput] = useState('');
  const [activeSound, setActiveSound] = useState(null); // 'rain' | 'lofi' | 'library' | null

  const chatBottomRef = useRef(null);

  // Live Online Counter fluctuation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Pomodoro Countdown Timer
  useEffect(() => {
    if (!timerRunning) return;
    if (timeLeft <= 0) {
      if (pomodoroMode === 'focus') {
        alert('🎉 Focus Session Completed! Time for a 5-minute break.');
        setPomodoroMode('break');
        setTimeLeft(5 * 60);
      } else {
        alert('⏰ Break time over! Ready for the next 25-minute Focus Session?');
        setPomodoroMode('focus');
        setTimeLeft(25 * 60);
      }
      setTimerRunning(false);
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timerRunning, timeLeft, pomodoroMode]);

  // Ambient Sound Web Audio API Generator
  useEffect(() => {
    if (!activeSound) return;

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    let nodes = [];

    try {
      if (activeSound === 'lofi') {
        // Soothing 432Hz chord oscillator for Lofi
        [216, 270, 324].forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = freq;
          gain.gain.value = 0.04;
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          nodes.push(osc);
        });
      } else if (activeSound === 'rain') {
        // Pink noise generator for Soft Rain
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.05;
          b6 = white * 0.115926;
        }
        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        const gain = ctx.createGain();
        gain.gain.value = 0.15;
        whiteNoise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        whiteNoise.start();
        nodes.push(whiteNoise);
      } else if (activeSound === 'library') {
        // Warm low rumble for Quiet Library
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = 110;
        gain.gain.value = 0.03;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        nodes.push(osc);
      }
    } catch (e) {
      console.warn('Web Audio synthesis warning:', e);
    }

    return () => {
      nodes.forEach(n => { try { n.stop(); } catch {} });
      try { ctx.close(); } catch {}
    };
  }, [activeSound]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function handleSendMessage(e) {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: user?.name || 'You (Scholar)',
      text: chatInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: '🌟'
    };

    setMessages(prev => [...prev, newMsg]);
    setChatInput('');
  }

  function resetTimer(mins) {
    setTimerRunning(false);
    setTimeLeft(mins * 60);
  }

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');

  return (
    <div style={{ background: 'linear-gradient(180deg, #0b0f19 0%, #1e1b4b 100%)', color: '#fff', minHeight: '100vh', padding: '2.5rem 0' }}>
      <SEO title="Peer-to-Peer Study Room — Focus Together" description="Join thousands of students in live synchronized Pomodoro study sessions." />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(248,113,113,0.3)', color: '#fca5a5', padding: '.35rem 1rem', borderRadius: 20, fontSize: '.8rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '.6rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 10px #ef4444' }} />
            🔴 {onlineCount.toLocaleString()} Scholars Focusing Live
          </div>

          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.75rem)', margin: '.5rem 0 .4rem', color: '#fff' }}>
            Peer-to-Peer Collaborative Study Room
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
            Never study alone again. Focus together using synchronized Pomodoro, ambient sound, and live peer Q&amp;A.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', maxWidth: 1040, margin: '0 auto' }}>
          {/* LEFT: SYNCHRONIZED POMODORO & AMBIENT AUDIO */}
          <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: '1.75rem', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ fontWeight: 900, fontSize: '1rem', color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  ⏱️ Synchronized Pomodoro
                </span>
                <div style={{ display: 'flex', gap: '.4rem' }}>
                  <button
                    onClick={() => { setPomodoroMode('focus'); resetTimer(25); }}
                    style={{ background: pomodoroMode === 'focus' ? '#4f46e5' : 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: 8, padding: '.35rem .75rem', fontSize: '.78rem', fontWeight: 800, cursor: 'pointer' }}
                  >
                    25m Focus
                  </button>
                  <button
                    onClick={() => { setPomodoroMode('break'); resetTimer(5); }}
                    style={{ background: pomodoroMode === 'break' ? '#10b981' : 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: 8, padding: '.35rem .75rem', fontSize: '.78rem', fontWeight: 800, cursor: 'pointer' }}
                  >
                    5m Break
                  </button>
                </div>
              </div>

              {/* Timer Display */}
              <div style={{ textAlign: 'center', padding: '2rem 1rem', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '4.2rem', letterSpacing: '2px', color: pomodoroMode === 'focus' ? '#f59e0b' : '#34d399', lineHeight: 1 }}>
                  {mins}:{secs}
                </div>
                <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '.5rem' }}>
                  {pomodoroMode === 'focus' ? '🎯 Deep Work Session' : '☕ Rest & Hydrate'}
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="btn btn-primary"
                    style={{ padding: '.75rem 2rem', borderRadius: 14, fontWeight: 900, fontSize: '1rem', background: timerRunning ? '#ef4444' : 'linear-gradient(135deg, #f59e0b, #d97706)', border: 'none' }}
                  >
                    {timerRunning ? '⏸️ Pause Timer' : '▶️ Start Focus Timer'}
                  </button>
                  <button
                    onClick={() => resetTimer(pomodoroMode === 'focus' ? 25 : 5)}
                    className="btn btn-secondary"
                    style={{ padding: '.75rem 1.25rem', borderRadius: 14, fontWeight: 800, background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none' }}
                  >
                    🔄 Reset
                  </button>
                </div>
              </div>

              {/* Ambient Sound Player */}
              <div>
                <div style={{ fontSize: '.82rem', fontWeight: 900, color: '#c7d2fe', marginBottom: '.65rem', textTransform: 'uppercase' }}>
                  🎧 Focus Ambient Background Sounds:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '.5rem' }}>
                  {[
                    { id: 'lofi', label: '🎼 Lofi Beats', icon: '🎧' },
                    { id: 'rain', label: '🌧️ Soft Rain', icon: '🌧️' },
                    { id: 'library', label: '📚 Quiet Library', icon: '📖' },
                  ].map(sound => (
                    <button
                      key={sound.id}
                      onClick={() => setActiveSound(activeSound === sound.id ? null : sound.id)}
                      style={{
                        background: activeSound === sound.id ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'rgba(255,255,255,0.08)',
                        border: activeSound === sound.id ? '1px solid #a5b4fc' : '1px solid rgba(255,255,255,0.12)',
                        color: '#fff',
                        borderRadius: 12,
                        padding: '.6rem .4rem',
                        fontSize: '.78rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      {sound.label} {activeSound === sound.id && '🔊'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: PEER LIVE CHAT & DOUBT BOX */}
          <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 24, padding: '1.5rem', boxShadow: '0 16px 40px rgba(0,0,0,0.35)', display: 'flex', flexDirection: 'column', height: 480 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '.6rem' }}>
              <span style={{ fontWeight: 900, fontSize: '.95rem', color: '#fff' }}>
                💬 Peer Live Chat &amp; Quick Q&amp;A
              </span>
              <span style={{ fontSize: '.75rem', color: '#4ade80', background: 'rgba(74,222,128,0.15)', padding: '2px 8px', borderRadius: 10, fontWeight: 800 }}>
                Live Feed
              </span>
            </div>

            {/* Chat Messages Feed */}
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '.75rem', paddingRight: '.25rem' }}>
              {messages.map(m => (
                <div key={m.id} style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '.75rem 1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.3rem' }}>
                    <span style={{ fontWeight: 800, color: '#a5b4fc', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                      <span>{m.avatar}</span> {m.sender}
                    </span>
                    <span style={{ fontSize: '.7rem', color: 'rgba(255,255,255,0.5)' }}>{m.time}</span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.85rem', lineHeight: 1.4 }}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={chatBottomRef} />
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '.5rem', marginTop: '1rem' }}>
              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                placeholder="Drop a quick query or encouraging note..."
                style={{ flex: 1, borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.4)', color: '#fff', padding: '.65rem 1rem', fontFamily: 'Nunito', fontSize: '.88rem' }}
              />
              <button
                type="submit"
                disabled={!chatInput.trim()}
                className="btn btn-primary"
                style={{ borderRadius: 12, padding: '.65rem 1.1rem', fontWeight: 900, background: 'linear-gradient(135deg,#6366f1,#4f46e5)', border: 'none' }}
              >
                Send 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
