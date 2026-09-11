export type TableShape =
  | "Square"
  | "Rectangle"
  | "Round"
  | "Long"
  | "Other";

export type TableStatus =
  | "Available"
  | "Occupied"
  | "Cleaning"
  | "Maintenance"
  | "Inactive";

export interface CreateRestaurantTableRequest {
  areaId?: string;
  tableNumber?: string | null;
  capacity?: number;
  shape?: TableShape;
  status?: TableStatus;
  positionX?: number;
  positionY?: number;
  width?: number;
  height?: number;
  rotation?: number;
}

export interface UpdateRestaurantTableRequest {
  areaId?: string;
  tableNumber?: string | null;
  capacity?: number;
  shape?: TableShape;
  status?: TableStatus;
  positionX?: number;
  positionY?: number;
  width?: number;
  height?: number;
  rotation?: number;
}

export interface RestaurantTableResponse {
  id: string;
  areaId?: string;
  areaName?: string;
  tableNumber?: string;
  capacity?: number;
  shape?: TableShape;
  status?: TableStatus;
  positionX?: number;
  positionY?: number;
  width?: number;
  height?: number;
  rotation?: number;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface TableFilterParams {
  Keyword?: string;
  SortField?: "CreatedAt" | "Name" | "Price" | "Capacity";
  Direction?: "Asc" | "Desc";
  Page?: number;
  PageSize?: number;
}
