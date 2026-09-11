import { http } from "@/lib/api/client";
import {
  CreatePositionRequest,
  UpdatePositionRequest,
  GetAllPositionsQuery,
  PositionResponse,
  ApiResponse,
} from "@/types/api";

export const positionService = {
  getAll(params?: GetAllPositionsQuery) {
    return http.get<PositionResponse[]>("/api/Positions", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<PositionResponse>(`/api/Positions/${id}`);
  },

  getByName(name: string) {
    return http.get<PositionResponse>(`/api/Positions/by-name/${encodeURIComponent(name)}`);
  },

  create(data: CreatePositionRequest) {
    return http.post<PositionResponse>("/api/Positions", data);
  },

  update(id: string, data: UpdatePositionRequest) {
    return http.put<PositionResponse>(`/api/Positions/${id}`, data);
  },

  delete(id: string) {
    return http.delete<ApiResponse>(`/api/Positions/${id}`);
  },

  restore(id: string) {
    return http.patch<ApiResponse>(`/api/Positions/${id}/restore`);
  },
};
