module.exports = {
  coveragePathIgnorePatterns: ["/node_modules/"],
  setupFiles: [
    '<rootDir>/src/testSetup.js',
  ],
  setupFilesAfterEnv: [
    './node_modules/jest-enzyme/lib/index.js'
  ],
}
