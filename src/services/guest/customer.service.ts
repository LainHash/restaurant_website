import { http } from "@/lib/api/client";
import {
  GetAllCustomersQuery,
  CustomerResponse,
  CustomerWallet,
  ClaimDiscountRequest,
  ApiResponse,
} from "@/types/api";

export const customerService = {
  getAll(params?: GetAllCustomersQuery) {
    return http.get<CustomerResponse[]>("/api/Customers", params as Record<string, unknown>);
  },

  getById(id: string) {
    return http.get<CustomerResponse>(`/api/Customers/${id}`);
  },

  getCurrentUser() {
    return http.get<CustomerResponse>("/api/Customers/user");
  },

  uploadUserImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return http.upload<ApiResponse>("/api/Customers/user/images", formData);
  },

  getUserWallet() {
    return http.get<CustomerWallet>("/api/Customers/user/wallet");
  },

  claimDiscount(data: ClaimDiscountRequest) {
    return http.post<ApiResponse>("/api/Customers/user/discounts/claim", data);
  },
};
