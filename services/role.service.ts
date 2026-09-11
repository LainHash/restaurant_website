import { http } from "@/lib/api/client";
import {
  CreateRoleRequest,
  UpdateRoleRequest,
  GetAllRolesQuery,
  RoleResponse,
  ApiResponse,
} from "@/types/api";

export const roleService = {
  getAll(params?: GetAllRolesQuery) {
    return http.get<RoleResponse[]>("/api/Roles", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<RoleResponse>(`/api/Roles/${id}`);
  },

  create(data: CreateRoleRequest) {
    return http.post<RoleResponse>("/api/Roles", data);
  },

  update(id: string, data: UpdateRoleRequest) {
    return http.put<RoleResponse>(`/api/Roles/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/Roles/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/Roles/${id}/restore`);
  },
};
