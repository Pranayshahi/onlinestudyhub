import React, { useMemo, useState } from 'react';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const LEVELS = ['#eef2ff','#c7d2fe','#818cf8','#4f46e5','#3730a3'];

function buildGrid() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setDate(start.getDate() - 363 + (6 - today.getDay())); // align to Sunday, ~52 weeks
  const days = [];
  const cur = new Date(start);
  while (cur <= today) {
    days.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return { days, today };
}

function getActivityCounts() {
  const counts = {};
  try {
    const dates = JSON.parse(localStorage.getItem('osh_study_dates') || '[]');
    dates.forEach(d => { counts[d] = (counts[d] || 0) + 1; });
  } catch {}
  // Also scan topic completions by day via osh_progress (last-visit timestamps)
  try {
    const prog = JSON.parse(localStorage.getItem('osh_progress') || '{}');
    Object.values(prog).forEach(subj => {
      if (typeof subj === 'object') {
        Object.values(subj).forEach(topic => {
          if (typeof topic === 'object') {
            Object.values(topic).forEach(val => {
              if (val?.completedAt) {
                const d = val.completedAt.slice(0, 10);
                counts[d] = (counts[d] || 0) + 1;
              }
            });
          }
        });
      }
    });
  } catch {}
  return counts;
}

function level(count) {
  if (!count) return 0;
  if (count <= 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
}

function longestStreak(counts) {
  const sorted = Object.keys(counts).filter(d => counts[d] > 0).sort();
  let max = 0, cur = 0, prev = null;
  sorted.forEach(d => {
    if (prev) {
      const diff = (new Date(d) - new Date(prev)) / 86400000;
      cur = diff === 1 ? cur + 1 : 1;
    } else {
      cur = 1;
    }
    max = Math.max(max, cur);
    prev = d;
  });
  return max;
}

function currentStreak(counts) {
  const today = new Date().toISOString().slice(0, 10);
  let d = new Date(today);
  let streak = 0;
  while (true) {
    const key = d.toISOString().slice(0, 10);
    if (!counts[key]) break;
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

export default function StudyHeatmap() {
  const [tooltip, setTooltip] = useState(null);

  const { days, today } = useMemo(buildGrid, []);
  const counts = useMemo(getActivityCounts, []);

  const totalActive = Object.keys(counts).filter(d => counts[d] > 0).length;
  const longest     = useMemo(() => longestStreak(counts), [counts]);
  const streak      = useMemo(() => currentStreak(counts), [counts]);
  const totalSessions = Object.values(counts).reduce((a, b) => a + b, 0);

  // Group days into weeks (columns of 7)
  const weeks = [];
  let week = new Array(days[0].getDay()).fill(null); // pad start
  days.forEach(d => {
    week.push(d);
    if (week.length === 7) { weeks.push(week); week = []; }
  });
  if (week.length) { while (week.length < 7) week.push(null); weeks.push(week); }

  // Month labels — first week a new month appears
  const monthLabels = [];
  weeks.forEach((wk, wi) => {
    const firstReal = wk.find(d => d);
    if (!firstReal) return;
    const m = firstReal.getMonth();
    const prev = wi > 0 ? weeks[wi - 1].find(d => d) : null;
    if (!prev || prev.getMonth() !== m) {
      monthLabels.push({ wi, label: MONTHS[m] });
    }
  });

  const todayStr = today.toISOString().slice(0, 10);

  return (
    <div style={{ overflowX: 'auto' }}>
      {/* Stats row */}
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[
          { label: 'Current Streak', value: `${streak} day${streak !== 1 ? 's' : ''}`, icon: '🔥' },
          { label: 'Longest Streak', value: `${longest} day${longest !== 1 ? 's' : ''}`, icon: '⚡' },
          { label: 'Active Days',    value: totalActive, icon: '📅' },
          { label: 'Total Sessions', value: totalSessions, icon: '✅' },
        ].map(s => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.1rem' }}>{s.icon}</span>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#1f2937', lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ fontSize: '0.68rem', color: '#9ca3af', fontWeight: 600 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{ position: 'relative', minWidth: 680 }}>

        {/* Month labels */}
        <div style={{ display: 'flex', marginLeft: 28, marginBottom: 4 }}>
          {weeks.map((_, wi) => {
            const lbl = monthLabels.find(m => m.wi === wi);
            return (
              <div key={wi} style={{ width: 13, marginRight: 2, fontSize: '0.62rem', color: '#9ca3af', fontWeight: 600, whiteSpace: 'nowrap' }}>
                {lbl ? lbl.label : ''}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 0 }}>
          {/* Day labels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginRight: 4 }}>
            {DAYS.map((d, i) => (
              <div key={d} style={{ height: 11, fontSize: '0.58rem', color: '#9ca3af', lineHeight: '11px', visibility: i % 2 === 1 ? 'visible' : 'hidden' }}>
                {d}
              </div>
            ))}
          </div>

          {/* Week columns */}
          {weeks.map((wk, wi) => (
            <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: 2, marginRight: 2 }}>
              {wk.map((d, di) => {
                if (!d) return <div key={di} style={{ width: 11, height: 11 }} />;
                const key   = d.toISOString().slice(0, 10);
                const cnt   = counts[key] || 0;
                const lv    = level(cnt);
                const isToday = key === todayStr;
                const future  = d > today;
                return (
                  <div
                    key={di}
                    style={{
                      width: 11, height: 11,
                      borderRadius: 2,
                      backgroundColor: future ? 'transparent' : LEVELS[lv],
                      border: isToday ? '1.5px solid #4f46e5' : future ? '1px solid #e5e7eb' : 'none',
                      cursor: 'default',
                      position: 'relative',
                    }}
                    onMouseEnter={() => setTooltip({ key, cnt, x: wi * 15, y: di * 13 })}
                    onMouseLeave={() => setTooltip(null)}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div style={{
            position: 'absolute',
            bottom: '100%',
            left: tooltip.x + 28,
            transform: 'translateX(-50%)',
            background: '#1f2937',
            color: '#fff',
            fontSize: '0.7rem',
            padding: '4px 8px',
            borderRadius: 6,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 10,
            marginBottom: 4,
          }}>
            {tooltip.cnt > 0 ? `${tooltip.cnt} session${tooltip.cnt !== 1 ? 's' : ''}` : 'No activity'} · {tooltip.key}
          </div>
        )}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8, justifyContent: 'flex-end' }}>
        <span style={{ fontSize: '0.65rem', color: '#9ca3af' }}>Less</span>
        {LEVELS.map((c, i) => (
          <div key={i} style={{ width: 11, height: 11, borderRadius: 2, backgroundColor: c }} />
        ))}
        <span style={{ fontSize: '0.65rem', color: '#9ca3af' }}>More</span>
      </div>
    </div>
  );
}
