const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '.'),
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['lambda'],
  transform: {
    '\\.gql$': 'jest-transform-graphql',
    '\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '\\.js$': 'babel-jest',
    '\\.vue$': 'vue-jest',
  },
  testURL: 'http://localhost',
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/setup'],
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
};
