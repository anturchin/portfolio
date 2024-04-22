import { Router } from '../router/router/Router';
import { IHandleErrorMessage, IMessage, TypeMessage } from './types';
import { ILoginSend } from './loginService/types';
import { LoginService } from './loginService/LoginService';
import { State } from '../state/State';
import { ChatService } from './chatService/ChatService';
import { ILogoutUser, IUsersAccept, User } from './chatService/types';
import { SessionStorageManager } from '../utils/sessionStorageManager/SessionStorageManager';
import {
    IFetchingMessage,
    IMessageTake,
    IReadMessage,
    MessagesHistoryType,
} from './chatService/messageReceiveService/types';

export class WebSocketService {
    private loginService: LoginService;

    private chatService: ChatService;

    private socketUrl: string;

    private socket: WebSocket;

    private lastRequest: IHandleErrorMessage | null = null;

    private state: State;

    private firstRenderCompleted: boolean = false;

    constructor(socketUrl: string, router: Router, state: State) {
        this.socketUrl = socketUrl;
        this.socket = new WebSocket(this.socketUrl);
        this.loginService = new LoginService(this, router, state);
        this.chatService = new ChatService(this, router, state);
        this.state = state;
        this.handleMessage = this.handleMessage.bind(this);
        this.setupEventListener();
    }

    public getState(): State {
        return this.state;
    }

    public getChatService(): ChatService {
        return this.chatService;
    }

    public getLoginService(): LoginService {
        return this.loginService;
    }

    public sendRequest<T>(request: T, service: IHandleErrorMessage): Promise<void> {
        return new Promise<void>((resolve) => {
            const sendWhenOpen = () => {
                this.socket.send(JSON.stringify(request));
                this.lastRequest = service;
                resolve();
            };

            if (this.socket.readyState === WebSocket.OPEN) {
                sendWhenOpen();
            } else {
                this.socket.addEventListener('open', sendWhenOpen);
            }
        });
    }

    public close() {
        this.socket.close();
    }

    private handleUserLoginAndLogout(data: IMessage): void {
        const logoutService = this.chatService.getLogoutService();
        if (data.type === TypeMessage.USER_LOGIN) {
            this.loginService.handleUserLogin(data as ILoginSend);
            return;
        }
        if (data.type === TypeMessage.USER_EXTERNAL_LOGIN) {
            const { user } = data.payload as ILogoutUser;
            this.loginService.handleUserExternal(user as User);
            return;
        }
        if (data.type === TypeMessage.USER_LOGOUT) {
            logoutService.handleUserLogout();
            return;
        }
        if (data.type === TypeMessage.USER_EXTERNAL_LOGOUT) {
            const { user } = data.payload as ILogoutUser;
            logoutService.handleUserExternalLogout(user as User);
        }
    }

    private handleUsers(data: IMessage): void {
        const userService = this.chatService.getUserService();
        if (data.type === TypeMessage.USER_ACTIVE) {
            userService.handleUsers(data as IUsersAccept);
            return;
        }
        if (data.type === TypeMessage.USER_INACTIVE) {
            userService.handleUsers(data as IUsersAccept);
        }
    }

    private handleReceivedMessages(data: IMessage): void {
        const messageReceiveService = this.chatService.getMessageReceiveService();
        if (data.type === TypeMessage.MSG_SEND) {
            const { message } = data.payload as IMessageTake;
            messageReceiveService.handleResponseWithReceivedMessages(message);
            return;
        }
        if (data.type === TypeMessage.MSG_FROM_USER) {
            const { messages } = data.payload as MessagesHistoryType;
            messageReceiveService.handleResponseHistoryMessages(messages);
            return;
        }
        if (data.type === TypeMessage.MSG_DELIVER) {
            const { message } = data.payload as IFetchingMessage;
            messageReceiveService.handleResponseDeliveryStatusChange(message);
            return;
        }
        if (data.type === TypeMessage.MSG_READ) {
            const { message } = data.payload as IReadMessage;
            messageReceiveService.handleResponseReadStatusChange(message);
        }
    }

    private handleMessage(event: MessageEvent): void {
        const data = JSON.parse(event.data) as IMessage;
        if (
            data.type === TypeMessage.USER_LOGIN ||
            data.type === TypeMessage.USER_EXTERNAL_LOGIN ||
            data.type === TypeMessage.USER_LOGOUT ||
            data.type === TypeMessage.USER_EXTERNAL_LOGOUT
        ) {
            this.handleUserLoginAndLogout(data);
            return;
        }
        if (data.type === TypeMessage.USER_ACTIVE || data.type === TypeMessage.USER_INACTIVE) {
            this.handleUsers(data);
            return;
        }
        if (
            data.type === TypeMessage.MSG_SEND ||
            data.type === TypeMessage.MSG_FROM_USER ||
            data.type === TypeMessage.MSG_DELIVER ||
            data.type === TypeMessage.MSG_READ
        ) {
            this.handleReceivedMessages(data);
        }
        if (data.type === TypeMessage.ERROR && this.lastRequest) {
            this.lastRequest.handleErrorMessage(data);
            this.lastRequest = null;
        }
    }

    private onMessage(): void {
        this.socket.addEventListener('message', this.handleMessage);
    }

    private onConnection(): void {
        this.socket.addEventListener('open', () => {
            const userDate = SessionStorageManager.getUserData();
            if (userDate) {
                const { id, login, password } = userDate;
                this.loginService.login(id, login, password);
            }
            console.log('WebSocket connection established');
        });
    }

    private onCloseConnection(): void {
        this.socket.addEventListener('close', (event: CloseEvent) => {
            console.log(`WebSocket connection close ${event.reason}`);
        });
    }

    private onErrorConnection(): void {
        this.socket.addEventListener('error', (error: Event) => {
            console.log(`WebSocket connection close ${error}`);
        });
    }

    private setupEventListener(): void {
        this.onConnection();
        this.onMessage();
        this.onCloseConnection();
        this.onErrorConnection();
    }
}
