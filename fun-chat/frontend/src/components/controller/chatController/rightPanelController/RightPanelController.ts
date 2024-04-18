import { IObserverMessages } from '../../../observers/observerMessages/ObserverMessages.interface';
import { ChatService } from '../../../services/chatService/ChatService';
import { IMessageResponse } from '../../../services/chatService/messageReceiveService/types';
import { State } from '../../../state/State';
import { LeftPanel } from '../../../view/chat/leftPanel/LeftPanel';

export class RightPanelController implements IObserverMessages<IMessageResponse> {
    private chatService: ChatService;

    private leftPanel: LeftPanel;

    private state: State;

    constructor(chatService: ChatService, leftPanel: LeftPanel, state: State) {
        this.chatService = chatService;
        this.leftPanel = leftPanel;
        this.state = state;
        this.state.registerMessageObserver(this.constructor.name, this);
    }

    public updateMessages(data: IMessageResponse): void {
        console.log(data);
    }
}
