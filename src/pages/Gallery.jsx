import { useState } from "react";
import SharedHeader from "../components/SharedHeader";

export default function Gallery() {
  // Mock das pastas com fotos protegidas
  const folders = [
    {
      id: "1",
      name: "23/06/2024 - Ensaio João",
      photos: [
        {
          id: "p1",
          url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
        },
        {
          id: "p2",
          url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop",
        },
        {
          id: "p3",
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "2",
      name: "Evento Casamento - Aline e Pedro",
      photos: [
        {
          id: "p4",
          url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
        },
        {
          id: "p5",
          url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      id: "3",
      name: "15/05/2024 - Ensaio Família Silva",
      photos: [
        {
          id: "p6",
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
        },
        {
          id: "p7",
          url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop",
        },
        {
          id: "p8",
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        },
        {
          id: "p9",
          url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
        },
      ],
    },
  ];

  // Estado que controla qual pasta está sendo visualizada
  const [selectedFolder, setSelectedFolder] = useState(null);

  // Função para selecionar uma pasta
  function handleSelectFolder(folder) {
    setSelectedFolder(folder);
  }

  // Função para voltar à tela de seleção
  function handleBack() {
    setSelectedFolder(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SharedHeader />

      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover-lift">
            {/* Título principal */}
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📷</div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-relaxed pb-3">
                Galeria de Fotos
              </h2>
              <p className="text-gray-600">
                {selectedFolder === null
                  ? "Selecione uma pasta para ver suas fotos"
                  : `Visualizando: ${selectedFolder.name}`}
              </p>
            </div>

            {selectedFolder === null ? (
              /* Lista de Pastas */
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                  Suas Sessões Fotográficas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {folders.map((folder) => (
                    <div
                      key={folder.id}
                      className="group bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-6 cursor-pointer hover-lift transition-all duration-300 border border-gray-100"
                      onClick={() => handleSelectFolder(folder)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl">📁</span>
                        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                          {folder.photos.length} fotos
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                        {folder.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Clique para visualizar as fotos
                      </p>
                      <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium">
                        Abrir pasta
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Fotos da Pasta Selecionada */
              <div>
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
                  >
                    <span>←</span>
                    Voltar para pastas
                  </button>
                  <div className="text-sm text-gray-500">
                    {selectedFolder.photos.length} fotos disponíveis
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                  {selectedFolder.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {selectedFolder.photos.map((photo, idx) => (
                    <div
                      key={photo.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300"
                    >
                      <div className="relative group">
                        <img
                          src={photo.url}
                          alt="Foto com marca d'água"
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Marca d'água simulada */}
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                          <div className="text-white/70 text-sm font-bold bg-black/20 px-3 py-1 rounded backdrop-blur-sm">
                            BRY Photos
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl hover-lift font-semibold transition-all duration-300 hover:from-green-600 hover:to-green-700">
                          💳 Comprar Esta Foto
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Botão para comprar todas */}
                <div className="mt-8 text-center">
                  <button className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full hover-lift text-lg font-semibold transition-all duration-300">
                    <span>🛒</span>
                    Comprar Todas as Fotos ({selectedFolder.photos.length})
                    <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {/* Seção de Ajuda */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500 mb-3">
                Precisa de ajuda ou não encontrou suas fotos?
              </p>
              <a
                href="https://wa.me/5562987654321?text=Olá!%20Preciso%20de%20ajuda%20com%20a%20galeria%20de%20fotos."
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
