import { http } from "@/lib/api/client";
import {
  AuditLogFilterParams,
  AuditLogResponse,
  PaginatedResponse,
} from "@/types/api";

export const auditLogService = {
  getAll(params?: AuditLogFilterParams) {
    return http.get<PaginatedResponse<AuditLogResponse>>(
      "/api/audit-logs",
      params as Record<string, unknown>
    );
  },
};
