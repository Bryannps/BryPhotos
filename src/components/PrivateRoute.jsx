import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  console.log('PrivateRoute: Verificando autenticação:', isAuthenticated);

  if (!isAuthenticated) {
    console.log('PrivateRoute: Usuário não autenticado, redirecionando');
    return <Navigate to="/login?redirected=true" replace />;
  }

  return children;
}
