import { useCustomForm } from "@/views/_shared_/use-custom-form"
import type { AnnouncementWithId } from "@/views/home/model"
import { editSchema } from "@/views/home/schema"

export const useAnnouncementEditForm = (
  initValues: AnnouncementWithId | undefined,
  emitSubmit: (form: AnnouncementWithId) => void,
) => {
  const { defineField, handleSubmit, errors } = useCustomForm(editSchema, initValues)
  const [title] = defineField("title")
  const [content] = defineField("content")

  const onSubmit = handleSubmit(form => {
    emitSubmit(form)
  })

  return {
    title,
    content,
    onSubmit,
    errors,
  }
}
