// Content firewall — blocks abusive language and biased content before hitting AI

// Core profanity / abuse list (extend as needed)
const ABUSE_TERMS = [
  'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'cunt', 'dick', 'cock',
  'pussy', 'faggot', 'nigger', 'nigga', 'chink', 'spic', 'kike', 'retard',
  'rape', 'kill yourself', 'kys', 'go die', 'suicide',
];

// Bias / hate-speech patterns
const BIAS_PATTERNS = [
  /\b(all|every|most)\s+(muslims?|hindus?|christians?|blacks?|whites?|jews?|sikhs?|dalits?)\s+(are|hate|should|must|deserve)/i,
  /\b(women|men|girls|boys|females?|males?)\s+(are|can.t|cannot|should not|shouldn.t)\s+(be|do|work|study|lead)/i,
  /\b(lower\s*caste|upper\s*caste|schedule[d]?\s*caste)\s+(are|should|must|deserve)/i,
  /\bhate\s+(muslims?|hindus?|christians?|jews?|dalits?|sikhs?)/i,
];

// Topics completely off-limits (not academic)
const OFF_TOPIC_PATTERNS = [
  /\b(make|build|create|synthesize)\s+(bomb|weapon|explosive|drug|poison|malware|virus|hack)/i,
  /\bhow\s+to\s+(commit|perform|do)\s+(crime|murder|theft|fraud|scam|terrorist)/i,
];

/**
 * Returns { blocked: false } or { blocked: true, reason: string }
 */
function moderateInput(text) {
  const lower = text.toLowerCase();

  for (const term of ABUSE_TERMS) {
    if (lower.includes(term)) {
      return { blocked: true, reason: 'Your message contains inappropriate or offensive language. Please keep it respectful.' };
    }
  }

  for (const pattern of BIAS_PATTERNS) {
    if (pattern.test(text)) {
      return { blocked: true, reason: 'Your message appears to contain biased or discriminatory content. Please rephrase.' };
    }
  }

  for (const pattern of OFF_TOPIC_PATTERNS) {
    if (pattern.test(text)) {
      return { blocked: true, reason: 'This type of content is not allowed. Please ask academic questions only.' };
    }
  }

  return { blocked: false };
}

// System prompt addition that instructs the model to self-moderate
const SAFETY_SYSTEM_ADDENDUM = `
SAFETY RULES (strictly follow):
- Refuse any request that promotes violence, hate, discrimination, or illegal activity.
- Do not generate content that is abusive, sexist, casteist, racist, or religiously biased.
- If asked about a topic outside academic studies, politely redirect to the study context.
- Never provide instructions for dangerous activities (weapons, drugs, hacking, etc.).
- Keep all responses neutral, respectful, and inclusive.`;

module.exports = { moderateInput, SAFETY_SYSTEM_ADDENDUM };
