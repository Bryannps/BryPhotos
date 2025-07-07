import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { foldersService } from "../services/foldersService";
import { photosService } from "../services/photosService";
import { paymentsService } from "../services/paymentsService";
import type { Folder } from "../services/foldersService";
import type { Photo } from "../services/photosService";

interface PhotoCardProps {
  photo: Photo;
  onPurchase: (photoId: string) => void;
}

function PhotoCard({ photo, onPurchase }: PhotoCardProps) {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      await onPurchase(photo.id);
    } finally {
      setLoading(false);
    }
  };

  // Usa a URL original se paga, senão usa a URL com marca d'água
  const imageUrl = photo.isPaid ? photo.originalUrl : photo.markedUrl;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt={photo.filename}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {!photo.isPaid && (
          <div className="absolute top-2 right-2">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Com marca d'água
            </span>
          </div>
        )}

        {photo.isPaid && (
          <div className="absolute top-2 right-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              ✓ Liberada
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{photo.filename}</h3>

        {!photo.isPaid ? (
          <div className="space-y-2">
            <p className="text-lg font-bold text-green-600">
              R$ {photo.price.toFixed(2)}
            </p>
            <button
              onClick={handlePurchase}
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processando..." : "Comprar Foto"}
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-green-600 font-semibold">Foto liberada!</p>
            <a
              href={photo.originalUrl}
              download={photo.filename}
              className="block w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-all duration-300"
            >
              Download HD
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

interface FolderCardProps {
  folder: Folder;
  onSelect: (folderId: string) => void;
}

function FolderCard({ folder, onSelect }: FolderCardProps) {
  return (
    <div
      onClick={() => onSelect(folder.id)}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            {folder.name}
          </h3>
          <p className="text-gray-500 mt-1">
            {folder._count?.photos || 0} foto(s)
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Criada em {new Date(folder.createdAt).toLocaleDateString("pt-BR")}
          </p>
        </div>
        <div className="text-3xl text-blue-500 group-hover:scale-110 transition-transform">
          📁
        </div>
      </div>
    </div>
  );
}

function CreateFolderForm({ onSuccess }: { onSuccess: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!folderName.trim()) return;

    setLoading(true);
    setError("");

    try {
      await foldersService.create({ name: folderName.trim() });
      setFolderName("");
      setIsOpen(false);
      onSuccess();
    } catch (error) {
      console.error("Erro ao criar pasta:", error);
      setError("Erro ao criar pasta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
      >
        + Nova Pasta
      </button>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Criar Nova Pasta</h3>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="Nome da pasta"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
          required
          disabled={loading}
        />

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading || !folderName.trim()}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Criando..." : "Criar"}
          </button>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              setFolderName("");
              setError("");
            }}
            disabled={loading}
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all duration-300"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Gallery() {
  const { user, logout } = useAuth();
  const [folders, setFolders] = useState<Folder[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [photosLoading, setPhotosLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Carregar pastas do usuário
  useEffect(() => {
    loadFolders();
  }, []);

  const loadFolders = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await foldersService.getAll();
      setFolders(data);
    } catch (error) {
      console.error("Erro ao carregar pastas:", error);
      setError("Erro ao carregar pastas. Tente recarregar a página.");
    } finally {
      setLoading(false);
    }
  };

  const loadPhotos = async (folderId: string) => {
    try {
      setPhotosLoading(true);
      const data = await photosService.getAll({ folderId });
      setPhotos(data);
      setSelectedFolder(folderId);
    } catch (error) {
      console.error("Erro ao carregar fotos:", error);
    } finally {
      setPhotosLoading(false);
    }
  };

  const handlePurchase = async (photoId: string) => {
    try {
      const photo = photos.find((p) => p.id === photoId);
      if (!photo) return;

      const response = await paymentsService.create({
        photoId,
        price: photo.price,
        description: `Compra da foto: ${photo.filename}`,
      });
      // Redireciona para o checkout do Mercado Pago
      window.location.href = response.init_point;
    } catch (error) {
      console.error("Erro ao criar pagamento:", error);
      alert("Erro ao processar pagamento. Tente novamente.");
    }
  };

  const goBackToFolders = () => {
    setSelectedFolder(null);
    setPhotos([]);
  };

  const selectedFolderData = folders.find((f) => f.id === selectedFolder);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-blue-700">
              BRY Photos
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Bem-vindo, {user?.name}</span>
              <button
                onClick={logout}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-12 flex justify-center items-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-blue-700">BRY Photos</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Bem-vindo, {user?.name}</span>
            <button
              onClick={logout}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            <div className="flex items-center">
              <span className="text-red-500 mr-3">⚠️</span>
              <div>
                <p className="font-medium">{error}</p>
                <button
                  onClick={loadFolders}
                  className="text-red-600 underline hover:text-red-800 text-sm mt-1"
                >
                  Tentar novamente
                </button>
              </div>
            </div>
          </div>
        )}

        {!selectedFolder ? (
          // Lista de pastas
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Suas Pastas</h2>
              <CreateFolderForm onSuccess={loadFolders} />
            </div>

            {folders.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-300 mb-4">📁</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Nenhuma pasta encontrada
                </h3>
                <p className="text-gray-500">
                  Crie sua primeira pasta para organizar suas fotos
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {folders.map((folder) => (
                  <FolderCard
                    key={folder.id}
                    folder={folder}
                    onSelect={loadPhotos}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Lista de fotos da pasta selecionada
          <div>
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={goBackToFolders}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                ← Voltar às pastas
              </button>
              <h2 className="text-3xl font-bold text-gray-800">
                {selectedFolderData?.name}
              </h2>
            </div>

            {photosLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Carregando fotos...</p>
              </div>
            ) : photos.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-300 mb-4">📷</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Nenhuma foto encontrada
                </h3>
                <p className="text-gray-500">
                  Esta pasta ainda não possui fotos
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {photos.map((photo) => (
                  <PhotoCard
                    key={photo.id}
                    photo={photo}
                    onPurchase={handlePurchase}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
