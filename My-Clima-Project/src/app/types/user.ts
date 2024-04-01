export interface User {
    id: string;
    userName: string;
    email: string;
    password: string;
    climates: string[];
    created_at: string,
    updatedAt: string,
    __v: number;
}

export interface UserLogin {
    userName: string;
    email: string;
    password: string;
    id: string;
}

export interface UserProfile {
    userName: string;
    email: string;
    tel: string;
}