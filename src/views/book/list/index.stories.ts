import type { Meta, StoryObj } from "@storybook/vue3"
import { mockApi, registerMockApi } from "@/shared/__tests__/helper"
import { dummyBooks1 } from "./_tests_/fixture"
import Component from "./index.vue"

/** 登録フォーム */
const meta = {
  component: Component,
  tags: [""],
  parameters: {
    ...registerMockApi([
      mockApi.GET("/books", dummyBooks1), //
    ]),
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

/** 基本の表示 */
export const Primary: Story = {}
