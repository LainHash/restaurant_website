export type SortDirection = "Asc" | "Desc";

export type SortField = "CreatedAt" | "Name" | "Price" | "Capacity";

export interface PaginationQuery {
  Page?: number;
  PageSize?: number;
  Keyword?: string;
  SortField?: SortField;
  Direction?: SortDirection;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalItems: number;
  indexPage: number;
  pageSize: number;
  totalPages?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

export interface ApiResponse<T = unknown> {
  isSuccess?: boolean;
  message?: string;
  data?: T;
  errors?: string[];
}
