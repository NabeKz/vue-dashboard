// vitestでtoBeInTheDocumentを使用可能にするため
import "@testing-library/jest-dom/vitest"
// eslint-disable-next-line no-restricted-imports, import-access/jsdoc
import globalStorybookConfig from "../.storybook/preview"

import { setProjectAnnotations } from "@storybook/vue3"

setProjectAnnotations(globalStorybookConfig)
