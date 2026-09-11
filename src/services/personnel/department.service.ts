import { http } from "@/lib/api/client";
import {
  DepartmentFilterParams,
  DepartmentResponse,
  CreateDepartmentRequest,
  UpdateDepartmentRequest,
  PositionResponse,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const departmentService = {
  getAll(params?: DepartmentFilterParams) {
    return http.get<PaginatedResponse<DepartmentResponse>>(
      "/api/Departments",
      params as Record<string, unknown>
    );
  },

  getById(id: string) {
    return http.get<ApiResponse<DepartmentResponse>>(`/api/Departments/${id}`);
  },

  getByName(name: string) {
    return http.get<ApiResponse<DepartmentResponse>>(`/api/Departments/by-name/${encodeURIComponent(name)}`);
  },

  create(data: CreateDepartmentRequest) {
    return http.post<ApiResponse<DepartmentResponse>>("/api/Departments", data);
  },

  update(id: string, data: UpdateDepartmentRequest) {
    return http.put<ApiResponse<DepartmentResponse>>(`/api/Departments/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/Departments/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/Departments/${id}/restore`);
  },

  getPositions(id: string) {
    return http.get<ApiResponse<PositionResponse[]>>(`/api/Departments/${id}/positions`);
  },
};
