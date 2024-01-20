import { useCustomForm } from "@/views/_shared_/use-custom-form"
import { schema } from "../schema"

export const useAnnouncementForm = () => {
  const { defineField, handleSubmit, errors } = useCustomForm(schema)
  const [title] = defineField("title")
  const [content] = defineField("content")

  return {
    title,
    content,
    handleSubmit,
    errors,
  }
}
