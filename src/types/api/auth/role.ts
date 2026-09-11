export interface CreateRoleRequest {
  name?: string | null;
  description?: string | null;
}

export interface UpdateRoleRequest {
  name?: string | null;
  description?: string | null;
}

export interface GetAllRolesQuery {
  keyword?: string;
  page?: number;
  pageSize?: number;
}

export interface RoleResponse {
  id: string;
  name?: string;
  description?: string;
  isDeleted?: boolean;
  userCount?: number;
  permissions?: string[];
  createdAt?: string;
  updatedAt?: string;
}
