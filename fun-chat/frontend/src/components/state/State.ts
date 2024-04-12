import { SessionStorageManager } from '../utils/sessionStorageManager/SessionStorageManager';
import { IUser } from './types';

export class State {
    private user: IUser | null = null;

    constructor() {
        const userData = SessionStorageManager.getUserData();
        if (userData) {
            this.user = {
                ...userData,
                isLogined: true,
            };
        }
    }

    public setUser(user: IUser | null): void {
        this.user = user;
    }

    public getUser(): IUser | null {
        return this.user || null;
    }
}
