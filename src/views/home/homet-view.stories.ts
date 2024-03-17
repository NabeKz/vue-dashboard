import { protectedLayout, useMockAuth } from "@/test/helper"
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

export const Primary: Story = {}
