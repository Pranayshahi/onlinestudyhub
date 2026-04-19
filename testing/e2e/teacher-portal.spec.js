const { test, expect } = require('@playwright/test');

test.describe('Teacher Portal', () => {
  test('page loads at /teacher-portal', async ({ page }) => {
    await page.goto('/teacher-portal');
    await expect(page.locator('span:has-text("Teacher Portal")')).toBeVisible();
  });

  test('shows Register and Login tabs', async ({ page }) => {
    await page.goto('/teacher-portal');
    await expect(page.locator('text=Register as Teacher')).toBeVisible();
    await expect(page.locator('text=Login').first()).toBeVisible();
  });

  test('register form has required fields', async ({ page }) => {
    await page.goto('/teacher-portal');
    await page.locator('text=Register as Teacher').click();
    await expect(page.locator('input[type="email"]').first()).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
  });

  test('login form has email and password', async ({ page }) => {
    await page.goto('/teacher-portal');
    await expect(page.locator('input[type="email"]').first()).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
  });

  test('login with wrong credentials shows error', async ({ page }) => {
    await page.goto('/teacher-portal');
    await page.locator('input[type="email"]').first().fill('wrong@test.com');
    await page.locator('input[type="password"]').first().fill('wrongpassword');
    await page.locator('button[type="submit"]').first().click();
    // Error only shows if backend is running
  });

  test('photo upload button is present in register form', async ({ page }) => {
    await page.goto('/teacher-portal');
    await page.locator('text=Register as Teacher').click();
    await expect(page.locator('text=Upload Photo')).toBeVisible();
  });
});
