import { createContext, useState, useEffect, useContext } from "react";
import { authService } from "../services/authService";
import type {
  User,
  LoginRequest,
  RegisterRequest,
} from "../services/authService";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export { AuthContext };

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Recarrega estado do localStorage ao abrir a aba
  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      console.log("Validando token na inicialização:");
      console.log("Token encontrado:", !!token);
      console.log("Usuário encontrado:", !!storedUser);

      if (token && storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);

          console.log("Testando validade do token...");
          // Testa se o token ainda é válido fazendo uma chamada à API
          await authService.me();

          console.log("Token válido, mantendo login");
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (error) {
          console.log("Token inválido ou expirado, fazendo logout...", error);
          // Se o token for inválido, limpa o localStorage
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);
          setIsAuthenticated(false);
        }
      } else {
        console.log("Nenhum token ou usuário encontrado");
      }
      setLoading(false);
    };

    validateToken();
  }, []);

  // Login com API
  const login = async (data: LoginRequest) => {
    setLoading(true);
    try {
      const response = await authService.login(data);

      console.log("Login bem-sucedido:", response);

      localStorage.setItem("token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));

      setUser(response.user);
      setIsAuthenticated(true);

      console.log("Token salvo:", response.access_token);
      console.log("Usuário salvo:", response.user);
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Registro com API
  const register = async (data: RegisterRequest) => {
    setLoading(true);
    try {
      const response = await authService.register(data);

      localStorage.setItem("token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));

      setUser(response.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Erro no registro:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
