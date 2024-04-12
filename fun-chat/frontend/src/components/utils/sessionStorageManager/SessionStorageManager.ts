import { UserDataType } from './types';

export class SessionStorageManager {
    public static saveUserData({ id, login, password }: UserDataType): void {
        const userData = { id, login, password };
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

    public static generateRequestId(): string {
        const length = 10;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let requestId = '';
        for (let i = 0; i < length; i += 1) {
            requestId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return requestId;
    }
}
