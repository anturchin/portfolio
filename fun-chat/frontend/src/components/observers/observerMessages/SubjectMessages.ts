import { User } from '../../services/chatService/types';
import { IObserverMessages } from './ObserverMessages.interface';

export interface ISubjectMessages<T> {
    registerMessageObserver(key: string, observer: IObserverMessages<T>): void;
    removeMessageObserver(key: string): void;
    notifyMessageObservers(data: T, user: User): void;
}
