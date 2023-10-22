const tokenKey = "token";
export const clearToken = () => {
  try {
    localStorage.removeItem(tokenKey);
  } catch (error) {
    error;
  }
};

export const setToken = (token: string) => {
  localStorage.setItem(tokenKey, token);
};
export const getToken = () => {
  return localStorage.getItem(tokenKey) || "";
};
