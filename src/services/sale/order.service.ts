import { http } from "@/lib/api/client";
import {
  CreateOrderRequest,
  OrderFilterParams,
  OrderResponse,
  InvoiceResponse,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const orderService = {
  getAll(params?: OrderFilterParams) {
    return http.get<PaginatedResponse<OrderResponse>>("/api/Orders", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<ApiResponse<OrderResponse>>(`/api/Orders/${id}`);
  },

  create(data: CreateOrderRequest) {
    return http.post<ApiResponse<OrderResponse>>("/api/Orders", data);
  },

  getInvoice(id: string) {
    return http.get<ApiResponse<InvoiceResponse>>(`/api/Orders/${id}/invoice`);
  },

  // Order Details status workflow actions
  setDetailPreparing(orderDetailId: string) {
    return http.post<ApiResponse>(`/api/OrderDetails/${orderDetailId}/preparing`);
  },

  setDetailReady(orderDetailId: string) {
    return http.post<ApiResponse>(`/api/OrderDetails/${orderDetailId}/ready`);
  },

  setDetailServed(orderDetailId: string) {
    return http.post<ApiResponse>(`/api/OrderDetails/${orderDetailId}/served`);
  },

  setDetailCancelled(orderDetailId: string) {
    return http.post<ApiResponse>(`/api/OrderDetails/${orderDetailId}/cancelled`);
  },
};
