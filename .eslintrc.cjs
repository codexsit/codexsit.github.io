module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  overrides: [
    {
      files: [
        "src/pages/TheHailMaryDirective/components/Asteroid.jsx",
        "src/pages/TheHailMaryDirective/components/PlanetSystem.jsx",
        "src/pages/TheHailMaryDirective/components/RoleSection.jsx",
        "src/pages/TheHailMaryDirective/components/SpaceCanvas.jsx",
        "src/pages/TheHailMaryDirective/components/Spaceship.jsx",
      ],
      rules: {
        "react/no-unknown-property": "off",
      },
    },
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
    // quotes: ["error", "single", { avoidEscape: true }],
    "no-shadow": "off",
    strict: "off",
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "react/jsx-pascal-case": ["error", { allowAllCaps: true }],
    "jsx-a11y/mouse-events-have-key-events": "off",
    "no-console": "error",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    // "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
