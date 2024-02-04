import type { AuthRepository } from "@/lib/model/auth/repository"
import type { TokenStorage } from "@/lib/model/auth/token-storage"
import { useOverlay } from "@/provider/use-context"
import { z } from "@/views/_shared_/custom-validate"
import { useCustomForm } from "@/views/_shared_/use-custom-form"
import { useRouter } from "vue-router"

const schema = z.object({
  email: z.string.required(),
  password: z.string.optional(),
})

type Params = {
  onFailure: () => void
  storage: TokenStorage
  repository: AuthRepository
}

export const useLogin = ({ onFailure, storage, repository }: Params) => {
  const { defineField, errors, handleSubmit } = useCustomForm(schema)
  const router = useRouter()
  const withOverlay = useOverlay()
  const [email] = defineField("email")
  const [password] = defineField("password")

  const handleLogin = handleSubmit(form => {
    withOverlay?.(
      () => repository.login({ id: form.email, password: form.password }),
      async res => {
        storage.setToken(res.token), await router.replace({ name: "home" })
      },
      async () => onFailure(),
    )
  })

  return {
    email,
    password,
    handleLogin,
    errors,
  }
}
