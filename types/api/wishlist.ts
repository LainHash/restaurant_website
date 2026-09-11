export interface AddWishlistItemRequest {
  productId?: string;
}

export interface RemoveWishlistItemRequest {
  productId?: string;
}

export interface WishlistItemResponse {
  id: string;
  productId: string;
  productName?: string;
  unitPrice: number;
  imageUrl?: string;
}

export interface WishlistResponse {
  id: string;
  userId?: string;
  items: WishlistItemResponse[];
}
