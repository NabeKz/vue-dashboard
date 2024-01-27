import { z } from "@/views/_shared_/custom-validate"
import { useCustomForm } from "@/views/_shared_/use-custom-form"

const schema = z.object({
  email: z.string.required().max(2),
  item: z.string.required(),
})

export const useMyForm = () => {
  const { defineField, handleSubmit, errors } = useCustomForm(schema)

  const [email] = defineField("email")
  const [item] = defineField("item")

  return {
    email,
    item,
    handleSubmit,
    errors,
  }
}
