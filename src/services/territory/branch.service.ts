import { http } from "@/lib/api/client";
import {
  BranchFilterParams,
  BranchResponse,
  BranchStockItem,
  AreaResponse,
  PaginatedResponse,
  ApiResponse,
} from "@/types/api";

export const branchService = {
  getAll(params?: BranchFilterParams) {
    return http.get<PaginatedResponse<BranchResponse>>("/api/Branches", params as Record<string, unknown>);
  },

  getStockList(id: string) {
    return http.get<ApiResponse<BranchStockItem[]>>(`/api/Branches/${id}/stock-list`);
  },

  getAreas(id: string) {
    return http.get<ApiResponse<AreaResponse[]>>(`/api/Branches/${id}/areas`);
  },
};
