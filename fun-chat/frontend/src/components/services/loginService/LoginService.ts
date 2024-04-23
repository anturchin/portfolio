import { RoutePath } from '../../router/hashRouter/types';
import { Router } from '../../router/router/Router';
import { State } from '../../state/State';
import { SessionStorageManager } from '../../utils/sessionStorageManager/SessionStorageManager';
import { UserDataType } from '../../utils/sessionStorageManager/types';
import { ErrorAuth } from '../../view/login/errorAuth/ErrorAuth';
import { WebSocketService } from '../WebSocketService';
import { User } from '../chatService/types';
import { IHandleErrorMessage, IMessage, TypeMessage } from '../types';
import { ILoginSend } from './types';

export class LoginService implements IHandleErrorMessage {
    private webSocketService: WebSocketService;

    private router: Router;

    private state: State;

    private errorAuth: ErrorAuth | null = null;

    constructor(webSocketService: WebSocketService, router: Router, state: State) {
        this.webSocketService = webSocketService;
        this.router = router;
        this.state = state;
    }

    public getState(): State {
        return this.state;
    }

    public login(id: string, login: string, password: string, errorAuth?: ErrorAuth) {
        this.errorAuth = errorAuth || null;
        const request: ILoginSend = {
            id,
            type: TypeMessage.USER_LOGIN,
            payload: {
                user: { login, password },
            },
        };
        this.state.setUser({
            id,
            login,
            password,
            isLogined: false,
        });
        this.webSocketService.sendRequest(request, this);
    }

    public handleUserLogin(data: ILoginSend): void {
        const { isLogined } = data.payload.user;
        const user = this.state.getUser();
        if (user) {
            this.state.setUser({
                ...user,
                isLogined,
            });
            this.router.navigate(RoutePath.CHAT);
            const { id, login, password } = user;
            this.saveUserDataToLocalStorage({ id, login, password });
        }
    }

    public handleUserExternal(user: User): void {
        this.state.addUserToAllUsers(user);
    }

    public handleErrorMessage(data: IMessage): void {
        if (data.payload && 'error' in data.payload) {
            const errorMessage = data.payload.error;
            this.errorAuth?.showMessage(errorMessage);
            SessionStorageManager.removeUserData();
        }
    }

    private saveUserDataToLocalStorage({ id, login, password }: UserDataType): void {
        SessionStorageManager.saveUserData({ id, login, password });
    }
}
