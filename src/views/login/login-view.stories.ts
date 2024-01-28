import type { Meta, StoryObj } from "@storybook/vue3"
import LoginView from "./LoginView.vue"
import { AuthRepositoryOnMemory } from "@/lib/infra/auth/on-memory"
import { LocalStorage } from "@/provider/auth-provider/storage"

const meta = {
  title: "Views/LoginView",
  component: LoginView,
  tags: ["autodocs"],
  decorators: [() => ({ template: "<public-layout><story /></public-layout>" })],
} satisfies Meta<typeof LoginView>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    repository: new AuthRepositoryOnMemory(),
    storage: new LocalStorage(),
  },
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
