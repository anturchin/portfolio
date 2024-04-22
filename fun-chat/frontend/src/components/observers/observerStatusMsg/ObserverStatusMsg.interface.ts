export interface IObserverStatusMsg<T> {
    updateStatus(data: T): void;
}
