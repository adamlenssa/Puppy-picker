module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    "eslint: recommended",
    "plugin: react/recommended",
    "plugin: Ctypescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: { emaVersion: "latest", sourceType: "module" },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
