import { http } from "@/lib/api/client";
import {
  LoginRequest,
  RegisterRequest,
  VerifyEmailRequest,
  ResendVerificationRequest,
  CompleteProfileRequest,
  UpdatePersonalProfileRequest,
  CreateUsersForEmployeeRequest,
  AuthResponse,
  ApiResponse,
} from "@/types/api";

export const authService = {
  login(data: LoginRequest) {
    return http.post<ApiResponse<AuthResponse>>("/api/Authentication/login", data);
  },

  register(data: RegisterRequest) {
    return http.post<ApiResponse>("/api/Authentication/register", data);
  },

  verifyEmail(data: VerifyEmailRequest) {
    return http.post<ApiResponse>("/api/Users/verify-email", data);
  },

  resendVerification(data: ResendVerificationRequest) {
    return http.post<ApiResponse>("/api/Users/resend-verification", data);
  },

  completeProfile(data: CompleteProfileRequest) {
    return http.post<ApiResponse>("/api/Users/complete-profile", data);
  },

  updateProfile(data: UpdatePersonalProfileRequest) {
    return http.post<ApiResponse>("/api/Users/update-profile", data);
  },

  createEmployeeAccount(data: CreateUsersForEmployeeRequest) {
    return http.post<ApiResponse>("/api/Users/create-employee-account", data);
  },
};
