const key = "token"

// TODO: 削除、TokenStorageに委譲
/** @public */
export const logout = () => localStorage.removeItem(key)
