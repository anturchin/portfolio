import { IObserver } from '../../../observers/Observer.interface';
import { Subject } from '../../../observers/Subject';
import { Router } from '../../../router/router/Router';
import { State } from '../../../state/State';
import { SessionStorageManager } from '../../../utils/sessionStorageManager/SessionStorageManager';
import { WebSocketService } from '../../WebSocketService';
import { IHandleErrorMessage, IMessage, TypeMessage } from '../../types';
import { IMessageRequest, IMessageResponse } from './types';

export class MessageReceiveService implements IHandleErrorMessage, Subject<IMessageResponse> {
    private webSocketService: WebSocketService;

    private router: Router;

    private state: State;

    private observers: Map<string, IObserver<IMessageResponse>> = new Map();

    constructor(webSocketService: WebSocketService, router: Router, state: State) {
        this.webSocketService = webSocketService;
        this.router = router;
        this.state = state;
    }

    public registerObserver(key: string, observer: IObserver<IMessageResponse>): void {
        this.observers.set(key, observer);
    }

    public removeObserver(key: string): void {
        this.observers.delete(key);
    }

    public notifyObservers(data: IMessageResponse): void {
        this.observers.forEach((observer) => observer.update(data));
    }

    public sendRequestToReceiveMessages(loginToMessage: string, text: string): void {
        const request: IMessageRequest = {
            id: SessionStorageManager.generateRequestId(),
            type: TypeMessage.MSG_SEND,
            payload: {
                message: {
                    to: loginToMessage,
                    text,
                },
            },
        };
        this.webSocketService.sendRequest(request, this);
    }

    public handleResponseWithReceivedMessages(data: IMessageResponse): void {
        console.log(data);
    }

    public sendRequestHistoryMessages(login: string): void {
        const request: IMessageRequest = {
            id: SessionStorageManager.generateRequestId(),
            type: TypeMessage.MSG_FROM_USER,
            payload: {
                user: {
                    login,
                },
            },
        };
        this.webSocketService.sendRequest(request, this);
    }

    public handleResponseHistoryMessages(data: IMessageResponse): void {
        console.log(data);
    }

    public handleErrorMessage(data: IMessage): void {
        if (data.payload && 'error' in data.payload) {
            const errorMessage = data.payload.error;
            console.error(errorMessage);
        }
    }
}
