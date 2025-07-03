import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-8 bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 animate-slideInLeft">
      <h1 className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
        BRY Photos
      </h1>
      <nav className="flex space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium"
        >
          Início
        </Link>
        <Link
          to="/gallery"
          className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 font-medium"
        >
          Galeria
        </Link>
        <Link
          to="/login"
          className="bg-gradient-accent text-white px-6 py-2 rounded-full hover-lift transition-all duration-300 font-medium"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-primary animate-gradient opacity-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 animate-fadeInUp bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-relaxed pb-4">
            Fotografia Profissional
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Casamentos, ensaios, eventos e retratos em{" "}
            <span className="font-semibold text-indigo-600">Goiânia</span>
          </p>
          <p
            className="text-lg text-gray-500 mb-10 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Qualidade e paixão em cada clique 📸
          </p>

          <div
            className="animate-fadeInScale"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://wa.me/5562987654321?text=Olá!%20Quero%20agendar%20um%20ensaio%20fotográfico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full hover-lift text-lg font-semibold transition-all duration-300 animate-pulse-custom"
            >
              <span>📱</span>
              Agendar pelo WhatsApp
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-4 text-center animate-fadeInUp bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-relaxed pb-3">
            Serviços Oferecidos
          </h3>
          <p
            className="text-center text-gray-600 mb-16 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Escolha o serviço perfeito para o seu momento especial
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                nome: "Casamentos",
                emoji: "💍",
                descricao: "Momentos únicos eternizados",
                subtitulo: "Cerimônias e festas inesquecíveis",
                cor: "from-pink-500/80 to-rose-500/80",
                imagePlaceholder:
                  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
              },
              {
                nome: "Ensaios Individuais",
                emoji: "✨",
                descricao: "Sua personalidade em foco",
                subtitulo: "Sessões personalizadas e autênticas",
                cor: "from-purple-500/80 to-indigo-500/80",
                imagePlaceholder:
                  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop",
              },
              {
                nome: "Eventos",
                emoji: "🎉",
                descricao: "Cobertura profissional completa",
                subtitulo: "Corporativo e social",
                cor: "from-blue-500/80 to-cyan-500/80",
                imagePlaceholder:
                  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
              },
              {
                nome: "Retratos Profissionais",
                emoji: "👔",
                descricao: "Imagem corporativa de impacto",
                subtitulo: "Headshots e retratos executivos",
                cor: "from-emerald-500/80 to-teal-500/80",
                imagePlaceholder:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
              },
              {
                nome: "Corporativo",
                emoji: "🏢",
                descricao: "Identidade visual empresarial",
                subtitulo: "Fotografia para sua marca",
                cor: "from-orange-500/80 to-red-500/80",
                imagePlaceholder:
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
              },
              {
                nome: "Família",
                emoji: "👨‍👩‍👧‍👦",
                descricao: "Memórias familiares especiais",
                subtitulo: "Momentos de carinho e união",
                cor: "from-amber-500/80 to-yellow-500/80",
                imagePlaceholder:
                  "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
              },
            ].map((servico, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover-lift animate-fadeInScale h-80 md:h-96"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                {/* Imagem de Fundo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${servico.imagePlaceholder})`,
                  }}
                />

                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

                {/* Overlay gradiente */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${servico.cor} opacity-60 transition-opacity duration-300 group-hover:opacity-80`}
                />

                {/* Conteúdo */}
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  {/* Emoji no topo */}
                  <div className="self-start">
                    <span className="text-3xl bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                      {servico.emoji}
                    </span>
                  </div>

                  {/* Texto principal no centro */}
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                      {servico.nome}
                    </h3>
                    <p className="text-lg font-medium mb-1 opacity-90">
                      {servico.descricao}
                    </p>
                    <p className="text-sm opacity-75">{servico.subtitulo}</p>
                  </div>

                  {/* Botão de ação no rodapé */}
                  <div className="self-center">
                    <a
                      href="https://wa.me/5562987654321?text=Olá!%20Quero%20agendar%20um%20ensaio%20fotográfico."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-lg"
                    >
                      AGENDAR SESSÃO
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-primary animate-gradient">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6 animate-fadeInUp">
            Pronto para Criar Memórias Incríveis?
          </h3>
          <p
            className="text-xl mb-8 opacity-90 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Entre em contato agora e vamos planejar sua sessão fotográfica
          </p>
          <div
            className="animate-fadeInScale"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://wa.me/5562987654321?text=Olá!%20Quero%20agendar%20um%20ensaio%20fotográfico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-full hover-lift text-lg font-semibold transition-all duration-300"
            >
              Vamos conversar!
              <span>💬</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Coming Soon Card */}
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl hover-lift animate-fadeInScale">
            {/* Hero Section dentro do card */}
            <div className="mb-12 animate-fadeInUp">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-relaxed pb-3">
                Galeria de Fotos
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore nosso portfólio e veja a qualidade do nosso trabalho
              </p>
            </div>

            <div className="text-8xl mb-6 animate-pulse-custom">📷</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Em Breve</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Estamos preparando uma galeria incrível com nossos melhores
              trabalhos. Enquanto isso, entre em contato para ver mais do nosso
              portfólio!
            </p>

            <a
              href="https://wa.me/5562987654321?text=Olá!%20Gostaria%20de%20ver%20mais%20fotos%20do%20portfólio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-accent text-white px-8 py-4 rounded-full hover-lift text-lg font-semibold transition-all duration-300 mb-12"
            >
              <span>📱</span>
              Ver Portfólio Completo
              <span>→</span>
            </a>

            {/* Preview Grid dentro do card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item, idx) => (
                <div
                  key={item}
                  className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl hover-lift animate-fadeInScale shadow-lg"
                  style={{ animationDelay: `${0.2 * idx}s` }}
                >
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-6xl">
                    📸
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

      <div className="flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover-lift animate-fadeInScale">
            {/* Logo/Title */}
            <div className="text-center mb-8">
              <div className="text-4xl mb-4 animate-pulse-custom">📷</div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-relaxed pb-2">
                Área do Cliente
              </h2>
              <p className="text-gray-600 mt-2">Entre na sua conta</p>
            </div>

            {/* Form */}
            <form
              className="space-y-6 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none"
                  placeholder="seu@email.com"
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

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-gray-500 text-sm">ou</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Sign up */}
            <div
              className="text-center animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-gray-600 mb-4">Ainda não tem uma conta?</p>
              <button className="w-full border-2 border-indigo-200 text-indigo-600 py-3 rounded-xl hover:bg-indigo-50 hover-glow font-semibold transition-all duration-300">
                Criar Conta
              </button>
            </div>

            {/* Contact */}
            <div
              className="mt-8 text-center animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
