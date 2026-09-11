import { http } from "@/lib/api/client";
import {
  ImageFilterParams,
  ImageItemResponse,
  PaginatedResponse,
} from "@/types/api";

export const imageService = {
  getAll(params?: ImageFilterParams) {
    return http.get<PaginatedResponse<ImageItemResponse>>("/api/Images", params as Record<string, unknown>);
  },
};
