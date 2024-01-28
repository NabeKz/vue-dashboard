type LoginParams = {
  id: string
  password: string
}

type AuthResponse = {
  token: string
}

// TODO: visiblity検討
/** @public */
export interface AuthRepository {
  login(params: LoginParams): Promise<AuthResponse>
}
