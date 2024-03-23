export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    climates: string[]; // Масив с идентификатори на климатици, които притежава потребителят
}

export interface UserLogin {
    username: string;
    email: string;
    password: string;
    id: string;
}