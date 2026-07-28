import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';

const BADGE_META = {
  // Progress badges
  first_step:     { icon: '🚀', label: 'First Step',           color: '#f59e0b' },
  streak_3:       { icon: '🔥', label: 'On Fire!',             color: '#ef4444' },
  streak_7:       { icon: '⚡', label: 'Week Warrior',         color: '#f59e0b' },
  streak_30:      { icon: '💎', label: 'Diamond Streak',       color: '#06b6d4' },
  xp_100:         { icon: '⭐', label: 'Rising Star',          color: '#f59e0b' },
  xp_500:         { icon: '🌟', label: 'Star Student',         color: '#8b5cf6' },
  xp_1000:        { icon: '🏆', label: 'XP Champion',          color: '#f59e0b' },
  quiz_10:        { icon: '🎯', label: 'Quiz Ace',             color: '#10b981' },
  quiz_50:        { icon: '🧠', label: 'Quiz Master',          color: '#4f46e5' },
  doubt_5:        { icon: '💬', label: 'Community Helper',     color: '#6366f1' },
  topics_10:      { icon: '📚', label: 'Knowledge Seeker',     color: '#059669' },
  topics_50:      { icon: '🎓', label: 'Scholar',              color: '#1e1b4b' },
  level_5:        { icon: '🦁', label: 'Level 5 Achiever',     color: '#d97706' },
  level_10:       { icon: '👑', label: 'Elite Learner',        color: '#7c3aed' },
  // Subject-specific achievement badges
  maths_wizard:   { icon: '🔢', label: 'Calculus Wizard',      color: '#4f46e5' },
  physics_ace:    { icon: '⚡', label: 'Physics Ace',          color: '#0ea5e9' },
  chem_synth:     { icon: '🧪', label: 'Organic Synthesizer',  color: '#10b981' },
  bio_master:     { icon: '🧬', label: 'NEET Bio Master',       color: '#16a34a' },
  history_buff:   { icon: '📜', label: 'History Buff',         color: '#92400e' },
  geo_explorer:   { icon: '🌍', label: 'Geo Explorer',         color: '#0284c7' },
  english_author: { icon: '✍️', label: 'English Author',       color: '#7c3aed' },
  cs_coder:       { icon: '💻', label: 'CS Coder',             color: '#1d4ed8' },
  eco_analyst:    { icon: '📈', label: 'Economics Analyst',    color: '#059669' },
  jee_warrior:    { icon: '🎯', label: 'JEE Warrior',          color: '#dc2626' },
  neet_champion:  { icon: '🏅', label: 'NEET Champion',        color: '#15803d' },
};

const LEVEL_THRESHOLDS = [0, 50, 150, 300, 500, 800, 1200, 1700, 2300, 3000];
const LEVEL_COLORS = [
  '#94a3b8','#10b981','#3b82f6','#8b5cf6','#f59e0b',
  '#ef4444','#ec4899','#06b6d4','#f97316','#fbbf24',
];

function getLevelProgress(xp, level) {
  const lo = LEVEL_THRESHOLDS[level - 1] || 0;
  const hi = LEVEL_THRESHOLDS[level] || lo + 500;
  return Math.min(100, Math.round(((xp - lo) / (hi - lo)) * 100));
}

