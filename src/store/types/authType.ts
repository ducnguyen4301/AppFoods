export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserState {
  isLoading: boolean;
  user: any | null;
  isAuth: boolean;
}
export interface AuthResponse {
  //   avatarUrl: string;
  //   email: string;
  //   emailNotVerified: string;
  //   fullName: string;
  //   gender: 'FEMALE' | 'MALE';
  //   phoneNumber: string;
  //   status: 'ACTIVE' | 'DISABLED' | 'NEW_USER' | 'NOT_ACTIVE';
  //   token: string;
  //   userRole: 'ADMIN' | 'CUSTOMER' | 'MANAGER';
  username: string;
}
export interface SignUpRequest {
  email: string;
  fullName: string;
  password: string;
  username: string;
}
