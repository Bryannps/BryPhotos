import api from "./api";

export interface Folder {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  userId: string;
  _count?: {
    photos: number;
  };
}

export interface CreateFolderRequest {
  name: string;
  description?: string;
}

export const foldersService = {
  async getAll(): Promise<Folder[]> {
    const response = await api.get("/folders");
    return response.data.data || response.data;
  },

  async getById(id: string): Promise<Folder> {
    const response = await api.get(`/folders/${id}`);
    return response.data.data || response.data;
  },

  async create(data: CreateFolderRequest): Promise<Folder> {
    const response = await api.post("/folders", data);
    return response.data.data || response.data;
  },

  async update(
    id: string,
    data: Partial<CreateFolderRequest>
  ): Promise<Folder> {
    const response = await api.patch(`/folders/${id}`, data);
    return response.data.data || response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/folders/${id}`);
  },
};
