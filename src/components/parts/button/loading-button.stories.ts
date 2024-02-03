import type { Meta, StoryObj } from "@storybook/vue3"
import LoadingButton from "./LoadingButton.vue"

const meta = {
  // title: "Home/LoadingButton",
  // title: "Parts/LoadingButton",
  component: LoadingButton,
  tags: ["autodocs"],
} satisfies Meta<typeof LoadingButton>

export default meta
type Story = StoryObj<typeof meta>

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Normal: Story = {
  args: {},
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
