const { defineConfig, devices } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3001';
const isDocker = !!process.env.BASE_URL;

module.exports = defineConfig({
  testDir: './testing/e2e',
  fullyParallel: true,
  retries: 1,
  workers: 3,
  reporter: [['html', { outputFolder: 'testing/report', open: 'never' }], ['list']],
  use: {
    baseURL: BASE_URL,
    screenshot: 'only-on-failure',
    video: 'off',
    headless: true,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  // Auto-start the app locally (skipped in Docker where app is already running)
  webServer: isDocker ? undefined : {
    command: 'npm start',
    url: BASE_URL,
    reuseExistingServer: true,
    timeout: 60000,
  },
});
