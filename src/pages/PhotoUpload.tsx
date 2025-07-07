import { useState, useRef, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { photosService } from "../services/photosService";
import { foldersService } from "../services/foldersService";
import type { Folder } from "../services/foldersService";

interface UploadProgressProps {
  filename: string;
  progress: number;
  status: "uploading" | "success" | "error";
}

function UploadProgress({ filename, progress, status }: UploadProgressProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 truncate">
          {filename}
        </span>
        {status === "success" && <span className="text-green-500">✓</span>}
        {status === "error" && <span className="text-red-500">✗</span>}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            status === "success"
              ? "bg-green-500"
              : status === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function PhotoUpload() {
  const { user } = useAuth();
  const [folders, setFolders] = useState<Folder[]>([]);
  const [selectedFolderId, setSelectedFolderId] = useState<string>("");
  const [defaultPrice, setDefaultPrice] = useState<number>(25.0);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<UploadProgressProps[]>(
    []
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Carregar pastas ao montar o componente
  useEffect(() => {
    loadFolders();
  }, []);

  const loadFolders = async () => {
    try {
      const data = await foldersService.getAll();
      setFolders(data);
    } catch (error) {
      console.error("Erro ao carregar pastas:", error);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const imageFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    setFiles((prev) => [...prev, ...imageFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (!selectedFolderId || files.length === 0) {
      alert("Selecione uma pasta e pelo menos uma foto");
      return;
    }

    setUploading(true);
    setUploadProgress([]);

    const progressList: UploadProgressProps[] = files.map((file) => ({
      filename: file.name,
      progress: 0,
      status: "uploading" as const,
    }));
    setUploadProgress(progressList);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      try {
        // Simular progresso de upload
        for (let progress = 0; progress <= 100; progress += 20) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          setUploadProgress((prev) =>
            prev.map((item, index) =>
              index === i ? { ...item, progress } : item
            )
          );
        }

        await photosService.upload({
          file,
          filename: file.name,
          price: defaultPrice,
          folderId: selectedFolderId,
        });

        setUploadProgress((prev) =>
          prev.map((item, index) =>
            index === i
              ? { ...item, status: "success" as const, progress: 100 }
              : item
          )
        );
      } catch (error) {
        console.error(`Erro ao fazer upload da foto ${file.name}:`, error);
        setUploadProgress((prev) =>
          prev.map((item, index) =>
            index === i ? { ...item, status: "error" as const } : item
          )
        );
      }
    }

    // Limpar formulário após alguns segundos
    setTimeout(() => {
      setFiles([]);
      setUploadProgress([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }, 3000);

    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-blue-700">BRY Photos</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Bem-vindo, {user?.name}</span>
            <a
              href="/gallery"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Voltar à Galeria
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Upload de Fotos
            </h2>

            {/* Seleção de pasta */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Selecionar Pasta
              </label>
              <select
                value={selectedFolderId}
                onChange={(e) => setSelectedFolderId(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                disabled={uploading}
              >
                <option value="">Escolha uma pasta...</option>
                {folders.map((folder) => (
                  <option key={folder.id} value={folder.id}>
                    {folder.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Preço padrão */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preço padrão por foto (R$)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={defaultPrice}
                onChange={(e) =>
                  setDefaultPrice(parseFloat(e.target.value) || 0)
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                disabled={uploading}
                placeholder="25.00"
              />
            </div>

            {/* Seleção de arquivos */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Selecionar Fotos
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  disabled={uploading}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Escolher Fotos
                </button>
                <p className="text-gray-500 mt-2 text-sm">
                  Ou arraste e solte suas fotos aqui
                </p>
              </div>
            </div>

            {/* Lista de arquivos selecionados */}
            {files.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Fotos Selecionadas ({files.length})
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                    >
                      <span className="text-sm text-gray-700 truncate">
                        {file.name}
                      </span>
                      <span className="text-xs text-gray-500 mr-2">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                      <button
                        onClick={() => removeFile(index)}
                        disabled={uploading}
                        className="text-red-500 hover:text-red-700 disabled:opacity-50"
                      >
                        ✗
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Progresso do upload */}
            {uploadProgress.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Progresso do Upload
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {uploadProgress.map((progress, index) => (
                    <UploadProgress key={index} {...progress} />
                  ))}
                </div>
              </div>
            )}

            {/* Botão de upload */}
            <button
              onClick={handleUpload}
              disabled={uploading || !selectedFolderId || files.length === 0}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading
                ? "Fazendo Upload..."
                : `Fazer Upload (${files.length} fotos)`}
            </button>

            {/* Informações */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">
                Informações sobre o Upload:
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Formatos aceitos: JPG, PNG, GIF, WebP</li>
                <li>• Tamanho máximo: 10MB por foto</li>
                <li>
                  • As fotos serão automaticamente processadas com marca d'água
                </li>
                <li>• Clientes poderão comprar as versões originais</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
