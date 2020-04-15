module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  verbose: true,
  reporters: ['jest-dot-reporter'],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx}'],
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/api/src/middleware/index.js',
    '<rootDir>/api/src/routes.js',
  ],
};
