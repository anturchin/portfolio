import { IObserver } from '../../../observers/Observer.interface';
import { ChatService } from '../../../services/chatService/ChatService';
import { IMessageResponse } from '../../../services/chatService/messageReceiveService/types';
import { LeftPanel } from '../../../view/chat/leftPanel/LeftPanel';
import { ChatController } from '../ChatController';

export class RightPanelController implements IObserver<IMessageResponse> {
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

    public update(data: IMessageResponse): void {
        console.log(data);
    }
}
