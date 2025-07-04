import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SharedHeader from "../components/SharedHeader";
import { useAuth } from "../contexts/AuthContext";

// Componente do formulário de Login
function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(); // login fictício
    navigate('/gallery'); // redireciona pra galeria
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          E-mail
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none"
          placeholder="seu@email.com"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Senha
        </label>
        <input
          type="password"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none"
          placeholder="••••••••"
          required
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-600">
          <input type="checkbox" className="rounded" />
          Lembrar de mim
        </label>
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          Esqueci a senha
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-secondary text-white py-3 rounded-xl hover-lift font-semibold text-lg transition-all duration-300"
      >
        Entrar
      </button>
    </form>
  );
}

// Componente do formulário de Cadastro
function RegistrationForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(); // login fictício após cadastro
    navigate('/gallery'); // redireciona pra galeria
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Nome completo
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
          placeholder="Seu nome completo"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          E-mail
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
          placeholder="seu@email.com"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Senha
        </label>
        <input
          type="password"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Confirmar senha
        </label>
        <input
          type="password"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
          placeholder="••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl hover-lift font-semibold text-lg transition-all duration-300"
      >
        Criar Conta
      </button>
    </form>
  );
}

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  function toggleForm() {
    setIsRegistering(!isRegistering);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SharedHeader />

      <div className="flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover-lift">
            {/* Logo/Title */}
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📷</div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-relaxed pb-2">
                {isRegistering ? "Criar Nova Conta" : "Área do Cliente"}
              </h2>
              <p className="text-gray-600 mt-2">
                {isRegistering
                  ? "Junte-se à nossa comunidade"
                  : "Entre na sua conta"}
              </p>
            </div>

            {/* Formulários */}
            {isRegistering ? <RegistrationForm /> : <LoginForm />}

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-gray-500 text-sm">ou</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Toggle entre Login/Cadastro */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                {isRegistering
                  ? "Já tem uma conta?"
                  : "Ainda não tem uma conta?"}
              </p>
              <button
                className="w-full border-2 border-indigo-200 text-indigo-600 py-3 rounded-xl hover:bg-indigo-50 hover-glow font-semibold transition-all duration-300"
                onClick={toggleForm}
              >
                {isRegistering ? "Fazer Login" : "Criar Conta"}
              </button>
            </div>

            {/* Contact */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-3">Precisa de ajuda?</p>
              <a
                href="https://wa.me/5562987654321?text=Olá!%20Preciso%20de%20ajuda%20com%20minha%20conta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors duration-300 text-sm font-medium"
              >
                <span>📱</span>
                Fale conosco no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
