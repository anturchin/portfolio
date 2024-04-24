import { View } from '../View';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { LeftPanel } from './leftPanel/LeftPanel';
import { RightPanel } from './rightPanel/RightPanel';
import { ChatWrapper } from './chatWrapper/ChatWrapper';
import { WebSocketService } from '../../services/WebSocketService';
import { ChatController } from '../../controller/chatController/ChatController';
import { Router } from '../../router/router/Router';

import './Chat.scss';

export class Chat extends View {
    private headerChat: Header;

    private leftPanel: LeftPanel;

    private rightPanel: RightPanel;

    private chatController: ChatController;

    constructor(socket: WebSocketService, router: Router) {
        super({ tag: 'section', classNames: ['chat'] });
        this.headerChat = new Header(router);
        this.leftPanel = new LeftPanel();
        this.rightPanel = new RightPanel(this);
        this.chatController = new ChatController(
            this.headerChat,
            this.leftPanel,
            this.rightPanel,
            socket.getChatService(),
            socket.getState()
        );
        this.render();
    }

    public getChatController(): ChatController {
        return this.chatController;
    }

    public render(): void {
        this.renderHeader();
        this.renderChatWrapper();
        this.renderFooter();
    }

    private renderHeader(): void {
        this.getElement().prepend(this.headerChat.getElement());
    }

    private renderChatWrapper(): void {
        const chatWrapper = new ChatWrapper().getElement();
        chatWrapper.append(...[this.leftPanel.getElement(), this.rightPanel.getElement()]);
        this.addInnerElement(chatWrapper);
    }

    private renderFooter(): void {
        const footerChat = new Footer().getElement();
        this.getElement().append(footerChat);
    }
}
