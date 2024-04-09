import { UserDataType } from './types';

export class SessionStorageManager {
    public static saveUserData({ login, password }: UserDataType): void {
        const userData = { login, password };
        const userDataJson = JSON.stringify(userData);
        sessionStorage.setItem('userData', userDataJson);
    }

    public static getUserData(): UserDataType | null {
        const userDataString = sessionStorage.getItem('userData');
        if (userDataString) {
            return JSON.parse(userDataString);
        }
        return null;
    }

    public static removeUserData(): void {
        sessionStorage.removeItem('userData');
    }
}
