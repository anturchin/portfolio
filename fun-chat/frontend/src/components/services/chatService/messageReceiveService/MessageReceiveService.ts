import { Router } from '../../../router/router/Router';
import { State } from '../../../state/State';
import { SessionStorageManager } from '../../../utils/sessionStorageManager/SessionStorageManager';
import { WebSocketService } from '../../WebSocketService';
import { IHandleErrorMessage, IMessage, TypeMessage } from '../../types';
import { IMessageRequest, IMessageResponse, MessageTakeType } from './types';

export class MessageReceiveService implements IHandleErrorMessage {
    private webSocketService: WebSocketService;

    private router: Router;

    private state: State;

    private selectedUserName: string = '';

    constructor(webSocketService: WebSocketService, router: Router, state: State) {
        this.webSocketService = webSocketService;
        this.router = router;
        this.state = state;
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
        this.selectedUserName = login;
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
        this.state.setMessages(data, this.selectedUserName);
    }

    public handleErrorMessage(data: IMessage): void {
        if (data.payload && 'error' in data.payload) {
            const errorMessage = data.payload.error;
            console.error(errorMessage);
        }
    }
}
