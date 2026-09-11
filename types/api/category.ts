import { SortDirection, SortField } from "./common";

export interface CreateProductCategoryRequest {
  name?: string | null;
  description?: string | null;
}

export interface UpdateProductCategoryRequest {
  name?: string | null;
  description?: string | null;
}

export interface ProductCategoryResponse {
  id: string;
  name?: string;
  description?: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateIngredientCategoryRequest {
  name?: string | null;
  description?: string | null;
}

export interface UpdateIngredientCategoryRequest {
  name?: string | null;
  description?: string | null;
}

export interface IngredientCategoryResponse {
  id: string;
  name?: string;
  description?: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CategoryFilterParams {
  Keyword?: string;
  SortField?: SortField;
  Direction?: SortDirection;
  Page?: number;
  PageSize?: number;
}
