export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-50 flex flex-col">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-blue-700 cursor-default select-none">
            BRY Photos
          </h1>
          <nav>
            <ul className="flex space-x-6 text-blue-600 font-semibold">
              <li>
                <a href="/" className="hover:text-blue-800 transition">
                  Início
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-blue-800 transition">
                  Galeria
                </a>
              </li>
              <li>
                <a href="/upload" className="hover:text-blue-800 transition">
                  Upload
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-blue-800 transition">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12 flex justify-center items-start">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          {children}
        </div>
      </main>

      <footer className="bg-white border-t mt-12 py-6 text-center text-gray-600 text-sm select-none">
        © 2025 BRY Photos. Todos os direitos reservados.
      </footer>
    </div>
  );
}
