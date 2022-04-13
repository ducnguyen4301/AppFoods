export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserState {
  isLoading: boolean;
  user: any | null;
  isAuth: boolean;
}
