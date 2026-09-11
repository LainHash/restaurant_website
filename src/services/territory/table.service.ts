import { http } from "@/lib/api/client";
import {
  CreateRestaurantTableRequest,
  UpdateRestaurantTableRequest,
  RestaurantTableResponse,
  TableFilterParams,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const tableService = {
  getAll(params?: TableFilterParams) {
    return http.get<PaginatedResponse<RestaurantTableResponse>>(
      "/api/RestaurantTables",
      params as Record<string, unknown>
    );
  },

  getById(id: string) {
    return http.get<ApiResponse<RestaurantTableResponse>>(`/api/RestaurantTables/${id}`);
  },

  create(data: CreateRestaurantTableRequest) {
    return http.post<ApiResponse<RestaurantTableResponse>>("/api/RestaurantTables", data);
  },

  update(id: string, data: UpdateRestaurantTableRequest) {
    return http.put<ApiResponse<RestaurantTableResponse>>(`/api/RestaurantTables/${id}`, data);
  },
};
