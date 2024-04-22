/* eslint-disable brace-style */
import { IObserverStatusMsg } from '../../../observers/observerStatusMsg/ObserverStatusMsg.interface';
import { ISubjectStatusMsg } from '../../../observers/observerStatusMsg/SubjectStatusMsg';
import { Router } from '../../../router/router/Router';
import { State } from '../../../state/State';
import { SessionStorageManager } from '../../../utils/sessionStorageManager/SessionStorageManager';
import { WebSocketService } from '../../WebSocketService';
import { IHandleErrorMessage, IMessage, TypeMessage } from '../../types';
import { FetchingMessageType, IMessageRequest, MessageTakeType } from './types';

export class MessageReceiveService
    implements IHandleErrorMessage, ISubjectStatusMsg<FetchingMessageType>
{
    private webSocketService: WebSocketService;

    private router: Router;

    private state: State;

    private selectedUserName: string[] = [];

    private statusObservers: Map<string, IObserverStatusMsg<FetchingMessageType>> = new Map();

    private shouldNotifyObservers: boolean = false;

    private updateCounter?: () => void;

    constructor(webSocketService: WebSocketService, router: Router, state: State) {
        this.webSocketService = webSocketService;
        this.router = router;
        this.state = state;
    }

    public registerStatusObserver(
        key: string,
        observer: IObserverStatusMsg<FetchingMessageType>
    ): void {
        this.statusObservers.set(key, observer);
    }

    public removeStatusObserver(key: string): void {
        this.statusObservers.delete(key);
    }

    public notifyStatusObservers(data: FetchingMessageType): void {
        this.statusObservers.forEach((observer) => observer.updateStatus(data));
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

    public handleResponseWithReceivedMessages(data: MessageTakeType): void {
        this.state.addMessageToSelectedUserMessages(data);
    }

    public sendRequestHistoryMessages(
        login: string,
        shouldNotifyObservers: boolean,
        updateCounter?: () => void
    ): void {
        this.shouldNotifyObservers = shouldNotifyObservers;
        this.updateCounter = updateCounter;
        this.selectedUserName.push(login);
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

    public handleResponseHistoryMessages(data: MessageTakeType[]): void {
        const userName = this.selectedUserName.shift();
        if (userName) {
            this.state.setMessages(data, userName, this.shouldNotifyObservers);
        }
        this.updateCounter?.();
    }

    public handleResponseDeliveryStatusChange(data: FetchingMessageType): void {
        this.state.updateStatusMessage(data);
        this.notifyStatusObservers(data);
    }

    public handleErrorMessage(data: IMessage): void {
        if (data.payload && 'error' in data.payload) {
            const errorMessage = data.payload.error;
            console.error(errorMessage);
        }
    }
}
