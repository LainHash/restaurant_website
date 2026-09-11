import { http } from "@/lib/api/client";
import {
  BrandFilterParams,
  BrandResponse,
  CreateBrandRequest,
  UpdateBrandRequest,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const brandService = {
  getAll(params?: BrandFilterParams) {
    return http.get<PaginatedResponse<BrandResponse>>("/api/Brands", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<ApiResponse<BrandResponse>>(`/api/Brands/${id}`);
  },

  create(data: CreateBrandRequest) {
    return http.post<ApiResponse<BrandResponse>>("/api/Brands", data);
  },

  update(id: string, data: UpdateBrandRequest) {
    return http.put<ApiResponse<BrandResponse>>(`/api/Brands/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/Brands/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/Brands/${id}/restore`);
  },
};
