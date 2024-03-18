import { IObserver } from './types';

export class Subject {
    private observers: IObserver[] = [];

    public addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    public notifyObservers(roundIndex: number): void {
        this.observers.forEach((observer) => {
            observer.update(roundIndex);
        });
    }
}
