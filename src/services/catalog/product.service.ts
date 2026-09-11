import { http } from "@/lib/api/client";
import {
  ProductFilterParams,
  CreateProductRequest,
  UpdateProductRequest,
  UpdateProductStockQuantityRequest,
  ProductResponse,
  ProductImage,
  ProductStockResponse,
  RecipeResponse,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const productService = {
  getAll(params?: ProductFilterParams) {
    return http.get<PaginatedResponse<ProductResponse>>("/api/Products", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<ApiResponse<ProductResponse>>(`/api/Products/${id}`);
  },

  create(data: CreateProductRequest) {
    return http.post<ApiResponse<ProductResponse>>("/api/Products", data);
  },

  update(id: string, data: UpdateProductRequest) {
    return http.put<ApiResponse<ProductResponse>>(`/api/Products/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/Products/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/Products/${id}/restore`);
  },

  getStockList(id: string) {
    return http.get<ApiResponse<ProductStockResponse[]>>(`/api/Products/${id}/stock-list`);
  },

  updateBranchQuantity(productId: string, branchId: string, data: UpdateProductStockQuantityRequest) {
    return http.patch<ApiResponse>(`/api/Products/${productId}/branch/${branchId}/update-quantity`, data);
  },

  getImages(id: string) {
    return http.get<ApiResponse<ProductImage[]>>(`/api/Products/${id}/images`);
  },

  uploadImage(id: string, file: File, altText?: string, isPrimary: boolean = false) {
    const formData = new FormData();
    formData.append("file", file);
    if (altText) formData.append("AltText", altText);
    formData.append("IsPrimary", String(isPrimary));
    return http.upload<ApiResponse<ProductImage>>(`/api/Products/${id}/images`, formData);
  },

  getRecipeList(id: string) {
    return http.get<ApiResponse<RecipeResponse[]>>(`/api/Products/${id}/recipe-list`);
  },
};
