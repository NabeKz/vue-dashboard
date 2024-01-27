/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential", 
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:storybook/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: ["import"],
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.app.json"
      },
    },
  },
  rules: {
    "quotes": "error",
    // 相対パスimportを禁止
    "no-restricted-imports": [
      "error", {
        "patterns": [
          { group:["../"], message: "相対パスは使用禁止です。@を使ってください" }
        ]
      }
    ],
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            target: "./src/lib/infra/auth/on-memory",
            from: "./src/components/atoms",
            message: "NG!!!",
          },
        ],
      },
    ],
  },
}
