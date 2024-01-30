/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential", 
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ["*.config.ts", "*.spec.ts"],
  parserOptions: {
    project: ["./tsconfig.app.json"],
    ecmaVersion: "latest"
  },
  plugins: ["import", "import-access"],
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
    //https://github.com/uhyo/eslint-plugin-import-access/blob/master/docs/rule-jsdoc.md
    "import-access/jsdoc": ["error", {
      "defaultImportability": "package",
    }],
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            target: "./src/components/parts",
            from: "./src/components/!(parts)",
            message: "import禁止",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        "./**/*.stories.ts",
      ],
      rules: {
        "quotes": "off",
        "import-access/jsdoc": "off",
      },
    },
    {
      files: [
        "./src/provider/**/*.vue",
      ],
      rules: {
        "import-access/jsdoc": "off"
      },
    }
  ],
}
