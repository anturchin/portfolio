import { IUser } from './types';

export class State {
    private user: IUser | null;

    constructor() {
        this.user = null;
    }

    public setUser(user: IUser): void {
        this.user = user;
    }

    public getUser(): IUser | null {
        return this.user || null;
    }
}
