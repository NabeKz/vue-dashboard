import { composeStory } from "@storybook/vue3"
import { cleanup, render } from "@testing-library/vue"
import { afterEach, test } from "vitest"
import { useRouter } from "vue-router"
import Meta, { LoginSuccess } from "./login-view.stories"

const Story = composeStory(LoginSuccess, Meta)

afterEach(cleanup)

test("ログイン成功", async () => {
  render(Story)
  const router = useRouter()
  // router.push({ name: "login" })

  await Story.play?.()
})
