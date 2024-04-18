import { IObserverUsers } from './ObserverUsers.interface';

export interface ISubjectUsers<T> {
    registerObserver(key: string, observer: IObserverUsers<T>): void;
    removeObserver(key: string): void;
    notifyObservers(data: T): void;
}
