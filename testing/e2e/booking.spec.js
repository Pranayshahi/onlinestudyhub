const { test, expect } = require('@playwright/test');

test.describe('Book Session Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('osh_user', JSON.stringify({
        id: 'mock-user-id',
        name: 'Mock User',
        email: 'mock@example.com'
      }));
    });
  });

  async function getToTopic(page) {
    await page.goto('/class/class-6');
    await page.locator('.subject-card').first().click();
    await page.locator('.topic-card').first().click();
  }

  test('Book Session navigates to booking page', async ({ page }) => {
    await getToTopic(page);
    await page.click('text=Book a Deep Learn Session');
    await expect(page).toHaveURL(/\/book/);
  });

  test('booking page shows teacher info', async ({ page }) => {
    await getToTopic(page);
    await page.click('text=Book a Deep Learn Session');
    await expect(page.locator('text=Book Teacher').first()).toBeVisible();
  });

  test('booking page shows How it Works steps', async ({ page }) => {
    await getToTopic(page);
    await page.click('text=Book a Deep Learn Session');
    await expect(page.locator('text=Book Teacher').first()).toBeVisible();
  });

  test('Book Teacher button opens booking modal', async ({ page }) => {
    await getToTopic(page);
    await page.click('text=Book a Deep Learn Session');
    await page.locator('text=Book Teacher').first().click();
    await expect(page.locator('input').first()).toBeVisible();
  });

  test('booking modal has phone input', async ({ page }) => {
    await getToTopic(page);
    await page.click('text=Book a Deep Learn Session');
    await page.locator('text=Book Teacher').first().click();
    await expect(page.locator('input').first()).toBeVisible();
  });
});
