import { http } from "@/lib/api/client";
import {
  IngredientFilterParams,
  CreateIngredientRequest,
  UpdateIngredientRequest,
  UpdateIngredientStockQuantityRequest,
  IngredientResponse,
  IngredientStockResponse,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const ingredientService = {
  getAll(params?: IngredientFilterParams) {
    return http.get<PaginatedResponse<IngredientResponse>>(
      "/api/Ingredients",
      params as Record<string, unknown>
    );
  },

  getById(id: string) {
    return http.get<ApiResponse<IngredientResponse>>(`/api/Ingredients/${id}`);
  },

  create(data: CreateIngredientRequest) {
    return http.post<ApiResponse<IngredientResponse>>("/api/Ingredients", data);
  },

  update(id: string, data: UpdateIngredientRequest) {
    return http.put<ApiResponse<IngredientResponse>>(`/api/Ingredients/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/Ingredients/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/Ingredients/${id}/restore`);
  },

  getStockList(id: string) {
    return http.get<ApiResponse<IngredientStockResponse[]>>(`/api/Ingredients/${id}/stock-list`);
  },

  updateBranchQuantity(ingredientId: string, branchId: string, data: UpdateIngredientStockQuantityRequest) {
    return http.patch<ApiResponse>(
      `/api/Ingredients/${ingredientId}/branch/${branchId}/update-quantity`,
      data
    );
  },
};
