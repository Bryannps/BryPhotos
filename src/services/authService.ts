import api from "./api";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export const authService = {
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post("/auth/login", data);
    // Extrair dados da resposta do backend que vem em response.data.data
    const { token, user } = response.data.data;
    return {
      access_token: token,
      user,
    };
  },

  async register(data: RegisterRequest): Promise<AuthResponse> {
    const response = await api.post("/auth/register", data);
    // Extrair dados da resposta do backend que vem em response.data.data
    const { token, user } = response.data.data;
    return {
      access_token: token,
      user,
    };
  },

  async me(): Promise<User> {
    const response = await api.get("/users/profile");
    return response.data.data;
  },
};
