import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function SharedHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="flex justify-between items-center py-6 px-8 bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <h1 className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
        <Link to="/">BRY Photos</Link>
      </h1>
      <nav className="flex items-center space-x-6">
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

        {isAuthenticated && (
          <>
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
            <Link
              to="/upload"
              className={`${
                location.pathname === "/upload"
                  ? "bg-gradient-accent text-white px-6 py-2 rounded-full font-medium"
                  : "text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium"
              }`}
            >
              Upload
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-sm">Olá, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 transition text-sm font-medium"
              >
                Sair
              </button>
            </div>
          </>
        )}

        {!isAuthenticated && (
          <Link
            to="/login"
            className={`${
              location.pathname === "/login"
                ? "bg-gradient-accent text-white px-6 py-2 rounded-full font-medium"
                : "text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium"
            }`}
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
