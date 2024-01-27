const storage = "token"

/** @public */
export const isAuthenticated = () => !!localStorage.getItem(storage)
/** @public */
export const login = (token: string) => localStorage.setItem(storage, token)
/** @public */
export const logout = () => localStorage.removeItem(storage)
