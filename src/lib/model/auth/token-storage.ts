/** @public */
export interface TokenStorage {
  getToken(): Promise<string>
  setToken(token: string): Promise<void>
  removeToken(): Promise<void>
}
