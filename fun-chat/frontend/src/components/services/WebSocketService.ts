import { Router } from '../router/router/Router';
import { IHandleErrorMessage, IMessage, TypeMessage } from './types';
import { ILoginSend } from './loginService/types';
import { LoginService } from './loginService/LoginService';
import { State } from '../state/State';
import { ChatService } from './chatService/ChatService';
import { ILogoutSend, IUsersAccept } from './chatService/types';
import { SessionStorageManager } from '../utils/sessionStorageManager/SessionStorageManager';
import { IMessageResponse } from './chatService/messageReceiveService/types';

export class WebSocketService {
    private loginService: LoginService;

    private chatService: ChatService;

    private socketUrl: string;

    private socket: WebSocket;

    private lastRequest: IHandleErrorMessage | null = null;

    constructor(socketUrl: string, router: Router, state: State) {
        this.socketUrl = socketUrl;
        this.socket = new WebSocket(this.socketUrl);
        this.loginService = new LoginService(this, router, state);
        this.chatService = new ChatService(this, router, state);
        this.handleMessage = this.handleMessage.bind(this);
        this.setupEventListener();
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
        const userService = this.chatService.getUserService();
        if (data.type === TypeMessage.USER_LOGIN) {
            this.loginService.handleUserLogin(data as ILoginSend);
            return;
        }
        if (data.type === TypeMessage.USER_EXTERNAL_LOGIN) {
            this.loginService.handleUserExternal(data as ILoginSend);
            userService.sendRequest();
            return;
        }
        if (data.type === TypeMessage.USER_LOGOUT) {
            logoutService.handleUserLogout(data as ILogoutSend);
            return;
        }
        if (data.type === TypeMessage.USER_EXTERNAL_LOGOUT) {
            logoutService.handleUserExternalLogout(data as ILogoutSend);
            userService.sendRequest();
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
            messageReceiveService.handleResponseWithReceivedMessages(data as IMessageResponse);
        }
        if (data.type === TypeMessage.MSG_FROM_USER) {
            messageReceiveService.handleResponseHistoryMessages(data as IMessageResponse);
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
