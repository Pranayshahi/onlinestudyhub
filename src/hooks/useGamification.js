import { useCallback, useEffect, useRef } from 'react';
import { api } from '../utils/api';

/**
 * useGamification – auto-awards XP and handles streaks.
 * Call awardXP({ action, subjectId }) anywhere a meaningful learning
 * event fires (topic visit, quiz complete, doubt posted).
 */
export function useGamification(user) {
  // Prevent double-firing per session via an in-memory set
  const firedRef = useRef(new Set());

  const awardXP = useCallback(async ({ action = 'daily_login', subjectId = null } = {}) => {
    if (!user) return;
    const key = `${action}:${subjectId || 'general'}`;
    if (firedRef.current.has(key)) return;
    firedRef.current.add(key);
    try {
      await api('/gamification/award', {
        method: 'POST',
        body: JSON.stringify({ action, subjectId }),
      });
    } catch {
      // Silently fail — never break the learning UX
    }
  }, [user]);

  // Award daily_login once per page session
  useEffect(() => {
    if (!user) return;
    const today = new Date().toISOString().slice(0, 10);
    const lastLogin = localStorage.getItem('osh_xp_login_day');
    if (lastLogin !== today) {
      localStorage.setItem('osh_xp_login_day', today);
      awardXP({ action: 'daily_login' });
    }
  }, [user, awardXP]);

  return { awardXP };
}
