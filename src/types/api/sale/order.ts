import { SortDirection, SortField } from "../common";

export type OrderType = "DineIn" | "TakeAway" | "Delivery";

export type OrderDetailStatus = "Pending" | "Preparing" | "Ready" | "Served" | "Cancelled";

export type OrderStatus = "Pending" | "Processing" | "Completed" | "Cancelled";

export interface CreateOrderDetailRequest {
  productId?: string;
  quantity?: number;
  note?: string | null;
}

export interface CreateOrderRequest {
  customerId?: string | null;
  employeeId?: string;
  branchId?: string;
  type?: OrderType;
  note?: string | null;
  createOrderDetails?: CreateOrderDetailRequest[] | null;
}

export interface OrderDetailResponse {
  id: string;
  orderId: string;
  productId: string;
  productName?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: OrderDetailStatus;
  note?: string | null;
}

export interface OrderResponse {
  id: string;
  orderCode?: string;
  customerId?: string | null;
  customerName?: string | null;
  employeeId?: string;
  employeeName?: string;
  branchId?: string;
  branchName?: string;
  type: OrderType;
  status: OrderStatus;
  totalAmount: number;
  discountAmount?: number;
  finalAmount: number;
  note?: string | null;
  orderDetails?: OrderDetailResponse[];
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderFilterParams {
  CustomerCode?: string;
  EmployeeCode?: string;
  BranchCode?: string;
  Keyword?: string;
  SortField?: SortField;
  Direction?: SortDirection;
  Page?: number;
  PageSize?: number;
}
