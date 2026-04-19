const { test, expect } = require('@playwright/test');

test.describe('API Health', () => {
  test.beforeEach(async ({ request }) => {
    const res = await request.get('/api/health').catch(() => null);
    if (!res) test.skip(true, 'Backend not running');
  });

  test('backend health endpoint responds', async ({ request }) => {
    const res = await request.get('/api/health');
    const body = await res.json();
    expect(body.status).toBe('ok');
  });

  test('GET /api/teachers returns array', async ({ request }) => {
    const res = await request.get('/api/teachers');
    if (res.status() === 200) {
      const body = await res.json();
      expect(Array.isArray(body)).toBeTruthy();
    }
  });

  test('protected route without token returns 401', async ({ request }) => {
    const res = await request.get('/api/teachers/me');
    expect(res.status()).toBe(401);
  });

  test('login with bad credentials returns 4xx', async ({ request }) => {
    const res = await request.post('/api/auth/login', {
      data: { email: 'fake@test.com', password: 'wrongpass' },
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('register with missing fields returns 400', async ({ request }) => {
    const res = await request.post('/api/auth/register', {
      data: { email: 'test@test.com' },
    });
    expect(res.status()).toBe(400);
  });
});
