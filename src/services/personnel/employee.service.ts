import { http } from "@/lib/api/client";
import {
  CreateEmployeeRequest,
  GetAllEmployeesQuery,
  EmployeeResponse,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const employeeService = {
  getAll(params?: GetAllEmployeesQuery) {
    return http.get<PaginatedResponse<EmployeeResponse>>("/api/Employees", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<ApiResponse<EmployeeResponse>>(`/api/Employees/${id}`);
  },

  create(data: CreateEmployeeRequest) {
    return http.post<ApiResponse<EmployeeResponse>>("/api/Employees", data);
  },
};
