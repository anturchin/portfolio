import { UserDataType } from './types';

export class LocalStorageManager {
    public static saveUserData({ firstName, lastName }: UserDataType): void {
        const userData = { firstName, lastName };
        const userDataJson = JSON.stringify(userData);
        localStorage.setItem('userData', userDataJson);
    }

    public static getUserData(): UserDataType | null {
        const userDataString = localStorage.getItem('userData');
        if (userDataString) {
            return JSON.parse(userDataString);
        }
        return null;
    }

    public static removeUserData(): void {
        localStorage.removeItem('userData');
    }
}
