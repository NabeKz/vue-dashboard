type LoginParams = {
  id: string
  password: string
}

// TODO: visiblity検討
/** @public */
export interface AuthRepository {
  login(params: LoginParams): Promise<void>
}
