import { User } from '../../services/chatService/types';

export interface IObserverMessages<T> {
    initialMessages(data: T, user: User): void;
    updateMessages(data: T): void;
}
