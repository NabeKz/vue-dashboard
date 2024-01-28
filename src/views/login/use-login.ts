import type { AuthRepository } from "@/lib/model/auth/repository"
import type { TokenStorage } from "@/provider/auth-provider/storage"
import { z } from "@/views/_shared_/custom-validate"
import { useCustomForm } from "@/views/_shared_/use-custom-form"

const schema = z.object({
  email: z.string.required(),
  password: z.string.optional(),
})

type Params = {
  onSuccess: () => void
  onFailure: () => void
  storage: TokenStorage
  repository: AuthRepository
}

export const useLogin = ({ onSuccess, onFailure, storage, repository }: Params) => {
  const { defineField, errors, handleSubmit } = useCustomForm(schema)
  const [email] = defineField("email")
  const [password] = defineField("password")

  const handleLogin = handleSubmit(form => {
    repository
      .login({ id: form.email, password: form.password })
      .then(res => storage.setToken(res.token))
      .then(() => onSuccess())
      .catch(err => {
        console.error(err)
        onFailure()
      })
  })

  return {
    email,
    password,
    handleLogin,
    errors,
  }
}
