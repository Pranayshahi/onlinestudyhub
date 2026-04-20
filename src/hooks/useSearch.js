import { useMemo, useState, useEffect } from 'react';
import { CURRICULUM, SUBJECT_META } from '../data/curriculum';
import { TEACHERS } from '../data/teachers';

function match(text, q) {
  return text?.toLowerCase().includes(q.toLowerCase());
}

export function useSearch(query) {
  const [dbTeachers, setDbTeachers] = useState([]);

  useEffect(() => {
    if (!query || query.trim().length < 2) return;
    fetch('/api/teachers')
      .then(r => r.json())
      .then(data => setDbTeachers(Array.isArray(data) ? data : []))
      .catch(() => {});
  }, [query]);

  return useMemo(() => {
    const q = query?.trim() ?? '';
    if (q.length < 2) return { topics: [], subjects: [], classes: [], teachers: [], total: 0 };

    const topics = [];
    const subjects = [];
    const classes = [];

    for (const cls of Object.values(CURRICULUM)) {
      if (match(cls.label, q) || match(cls.description, q)) {
        classes.push({
          id: cls.id, label: cls.label, emoji: cls.emoji,
          description: cls.description, url: `/class/${cls.id}`,
        });
      }
      for (const [subjectId, subject] of Object.entries(cls.subjects || {})) {
        const meta = SUBJECT_META[subjectId];
        const subjectLabel = meta?.label || subjectId;
        if (match(subjectLabel, q)) {
          subjects.push({
            id: `${cls.id}__${subjectId}`, classLabel: cls.label,
            subjectLabel, icon: meta?.icon,
            url: `/class/${cls.id}/subject/${subjectId}`,
          });
        }
        for (const topic of subject.topics || []) {
          if (match(topic.title, q) || match(topic.subtopics, q) || match(topic.definition, q)) {
            topics.push({
              id: topic.id, title: topic.title, subtopics: topic.subtopics,
              classLabel: cls.label, subjectLabel, icon: meta?.icon,
              url: `/class/${cls.id}/subject/${subjectId}/topic/${topic.id}`,
            });
          }
        }
      }
    }

    const seenTeacherNames = new Set();
    const teachers = [];

    for (const [classId, list] of Object.entries(TEACHERS)) {
      const cls = CURRICULUM[classId];
      for (const t of list) {
        if (match(t.name, q) || match(t.subject, q)) {
          seenTeacherNames.add(t.name);
          teachers.push({
            id: t.id, name: t.name, subject: t.subject,
            avatar: t.avatar, classLabel: cls?.label,
            rating: t.rating, fee: t.fee,
            url: `/teachers/${classId}`,
          });
        }
      }
    }

    for (const t of dbTeachers) {
      if (!seenTeacherNames.has(t.name) && (match(t.name, q) || match(t.subject, q))) {
        teachers.push({
          id: t._id, name: t.name, subject: t.subject,
          avatar: t.avatar || '👨‍🏫', classLabel: t.class_ids,
          rating: t.rating, fee: t.fee ? `₹${t.fee}/session` : null,
          url: `/teachers`,
        });
      }
    }

    const total = topics.length + subjects.length + classes.length + teachers.length;
    return { topics, subjects, classes, teachers, total };
  }, [query, dbTeachers]);
}
