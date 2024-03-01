import { inject, provide, type InjectionKey } from "vue"
import type { TokenStorage } from "./interface"

type AuthContext = {
  saveToken: (token: string) => Promise<void>
  logout: () => Promise<void>
}

const key = Symbol() as InjectionKey<AuthContext>

export const provideAuth = (storage: TokenStorage) => {
  const saveToken = storage.setToken
  const logout = storage.removeToken

  provide(key, { saveToken, logout })
}
/** @public */
export const useAuth = () => {
  const context = inject(key)
  if (context === undefined) {
    throw new Error("failed inject")
  }

  return context
}
