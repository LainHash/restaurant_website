import { http } from "@/lib/api/client";
import {
  CreateRecipeRequest,
  UpdateRecipeRequest,
  AddRecipeIngredientRequest,
  RecipeResponse,
  GetAllRecipesQuery,
  ApiResponse,
} from "@/types/api";

export const recipeService = {
  getAll(params?: GetAllRecipesQuery) {
    return http.get<RecipeResponse[]>("/api/Recipes", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<RecipeResponse>(`/api/Recipes/${id}`);
  },

  create(data: CreateRecipeRequest) {
    return http.post<RecipeResponse>("/api/Recipes", data);
  },

  update(id: string, data: UpdateRecipeRequest) {
    return http.put<RecipeResponse>(`/api/Recipes/${id}`, data);
  },

  updateIngredients(id: string, ingredients: AddRecipeIngredientRequest[]) {
    return http.patch<ApiResponse>(`/api/Recipes/${id}/ingredients`, ingredients);
  },
};
