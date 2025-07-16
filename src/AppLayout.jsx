import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function AppLayout({ children, fullWidth = false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/home");
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-50 flex flex-col">
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 py-6">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
            BRY Photos
          </h1>
          <nav className="flex space-x-6">
            <Link
              to="/"
              className={`${
                location.pathname === "/" || location.pathname === "/home"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium"
                  : "text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium"
              }`}
            >
              Início
            </Link>
            <Link
              to="/gallery"
              className={`${
                location.pathname === "/gallery"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium"
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
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium"
                    : "text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium"
                }`}
              >
                Entrar
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main
        className={`flex-grow ${
          fullWidth
            ? ""
            : "container mx-auto px-6 py-12 flex justify-center items-start"
        }`}
      >
        {fullWidth ? (
          children
        ) : (
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
            {children}
          </div>
        )}
      </main>

      <footer className="bg-white border-t mt-12 py-6 text-center text-gray-600 text-sm select-none">
        © 2025 BRY Photos. Todos os direitos reservados.
      </footer>
    </div>
  );
}
