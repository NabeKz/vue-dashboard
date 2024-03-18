import { useOverlay } from "@/provider/use-context"
import { useCustomForm } from "@/views/_shared_/use-custom-form"
import { schema } from "@/views/home/schema"
import type { Emits, Props } from "./types"

export const useEditForm = (props: Props, emits: Emits) => {
  const { defineField, handleSubmit, errors } = useCustomForm(schema, props.data)
  const withOverlay = useOverlay()

  const [title] = defineField("title")
  const [content] = defineField("content")

  const onSubmit = handleSubmit(async form => {
    await withOverlay(
      () => props.update({ ...form, id: props.data.id }),
      async () => {
        emits("success")
      },
      async () => {
        emits("failure")
      },
    )
  })

  return {
    onSubmit,
    errors,
    title,
    content,
  }
}
