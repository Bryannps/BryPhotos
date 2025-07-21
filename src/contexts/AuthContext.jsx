import { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Carrega token do localStorage ao abrir a aba
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  // Login real
  const login = async (email, password) => {
    const data = await loginUser(email, password);
    setToken(data.access_token);
    setIsAuthenticated(true);
    localStorage.setItem("access_token", data.access_token);
  };

  // Logout
  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("access_token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado
export function useAuth() {
  return useContext(AuthContext);
}
