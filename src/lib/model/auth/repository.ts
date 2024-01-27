type LoginParams = {
  id: string
  password: string
}

export interface AuthRepository {
  login(params: LoginParams): Promise<void>
}
