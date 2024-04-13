import { Router } from '../../router/router/Router';
import { State } from '../../state/State';
import { WebSocketService } from '../WebSocketService';
import { IHandleErrorMessage, IMessage } from '../types';
import { LogoutService } from './logoutService/LogoutService';
import { UserService } from './userService/UserService';

export class ChatService implements IHandleErrorMessage {
    private webSocketService: WebSocketService;

    private router: Router;

    private state: State;

    private logoutService: LogoutService;

    private userService: UserService;

    constructor(webSocketService: WebSocketService, router: Router, state: State) {
        this.webSocketService = webSocketService;
        this.router = router;
        this.state = state;
        this.logoutService = new LogoutService(this.webSocketService, this.router, this.state);
        this.userService = new UserService(this.webSocketService, this.router, this.state);
    }

    public getLogoutService(): LogoutService {
        return this.logoutService;
    }

    public getUserService(): UserService {
        return this.userService;
    }

    public handleErrorMessage(data: IMessage): void {
        if (data.payload && 'error' in data.payload) {
            const errorMessage = data.payload.error;
            console.error(errorMessage);
        }
    }
}
