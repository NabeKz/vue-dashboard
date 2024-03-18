import { fn } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"
import EditModal from "./EditModal.vue"

const meta = {
  component: EditModal,
  tags: ["autodocs"],
} satisfies Meta<typeof EditModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: { id: 1, title: "aa", content: "bb" },
    onUpdate: fn(),
  },
  play: async ({ canvasElement }) => {},
}
