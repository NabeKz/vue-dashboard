import type { AuthRepository } from "@/lib/model/auth/repository"

const users = [{ id: "test1", password: "test1" }] as const

export class AuthRepositoryOnMemory implements AuthRepository {
  async login(params: { id: string; password: string }): Promise<void> {
    const user = users.find(user => user.id === params.id && user.password === params.password)
    if (user) {
      return
    }
    throw new Error("not found")
  }
}