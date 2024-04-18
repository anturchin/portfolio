import { IObserverMessages } from '../observers/observerMessages/ObserverMessages.interface';
import { ISubjectMessages } from '../observers/observerMessages/SubjectMessages';
import { IObserverUsers } from '../observers/observerUsers/ObserverUsers.interface';
import { ISubjectUsers } from '../observers/observerUsers/SubjectUsers';
import { IMessageResponse } from '../services/chatService/messageReceiveService/types';
import { User } from '../services/chatService/types';
import { SessionStorageManager } from '../utils/sessionStorageManager/SessionStorageManager';
import { IUser } from './types';

export class State implements ISubjectUsers<User>, ISubjectMessages<IMessageResponse> {
    private user: IUser | null = null;

    private usersActive: User[] = [];

    private usersInActive: User[] = [];

    private allUsers: User[] = [];

    private userObservers: Map<string, IObserverUsers<User>> = new Map();

    private messageObservers: Map<string, IObserverMessages<IMessageResponse>> = new Map();

    constructor() {
        const userData = SessionStorageManager.getUserData();
        if (userData) {
            this.user = {
                ...userData,
                isLogined: true,
            };
        }
    }

    public registerUserObserver(key: string, observer: IObserverUsers<User>): void {
        this.userObservers.set(key, observer);
    }

    public removeUserObserver(key: string): void {
        this.userObservers.delete(key);
    }

    public notifyUserObservers(data: User): void {
        this.userObservers.forEach((observer) => observer.updateUsers(data));
    }

    public registerMessageObserver(
        key: string,
        observer: IObserverMessages<IMessageResponse>
    ): void {
        this.messageObservers.set(key, observer);
    }

    public removeMessageObserver(key: string): void {
        this.messageObservers.delete(key);
    }

    public notifyMessageObservers(data: IMessageResponse): void {
        this.messageObservers.forEach((observer) => observer.updateMessages(data));
    }

    public setAllUsers(users: User[]): void {
        const sortUsers = [...users];
        sortUsers.sort((a, b) => {
            if (a.isLogined === b.isLogined) {
                return 0;
            }
            if (a.isLogined) {
                return -1;
            }
            return 1;
        });
        this.allUsers = [...sortUsers];
    }

    public getAllUsers(): User[] {
        return this.allUsers;
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
