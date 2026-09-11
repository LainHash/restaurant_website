export interface AuditLogResponse {
  id: string;
  entityName: string;
  entityId?: string;
  userId?: number;
  userName?: string;
  action: string;
  oldValues?: string | null;
  newValues?: string | null;
  timestamp: string;
}

export interface AuditLogFilterParams {
  EntityName?: string;
  UserId?: number;
  Action?: string;
  From?: string; // ISO date-time
  To?: string;   // ISO date-time
  Page?: number;
  PageSize?: number;
}
