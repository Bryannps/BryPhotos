import { useState, useEffect } from "react";
import AppLayout from "../AppLayout";
import { useAuth } from "../contexts/AuthContext";
import { useApp } from "../contexts/AppContext";
import { folderService, photoService } from "../services/api";

export default function Gallery() {
  const { isAuthenticated } = useAuth();
  const { withLoading, showError } = useApp();
  
  // Estados para dados reais do backend
  const [folders, setFolders] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);

  // Carregar pastas do backend
  useEffect(() => {
    if (isAuthenticated) {
      loadFolders();
    }
  }, [isAuthenticated]);

  const loadFolders = async () => {
    try {
      console.log('Gallery: Carregando folders...');
      const data = await withLoading(() => folderService.getFolders());
      console.log('Gallery: Dados recebidos de folderService.getFolders():', data);
      console.log('Gallery: Tipo de dados:', typeof data, 'É array?', Array.isArray(data));
      
      // Verificar se os dados estão encapsulados na ResponseInterceptor
      const folders = data?.data || data;
      console.log('Gallery: Folders extraídos:', folders);
      console.log('Gallery: Folders é array?', Array.isArray(folders));
      
      setFolders(Array.isArray(folders) ? folders : []);
    } catch (error) {
      console.error('Gallery: Erro ao carregar pastas:', error);
      showError('Erro ao carregar pastas: ' + error.message);
      setFolders([]); // Garantir que folders seja sempre um array
    }
  };

  const loadPhotos = async (folderId = null) => {
    try {
      console.log('Gallery: Carregando fotos para folderId:', folderId);
      const data = await withLoading(() => photoService.getPhotos(folderId));
      console.log('Gallery: Dados recebidos de photoService.getPhotos():', data);
      
      // Verificar se os dados estão encapsulados na ResponseInterceptor
      const photos = data?.data || data;
      console.log('Gallery: Photos extraídos:', photos);
      console.log('Gallery: Photos é array?', Array.isArray(photos));
      
      setPhotos(Array.isArray(photos) ? photos : []);
    } catch (error) {
      console.error('Gallery: Erro ao carregar fotos:', error);
      showError('Erro ao carregar fotos: ' + error.message);
      setPhotos([]); // Garantir que photos seja sempre um array
    }
  };

  // Função para selecionar uma pasta
  function handleSelectFolder(folder) {
    setSelectedFolder(folder);
    loadPhotos(folder.id);
  };

  // Função para voltar à tela de seleção
  function handleBack() {
    setSelectedFolder(null);
    setPhotos([]);
  };

  return (
    <AppLayout fullWidth={true}>
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
                  {!Array.isArray(folders) || folders.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                      <div className="text-6xl mb-4">📁</div>
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">
                        Nenhuma pasta encontrada
                      </h3>
                      <p className="text-gray-500">
                        Suas pastas de fotos aparecerão aqui quando forem criadas.
                      </p>
                    </div>
                  ) : (
                    folders.map((folder) => (
                      <div
                        key={folder.id}
                        className="group bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-6 cursor-pointer hover-lift transition-all duration-300 border border-gray-100"
                        onClick={() => handleSelectFolder(folder)}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl">📁</span>
                          <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                            {folder.photoCount || 0} fotos
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                          {folder.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {folder.description || 'Clique para visualizar as fotos'}
                        </p>
                        <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium">
                          Abrir pasta
                          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                      </div>
                    ))
                  )}
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
                    {photos.length} fotos disponíveis
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                  {selectedFolder.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {!Array.isArray(photos) || photos.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                      <div className="text-6xl mb-4">📷</div>
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">
                        Nenhuma foto encontrada
                      </h3>
                      <p className="text-gray-500">
                        Esta pasta ainda não possui fotos.
                      </p>
                    </div>
                  ) : (
                    photos.map((photo) => (
                      <div
                        key={photo.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300"
                      >
                        <div className="relative group">
                          <img
                            src={photo.thumbnailUrl || photo.imageUrl}
                            alt={photo.title || 'Foto'}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {/* Marca d'água */}
                          <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                            <div className="text-white/70 text-sm font-bold bg-black/20 px-3 py-1 rounded backdrop-blur-sm">
                              BRY Photos
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="mb-2">
                            <h4 className="font-semibold text-gray-800 text-sm">
                              {photo.title || `Foto ${photo.id}`}
                            </h4>
                            {photo.price && (
                              <p className="text-green-600 font-bold">
                                R$ {photo.price.toFixed(2)}
                              </p>
                            )}
                          </div>
                          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl hover-lift font-semibold transition-all duration-300 hover:from-green-600 hover:to-green-700">
                            💳 Comprar Esta Foto
                          </button>
                        </div>
                      </div>
                    ))
                  )}
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
    </AppLayout>
  );
}