function XPBadge({ badgeId }) {
  const b = BADGE_META[badgeId];
  if (!b) return null;
  return (
    <div title={b.label} style={{ width: 40, height: 40, borderRadius: '50%', background: b.color + '22', border: `2px solid ${b.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'default', flexShrink: 0 }}>
      {b.icon}
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1rem 1.25rem', textAlign: 'center', flex: 1, minWidth: 100 }}>
      <div style={{ fontSize: '1.6rem', marginBottom: '.2rem' }}>{icon}</div>
      <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.4rem', color: color || '#1e1b4b' }}>{value}</div>
      <div style={{ fontSize: '.75rem', color: '#64748b', fontWeight: 600 }}>{label}</div>
    </div>
  );
}

export default function LeaderboardPage({ user, onOpenLogin }) {
  const [tab, setTab] = useState('leaderboard'); // 'leaderboard' | 'my_stats'
  const [leaderType, setLeaderType] = useState('alltime'); // 'alltime' | 'weekly'
  const [leaderboard, setLeaderboard] = useState([]);
  const [myStats, setMyStats] = useState(null);
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newBadge, setNewBadge] = useState(null);

  const loadLeaderboard = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api(`/gamification/leaderboard?type=${leaderType}`);
      setLeaderboard(Array.isArray(data) ? data : []);
    } catch {
      // offline demo data
      setLeaderboard([
        { studentName: 'Arjun Sharma', studentEmail: 'arjun@demo', xp: 2480, weeklyXp: 340, streak: 21, level: 8, badges: ['xp_1000','streak_7','quiz_50'], topicsCompleted: 62 },
        { studentName: 'Priya Verma',  studentEmail: 'priya@demo', xp: 1890, weeklyXp: 290, streak: 14, level: 7, badges: ['xp_500','streak_7','topics_50'],  topicsCompleted: 51 },
        { studentName: 'Rahul Gupta',  studentEmail: 'rahul@demo', xp: 1420, weeklyXp: 210, streak: 9,  level: 6, badges: ['xp_500','quiz_10'],             topicsCompleted: 38 },
        { studentName: 'Sneha Patel',  studentEmail: 'sneha@demo', xp: 980,  weeklyXp: 180, streak: 7,  level: 5, badges: ['streak_7','xp_500'],            topicsCompleted: 29 },
        { studentName: 'Karan Mehta',  studentEmail: 'karan@demo', xp: 740,  weeklyXp: 140, streak: 4,  level: 4, badges: ['streak_3','topics_10'],          topicsCompleted: 17 },
        { studentName: 'Aarav Singh',  studentEmail: 'aarav@demo', xp: 560,  weeklyXp: 110, streak: 3,  level: 4, badges: ['streak_3','xp_100'],             topicsCompleted: 14 },
        { studentName: 'Divya Rao',    studentEmail: 'divya@demo', xp: 340,  weeklyXp: 80,  streak: 2,  level: 3, badges: ['first_step','xp_100'],           topicsCompleted: 10 },
        { studentName: 'Nishant Kumar',studentEmail: 'nish@demo',  xp: 180,  weeklyXp: 60,  streak: 1,  level: 2, badges: ['first_step'],                    topicsCompleted: 6  },
      ]);
    } finally {
      setLoading(false);
    }
  }, [leaderType]);

  const loadMyStats = useCallback(async () => {
    if (!user) return;
    try {
      const data = await api('/gamification/me');
      setMyStats(data);
    } catch {
      setMyStats({ xp: 0, level: 1, streak: 0, longestStreak: 0, badges: [], weeklyXp: 0, topicsCompleted: 0, quizzesTaken: 0, doubtsPosted: 0 });
    }
  }, [user]);

  const loadBadges = useCallback(async () => {
    try {
      const data = await api('/gamification/badges');
      setBadges(Array.isArray(data) ? data : []);
    } catch {
      setBadges(Object.entries(BADGE_META).map(([id, b]) => ({ id, ...b, desc: '' })));
    }
  }, []);

  useEffect(() => { loadLeaderboard(); }, [loadLeaderboard]);
  useEffect(() => { loadMyStats(); }, [loadMyStats]);
  useEffect(() => { loadBadges(); }, [loadBadges]);

  const rankEmoji = (i) => i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`;
  const isMe = (row) => user && row.studentEmail === user.email;

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Hero Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 60%, #7c3aed 100%)', color: '#fff', padding: '3rem 0 2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.75rem' }}>
            <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.35))' }}>🏆</span>
            <div>
              <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', margin: 0, lineHeight: 1.1 }}>
                Study Leaderboard &amp; XP Arena
              </h1>
              <p style={{ opacity: .8, margin: '.4rem 0 0', fontSize: '.95rem' }}>
                Earn XP, build streaks &amp; compete with students across India 🇮🇳
              </p>
            </div>
          </div>

          {/* Tab Bar */}
          <div style={{ display: 'flex', gap: '.5rem', marginTop: '1.5rem' }}>
            {[
              { id: 'leaderboard', label: '🏅 Leaderboard' },
              { id: 'my_stats',    label: '⚡ My XP &amp; Badges' },
            ].map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                style={{ padding: '.55rem 1.25rem', border: 'none', borderRadius: 10, fontFamily: 'Nunito', fontWeight: 800, fontSize: '.9rem', cursor: 'pointer', background: tab === t.id ? '#fff' : 'rgba(255,255,255,0.15)', color: tab === t.id ? '#4f46e5' : '#fff', transition: 'all 0.2s' }}
                dangerouslySetInnerHTML={{ __html: t.label }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1rem', maxWidth: 900 }}>

        {/* New Badge Toast */}
        {newBadge && (
          <div style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff', padding: '1rem 1.5rem', borderRadius: 16, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 8px 24px rgba(245,158,11,0.4)', animation: 'slideDown 0.4s ease' }}>
            <span style={{ fontSize: '2rem' }}>{newBadge.icon}</span>
            <div>
              <div style={{ fontWeight: 900, fontFamily: 'Nunito', fontSize: '1.05rem' }}>🎉 New Badge Unlocked: {newBadge.label}!</div>
              <div style={{ opacity: .85, fontSize: '.85rem' }}>{newBadge.desc}</div>
            </div>
            <button onClick={() => setNewBadge(null)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
          </div>
        )}

        {/* TAB: Leaderboard */}
        {tab === 'leaderboard' && (
          <div>
            {/* Type switcher */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', margin: 0, fontSize: '1.3rem' }}>
                Top Students
              </h2>
              <div style={{ display: 'flex', gap: '.5rem', background: '#e2e8f0', padding: 3, borderRadius: 10 }}>
                {[['alltime', '🏆 All Time'], ['weekly', '⚡ This Week']].map(([key, lbl]) => (
                  <button key={key} onClick={() => setLeaderType(key)}
                    style={{ padding: '.45rem 1rem', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '.82rem', cursor: 'pointer', background: leaderType === key ? '#fff' : 'transparent', color: leaderType === key ? '#4f46e5' : '#64748b', boxShadow: leaderType === key ? '0 2px 8px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.2s' }}
                  >{lbl}</button>
                ))}
              </div>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>Loading leaderboard…</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                {leaderboard.map((row, i) => {
                  const lvlColor = LEVEL_COLORS[Math.min(row.level - 1, LEVEL_COLORS.length - 1)];
                  const me = isMe(row);
                  return (
                    <div key={row.studentEmail} style={{ background: me ? 'linear-gradient(135deg, #ede9fe, #e0e7ff)' : '#fff', border: me ? '2px solid #6366f1' : '1px solid #e2e8f0', borderRadius: 16, padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: me ? '0 4px 20px rgba(99,102,241,0.15)' : '0 1px 4px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s', flexWrap: 'wrap' }}>
                      {/* Rank */}
                      <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: i < 3 ? '1.6rem' : '1rem', color: i < 3 ? undefined : '#94a3b8', minWidth: 44, textAlign: 'center' }}>
                        {rankEmoji(i)}
                      </div>

                      {/* Avatar circle */}
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${lvlColor}, ${lvlColor}88)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Nunito', fontWeight: 900, fontSize: '1rem', color: '#fff', flexShrink: 0, boxShadow: `0 3px 10px ${lvlColor}55` }}>
                        {(row.studentName || '?').charAt(0).toUpperCase()}
                      </div>

                      {/* Name + badges */}
                      <div style={{ flex: 1, minWidth: 140 }}>
                        <div style={{ fontFamily: 'Nunito', fontWeight: 800, color: me ? '#3730a3' : '#1e1b4b', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                          {row.studentName || 'Anonymous'}
                          {me && <span style={{ background: '#4f46e5', color: '#fff', fontSize: '.65rem', fontWeight: 900, padding: '1px 7px', borderRadius: 10 }}>YOU</span>}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', marginTop: '.25rem' }}>
                          <span style={{ background: lvlColor + '22', color: lvlColor, fontSize: '.72rem', fontWeight: 800, padding: '2px 8px', borderRadius: 20 }}>Lv.{row.level}</span>
                          <span style={{ fontSize: '.75rem', color: '#64748b' }}>🔥 {row.streak}d streak</span>
                          <span style={{ fontSize: '.75rem', color: '#64748b' }}>📚 {row.topicsCompleted} topics</span>
                        </div>
                        {/* Recent badges preview */}
                        {row.badges?.length > 0 && (
                          <div style={{ display: 'flex', gap: 4, marginTop: '.3rem', flexWrap: 'wrap' }}>
                            {row.badges.slice(0, 5).map(bid => {
                              const b = BADGE_META[bid];
                              return b ? <span key={bid} title={b.label} style={{ fontSize: '.85rem' }}>{b.icon}</span> : null;
                            })}
                            {row.badges.length > 5 && <span style={{ fontSize: '.7rem', color: '#94a3b8' }}>+{row.badges.length - 5}</span>}
                          </div>
                        )}
                      </div>

                      {/* XP */}
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.3rem', color: '#4f46e5', lineHeight: 1 }}>
                          {leaderType === 'weekly' ? row.weeklyXp : row.xp}
                        </div>
                        <div style={{ fontSize: '.72rem', color: '#94a3b8', fontWeight: 600 }}>{leaderType === 'weekly' ? 'Weekly XP' : 'Total XP'}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* XP earn guide */}
            <div style={{ marginTop: '2rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1.25rem 1.5rem' }}>
              <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', margin: '0 0 1rem', fontSize: '1rem' }}>⚡ How to Earn XP</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '.75rem' }}>
                {[
                  { action: '📖 Read a Topic', xp: '+20 XP' },
                  { action: '🎯 Complete a Quiz', xp: '+15 XP' },
                  { action: '💬 Post a Doubt', xp: '+10 XP' },
                  { action: '🌅 Daily Login', xp: '+5 XP' },
                ].map(item => (
                  <div key={item.action} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '.6rem 1rem', borderRadius: 10 }}>
                    <span style={{ fontSize: '.85rem', color: '#334155' }}>{item.action}</span>
                    <span style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#4f46e5', fontSize: '.9rem' }}>{item.xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: My XP & Badges */}
        {tab === 'my_stats' && (
          <div>
            {!user ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
                <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b' }}>Login to Track Your XP</h2>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Create a free account to earn XP, build streaks and collect badges.</p>
                <button onClick={() => onOpenLogin && onOpenLogin()} className="btn btn-primary" style={{ padding: '.85rem 2rem', borderRadius: 14, fontWeight: 800 }}>🔑 Login / Sign Up</button>
              </div>
            ) : myStats ? (
              <div>
                {/* Level Card */}
                <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)', color: '#fff', borderRadius: 20, padding: '1.75rem 2rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <div style={{ opacity: .7, fontSize: '.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em' }}>Your XP Level</div>
                      <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1, marginTop: '.2rem' }}>
                        {LEVEL_COLORS.map((_, i) => {
                          const lvl = myStats.level || 1;
                          const emoji = ['🌱','⭐','🔥','💫','🦁','🌟','⚡','💎','🏆','👑'][Math.min(lvl - 1, 9)];
                          return i === 0 ? <span key={i}>{emoji} Level {lvl}</span> : null;
                        })}
                      </div>
                      <div style={{ marginTop: '.8rem', fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.6rem', color: '#fbbf24' }}>{myStats.xp || 0} XP</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '3rem', lineHeight: 1 }}>🔥</div>
                      <div style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.5rem' }}>{myStats.streak || 0}</div>
                      <div style={{ opacity: .75, fontSize: '.78rem' }}>Day Streak</div>
                    </div>
                  </div>
                  {/* XP Progress Bar */}
                  <div style={{ marginTop: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', opacity: .7, fontSize: '.75rem', marginBottom: '.35rem' }}>
                      <span>Level {myStats.level || 1}</span>
                      <span>{getLevelProgress(myStats.xp || 0, myStats.level || 1)}% to Level {(myStats.level || 1) + 1}</span>
                    </div>
                    <div style={{ height: 10, background: 'rgba(255,255,255,0.2)', borderRadius: 10, overflow: 'hidden' }}>
                      <div style={{ width: `${getLevelProgress(myStats.xp || 0, myStats.level || 1)}%`, height: '100%', background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', borderRadius: 10, transition: 'width 1s ease' }} />
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  <StatCard icon="⚡" label="Weekly XP"       value={myStats.weeklyXp || 0}        color="#4f46e5" />
                  <StatCard icon="🔥" label="Best Streak"     value={`${myStats.longestStreak || 0}d`} color="#ef4444" />
                  <StatCard icon="📚" label="Topics Done"     value={myStats.topicsCompleted || 0}  color="#10b981" />
                  <StatCard icon="🎯" label="Quizzes Taken"   value={myStats.quizzesTaken || 0}     color="#f59e0b" />
                </div>

                {/* Earned Badges */}
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', margin: '0 0 1rem', fontSize: '1rem' }}>
                    🏅 Your Badges ({myStats.badges?.length || 0}/{badges.length})
                  </h3>
                  {myStats.badges?.length === 0 ? (
                    <p style={{ color: '#94a3b8', fontSize: '.88rem' }}>No badges yet — complete topics, quizzes and build your streak to earn them!</p>
                  ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem' }}>
                      {myStats.badges.map(bid => {
                        const b = BADGE_META[bid];
                        if (!b) return null;
                        return (
                          <div key={bid} title={b.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.3rem', minWidth: 64 }}>
                            <div style={{ width: 48, height: 48, borderRadius: '50%', background: b.color + '22', border: `2px solid ${b.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                              {b.icon}
                            </div>
                            <span style={{ fontSize: '.65rem', fontWeight: 700, color: '#64748b', textAlign: 'center' }}>{b.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Locked badges */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1.25rem 1.5rem' }}>
                  <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#1e1b4b', margin: '0 0 1rem', fontSize: '1rem' }}>
                    🔒 Badges to Unlock
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '.75rem' }}>
                    {badges.filter(b => !myStats.badges?.includes(b.id)).map(b => (
                      <div key={b.id} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '.75rem', opacity: .7 }}>
                        <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#f1f5f9', border: '2px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', filter: 'grayscale(1)' }}>{b.icon}</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '.82rem', color: '#334155' }}>{b.label}</div>
                          <div style={{ fontSize: '.72rem', color: '#94a3b8' }}>{b.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>Loading your XP stats…</div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
