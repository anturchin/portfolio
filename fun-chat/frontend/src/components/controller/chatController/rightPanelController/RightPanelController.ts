import { IObserverMessages } from '../../../observers/observerMessages/ObserverMessages.interface';
import { ChatService } from '../../../services/chatService/ChatService';
import { MessageTakeType } from '../../../services/chatService/messageReceiveService/types';
import { User } from '../../../services/chatService/types';
import { State } from '../../../state/State';
import { LeftPanel } from '../../../view/chat/leftPanel/LeftPanel';

export class RightPanelController implements IObserverMessages<MessageTakeType[]> {
    private chatService: ChatService;

    private leftPanel: LeftPanel;

    private state: State;

    constructor(chatService: ChatService, leftPanel: LeftPanel, state: State) {
        this.chatService = chatService;
        this.leftPanel = leftPanel;
        this.state = state;
        this.state.registerMessageObserver(this.constructor.name, this);
    }

    public updateMessages(data: MessageTakeType[], user: User): void {
        console.log(data);
        console.log(user);
    }
}
