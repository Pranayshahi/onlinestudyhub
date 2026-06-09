const { test, expect } = require('@playwright/test');

test.describe('Student Journey', () => {
  // Generate a random email for each test run to ensure a clean signup
  const randomSuffix = Math.floor(Math.random() * 100000);
  const studentEmail = `student${randomSuffix}@example.com`;
  const studentPassword = 'password123';

  test('Signup, read a topic, and take a quiz', async ({ page }) => {
    // 1. Visit homepage
    await page.goto('/');
    
    // 2. Open login modal and switch to Sign Up
    await page.click('button[aria-label="Login"]');
    await page.click('button:has-text("✨ Sign Up Free")');

    // 3. Fill in registration details
    await page.fill('input[placeholder="e.g. Riya Sharma"]', 'Test Student');
    await page.fill('input[placeholder="student@example.com"]', studentEmail);
    await page.fill('input[placeholder="Min. 6 characters"]', studentPassword);
    
    // 4. Submit Registration
    await page.click('button:has-text("🚀 Create Account")');
    
    // 5. Verify successful login (Avatar should appear instead of Login button)
    await expect(page.locator('.user-avatar-btn')).toBeVisible({ timeout: 10000 });
    
    // 6. Navigate to a Class
    await page.locator('.nav-link', { hasText: 'Classes' }).hover();
    await page.click('.dropdown-item:has-text("Class 10")');
    
    // 7. Click on a Subject (e.g. Math) — tab selects it, then navigate into it
    await expect(page.locator('h1', { hasText: 'Class 10' })).toBeVisible();
    await page.click('text=Mathematics');
    await page.click('text=View All Topics');

    // 8. Open a Topic
    await expect(page.locator('h1', { hasText: 'Mathematics' })).toBeVisible();
    await page.click('text=Real Numbers');
    
    // 9. Read the topic and start the quiz
    await expect(page.locator('h1', { hasText: 'Real Numbers' })).toBeVisible();
    
    // Scroll to quiz section or click floating quiz button
    const quizBtn = page.locator('button:has-text("Take Topic Quiz")');
    if (await quizBtn.isVisible()) {
      await quizBtn.click();
      await expect(page.locator('h3:has-text("Question 1")')).toBeVisible();
    }
  });
});
