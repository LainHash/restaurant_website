import { http } from "@/lib/api/client";
import {
  AddWishlistItemRequest,
  RemoveWishlistItemRequest,
  WishlistResponse,
  ApiResponse,
} from "@/types/api";

export const wishlistService = {
  getWishlist() {
    return http.get<WishlistResponse>("/api/Wishlists");
  },

  addItem(data: AddWishlistItemRequest) {
    return http.post<ApiResponse>("/api/Wishlists/items", data);
  },

  removeItem(data: RemoveWishlistItemRequest) {
    return http.delete<ApiResponse>("/api/Wishlists/items", data);
  },
};
