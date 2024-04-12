export interface IUser {
    id: string | null;
    login: string;
    password: string;
    isLogined?: boolean;
}
