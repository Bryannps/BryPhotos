import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow">
      <h1 className="text-2xl font-bold text-gray-800">BRY Photos</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-blue-600">
          Início
        </Link>
        <Link to="/gallery" className="text-blue-600">
          Galeria
        </Link>
        <Link to="/login" className="text-blue-600">
          Entrar
        </Link>
      </nav>
    </header>
  );
}
