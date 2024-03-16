import { AuthRepositoryOnMemory } from "@/infra/auth/on-memory"
import { LocalStorage } from "@/infra/auth/storage"
import { publicLayout, useMockRouter } from "@/test/helper"
import { expect, userEvent, waitFor, within } from "@storybook/test"
import { type Meta, type StoryObj } from "@storybook/vue3"
import LoginView from "./LoginView.vue"

const meta = {
  component: LoginView,
  tags: ["autodocs"],
  // decorators: [vueRouter(), publicLayout],
  decorators: [useMockRouter, publicLayout],
} satisfies Meta<typeof LoginView>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs = {
  repository: new AuthRepositoryOnMemory(),
  storage: new LocalStorage(),
}

export const Normal: Story = {
  args: { ...defaultArgs },
}

export const LoginSuccess: Story = {
  args: { ...defaultArgs },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.type(canvas.getByLabelText("email"), "test1")
    await userEvent.type(canvas.getByLabelText("password"), "test1")
    await userEvent.click(canvas.getByRole("button"))
  },
}

export const LoginFailure: Story = {
  args: { ...defaultArgs },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.type(canvas.getByLabelText("email"), "test2")
    await userEvent.type(canvas.getByLabelText("password"), "password2")

    await userEvent.click(canvas.getByRole("button"))
    await waitFor(
      async () => {
        const snackbar = await canvas.findByText("ログインできませんでした")
        expect(snackbar).toBeInTheDocument()
      },
      { timeout: 2 * 1000 },
    )
  },
}
