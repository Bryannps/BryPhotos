/// <reference types="vite/client" />

// Global type declarations for JSX modules
declare module "*.jsx" {
  import { ComponentType } from "react";
  const Component: ComponentType<Record<string, unknown>>;
  export default Component;
}

// Specific component declarations
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
  export const AuthProvider: React.ComponentType<{ children: React.ReactNode }>;
  export const useAuth: () => {
    isAuthenticated: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
  };
}

declare module "./components/PrivateRoute" {
  const PrivateRoute: React.ComponentType<{ children: React.ReactNode }>;
  export default PrivateRoute;
}
