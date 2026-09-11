import { SortDirection, SortField } from "../common";

export type DiscountType = "FixedAmount" | "Percentage";

export interface CreateDiscountRequest {
  name?: string | null;
  type?: DiscountType;
  value?: number;
  maximumDiscountAmount?: number | null;
  minimumOrderAmount?: number | null;
  totalQuantity?: number;
  startAt?: string; // ISO date-time
  endAt?: string;   // ISO date-time
}

export interface UpdateDiscountRequest {
  name?: string | null;
  type?: DiscountType;
  value?: number;
  maximumDiscountAmount?: number | null;
  minimumOrderAmount?: number | null;
  totalQuantity?: number;
  startAt?: string; // ISO date-time
  endAt?: string;   // ISO date-time
}

export interface DiscountResponse {
  id: string;
  code?: string;
  name?: string;
  type: DiscountType;
  value: number;
  maximumDiscountAmount?: number | null;
  minimumOrderAmount?: number | null;
  totalQuantity: number;
  usedQuantity?: number;
  remainingQuantity?: number;
  startAt: string;
  endAt: string;
  isActive?: boolean;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface DiscountFilterParams {
  Keyword?: string;
  SortField?: SortField;
  Direction?: SortDirection;
  Page?: number;
  PageSize?: number;
}
