import { SortDirection, SortField } from "../common";
import { PositionResponse } from "./position";

export interface CreateDepartmentRequest {
  name?: string | null;
  description?: string | null;
}

export interface UpdateDepartmentRequest {
  name?: string | null;
  description?: string | null;
}

export interface DepartmentResponse {
  id: string;
  name?: string;
  description?: string;
  isDeleted?: boolean;
  positions?: PositionResponse[];
  createdAt?: string;
  updatedAt?: string;
}

export interface DepartmentFilterParams {
  Keyword?: string;
  SortField?: SortField;
  Direction?: SortDirection;
  Page?: number;
  PageSize?: number;
}
