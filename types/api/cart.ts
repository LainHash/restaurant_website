export interface AddCartItemRequest {
  productId?: string;
}

export interface RemoveCartItemRequest {
  productId?: string;
}

export interface CartItemResponse {
  id: string;
  productId: string;
  productName?: string;
  unitPrice: number;
  quantity: number;
  imageUrl?: string;
}

export interface CartResponse {
  id: string;
  userId?: string;
  items: CartItemResponse[];
  totalAmount: number;
}
