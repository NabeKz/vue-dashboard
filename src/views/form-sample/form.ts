import { z } from "@/views/_shared_/custom-validate"
import { useCustomForm } from "@/views/_shared_/use-custom-form"

const schema = z.object({
  email: z.string().max(2).value,
  item: z.string().value,
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
