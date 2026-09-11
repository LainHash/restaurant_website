export interface LoginRequest {
  email?: string | null;
  password?: string | null;
}

export interface RegisterRequest {
  userName?: string | null;
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
}

export interface VerifyEmailRequest {
  email?: string | null;
  code?: string | null;
}

export interface ResendVerificationRequest {
  email?: string | null;
}

export interface CompleteProfileRequest {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  dateOfBirth?: string; // YYYY-MM-DD
  gender?: boolean;
  address?: string | null;
  city?: string | null;
  country?: string | null;
  phone?: string | null;
  citizenCardId?: string | null;
}

export interface UpdatePersonalProfileRequest {
  firstName?: string | null;
  lastName?: string | null;
  dateOfBirth?: string; // YYYY-MM-DD
  gender?: boolean;
  address?: string | null;
  city?: string | null;
  country?: string | null;
  phone?: string | null;
  citizenCardId?: string | null;
}

export interface CreateUsersForEmployeeRequest {
  quantity?: number;
  batchNumber?: number;
}

export interface AuthResponse {
  token?: string;
  refreshToken?: string;
  user?: {
    id: string;
    userName?: string;
    email?: string;
    roles?: string[];
  };
}
