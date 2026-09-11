import { SortDirection, SortField } from "../common";

export interface CreateBrandRequest {
  name?: string | null;
  description?: string | null;
}

export interface UpdateBrandRequest {
  name?: string | null;
  description?: string | null;
}

export interface BrandResponse {
  id: string;
  name?: string;
  description?: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface BrandFilterParams {
  Keyword?: string;
  SortField?: SortField;
  Direction?: SortDirection;
  Page?: number;
  PageSize?: number;
}
