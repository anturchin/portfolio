import { ChatService } from '../../../services/chatService/ChatService';
import { LeftPanel } from '../../../view/chat/leftPanel/LeftPanel';
import { ChatController } from '../ChatController';

export class LeftPanelController {
    private chatService: ChatService;

    private mainController: ChatController;

    private leftPanel: LeftPanel;

    constructor(chatService: ChatService, leftPanel: LeftPanel, mainController: ChatController) {
        this.chatService = chatService;
        this.leftPanel = leftPanel;
        this.mainController = mainController;
        this.initialUserList();
    }

    public initialUserList(): void {
        const userList = this.leftPanel.getUserList();
        const userService = this.chatService.getUserService();
        userService.fetchAllUsers((users) => {
            userList.setUserItems(users);
        });
    }
}
