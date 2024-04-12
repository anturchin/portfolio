import { ChatService } from '../../services/chatService/ChatService';
import { Header } from '../../view/chat/header/Header';
import { LeftPanel } from '../../view/chat/leftPanel/LeftPanel';
import { RightPanel } from '../../view/chat/rightPanel/RightPanel';
import { HeaderController } from './headerController/HeaderController';

export class ChatController {
    private headerChat: Header;

    private leftPanel: LeftPanel;

    private rightPanel: RightPanel;

    private chatService: ChatService;

    private headerController: HeaderController;

    constructor(
        headerChat: Header,
        leftPanel: LeftPanel,
        rightPanel: RightPanel,
        chatService: ChatService
    ) {
        this.headerChat = headerChat;
        this.leftPanel = leftPanel;
        this.rightPanel = rightPanel;
        this.chatService = chatService;
        this.headerController = new HeaderController(this.chatService, this.headerChat, this);
    }
}
