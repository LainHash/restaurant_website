import { http } from "@/lib/api/client";
import {
  DiscountFilterParams,
  CreateDiscountRequest,
  UpdateDiscountRequest,
  DiscountResponse,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const discountService = {
  getAll(params?: DiscountFilterParams) {
    return http.get<PaginatedResponse<DiscountResponse>>(
      "/api/Discounts",
      params as Record<string, unknown>
    );
  },

  create(data: CreateDiscountRequest) {
    return http.post<ApiResponse<DiscountResponse>>("/api/Discounts", data);
  },

  update(id: string, data: UpdateDiscountRequest) {
    return http.put<ApiResponse<DiscountResponse>>(`/api/Discounts/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/Discounts/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/Discounts/${id}/restore`);
  },
};
