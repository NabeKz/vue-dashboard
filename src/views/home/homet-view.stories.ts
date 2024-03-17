import type { Meta, StoryObj } from "@storybook/vue3"
import HomeView from "./HomeView.vue"
import { AnnouncementRepositoryOnMemory } from "./repository"

const meta = {
  component: HomeView,
  tags: ["autodocs"],
  args: {
    repository: new AnnouncementRepositoryOnMemory(),
  },
} satisfies Meta<typeof HomeView>

export default meta
type Story = StoryObj<typeof meta>

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Primary: Story = {}
