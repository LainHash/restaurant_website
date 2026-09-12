import { SortDirection, SortField } from "../common";

export type InventoryType = "MadeToOrder" | "StockTracked";

export interface CreateProductRequest {
  name?: string | null;
  description?: string | null;
  inventoryType?: InventoryType;
  brandId?: string | null;
  categoryId?: string;
  unitId?: string;
  unitPrice?: number;
}

export interface UpdateProductRequest {
  name?: string | null;
  description?: string | null;
  inventoryType?: InventoryType;
  brandId?: string | null;
  categoryId?: string;
  unitId?: string;
  unitPrice?: number;
}

export interface UpdateProductStockQuantityRequest {
  amount?: number;
}

export interface ProductImage {
  id: string;
  productId: string;
  url: string;
  altText?: string | null;
  isPrimary: boolean;
}

export interface ProductResponse {
  id: string;
  name?: string;
  description?: string;
  inventoryType?: InventoryType;
  brandId?: string | null;
  brandName?: string | null;
  categoryId?: string;
  categoryName?: string;
  unitId?: string;
  unitName?: string;
  unitPrice?: number;
  isDeleted?: boolean;
  images?: ProductImage[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductStockResponse {
  productId: string;
  branchId: string;
  branchName?: string;
  quantity: number;
}

export interface ProductFilterParams {
  CategoryId?: string;
  BrandId?: string;
  Keyword?: string;
  SortField?: SortField;
  SortDirection?: SortDirection;
  Page?: number;
  PageSize?: number;
}
