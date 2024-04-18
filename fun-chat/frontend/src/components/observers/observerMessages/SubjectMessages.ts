import { IObserverMessages } from './ObserverMessages.interface';

export interface ISubjectMessages<T> {
    registerObserver(key: string, observer: IObserverMessages<T>): void;
    removeObserver(key: string): void;
    notifyObservers(data: T): void;
}
