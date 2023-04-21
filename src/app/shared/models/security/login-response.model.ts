export interface LoginResponseModel {
    authenticated?: boolean;
    firstName: string;
    lastName: string;
    token?: string;
    refreshToken?: string;
    errros?: string[];
}
