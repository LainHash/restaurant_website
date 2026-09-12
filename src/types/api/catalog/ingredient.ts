import { SortDirection, SortField } from "../common";

export interface CreateIngredientRequest {
  name?: string | null;
  description?: string | null;
  brandId?: string | null;
  categoryId?: string;
  unitId?: string;
  unitPrice?: number;
}

export interface UpdateIngredientRequest {
  name?: string | null;
  description?: string | null;
  brandId?: string | null;
  categoryId?: string;
  unitId?: string;
  unitPrice?: number;
}

export interface UpdateIngredientStockQuantityRequest {
  amount?: number;
}

export interface IngredientResponse {
  id: string;
  name?: string;
  description?: string;
  brandId?: string | null;
  brandName?: string | null;
  categoryId?: string;
  categoryName?: string;
  unitId?: string;
  unitName?: string;
  unitPrice?: number;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IngredientStockResponse {
  ingredientId: string;
  branchId: string;
  branchName?: string;
  quantity: number;
}

export interface IngredientFilterParams {
  CategoryId?: string;
  BrandId?: string;
  Keyword?: string;
  SortField?: SortField;
  SortDirection?: SortDirection;
  Page?: number;
  PageSize?: number;
}
