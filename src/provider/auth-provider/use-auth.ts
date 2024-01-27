const storage = "token";

export const isAuthenticated = () => !!localStorage.getItem(storage);
export const login = (token: string) => localStorage.setItem(storage, token);
export const logout = () => localStorage.removeItem(storage);
