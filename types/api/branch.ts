import { SortDirection, SortField } from "./common";
import { AreaResponse } from "./area";

export interface BranchFilterParams {
  Keyword?: string;
  SortField?: SortField;
  Direction?: SortDirection;
  Page?: number;
  PageSize?: number;
}

export interface BranchStockItem {
  id: string;
  branchId: string;
  itemId: string;
  itemName?: string;
  itemType?: "Product" | "Ingredient";
  quantity: number;
  unitName?: string;
  lastUpdated?: string;
}

export interface BranchResponse {
  id: string;
  code?: string;
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  areas?: AreaResponse[];
  stockList?: BranchStockItem[];
}
