import { useState } from "react";
import AppLayout from "./AppLayout";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    // Aqui você pode implementar o envio do formulário para backend
  }

  function toggleMode() {
    setIsLogin((prev) => !prev);
  }

  return (
    <AppLayout>
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
        {isLogin ? "Entrar na sua conta" : "Criar nova conta"}
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
              Nome completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome completo"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-gray-700"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="exemplo@dominio.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 font-medium text-gray-700"
          >
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold"
        >
          {isLogin ? "Entrar" : "Cadastrar"}
        </button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        {isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}
        <button
          type="button"
          aria-pressed={isLogin}
          className="text-blue-600 underline hover:text-blue-800 transition"
          onClick={toggleMode}
        >
          {isLogin ? "Cadastre-se" : "Faça login"}
        </button>
      </p>
    </AppLayout>
  );
}
