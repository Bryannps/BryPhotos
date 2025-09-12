import axios from 'axios';

// Configuração base da API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Criação da instância do axios
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token automaticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    console.log('API Interceptor: Token encontrado no localStorage:', token ? token.substring(0, 50) + '...' : 'NENHUM');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('API Interceptor: Header Authorization adicionado:', `Bearer ${token.substring(0, 50)}...`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar respostas e erros
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      // Erro do servidor (status 4xx, 5xx)
      const message = error.response.data?.message || 'Erro do servidor';
      
      // Se token expirou e não estamos na página de login, limpar storage e redirecionar
      if (error.response.status === 401 && window.location.pathname !== '/login') {
        console.log('API Interceptor: Token inválido, deveria redirecionar');
        localStorage.removeItem('access_token');
        // window.location.href = '/login?redirected=true'; // COMENTADO para debug
      }
      
      throw new Error(message);
    } else if (error.request) {
      // Erro de rede
      throw new Error('Erro de conexão com o servidor');
    } else {
      // Outro tipo de erro
      throw new Error('Erro inesperado');
    }
  }
);

// Serviços de autenticação
export const authService = {
  async login(email, password) {
    console.log('API Service: Enviando requisição de login para:', email);
    try {
      const response = await api.post('/auth/login', { email, password });
      console.log('API Service: Resposta recebida:', response);
      return response;
    } catch (error) {
      console.error('API Service: Erro na requisição de login:', error);
      throw error;
    }
  },

  async register(userData) {
    const response = await api.post('/auth/register', userData);
    return response;
  },

  async profile() {
    console.log('API Service: Fazendo requisição para /users/profile');
    try {
      const response = await api.get('/users/profile');
      console.log('API Service: Resposta do perfil:', response);
      return response;
    } catch (error) {
      console.error('API Service: Erro na requisição do perfil:', error);
      throw error;
    }
  }
};

// Serviços de usuários
export const userService = {
  async getUsers() {
    const response = await api.get('/users');
    return response;
  },

  async getUserById(id) {
    const response = await api.get(`/users/${id}`);
    return response;
  },

  async updateUser(id, userData) {
    const response = await api.put(`/users/${id}`, userData);
    return response;
  },

  async deleteUser(id) {
    const response = await api.delete(`/users/${id}`);
    return response;
  }
};

// Serviços de pastas
export const folderService = {
  async getFolders() {
    const response = await api.get('/folders');
    return response;
  },

  async getFolderById(id) {
    const response = await api.get(`/folders/${id}`);
    return response;
  },

  async createFolder(folderData) {
    const response = await api.post('/folders', folderData);
    return response;
  },

  async updateFolder(id, folderData) {
    const response = await api.put(`/folders/${id}`, folderData);
    return response;
  },

  async deleteFolder(id) {
    const response = await api.delete(`/folders/${id}`);
    return response;
  }
};

// Serviços de fotos
export const photoService = {
  async getPhotos(folderId = null, page = 1, limit = 10) {
    const params = { page, limit };
    if (folderId) params.folderId = folderId;
    
    const response = await api.get('/photos', { params });
    return response;
  },

  async getPhotoById(id) {
    const response = await api.get(`/photos/${id}`);
    return response;
  },

  async uploadPhoto(formData) {
    const response = await api.post('/photos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },

  async updatePhoto(id, photoData) {
    const response = await api.put(`/photos/${id}`, photoData);
    return response;
  },

  async deletePhoto(id) {
    const response = await api.delete(`/photos/${id}`);
    return response;
  }
};

// Serviços de pagamento
export const paymentService = {
  async createPayment(paymentData) {
    const response = await api.post('/payments', paymentData);
    return response;
  },

  async getPayments() {
    const response = await api.get('/payments');
    return response;
  },

  async getPaymentById(id) {
    const response = await api.get(`/payments/${id}`);
    return response;
  }
};

// Funções de compatibilidade com o código existente
export async function loginUser(email, password) {
  return authService.login(email, password);
}

export async function fetchFolders(token) {
  return folderService.getFolders();
}

export async function fetchPhotos(folderId, token) {
  return photoService.getPhotos(folderId);
}

// Exportar instância do axios para uso direto se necessário
export default api;
