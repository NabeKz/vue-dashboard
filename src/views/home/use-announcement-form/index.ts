import { useForm } from "vee-validate"
import { schema, type Schema } from "../schema"

export const useAnnouncementForm = () => {
  const { defineField, handleSubmit, errors } = useForm<Schema>({ validationSchema: schema })
  const [title] = defineField("title")
  const [content] = defineField("content")

  return {
    title,
    content,
    handleSubmit,
    errors
  }
}
