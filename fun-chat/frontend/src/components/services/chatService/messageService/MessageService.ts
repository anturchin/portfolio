import { Router } from '../../../router/router/Router';
import { State } from '../../../state/State';
import { WebSocketService } from '../../WebSocketService';
import { IHandleErrorMessage, IMessage } from '../../types';

export class MessageService implements IHandleErrorMessage {
    private webSocketService: WebSocketService;

    private router: Router;

    private state: State;

    constructor(webSocketService: WebSocketService, router: Router, state: State) {
        this.webSocketService = webSocketService;
        this.router = router;
        this.state = state;
    }

    public handleErrorMessage(data: IMessage): void {
        if (data.payload && 'error' in data.payload) {
            const errorMessage = data.payload.error;
            console.error(errorMessage);
        }
    }
}
