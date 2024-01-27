/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")
const fs = require("fs");
const modules = fs.readdirSync("./src/modules");
const zones = modules.map(module => ({
  from: `./src/modules/${module}/!(public)/**/*`,
  target: `./src/modules/!(${module})/**/*`
}));

module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "import/no-restricted-paths": [
      "error",
      {
        zones,
      },
    ],
  }
}

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
            target: "./src/components",
            from: "./src/lib/infra",
            message: "NG!!!",
          },
          {
            target: "./src/views",
            from: "./src/views/!(_shared_|components)/**/*",
            message: "not shared",
          },
        ],
      },
    ],
  },
}
