import { User } from '../services/chatService/types';
import { SessionStorageManager } from '../utils/sessionStorageManager/SessionStorageManager';
import { IUser } from './types';

export class State {
    private user: IUser | null = null;

    private usersActive: User[] = [];

    private usersInActive: User[] = [];

    constructor() {
        const userData = SessionStorageManager.getUserData();
        if (userData) {
            this.user = {
                ...userData,
                isLogined: true,
            };
        }
    }

    public setUsersActive(users: User[]): void {
        this.usersActive = users;
    }

    public getUsersActive(): User[] {
        return this.usersActive;
    }

    public setUsersInActive(users: User[]): void {
        this.usersInActive = users;
    }

    public getUsersInActive(): User[] {
        return this.usersInActive;
    }

    public setUser(user: IUser | null): void {
        this.user = user;
    }

    public getUser(): IUser | null {
        return this.user || null;
    }
}
