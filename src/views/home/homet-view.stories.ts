import { protectedLayout, useMockAuth } from "@/test/helper"
import { expect, userEvent, waitFor, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"
import HomeView from "./HomeView.vue"
import { AnnouncementRepositoryOnMemory } from "./repository"

const meta = {
  component: HomeView,
  tags: ["autodocs"],
  args: {
    repository: new AnnouncementRepositoryOnMemory(),
  },
  decorators: [useMockAuth, protectedLayout],
} satisfies Meta<typeof HomeView>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitFor(
      () => {
        expect(canvas.queryByTestId("overlay")).not.toBeInTheDocument()
      },
      { timeout: 2000 },
    )

    const buttons = await canvas.findAllByRole("button", { name: "編集" }, { timeout: 1 * 1000 })

    await userEvent.click(buttons[0]!)

    const input = await canvas.findByLabelText("title", {}, { timeout: 2000 })
    await userEvent.clear(input)
    await userEvent.type(input, "hoge")

    const button = await canvas.findByRole("button", { name: "submit" }, { timeout: 1 * 1000 })
    await userEvent.click(button, { delay: 500 })
  },
}
