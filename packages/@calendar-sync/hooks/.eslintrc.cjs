/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: "custom",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
}
