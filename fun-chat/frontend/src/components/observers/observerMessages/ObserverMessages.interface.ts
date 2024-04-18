import { User } from '../../services/chatService/types';

export interface IObserverMessages<T> {
    updateMessages(data: T, user: User): void;
}
