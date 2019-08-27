module.exports = {
    bail: false,
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/index.js',
      '!src/store/index.js',
      '!src/reducers/index.js',
      '!src/actions/types.js',
      '!**/node_modules/**',
      '!**/vendor/**',
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
      '/node_modules/',
    ],
    coverageReporters: [
      'json',
      'text',
      'lcov',
      'clover',
    ],
    coverageThreshold: {
      global: {
        branches: 30,
        functions: 30,
        lines: 30,
      },
    },
    errorOnDeprecated: true,
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFilesAfterEnv: ['./tests.setup.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    testURL: 'http://localhost',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
    },
    transformIgnorePatterns: ['/node_modules/'],
    verbose: true,
  };
  