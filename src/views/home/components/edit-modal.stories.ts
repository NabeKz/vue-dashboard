import type { Meta, StoryObj } from "@storybook/vue3"
import { within, userEvent, expect } from "@storybook/test"
import EditModal from "./edit-modal.vue"

const meta = {
  title: "Home/EditModal",
  component: EditModal,
  tags: ["autodocs"]
} satisfies Meta<typeof EditModal>

export default meta
type Story = StoryObj<typeof meta>

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Normal: Story = {
  args: {
    onSubmit: () => null,
    onClose: () => null
  }
  // play: async ({ canvasElement }: any) => {
  //   const canvas = within(canvasElement)
  //   const loginButton = canvas.getByRole("button", { name: /Log in/i })
  //   await expect(loginButton).toBeInTheDocument()
  //   await userEvent.click(loginButton)
  //   await expect(loginButton).not.toBeInTheDocument()

  //   const logoutButton = canvas.getByRole("button", { name: /Log out/i })
  //   await expect(logoutButton).toBeInTheDocument()
  // }
}
