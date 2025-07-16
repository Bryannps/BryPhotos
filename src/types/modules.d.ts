// Declarações de tipo para arquivos JSX
declare module "*.jsx" {
  import { ComponentType } from "react";
  const Component: ComponentType<Record<string, unknown>>;
  export default Component;
}

// Declarações específicas para nossos módulos
declare module "./pages/Login" {
  const Login: React.ComponentType;
  export default Login;
}

declare module "./pages/Gallery" {
  const Gallery: React.ComponentType;
  export default Gallery;
}

declare module "./components/SharedHeader" {
  const SharedHeader: React.ComponentType;
  export default SharedHeader;
}

declare module "./contexts/AuthContext" {
  export interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  }

  export const AuthProvider: React.ComponentType<{ children: React.ReactNode }>;
  export function useAuth(): AuthContextType;
}

declare module "./components/PrivateRoute" {
  const PrivateRoute: React.ComponentType<{ children: React.ReactNode }>;
  export default PrivateRoute;
}
