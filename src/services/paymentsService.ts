import api from "./api";

export interface Payment {
  id: string;
  photoId: string;
  amount: number;
  status: "pending" | "approved" | "rejected";
  mercadoPagoId?: string;
  createdAt: string;
}

export interface CreatePaymentRequest {
  photoId: string;
  price: number;
  description: string;
}

export interface PaymentResponse {
  id: string;
  init_point: string; // URL do checkout do Mercado Pago
  preference_id: string;
}

export const paymentsService = {
  async create(data: CreatePaymentRequest): Promise<PaymentResponse> {
    const response = await api.post("/payments/create", data);
    return response.data.data || response.data;
  },

  async getByPhotoId(photoId: string): Promise<Payment | null> {
    try {
      const response = await api.get(`/payments/status/${photoId}`);
      return response.data.data || response.data;
    } catch {
      // Se for erro 404, retorna null (pagamento não encontrado)
      return null;
    }
  },

  async getAll(): Promise<Payment[]> {
    const response = await api.get("/payments");
    return response.data.data || response.data;
  },
};
