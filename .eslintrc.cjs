module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2020: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier", "eslint:recommended"],
  plugins: ["prettier", "@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-children-prop": "off",
    "react/no-unescaped-entities": "off",
    "react/no-sparse-arrays": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    eqeqeq: "error",
    "no-console": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-key": [1, { checkFragmentShorthand: false }],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ["node_modules", "build", "dist", "public"],
};
