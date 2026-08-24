const request = require('supertest');
const app = require('../index');

describe('Search & Curriculum API', () => {
  describe('GET /api/search', () => {
    it('should return search results for a query', async () => {
      const res = await request(app)
        .get('/api/search?q=physics');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('topics');
      expect(Array.isArray(res.body.topics)).toBe(true);
    });

    it('should return empty results for empty or missing query', async () => {
      const res = await request(app)
        .get('/api/search?q=');

      expect(res.statusCode).toEqual(200);
      expect(res.body.topics).toEqual([]);
    });
  });

  describe('POST /api/ai-doubt', () => {
    it('should handle AI doubt request gracefully', async () => {
      const res = await request(app)
        .post('/api/ai-doubt')
        .send({
          messages: [{ role: 'user', content: 'Explain Newton\'s Second Law of Motion' }],
          classId: 'class-10',
          subjectId: 'physics'
        });

      expect(res.statusCode).toBeGreaterThanOrEqual(200);
      expect(res.statusCode).toBeLessThan(600);
    });
  });
});
