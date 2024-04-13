import { Router } from '../../router/router/Router';
import { State } from '../../state/State';
import { WebSocketService } from '../WebSocketService';
import { IHandleErrorMessage, IMessage } from '../types';
import { LogoutService } from './logoutService/LogoutService';

export class ChatService implements IHandleErrorMessage {
    private webSocketService: WebSocketService;

    private router: Router;

    private state: State;

    private logoutService: LogoutService;

    constructor(webSocketService: WebSocketService, router: Router, state: State) {
        this.webSocketService = webSocketService;
        this.router = router;
        this.state = state;
        this.logoutService = new LogoutService(this.webSocketService, this.router, this.state);
    }

    public getLogoutService(): LogoutService {
        return this.logoutService;
    }

    public handleErrorMessage(data: IMessage): void {
        if ('error' in data.payload) {
            const errorMessage = data.payload.error;
            console.error(errorMessage);
        }
    }
}
