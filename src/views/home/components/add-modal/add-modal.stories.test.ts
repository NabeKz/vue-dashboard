import { composeStory } from "@storybook/vue3"
import { cleanup, fireEvent, render, screen } from "@testing-library/vue"
import { afterEach, describe, expect, test } from "vitest"
import Meta, { Primary } from "./add-modal.stories"

const Story = composeStory(Primary, Meta)

afterEach(cleanup)

describe("titleのエラー", () => {
  test("空文字の場合は「必須項目」を表示", async () => {
    render(Story)

    const input = screen.getByLabelText("title")
    await fireEvent.update(input, "a")
    await fireEvent.update(input, "")
    expect(await screen.findByText("必須項目です")).toBeInTheDocument()
  })
})

describe("contentのエラー", () => {
  test("空文字の場合は「必須項目」を表示", async () => {
    render(Story)

    const input = screen.getByLabelText("content")
    await fireEvent.update(input, "a")
    await fireEvent.update(input, "")
    expect(await screen.findByText("必須項目です")).toBeInTheDocument()
  })
})
