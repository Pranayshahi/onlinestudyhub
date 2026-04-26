import { useState } from 'react';

const KEY = 'osh_progress';

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
  catch { return {}; }
}

export function useProgress() {
  const [, tick] = useState(0);

  function isDone(classId, subjectId, topicId) {
    return !!load()[`${classId}/${subjectId}/${topicId}`];
  }

  function toggle(classId, subjectId, topicId) {
    const p = load();
    const k = `${classId}/${subjectId}/${topicId}`;
    const justCompleted = !p[k];
    if (p[k]) delete p[k]; else p[k] = true;
    localStorage.setItem(KEY, JSON.stringify(p));
    tick(n => n + 1);
    return justCompleted; // true = marked done, false = unmarked
  }

  function countDone(classId, subjectId) {
    return Object.keys(load()).filter(k => k.startsWith(`${classId}/${subjectId}/`)).length;
  }

  return { isDone, toggle, countDone };
}
