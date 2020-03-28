module.exports = {
  moduleFileExtensions: ["mjs", "js", "json"],
  transformIgnorePatterns: ["/node_modules/(?!ramda)"],
  transform: {
    "^.+\\.(js|mjs)$": "<rootDir>/config/jest/transformer.js",
    "^.+\\.css$": "<rootDir>/node_modules/jest-css-modules-transform",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)":
      "<rootDir>/config/jest/file-transform.js"
  },
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.js",
    "<rootDir>/src/routes/**/*.js",
    "!<rootDir>/src/**/*-mock.js",
    "!<rootDir>/src/**/*.test.js"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  coverageDirectory: "coverage",
  clearMocks: true
};
