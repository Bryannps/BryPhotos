import AppLayout from "../AppLayout";
import ImageCasamento from "../images/ImageCasamento.png";
import ImageEsportesJogos from "../images/ImageEsportesJogos.png";
import Imagecamera from "../images/image.png";

export default function Home() {
  return (
    <AppLayout fullWidth={true}>
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-pink-600/10 animate-pulse"></div>

        {/* Partículas flutuantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-2 h-2 bg-indigo-400/30 rounded-full animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-1 h-1 bg-pink-400/30 rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-indigo-300/30 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in-down">
            <img
              src={Imagecamera}
              alt="Fotografia Profissional"
              className="w-40 h-40 object-cover rounded-lg shadow-lg mx-auto transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight animate-fade-in-up animation-delay-200">
            Fotografia Profissional
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-8 animate-fade-in-up animation-delay-400">
            Capturando momentos únicos em{" "}
            <span className="font-semibold text-indigo-600 relative">
              Goiânia
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Transformamos seus momentos especiais em memórias eternas.
            Casamentos, ensaios, eventos e retratos com qualidade profissional e
            paixão em cada clique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
            <a
              href="https://wa.me/5562982749331?text=Olá!%20Quero%20agendar%20um%20ensaio%20fotográfico."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl font-semibold text-lg relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"></span>
              <span className="text-2xl animate-pulse">📱</span>
              <span className="relative z-10">Agendar pelo WhatsApp</span>
            </a>
            <a
              href="/gallery"
              className="group inline-flex items-center gap-2 border-2 border-indigo-500 text-indigo-600 px-8 py-4 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
              <span className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
                🖼️
              </span>
              <span className="relative z-10">Ver Portfolio</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        {/* Background decorativo animado */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400 rounded-full animate-ping animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-400 rounded-full animate-ping animation-delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h3 className="text-4xl font-bold mb-4 text-center animate-fade-in-up bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-relaxed pb-3 transform transition-all duration-700 hover:scale-105">
            Serviços Oferecidos
          </h3>
          <p className="text-center text-gray-600 mb-16 animate-fade-in-up animation-delay-200 transform transition-all duration-500 hover:text-gray-800">
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
                imagePlaceholder: ImageCasamento,
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
                nome: "Esportes & Jogos",
                emoji: "🏟️",
                descricao:
                  "Fotos profissionais de alta resolução para licenciamento",
                subtitulo: "Imagens premium de eventos esportivos",
                cor: "from-green-500/80 to-emerald-500/80",
                imagePlaceholder: ImageEsportesJogos,
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
                className="group relative overflow-hidden rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-80 md:h-96 animate-fade-in-scale cursor-pointer"
                style={{
                  animationDelay: `${0.1 * idx}s`,
                  perspective: "1000px",
                }}
              >
                {/* Imagem de Fundo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  style={{
                    backgroundImage: `url(${servico.imagePlaceholder})`,
                    filter: "brightness(0.8) contrast(1.1)",
                  }}
                />

                {/* Overlay escuro com animação */}
                <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/30" />

                {/* Overlay gradiente com efeito de onda */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${servico.cor} opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:animate-pulse`}
                />

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full"></div>

                {/* Conteúdo */}
                <div className="relative h-full flex flex-col justify-between p-6 text-white transform transition-all duration-500">
                  {/* Emoji no topo com animação */}
                  <div className="self-start">
                    <span className="text-3xl bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-white/30">
                      {servico.emoji}
                    </span>
                  </div>

                  {/* Texto principal no centro */}
                  <div className="text-center transform transition-all duration-500 group-hover:scale-105">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight transform transition-all duration-300 group-hover:text-shadow-lg">
                      {servico.nome}
                    </h3>
                    <p className="text-lg font-medium mb-1 opacity-90 transform transition-all duration-400 group-hover:opacity-100">
                      {servico.descricao}
                    </p>
                    <p className="text-sm opacity-75 transform transition-all duration-400 group-hover:opacity-90">
                      {servico.subtitulo}
                    </p>
                  </div>

                  {/* Botão de ação no rodapé */}
                  <div className="self-center">
                    <a
                      href="https://wa.me/5562987654321?text=Olá!%20Quero%20agendar%20um%20ensaio%20fotográfico."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/90 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl transform group-hover:animate-bounce"
                    >
                      <span className="relative z-10">AGENDAR SESSÃO</span>
                      <span className="transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* Partículas flutuantes no hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full animate-ping animation-delay-100"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-ping animation-delay-300"></div>
                  <div className="absolute bottom-12 left-8 w-1 h-1 bg-white rounded-full animate-ping animation-delay-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Background animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x"></div>

        {/* Ondas animadas */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="rgba(255,255,255,0.1)"
              className="animate-wave"
            ></path>
          </svg>
        </div>

        {/* Partículas flutuantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full animate-float animation-delay-0"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-white/30 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-float animation-delay-3000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6 animate-fade-in-up transform transition-all duration-500 hover:scale-105 animate-text-shimmer">
            Pronto para criar memórias incríveis?
          </h3>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-300 transform transition-all duration-500 hover:opacity-100">
            Entre em contato conosco e vamos planejar juntos o seu ensaio
            fotográfico dos sonhos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <a
              href="https://wa.me/5562982749331?text=Olá!%20Quero%20agendar%20um%20ensaio%20fotográfico."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl font-bold text-lg relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full"></span>
              <span className="text-2xl animate-bounce relative z-10">🚀</span>
              <span className="relative z-10">Vamos começar!</span>
            </a>
            <a
              href="tel:+5562982749331"
              className="group inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-center"></span>
              <span className="relative z-10 transition-transform duration-300 group-hover:animate-pulse">
                📞
              </span>
              <span className="relative z-10">Ligar agora</span>
            </a>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
