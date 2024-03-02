/** @public */
export interface TokenStorage {
  getToken(): Promise<string>
  setToken(token: string): Promise<void>
  removeToken(): Promise<void>
}

type LoginParams = {
  id: string
  password: string
}

type AuthResponse = {
  token: string
}

/** @public */
export interface AuthRepository {
  login(params: LoginParams): Promise<AuthResponse>
}
