import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Carregar perfil do usuário
  const loadUserProfile = async () => {
    console.log('AuthContext: Carregando perfil do usuário...');
    try {
      const userData = await authService.profile();
      console.log('AuthContext: Perfil carregado com sucesso:', userData);
      setUser(userData);
    } catch (error) {
      console.error('AuthContext: Erro ao carregar perfil:', error);
      // Se falhar ao carregar perfil, limpar dados somente se não estivermos na página de login
      if (window.location.pathname !== '/login') {
        console.log('AuthContext: Deveria fazer logout devido ao erro no perfil');
        // logout(); // COMENTADO para debug
      }
    }
  };

  // Logout
  const logout = () => {
    console.log('AuthContext: Fazendo logout');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("access_token");
  };

  // Carrega token do localStorage ao abrir a aba
  useEffect(() => {
    console.log('AuthContext: Inicializando contexto...');
    const storedToken = localStorage.getItem("access_token");
    console.log('AuthContext: Token armazenado encontrado:', !!storedToken);
    
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
      // Só carregar perfil se não estivermos na página de login
      if (window.location.pathname !== '/login') {
        console.log('AuthContext: Carregando perfil na inicialização');
        loadUserProfile();
      }
    }
  }, []);

  // Login com loading e notificações
  const login = async (email, password) => {
    setLoading(true);
    try {
      console.log('AuthContext: Fazendo login...', { email });
      const response = await authService.login(email, password);
      console.log('AuthContext: Resposta do login:', response);
      
      // Extrair dados da estrutura {success: true, data: {...}}
      const data = response.data || response;
      console.log('AuthContext: Dados extraídos:', data);
      
      setToken(data.access_token);
      setIsAuthenticated(true);
      localStorage.setItem("access_token", data.access_token);
      
      // Carregar dados do usuário
      await loadUserProfile();
      
      return data;
    } catch (error) {
      console.error('AuthContext: Erro no login:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Registro de novo usuário
  const register = async (userData) => {
    setLoading(true);
    try {
      const data = await authService.register(userData);
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      token, 
      user,
      loading,
      login, 
      register,
      logout,
      loadUserProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado
export function useAuth() {
  console.log('=== useAuth: Hook chamado ===');
  const context = useContext(AuthContext);
  if (!context) {
    console.error('useAuth: Erro - contexto não encontrado');
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  console.log('useAuth: Contexto encontrado, isAuthenticated:', context.isAuthenticated);
  return context;
}
