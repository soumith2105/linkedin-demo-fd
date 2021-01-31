export interface LoginResponse {
    message: string;
    messageType: string;
}

export interface User {
    id?: number;
    username?: string;
    name?: string;
    password?: string;
    roles?: number;
    active?: boolean;
    email?: string;
    description?: string;
    address?: string;
    status?: string;
}
