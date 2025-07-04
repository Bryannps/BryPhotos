import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import SharedHeader from "./components/SharedHeader";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-primary animate-gradient opacity-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-relaxed pb-4">
            Fotografia Profissional
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Casamentos, ensaios, eventos e retratos em{" "}
            <span className="font-semibold text-indigo-600">Goiânia</span>
          </p>
          <p className="text-lg text-gray-500 mb-10">
            Qualidade e paixão em cada clique 📸
          </p>

          <div>
            <a
              href="https://wa.me/5562987654321?text=Olá!%20Quero%20agendar%20um%20ensaio%20fotográfico."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full hover-lift text-lg font-semibold transition-all duration-300"
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
          <h3 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-relaxed pb-3">
            Serviços Oferecidos
          </h3>
          <p className="text-center text-gray-600 mb-16">
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
                className="group relative overflow-hidden rounded-3xl shadow-xl hover-lift transition-all duration-300 h-80 md:h-96"
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
          <h3 className="text-4xl font-bold mb-6">
            Pronto para Criar Memórias Incríveis?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato agora e vamos planejar sua sessão fotográfica
          </p>
          <div>
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

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/gallery"
            element={
              <PrivateRoute>
                <Gallery />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
