import api from "./api";

export interface Photo {
  id: string;
  filename: string;
  originalUrl: string;
  markedUrl: string;
  isPaid: boolean;
  price: number;
  folderId: string;
  createdAt: string;
}

export interface PhotosQueryParams {
  folderId?: string;
  page?: number;
  limit?: number;
}

export interface UploadPhotoRequest {
  file: File;
  filename: string;
  price: number;
  folderId: string;
}

export const photosService = {
  async getAll(params: PhotosQueryParams = {}): Promise<Photo[]> {
    const response = await api.get("/photos", { params });
    return response.data.data || response.data;
  },

  async getById(id: string): Promise<Photo> {
    const response = await api.get(`/photos/${id}`);
    return response.data.data || response.data;
  },

  async upload(data: UploadPhotoRequest): Promise<Photo> {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("filename", data.filename);
    formData.append("price", data.price.toString());
    formData.append("folderId", data.folderId);

    const response = await api.post("/photos", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data || response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/photos/${id}`);
  },
};
