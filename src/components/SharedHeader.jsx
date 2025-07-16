import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function SharedHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/home");
  }

  return (
    <header className="flex justify-between items-center py-6 px-8 bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <h1 className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
        BRY Photos
      </h1>
      <nav className="flex space-x-6">
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "bg-gradient-accent text-white px-6 py-2 rounded-full font-medium"
              : "text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium"
          }`}
        >
          Início
        </Link>
        <Link
          to="/gallery"
          className={`${
            location.pathname === "/gallery"
              ? "bg-gradient-accent text-white px-6 py-2 rounded-full font-medium"
              : "text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium"
          }`}
        >
          Galeria
        </Link>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-110 font-medium"
          >
            Sair
          </button>
        ) : (
          <Link
            to="/login"
            className={`${
              location.pathname === "/login"
                ? "bg-gradient-accent text-white px-6 py-2 rounded-full font-medium"
                : "text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium"
            }`}
          >
            Entrar
          </Link>
        )}
      </nav>
    </header>
  );
}
