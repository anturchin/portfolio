import { IObserverStatusMsg } from './ObserverStatusMsg.interface';

export interface ISubjectStatusMsg<T> {
    registerStatusObserver(key: string, observer: IObserverStatusMsg<T>): void;
    removeStatusObserver(key: string): void;
    notifyStatusObservers(data: T): void;
}
