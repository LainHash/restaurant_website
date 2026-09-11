import { http } from "@/lib/api/client";
import {
  CreateRecipeRequest,
  UpdateRecipeRequest,
  AddRecipeIngredientRequest,
  RecipeResponse,
  GetAllRecipesQuery,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const recipeService = {
  getAll(params?: GetAllRecipesQuery) {
    return http.get<PaginatedResponse<RecipeResponse>>("/api/Recipes", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<ApiResponse<RecipeResponse>>(`/api/Recipes/${id}`);
  },

  create(data: CreateRecipeRequest) {
    return http.post<ApiResponse<RecipeResponse>>("/api/Recipes", data);
  },

  update(id: string, data: UpdateRecipeRequest) {
    return http.put<ApiResponse<RecipeResponse>>(`/api/Recipes/${id}`, data);
  },

  updateIngredients(id: string, ingredients: AddRecipeIngredientRequest[]) {
    return http.patch<ApiResponse>(`/api/Recipes/${id}/ingredients`, ingredients);
  },
};
