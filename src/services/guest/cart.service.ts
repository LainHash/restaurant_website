import { http } from "@/lib/api/client";
import {
  AddCartItemRequest,
  RemoveCartItemRequest,
  CartResponse,
  ApiResponse,
} from "@/types/api";

export const cartService = {
  getCart() {
    return http.get<ApiResponse<CartResponse>>("/api/Carts");
  },

  addItem(data: AddCartItemRequest) {
    return http.post<ApiResponse>("/api/Carts/items", data);
  },

  removeItem(data: RemoveCartItemRequest) {
    return http.delete<ApiResponse>("/api/Carts/items", data);
  },
};
