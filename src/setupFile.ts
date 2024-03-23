// eslint-disable-next-line no-restricted-imports, import-access/jsdoc
import globalStorybookConfig from "../.storybook/preview"

import { setProjectAnnotations } from "@storybook/vue3"

setProjectAnnotations(globalStorybookConfig)

import { type expect } from "vitest"
// vitestでtoBeInTheDocumentを使用可能にするため
import "@testing-library/jest-dom/vitest"
// pnpmでtoBeInTheDocumentを使用可能にするため
import { type TestingLibraryMatchers } from "@testing-library/jest-dom/matchers"

declare module "vitest" {
  interface JestAssertion<T = any>
    extends TestingLibraryMatchers<ReturnType<typeof expect.stringContaining>, T> {}
}
