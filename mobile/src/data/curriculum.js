// ─── OnlineStudyHub — Full Curriculum Data ───

export const SUBJECT_META = {
  mathematics: { icon: '📐', color: 'math', label: 'Mathematics' },
  physics:     { icon: '⚡', color: 'physics', label: 'Physics' },
  chemistry:   { icon: '🧪', color: 'chemistry', label: 'Chemistry' },
  biology:     { icon: '🌿', color: 'biology', label: 'Biology' },
  english:     { icon: '📖', color: 'english', label: 'English' },
  science:     { icon: '🔬', color: 'chemistry', label: 'Science' },
  social:      { icon: '🌍', color: 'social', label: 'Social Science' },
  history:     { icon: '🏛️', color: 'history', label: 'History' },
  geography:   { icon: '🗺️', color: 'geography', label: 'Geography' },
  civics:      { icon: '⚖️', color: 'civics', label: 'Civics/Pol. Science' },
  economics:   { icon: '💹', color: 'economics', label: 'Economics' },
};

// ─── CURRICULUM ───────────────────────────────────────────────

export const CURRICULUM = {

  // ── CLASS 6 ──────────────────────────────────────────────────
  'class-6': {
    id: 'class-6', label: 'Class 6', shortLabel: '6th',
    board: 'CBSE', emoji: '6️⃣',
    description: 'Foundation of middle school — Numbers, Basic Science, History & English',
    subjects: {
      mathematics: {
        id: 'mathematics', topics: [
          {
            id: 'knowing-numbers',
            title: 'Knowing Our Numbers',
            subtopics: 'Large numbers, Place value, Roman numerals, Estimation',
            definition: 'Numbers are mathematical symbols used to count, measure, and label. Understanding place value and how large numbers are structured is the foundation of all mathematics.',
            content: `<p>Numbers are everywhere in our daily lives — from counting objects to reading prices or checking distances. In Class 6, we explore how numbers are formed and how their position (place value) determines their actual value.</p>
<h4>Place Value System</h4>
<p>In the Indian number system, we group digits as: ones, tens, hundreds, thousands, ten-thousands, lakhs, ten-lakhs, crores. For example, the number <strong>45,67,892</strong> is read as "Forty-five lakhs sixty-seven thousand eight hundred ninety-two."</p>
<h4>Comparing and Ordering Numbers</h4>
<p>To compare two numbers, first count the digits. A number with more digits is always greater. If digits are equal, compare from the leftmost digit.</p>
<h4>Roman Numerals</h4>
<p>Roman numerals use letters: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Rules: you can repeat I, X, C, M up to 3 times. Never repeat V, L, D. A smaller numeral before a larger one means subtract.</p>
<div class="example-box"><strong>Example:</strong> Write 2024 in Roman numerals → 2000 = MM, 24 = XXIV → <strong>MMXXIV</strong></div>
<h4>Estimation</h4>
<p>Rounding off helps estimate. To round 4,736 to the nearest thousand: look at hundreds digit (7 ≥ 5), so round up → 5,000.</p>`,
            qa: [
              { q: 'What is the place value of 7 in 3,72,456?', a: 'The digit 7 is in the ten-thousands place. Its place value = 7 × 10,000 = 70,000.' },
              { q: 'How do you write 49 in Roman numerals?', a: '49 = 50 − 1 = XLIX. (XL = 40, IX = 9, so XLIX = 49)' },
              { q: 'Which is greater: 4,56,789 or 45,6789?', a: '4,56,789 has 6 digits and 4,56,789 = 456789. The second number 45,6789 = 456789. They are equal. But if written as 456789 vs 456789 — always check digit count first.' },
              { q: 'Round 6,385 to the nearest hundred.', a: 'Look at the tens digit: 8 ≥ 5, so round up → 6,400.' },
              { q: 'What is the difference between face value and place value?', a: 'Face value is the digit itself regardless of position. Place value depends on the position of the digit. E.g., in 456, face value of 5 is 5, but place value of 5 is 50.' },
              { q: 'Write the greatest 6-digit number using digits 3, 0, 9, 1, 7, 5 (without repeating).', a: 'Arrange digits in descending order → 975310.' },
            ]
          },
        ]
      },
      science: {
        id: 'science', topics: [
          {
            id: 'food-where-does-it-come-from',
            title: 'Food: Where Does It Come From?',
            subtopics: 'Food sources, Plant parts as food, Animals as food sources',
            definition: 'Food is any substance consumed by living organisms to provide energy, nutrients, and materials for growth and repair. All food ultimately comes from plants or animals.',
            content: `<p>Every meal we eat has a source — plants, animals, or both. Understanding where food comes from helps us appreciate agriculture and make healthier choices.</p>`,
            qa: []
          }
        ]
      }
    }
  }
};

// ── Helper functions ───────────────────────────────────────────

export function getClass(classId) {
  return CURRICULUM[classId] || null;
}

export function getSubject(classId, subjectId) {
  const cls = getClass(classId);
  if (!cls) return null;
  return cls.subjects[subjectId] || null;
}

export function getTopic(classId, subjectId, topicId) {
  const subject = getSubject(classId, subjectId);
  if (!subject) return null;
  return subject.topics.find(t => t.id === topicId) || null;
}

export function getAllClasses() {
  return Object.values(CURRICULUM);
}

export function getSubjectColor(subjectId) {
  const map = {
    mathematics: 'math', physics: 'physics', chemistry: 'chemistry',
    biology: 'biology', english: 'english', science: 'chemistry',
    social: 'social', history: 'history', geography: 'geography',
    civics: 'civics', economics: 'economics',
  };
  return `subject-${map[subjectId] || 'default'}`;
}

export const NAV_CLASSES = [
  { id: 'class-6', label: 'Class 6' },
  { id: 'class-7', label: 'Class 7' },
  { id: 'class-8', label: 'Class 8' },
  { id: 'class-9', label: 'Class 9' },
  { id: 'class-10', label: 'Class 10' },
  { id: 'class-11', label: 'Class 11' },
  { id: 'class-12', label: 'Class 12' },
];
