import { RoutePath } from '../../router/hashRouter/types';
import { Router } from '../../router/router/Router';
import { State } from '../../state/State';
import { SessionStorageManager } from '../../utils/sessionStorageManager/SessionStorageManager';
import { WebSocketService } from '../WebSocketService';
import { IHandleErrorMessage, IMessage, TypeMessage } from '../types';
import { ILogoutSend } from './types';

export class ChatService implements IHandleErrorMessage {
    private webSocketService: WebSocketService;

    private router: Router;

    private state: State;

    constructor(webSocketService: WebSocketService, router: Router, state: State) {
        this.webSocketService = webSocketService;
        this.router = router;
        this.state = state;
    }

    public logout() {
        const user = this.state.getUser();
        if (user) {
            const request: ILogoutSend = {
                id: user.id,
                type: TypeMessage.USER_LOGOUT,
                payload: {
                    user: {
                        login: user.login,
                        password: user.password,
                    },
                },
            };
            this.webSocketService.sendRequest(request, this);
        }
    }

    public handleUserLogout(data: ILogoutSend): void {
        console.log(data);
        SessionStorageManager.removeUserData();
        this.state.setUser(null);
        this.router.navigate(RoutePath.LOGIN);
    }

    public handleUserExternalLogout(data: ILogoutSend): void {
        console.log(data);
    }

    public handleErrorMessage(data: IMessage): void {
        if ('error' in data.payload) {
            const errorMessage = data.payload.error;
            console.error(errorMessage);
        }
    }
}
