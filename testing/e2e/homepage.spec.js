const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test('loads and shows hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/OnlineStudyHub/i);
    await expect(page.locator('.nav-logo')).toBeVisible();
  });

  test('navbar has Classes, JEE & NEET, Teachers links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.nav-link', { hasText: 'Classes' })).toBeVisible();
    await expect(page.locator('.nav-link', { hasText: 'JEE' })).toBeVisible();
    await expect(page.locator('.nav-link', { hasText: 'Teachers' })).toBeVisible();
  });

  test('Teacher Portal link navigates to /teacher-portal', async ({ page }) => {
    await page.goto('/');
    await page.click('.nav-desktop-only');
    await expect(page).toHaveURL(/teacher-portal/);
  });

  test('dark mode toggle switches theme', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'light');
    await page.click('.dark-toggle-btn');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await page.click('.dark-toggle-btn');
    await expect(html).toHaveAttribute('data-theme', 'light');
  });

  test('AI Doubt Help button opens panel', async ({ page }) => {
    await page.goto('/');
    await page.click('.nav-ai-btn');
    await expect(page.locator('text=AI Doubt Helper')).toBeVisible();
  });

  test('Classes dropdown shows class links', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav-link', { hasText: 'Classes' }).hover();
    await expect(page.locator('.dropdown-item').filter({ hasText: 'Class 6' }).first()).toBeVisible();
    await expect(page.locator('.dropdown-item').filter({ hasText: 'Class 10' }).first()).toBeVisible();
  });
});
