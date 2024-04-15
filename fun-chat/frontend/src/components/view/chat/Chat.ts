import { View } from '../View';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { LeftPanel } from './leftPanel/LeftPanel';
import { RightPanel } from './rightPanel/RightPanel';
import { ChatWrapper } from './chatWrapper/ChatWrapper';
import { WebSocketService } from '../../services/WebSocketService';
import { ChatController } from '../../controller/chatController/ChatController';

import './Chat.scss';

export class Chat extends View {
    private headerChat: Header;

    private leftPanel: LeftPanel;

    private rightPanel: RightPanel;

    private chatController: ChatController;

    constructor(socket: WebSocketService) {
        super({ tag: 'section', classNames: ['chat'] });
        this.headerChat = new Header();
        this.leftPanel = new LeftPanel();
        this.rightPanel = new RightPanel();
        this.chatController = new ChatController(
            this.headerChat,
            this.leftPanel,
            this.rightPanel,
            socket.getChatService()
        );
        this.render();
    }

    public render(): void {
        console.log('render chat');
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
