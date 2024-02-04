module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js(x)?',
    '!src/**/stories.jsx',
    '!src/**/mock.js',
    '!src/pages/**/*.jsx',
    '!src/styles/*',
    '!src/utils/**/*.js(x)?',
    '!src/configs/*',
    '!src/services/**/*.js(x)?',
    '!src/routes/**/*.js(x)?',
    '!src/hooks/**/*.js(x)?'
  ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/.jest/svgrMock.js',
    '\\.gif$': '<rootDir>/.jest/svgrMock.js',
    '\\.png$': '<rootDir>/.jest/fileMock.js',
    '\\.webp$': '<rootDir>/.jest/fileMock.js',
    '\\.css$': '<rootDir>/.jest/styleMock.js'
  },
  setupFilesAfterEnv: [
    '<rootDir>/.jest/setup.js',
    '<rootDir>/.jest/setEnvVars.js'
  ]
}
