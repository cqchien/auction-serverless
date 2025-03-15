import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Ignore specific file patterns
  {
    ignores: [
      // Ignore JavaScript files
      "**/*.js",
      // Ignore test files
      "**/*.test.ts",
      "**/*.spec.ts",
      // Additional patterns you might want to ignore
      "dist/",
      "node_modules/",
      "build/",
    ],
  },
  // Apply to specific file types
  { files: ["**/*.{mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // Custom rule configuration
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error" if you want to enforce strictly
        {
          vars: "all", // check all variables
          varsIgnorePattern: "^_", // ignore variables starting with _
          args: "after-used", // check all arguments except the last
          argsIgnorePattern: "^_", // ignore arguments starting with _
          destructuredArrayIgnorePattern: "^_", // ignore destructured array elements starting with _
          ignoreRestSiblings: true, // allow unused rest siblings
        },
      ],
    },
  },
];
