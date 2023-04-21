export interface ResetPasswordRequestModel {
    password: string;
    confirmPassword: string;
    email: string;
    token: string;
}
