import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AppLayout from "../AppLayout";
import { useAuth } from "../contexts/AuthContext";
import { useApp } from "../contexts/AppContext";

// Componente do formulário de Login
function LoginForm() {
  console.log('=== LoginForm: Componente inicializado ===');
  const { login, loading } = useAuth();
  const { showError, showSuccess } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('=== LoginForm: handleSubmit chamado ===');
    console.log('LoginForm: Tentando fazer login com:', { email, password: '***' });
    
    try {
      console.log('LoginForm: Chamando função login...');
      const result = await login(email, password);
      console.log('LoginForm: Login concluído:', result);
      
      showSuccess("Login realizado com sucesso!");
      navigate("/gallery");
      console.log('LoginForm: Login bem-sucedido, redirecionando para gallery');
    } catch (err) {
      console.error('LoginForm: Erro no login:', err);
      showError(err.message || "E-mail ou senha inválidos");
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        disabled={loading}
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}

// Componente do formulário de Cadastro
function RegistrationForm() {
  const { register, loading } = useAuth();
  const { showError, showSuccess } = useApp();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Validar se as senhas coincidem
    if (formData.password !== formData.confirmPassword) {
      showError("As senhas não coincidem");
      return;
    }

    console.log('Tentando registrar usuário:', { name: formData.name, email: formData.email });
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      showSuccess("Conta criada com sucesso! Você pode fazer login agora.");
      // Não navegar automaticamente, deixar o usuário fazer login
    } catch (err) {
      console.error('Erro no registro:', err);
      showError(err.message || "Erro ao criar conta");
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Nome completo
        </label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Senha
        </label>
        <input
          type="password"
          name="password"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Confirmar senha
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 outline-none"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl hover-lift font-semibold text-lg transition-all duration-300"
        disabled={loading}
      >
        {loading ? "Criando conta..." : "Criar Conta"}
      </button>
    </form>
  );
}

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [searchParams] = useSearchParams();
  const [showAlert, setShowAlert] = useState(false);

  // Verificar se o usuário foi redirecionado
  useEffect(() => {
    if (searchParams.get("redirected") === "true") {
      setShowAlert(true);
      // Remover o parâmetro da URL após mostrar o alerta
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000); // Alerta desaparece após 5 segundos

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  function toggleForm() {
    setIsRegistering(!isRegistering);
  }

  return (
    <AppLayout>
      {/* Alerta de redirecionamento */}
      {showAlert && (
        <div className="mb-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-md animate-pulse">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-amber-400 text-xl">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-amber-800">
                Você precisa ter uma conta para acessar a galeria!
              </p>
              <p className="text-xs text-amber-600 mt-1">
                Faça login ou crie uma conta para continuar.
              </p>
            </div>
            <div className="ml-auto">
              <button
                onClick={() => setShowAlert(false)}
                className="text-amber-400 hover:text-amber-600 transition-colors duration-200"
              >
                <span className="text-lg">✕</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logo/Title */}
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">📷</div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-relaxed pb-2">
          {isRegistering ? "Criar Nova Conta" : "Área do Cliente"}
        </h2>
        <p className="text-gray-600 mt-2">
          {isRegistering ? "Junte-se à nossa comunidade" : "Entre na sua conta"}
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
          {isRegistering ? "Já tem uma conta?" : "Ainda não tem uma conta?"}
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
    </AppLayout>
  );
}
