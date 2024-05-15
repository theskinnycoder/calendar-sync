// This configuration only applies to the workspace root.

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: [
    "apps/**",
    "packages/**",
    "configs/**",
    "tests/**",
    "**/*.cjs",
  ],
  extends: ["custom/node.js"],
}
