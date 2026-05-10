import React, { useState, useEffect, useCallback } from 'react';
import { api } from '../utils/api';

const RANK_MEDAL = ['🥇', '🥈', '🥉'];
const OPT_IN_KEY = 'osh_leaderboard_optin';

function loadOptIn() {
  try { return JSON.parse(localStorage.getItem(OPT_IN_KEY) || 'null'); } catch { return null; }
}
function saveOptIn(data) {
  try { localStorage.setItem(OPT_IN_KEY, JSON.stringify(data)); } catch {}
}

export default function PeerLeaderboard({ user, classId, topicsCompleted, quizData }) {
  const [board,      setBoard]      = useState([]);
  const [loading,    setLoading]    = useState(false);
  const [optIn,      setOptIn]      = useState(() => loadOptIn());
  const [nickname,   setNickname]   = useState(optIn?.nickname || '');
  const [showForm,   setShowForm]   = useState(false);
  const [myRank,     setMyRank]     = useState(null);
  const [myScore,    setMyScore]    = useState(null);
  const [lastSubmit, setLastSubmit] = useState(optIn?.lastSubmit || null);

  const quizAvg = quizData.length > 0
    ? quizData.reduce((s, q) => s + Math.round((q.correct / q.total) * 100), 0) / quizData.length
    : 0;

  const fetchBoard = useCallback(async (cid) => {
    setLoading(true);
    try {
      const data = await api(`/leaderboard/${cid}`);
      setBoard(Array.isArray(data) ? data : []);
    } catch {
      setBoard([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (classId) fetchBoard(classId);
  }, [classId, fetchBoard]);

  async function submitScore(nick) {
    if (!user) return;
    const today = new Date().toISOString().slice(0, 10);
    if (lastSubmit === today) return; // already submitted today
    try {
      const res = await api('/leaderboard/submit', {
        method: 'POST',
        body: {
          classId,
          topicsCompleted,
          quizAvg,
          displayName: nick || nickname || user.name?.split(' ')[0] || 'Student',
          avatar: user.avatar || '🧑‍🎓',
        },
      });
      const newOptIn = { nickname: nick || nickname, lastSubmit: today };
      saveOptIn(newOptIn);
      setOptIn(newOptIn);
      setLastSubmit(today);
      setMyScore(res.score);
      await fetchBoard(classId);
    } catch {}
  }

  function handleJoin(e) {
    e.preventDefault();
    const nick = nickname.trim() || user?.name?.split(' ')[0] || 'Student';
    saveOptIn({ nickname: nick, lastSubmit: null });
    setOptIn({ nickname: nick, lastSubmit: null });
    setShowForm(false);
    submitScore(nick);
  }

  function handleOptOut() {
    if (!window.confirm('Leave the leaderboard? Your score will be removed next week.')) return;
    localStorage.removeItem(OPT_IN_KEY);
    setOptIn(null);
    setBoard([]);
    setMyRank(null);
  }

  // Auto-submit on mount if already opted in
  useEffect(() => {
    if (optIn && user && classId) submitScore(optIn.nickname);
  }, []); // eslint-disable-line

  // Compute my rank from board
  useEffect(() => {
    if (!myScore || board.length === 0) return;
    const rank = board.findIndex(e => e.score <= myScore);
    setMyRank(rank === -1 ? board.length + 1 : rank + 1);
  }, [board, myScore]);

  if (!classId) return null;

  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <span style={{ fontSize: '1.3rem' }}>🏆</span>
          <div>
            <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '.95rem', color: '#fff' }}>
              Weekly Class Leaderboard
            </div>
            <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.6)' }}>
              Resets every Monday · Top 10 students
            </div>
          </div>
        </div>
        {optIn && (
          <button onClick={handleOptOut}
            style={{ background: 'rgba(255,255,255,.12)', border: 'none', color: 'rgba(255,255,255,.7)', fontSize: '.68rem', padding: '4px 10px', borderRadius: 6, cursor: 'pointer' }}>
            Leave
          </button>
        )}
      </div>

      <div style={{ padding: '1rem 1.25rem' }}>

        {/* My score pill */}
        {optIn && myScore != null && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', background: '#eef2ff', borderRadius: 10, padding: '.6rem .9rem', marginBottom: '.9rem' }}>
            <span style={{ fontSize: '1.1rem' }}>{user?.avatar || '🧑‍🎓'}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '.78rem', fontWeight: 800, color: '#4f46e5' }}>
                You · {optIn.nickname}
              </div>
              <div style={{ fontSize: '.68rem', color: '#6b7280' }}>
                Score: {myScore} pts · Rank #{myRank || '—'}
              </div>
            </div>
            <div style={{ fontSize: '.75rem', fontWeight: 800, color: '#4f46e5' }}>
              {topicsCompleted} topics · {Math.round(quizAvg)}% quiz avg
            </div>
          </div>
        )}

        {/* Board */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '1.5rem', color: '#9ca3af', fontSize: '.82rem' }}>Loading rankings…</div>
        ) : board.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '1.25rem 0', color: '#9ca3af' }}>
            <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>🌟</div>
            <div style={{ fontSize: '.85rem', fontWeight: 600, color: '#374151' }}>No rankings yet this week</div>
            <div style={{ fontSize: '.75rem', marginTop: '.25rem' }}>Be the first to join!</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem', marginBottom: '.9rem' }}>
            {board.map((entry, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '.65rem',
                padding: '.5rem .75rem', borderRadius: 10,
                background: i === 0 ? '#fffbeb' : i === 1 ? '#f9fafb' : i === 2 ? '#fff7f0' : '#fafafa',
                border: `1px solid ${i === 0 ? '#fde68a' : i === 1 ? '#e5e7eb' : i === 2 ? '#fed7aa' : '#f3f4f6'}`,
              }}>
                <span style={{ fontSize: i < 3 ? '1.1rem' : '.85rem', minWidth: 22, textAlign: 'center' }}>
                  {i < 3 ? RANK_MEDAL[i] : `#${i + 1}`}
                </span>
                <span style={{ fontSize: '1.1rem' }}>{entry.avatar}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '.82rem', fontWeight: 700, color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{entry.name}</div>
                  <div style={{ fontSize: '.65rem', color: '#9ca3af' }}>{entry.topics} topics · {entry.quizAvg}% avg</div>
                </div>
                <div style={{ fontSize: '.82rem', fontWeight: 800, color: i === 0 ? '#d97706' : '#4f46e5' }}>
                  {entry.score} pts
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Join / opt-in */}
        {!optIn && !showForm && (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '.78rem', color: '#6b7280', marginBottom: '.75rem', lineHeight: 1.5 }}>
              🔒 <strong>Privacy-first:</strong> only your chosen nickname is shown. Join to see how you rank!
            </p>
            <button
              onClick={() => setShowForm(true)}
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff', border: 'none', borderRadius: 10, padding: '.6rem 1.5rem', fontWeight: 800, fontSize: '.85rem', cursor: 'pointer' }}>
              Join Leaderboard
            </button>
          </div>
        )}

        {showForm && (
          <form onSubmit={handleJoin} style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
            <input
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              placeholder="Your nickname (e.g. StarStudent)"
              maxLength={20}
              style={{ flex: 1, border: '1.5px solid #c7d2fe', borderRadius: 8, padding: '.5rem .75rem', fontSize: '.85rem', outline: 'none' }}
            />
            <button type="submit"
              style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 8, padding: '.5rem 1rem', fontWeight: 800, fontSize: '.82rem', cursor: 'pointer' }}>
              Join
            </button>
            <button type="button" onClick={() => setShowForm(false)}
              style={{ background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 8, padding: '.5rem .75rem', fontSize: '.82rem', cursor: 'pointer' }}>
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
