import { IObserverMessages } from '../../../observers/observerMessages/ObserverMessages.interface';
import { ChatService } from '../../../services/chatService/ChatService';
import { IMessageResponse } from '../../../services/chatService/messageReceiveService/types';
import { LeftPanel } from '../../../view/chat/leftPanel/LeftPanel';
import { ChatController } from '../ChatController';

export class RightPanelController implements IObserverMessages<IMessageResponse> {
    private chatService: ChatService;

    private mainController: ChatController;

    private leftPanel: LeftPanel;

    constructor(chatService: ChatService, leftPanel: LeftPanel, mainController: ChatController) {
        this.chatService = chatService;
        this.leftPanel = leftPanel;
        this.mainController = mainController;

        const messageReceiveService = this.chatService.getMessageReceiveService();
        messageReceiveService.registerObserver(this.constructor.name, this);
    }

    public updateMessages(data: IMessageResponse): void {
        console.log(data);
    }
}
