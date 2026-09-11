export interface CreatePositionRequest {
  name?: string | null;
  description?: string | null;
  departmentId?: string;
}

export interface UpdatePositionRequest {
  name?: string | null;
  description?: string | null;
  departmentId?: string;
}

export interface GetAllPositionsQuery {
  departmentId?: string;
  keyword?: string;
  page?: number;
  pageSize?: number;
}

export interface PositionResponse {
  id: string;
  name?: string;
  description?: string;
  departmentId: string;
  departmentName?: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
