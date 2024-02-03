import type { AuthRepository } from "@/lib/model/auth/repository"
import type { TokenStorage } from "@/lib/model/auth/token-storage"
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

  const command = async (form: { email: string; password: string }) => {
    try {
      const res = await repository.login({ id: form.email, password: form.password })
      storage.setToken(res.token)
      return onSuccess()
    } catch (err) {
      console.error(err)
      onFailure()
    }
  }
  const handleLogin = handleSubmit(command)

  return {
    email,
    password,
    handleLogin,
    errors,
  }
}
