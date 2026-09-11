export interface ClaimDiscountRequest {
  discountCode?: string | null;
}

export interface GetAllCustomersQuery {
  keyword?: string;
  page?: number;
  pageSize?: number;
}

export interface CustomerWallet {
  customerId: string;
  balance: number;
  rewardPoints: number;
  loyaltyTier?: string;
  updatedAt?: string;
}

export interface CustomerResponse {
  id: string;
  userId?: string;
  customerCode?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
  wallet?: CustomerWallet;
  createdAt?: string;
  updatedAt?: string;
}
