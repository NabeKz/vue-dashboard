const storage = "token";

export const isAuthenticated = () => !!localStorage.getItem(storage);
export const authenticated = (token: string) => localStorage.setItem(storage, token);
