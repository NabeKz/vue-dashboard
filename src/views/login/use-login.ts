import type { AuthRepository } from "@/lib/model/auth/repository"
import { login } from "@/provider/auth-provider/use-auth"
import { z } from "@/views/_shared_/custom-validate"
import { useCustomForm } from "@/views/_shared_/use-custom-form"

const schema = z.object({
  email: z.string.required(),
  password: z.string.optional(),
})

type Params = {
  onSuccess: () => void
  onFailure: () => void
  repository: AuthRepository
}

export const useLogin = ({ onSuccess, onFailure, repository }: Params) => {
  const { defineField, errors, handleSubmit } = useCustomForm(schema)
  const [email] = defineField("email")
  const [password] = defineField("password")

  const handleLogin = handleSubmit(form => {
    login("ok")
    repository
      .login({ id: form.email, password: form.password })
      .then(() => onSuccess())
      .catch(() => onFailure())
  })

  return {
    email,
    password,
    handleLogin,
    errors,
  }
}
