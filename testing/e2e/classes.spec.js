const { test, expect } = require('@playwright/test');

const CLASS_IDS = ['class-6', 'class-7', 'class-8', 'class-9', 'class-10', 'jee', 'neet'];

test.describe('Class Pages', () => {
  for (const classId of CLASS_IDS) {
    test(`${classId} page loads`, async ({ page }) => {
      await page.goto(`/class/${classId}`);
      await expect(page.locator('.class-hero, h1, .hero')).toBeVisible();
    });
  }

  test('class-6 has subjects', async ({ page }) => {
    await page.goto('/class/class-6');
    await expect(page.locator('.subjects-grid')).toBeVisible();
    await expect(page.locator('.subject-card').first()).toBeVisible();
  });

  test('subject page loads from class page', async ({ page }) => {
    await page.goto('/class/class-6');
    const firstSubject = page.locator('.subject-card a, .subject-card').first();
    await firstSubject.click();
    await expect(page).toHaveURL(/\/class\/class-6\/subject\//);
  });

  test('topic page loads from subject page', async ({ page }) => {
    await page.goto('/class/class-6');
    await page.locator('.subject-card a, .subject-card').first().click();
    await page.locator('.topic-card a, .topic-item a, .topic-card').first().click();
    await expect(page).toHaveURL(/\/topic\//);
  });

  test('topic page has Book Session button', async ({ page }) => {
    await page.goto('/class/class-6');
    await page.locator('.subject-card a, .subject-card').first().click();
    await page.locator('.topic-card a, .topic-item a, .topic-card').first().click();
    await expect(page.locator('text=Book')).toBeVisible();
  });

  test('Mark as Done toggle works', async ({ page }) => {
    await page.goto('/class/class-6');
    await page.locator('.subject-card a, .subject-card').first().click();
    await page.locator('.topic-card a, .topic-item a, .topic-card').first().click();
    const btn = page.locator('button:has-text("Mark as Done"), button:has-text("Done")').first();
    await expect(btn).toBeVisible();
    await btn.click();
    await expect(page.locator('button:has-text("Done"), button:has-text("Completed")')).toBeVisible();
  });
});
