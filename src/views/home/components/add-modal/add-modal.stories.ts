import { expect, fn, userEvent, waitFor, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"
import AddModal from "./AddModal.vue"

const meta = {
  component: AddModal,
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof AddModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const ValidInput: Story = {
  args: {
    onSubmit: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step("エラーがない場合はsubmitが発火すること", async () => {
      await userEvent.type(canvas.getByLabelText("title"), "hoge")
      await userEvent.type(canvas.getByLabelText("content"), "fuga")

      await userEvent.click(canvas.getByRole("button", { name: "submit" }))

      await waitFor(() => {
        expect(args.onSubmit).toBeCalled()
      })
    })
  },
}

export const InvalidInput: Story = {
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)

    await step("未入力でsubmitを押下した場合はエラーがでること", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "submit" }))
      const error = await canvas.findAllByText("必須項目です")
      expect(error.length).toBe(2)
    })

    await step("エラーがでている場合はsubmitが発火しないこと", async () => {
      const submit = canvas.getByRole("button", { name: "submit" })
      await userEvent.click(submit)

      await waitFor(() => {
        expect(args.onSubmit).not.toBeCalled()
      })
    })
  },
}
