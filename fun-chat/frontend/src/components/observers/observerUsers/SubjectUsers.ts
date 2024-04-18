import { IObserverUsers } from './ObserverUsers.interface';

export interface ISubjectUsers<T> {
    registerUserObserver(key: string, observer: IObserverUsers<T>): void;
    removeUserObserver(key: string): void;
    notifyUserObservers(data: T): void;
}
