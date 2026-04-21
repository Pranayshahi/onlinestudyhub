// BM25-based RAG retrieval — no external ML APIs needed

const K1 = 1.5;
const B  = 0.75;

function tokenize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 1);
}

// Split text into overlapping word-chunks
function chunkText(text, chunkWords = 350, overlapWords = 60) {
  const words = text.replace(/\s+/g, ' ').trim().split(' ');
  const chunks = [];
  let i = 0;
  while (i < words.length) {
    const chunk = words.slice(i, i + chunkWords).join(' ');
    if (chunk.trim().length > 80) chunks.push(chunk.trim());
    i += chunkWords - overlapWords;
    if (i + chunkWords > words.length && i < words.length) {
      const last = words.slice(i).join(' ');
      if (last.trim().length > 80) chunks.push(last.trim());
      break;
    }
  }
  return chunks;
}

// BM25 score for a single chunk given query tokens
function bm25Score(queryTokens, chunkTokens, avgDocLen) {
  const freq = {};
  chunkTokens.forEach(t => { freq[t] = (freq[t] || 0) + 1; });
  const docLen = chunkTokens.length;
  let score = 0;
  for (const term of queryTokens) {
    const tf = freq[term] || 0;
    if (tf === 0) continue;
    const num = tf * (K1 + 1);
    const den = tf + K1 * (1 - B + B * (docLen / avgDocLen));
    score += num / den;
  }
  return score;
}

// Returns top-K chunks sorted by relevance; returns [] if nothing passes threshold
function retrieveChunks(query, chunks, topK = 4, threshold = 0.3) {
  if (!chunks.length) return [];
  const queryTokens = tokenize(query);
  if (!queryTokens.length) return [];

  const tokenized = chunks.map(c => tokenize(c));
  const avgLen = tokenized.reduce((s, t) => s + t.length, 0) / tokenized.length;

  const scored = chunks.map((chunk, i) => ({
    chunk,
    score: bm25Score(queryTokens, tokenized[i], avgLen),
  }));

  scored.sort((a, b) => b.score - a.score);
  return scored.filter(s => s.score >= threshold).slice(0, topK);
}

module.exports = { chunkText, retrieveChunks };
