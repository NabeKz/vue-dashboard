import type { TokenStorage } from "@/lib/model/auth/token-storage"

/** @public */
export class LocalStorage implements TokenStorage {
  key = "token"

  async getToken(): Promise<string> {
    const token = localStorage.getItem(this.key)
    const json = JSON.parse(token ?? "{}")["token"]
    return json ?? ""
  }

  async setToken(token: string): Promise<void> {
    const json = JSON.stringify({ token })
    localStorage.setItem(this.key, json)
  }

  async removeToken(): Promise<void> {
    localStorage.removeItem(this.key)
  }
}
