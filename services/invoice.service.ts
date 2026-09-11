import { http } from "@/lib/api/client";
import {
  InvoiceFilterParams,
  InvoiceResponse,
  PaginatedResponse,
} from "@/types/api";

export const invoiceService = {
  getAll(params?: InvoiceFilterParams) {
    return http.get<PaginatedResponse<InvoiceResponse>>("/api/Invoices", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<InvoiceResponse>(`/api/Invoices/${id}`);
  },
};
