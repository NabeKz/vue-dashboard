import { schema } from "../schema"
import { useFormWrapper } from "../use-form-wrapper"

export const useAnnouncementForm = () => {
  const { defineField, handleSubmit, errors } = useFormWrapper(schema, { title: "", content: "" })
  const [title] = defineField("title")
  const [content] = defineField("content")

  return {
    title,
    content,
    handleSubmit,
    errors
  }
}
