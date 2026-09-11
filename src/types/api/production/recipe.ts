export interface AddRecipeIngredientRequest {
  ingredientId?: string;
  quantity?: number;
  unitId?: string;
}

export interface CreateRecipeRequest {
  productId?: string;
  instructions?: string | null;
}

export interface UpdateRecipeRequest {
  productId?: string;
  instructions?: string | null;
}

export interface GetAllRecipesQuery {
  productId?: string;
  keyword?: string;
  page?: number;
  pageSize?: number;
}

export interface RecipeIngredientResponse {
  ingredientId: string;
  ingredientName?: string;
  quantity: number;
  unitId?: string;
  unitName?: string;
}

export interface RecipeResponse {
  id: string;
  productId: string;
  productName?: string;
  instructions?: string;
  ingredients?: RecipeIngredientResponse[];
  createdAt?: string;
  updatedAt?: string;
}
