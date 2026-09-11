import { http } from "@/lib/api/client";
import {
  CreateEmployeeRequest,
  GetAllEmployeesQuery,
  EmployeeResponse,
} from "@/types/api";

export const employeeService = {
  getAll(params?: GetAllEmployeesQuery) {
    return http.get<EmployeeResponse[]>("/api/Employees", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<EmployeeResponse>(`/api/Employees/${id}`);
  },

  create(data: CreateEmployeeRequest) {
    return http.post<EmployeeResponse>("/api/Employees", data);
  },
};
