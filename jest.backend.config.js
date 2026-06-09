module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/server/**/*.test.js'],
  setupFilesAfterEnv: ['./server/tests/setup.js'],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
};
