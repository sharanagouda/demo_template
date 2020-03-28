module.exports = {
  env: {
    browser: true,
    es6: true
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    sourceType: "module"
  },
  rules: {
    "no-undef": 1,
    "no-shadow": [
      "error" //todo disallow global shadowing
    ],
    "prefer-const": "error",
    "no-new-object": "error",
    "object-shorthand": "error",
    "no-var": "error",
    "no-prototype-builtins": "error",
    "no-array-constructor": "error",
    "prefer-destructuring": "error",
    "func-style": "error",
    "quote-props": ["error", "as-needed"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-no-undef": 2,
    "react/display-name": ["off", { ignoreTranspilerName: true }]
  },
  settings: {
    react: {
      pragma: "jsx"
    }
  }
};
