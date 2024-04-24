import { ChatService } from '../../services/chatService/ChatService';
import { State } from '../../state/State';
import { Header } from '../../view/chat/header/Header';
import { LeftPanel } from '../../view/chat/leftPanel/LeftPanel';
import { RightPanel } from '../../view/chat/rightPanel/RightPanel';
import { HeaderController } from './headerController/HeaderController';
import { LeftPanelController } from './leftPanelController/LeftPanelController';
import { RightPanelController } from './rightPanelController/RightPanelController';

export class ChatController {
    private headerChat: Header;

    private leftPanel: LeftPanel;

    private rightPanel: RightPanel;

    private chatService: ChatService;

    private headerController: HeaderController;

    private leftPanelController: LeftPanelController;

    private rightPanelController: RightPanelController;

    constructor(
        headerChat: Header,
        leftPanel: LeftPanel,
        rightPanel: RightPanel,
        chatService: ChatService,
        state: State
    ) {
        this.headerChat = headerChat;
        this.leftPanel = leftPanel;
        this.rightPanel = rightPanel;
        this.chatService = chatService;
        this.headerController = new HeaderController(this.chatService, this.headerChat, this);
        this.leftPanelController = new LeftPanelController(
            this.chatService,
            this.leftPanel,
            state,
            this
        );
        this.rightPanelController = new RightPanelController(
            this.chatService,
            this.rightPanel,
            this.leftPanel,
            state
        );
    }

    public getRightPanelController(): RightPanelController {
        return this.rightPanelController;
    }

    public getRightPanel(): RightPanel {
        return this.rightPanel;
    }
}
