module.exports = {
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
  },
  rules: {
    "max-len": "140",
    "arrow-body-style": "off",
    "linebreak-style": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
  },
};
