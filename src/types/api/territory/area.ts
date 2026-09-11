import { RestaurantTableResponse } from "./table";
import { SortDirection, SortField } from "../common";

export interface CreateAreaRequest {
  branchId?: string;
  name?: string | null;
  description?: string | null;
  displayOrder?: number;
  isActive?: boolean;
}

export interface UpdateAreaRequest {
  branchId?: string;
  name?: string | null;
  description?: string | null;
  displayOrder?: number;
  isActive?: boolean;
}

export interface AreaResponse {
  id: string;
  branchId?: string;
  branchName?: string;
  name?: string;
  description?: string;
  displayOrder?: number;
  isActive?: boolean;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  tables?: RestaurantTableResponse[];
}

export interface AreaFilterParams {
  BranchCode?: string;
  Keyword?: string;
  SortField?: SortField;
  Direction?: SortDirection;
  Page?: number;
  PageSize?: number;
}
