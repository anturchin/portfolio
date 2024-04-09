import { Router } from '../router/router/Router';
import { IHandleErrorMessage, IMessage, TypeMessage } from './types';
import { ILoginSend } from './loginService/types';
import { LoginService } from './loginService/LoginService';
import { State } from '../state/State';

export class WebSocketService {
    private loginService: LoginService;

    private socketUrl: string;

    private socket: WebSocket;

    private lastRequest: IHandleErrorMessage | null = null;

    constructor(socketUrl: string, router: Router, state: State) {
        this.socketUrl = socketUrl;
        this.socket = new WebSocket(this.socketUrl);
        this.loginService = new LoginService(this, router, state);
        this.handleMessage = this.handleMessage.bind(this);
        this.setupEventListener();
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
