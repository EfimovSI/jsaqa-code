const { defaults } = require('jest-config');
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!.eslintrc.js',
    '!jest.config.js'
  ],
  coverageDirectory: 'coverage/',
  coverageThreshold: {
    branches: 100,
    functions: 100,
    lines: 100
  }
};
