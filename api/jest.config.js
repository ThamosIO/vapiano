module.exports = {
  verbose: true,
  testMatch: ['<rootDir>/src/**/*.test.js'],
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/middleware/index.js',
    '<rootDir>/src/routes.js',
  ],
};
