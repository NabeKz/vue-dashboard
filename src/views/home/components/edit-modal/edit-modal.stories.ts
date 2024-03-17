import type { Meta, StoryObj } from "@storybook/vue3"
import EditModal from "./EditModal.vue"

const meta = {
  component: EditModal,
  tags: ["autodocs"],
} satisfies Meta<typeof EditModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primay: Story = {
  args: {
    model: undefined,
  },
  play: async ({ canvasElement }) => {},
}
