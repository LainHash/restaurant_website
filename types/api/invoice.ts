import { SortDirection, SortField } from "./common";

export interface InvoiceResponse {
  id: string;
  orderId: string;
  orderCode?: string;
  invoiceNumber?: string;
  totalAmount: number;
  taxAmount?: number;
  discountAmount?: number;
  finalAmount: number;
  paymentMethod?: string;
  paymentStatus?: "Pending" | "Paid" | "Failed" | "Refunded";
  issuedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface InvoiceFilterParams {
  OrderCode?: string;
  Keyword?: string;
  SortField?: SortField;
  Direction?: SortDirection;
  Page?: number;
  PageSize?: number;
}
