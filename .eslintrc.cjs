module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "no-shadow": "off",
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "react/jsx-pascal-case": ["error", { allowAllCaps: true }],
    "no-console": "error",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
