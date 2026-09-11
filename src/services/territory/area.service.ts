import { http } from "@/lib/api/client";
import {
  AreaFilterParams,
  AreaResponse,
  CreateAreaRequest,
  UpdateAreaRequest,
  PaginatedResponse,
  RestaurantTableResponse,
  ApiResponse,
} from "@/types/api";

export const areaService = {
  getAll(params?: AreaFilterParams) {
    return http.get<PaginatedResponse<AreaResponse>>("/api/Areas", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<AreaResponse>(`/api/Areas/${id}`);
  },

  create(data: CreateAreaRequest) {
    return http.post<AreaResponse>("/api/Areas", data);
  },

  update(id: string, data: UpdateAreaRequest) {
    return http.put<AreaResponse>(`/api/Areas/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/Areas/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/Areas/${id}/restore`);
  },

  getTables(id: string) {
    return http.get<RestaurantTableResponse[]>(`/api/Areas/${id}/tables`);
  },
};
