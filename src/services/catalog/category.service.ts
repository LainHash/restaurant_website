import { http } from "@/lib/api/client";
import {
  CategoryFilterParams,
  CreateProductCategoryRequest,
  UpdateProductCategoryRequest,
  ProductCategoryResponse,
  CreateIngredientCategoryRequest,
  UpdateIngredientCategoryRequest,
  IngredientCategoryResponse,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const productCategoryService = {
  getAll(params?: CategoryFilterParams) {
    return http.get<PaginatedResponse<ProductCategoryResponse>>(
      "/api/ProductCategories",
      params as Record<string, unknown>
    );
  },

  getById(id: string) {
    return http.get<ApiResponse<ProductCategoryResponse>>(`/api/ProductCategories/${id}`);
  },

  create(data: CreateProductCategoryRequest) {
    return http.post<ApiResponse<ProductCategoryResponse>>("/api/ProductCategories", data);
  },

  update(id: string, data: UpdateProductCategoryRequest) {
    return http.put<ApiResponse<ProductCategoryResponse>>(`/api/ProductCategories/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/ProductCategories/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/ProductCategories/${id}/restore`);
  },
};

export const ingredientCategoryService = {
  getAll(params?: CategoryFilterParams) {
    return http.get<PaginatedResponse<IngredientCategoryResponse>>(
      "/api/IngredientCategories",
      params as Record<string, unknown>
    );
  },

  getById(id: string) {
    return http.get<ApiResponse<IngredientCategoryResponse>>(`/api/IngredientCategories/${id}`);
  },

  getByName(name: string) {
    return http.get<ApiResponse<IngredientCategoryResponse>>(`/api/IngredientCategories/by-name/${encodeURIComponent(name)}`);
  },

  create(data: CreateIngredientCategoryRequest) {
    return http.post<ApiResponse<IngredientCategoryResponse>>("/api/IngredientCategories", data);
  },

  update(id: string, data: UpdateIngredientCategoryRequest) {
    return http.put<ApiResponse<IngredientCategoryResponse>>(`/api/IngredientCategories/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/IngredientCategories/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/IngredientCategories/${id}/restore`);
  },
};
