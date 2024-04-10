import { RoutePath } from '../../router/hashRouter/types';
import { Router } from '../../router/router/Router';
import { State } from '../../state/State';
import { WebSocketService } from '../WebSocketService';
import { IHandleErrorMessage, IMessage, TypeMessage } from '../types';
import { ILoginSend } from './types';

export class LoginService implements IHandleErrorMessage {
    private webSocketService: WebSocketService;

    private router: Router;

    private state: State;

    constructor(webSocketService: WebSocketService, router: Router, state: State) {
        this.webSocketService = webSocketService;
        this.router = router;
        this.state = state;
    }

    public getState(): State {
        return this.state;
    }

    public login(login: string, password: string) {
        const request: ILoginSend = {
            id: this.generateRequestId(),
            type: TypeMessage.USER_LOGIN,
            payload: {
                user: { login, password },
            },
        };
        this.webSocketService.sendRequest(request, this);
    }

    public handleUserLogin(data: ILoginSend): void {
        const {
            user: { login, isLogined },
        } = data.payload;
        this.state.setUser({ login, isLogined });
        this.router.navigate(RoutePath.CHAT);
    }

    public handleUserExternal(data: ILoginSend): void {
        console.log(data);
    }

    public handleErrorMessage(data: IMessage): void {
        console.log(data);
    }

    private generateRequestId(): string {
        const length = 10;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let requestId = '';
        for (let i = 0; i < length; i += 1) {
            requestId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return requestId;
    }
}
