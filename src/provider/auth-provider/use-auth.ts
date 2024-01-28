const key = "token"

/** @public */
export const isAuthenticated = () => !!localStorage.getItem(key)
/** @public */
export const login = (token: string) => localStorage.setItem(key, token)
/** @public */
export const logout = () => localStorage.removeItem(key)
