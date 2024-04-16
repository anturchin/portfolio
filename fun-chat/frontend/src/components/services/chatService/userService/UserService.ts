import { Router } from '../../../router/router/Router';
import { State } from '../../../state/State';
import { SessionStorageManager } from '../../../utils/sessionStorageManager/SessionStorageManager';
import { WebSocketService } from '../../WebSocketService';
import { IHandleErrorMessage, IMessage, TypeMessage } from '../../types';
import { CallBackUsers, IUsersAccept, IUsersSend } from '../types';

export class UserService implements IHandleErrorMessage {
    private webSocketService: WebSocketService;

    private router: Router;

    private state: State;

    private updateUserList?: CallBackUsers;

    constructor(webSocketService: WebSocketService, router: Router, state: State) {
        this.webSocketService = webSocketService;
        this.router = router;
        this.state = state;
    }

    public fetchAllUsers(callback: CallBackUsers): void {
        this.updateUserList = callback;
        this.sendRequest();
    }

    public sendRequest(): void {
        const requestUserActive: IUsersSend = {
            id: SessionStorageManager.generateRequestId(),
            type: TypeMessage.USER_ACTIVE,
            payload: null,
        };
        const requestUserInActive: IUsersSend = {
            id: SessionStorageManager.generateRequestId(),
            type: TypeMessage.USER_INACTIVE,
            payload: null,
        };
        this.webSocketService.sendRequest(requestUserActive, this);
        this.webSocketService.sendRequest(requestUserInActive, this);
    }

    public handleUsers(data: IUsersAccept): void {
        if (data.type === TypeMessage.USER_ACTIVE) {
            const usersActive = data.payload ? data.payload.users : [];
            this.state.setUsersActive(usersActive);
            return;
        }
        if (data.type === TypeMessage.USER_INACTIVE) {
            const usersInActive = data.payload ? data.payload.users : [];
            this.state.setUsersInActive(usersInActive);
        }

        const userDate = SessionStorageManager.getUserData();
        const allUsers = [...this.state.getUsersActive(), ...this.state.getUsersInActive()].filter(
            (item) => item.login !== userDate?.login
        );
        this.updateUserList?.(allUsers);
    }

    public handleErrorMessage(data: IMessage): void {
        if (data.payload && 'error' in data.payload) {
            const errorMessage = data.payload.error;
            console.error(errorMessage);
        }
    }
}
