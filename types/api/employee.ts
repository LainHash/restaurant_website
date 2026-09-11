export interface CreatePersonalProfileRequest {
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

export interface CreateEmployeeRequest {
  userId?: string;
  positionId?: string;
  branchId?: string;
  hireDate?: string; // ISO date-time
  createPersonalProfileRequest?: CreatePersonalProfileRequest;
}

export interface GetAllEmployeesQuery {
  keyword?: string;
  branchId?: string;
  positionId?: string;
  page?: number;
  pageSize?: number;
}

export interface EmployeeProfileResponse {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: boolean;
  address?: string;
  city?: string;
  country?: string;
  phone?: string;
  citizenCardId?: string;
}

export interface EmployeeResponse {
  id: string;
  employeeCode?: string;
  userId: string;
  userName?: string;
  email?: string;
  positionId: string;
  positionName?: string;
  departmentId?: string;
  departmentName?: string;
  branchId: string;
  branchName?: string;
  hireDate?: string;
  isActive?: boolean;
  profile?: EmployeeProfileResponse;
  createdAt?: string;
  updatedAt?: string;
}
