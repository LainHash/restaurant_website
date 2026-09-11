import { http } from "@/lib/api/client";
import {
  CreateRoleRequest,
  UpdateRoleRequest,
  GetAllRolesQuery,
  RoleResponse,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const roleService = {
  getAll(params?: GetAllRolesQuery) {
    return http.get<PaginatedResponse<RoleResponse>>("/api/Roles", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<ApiResponse<RoleResponse>>(`/api/Roles/${id}`);
  },

  create(data: CreateRoleRequest) {
    return http.post<ApiResponse<RoleResponse>>("/api/Roles", data);
  },

  update(id: string, data: UpdateRoleRequest) {
    return http.put<ApiResponse<RoleResponse>>(`/api/Roles/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/Roles/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/Roles/${id}/restore`);
  },
};
