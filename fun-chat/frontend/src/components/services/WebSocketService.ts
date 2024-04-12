import { Router } from '../router/router/Router';
import { IHandleErrorMessage, IMessage, TypeMessage } from './types';
import { ILoginSend } from './loginService/types';
import { LoginService } from './loginService/LoginService';
import { State } from '../state/State';
import { ChatService } from './chatService/ChatService';
import { ILogoutSend } from './chatService/types';
import { SessionStorageManager } from '../utils/sessionStorageManager/SessionStorageManager';

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

    public sendRequest<T>(request: T, service: IHandleErrorMessage) {
        this.socket.send(JSON.stringify(request));
        this.lastRequest = service;
    }

    public close() {
        this.socket.close();
    }

    private handleMessage(event: MessageEvent): void {
        const data = JSON.parse(event.data) as IMessage;
        if (data.type === TypeMessage.USER_LOGIN) {
            this.loginService.handleUserLogin(data as ILoginSend);
            return;
        }
        if (data.type === TypeMessage.USER_EXTERNAL_LOGIN) {
            this.loginService.handleUserExternal(data as ILoginSend);
            return;
        }

        if (data.type === TypeMessage.USER_LOGOUT) {
            this.chatService.handleUserLogout(data as ILogoutSend);
            return;
        }

        if (data.type === TypeMessage.USER_EXTERNAL_LOGOUT) {
            this.chatService.handleUserExternalLogout(data as ILogoutSend);
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
        this.socket.addEventListener('close', (error: Event) => {
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
