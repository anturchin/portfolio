import { View } from '../View';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { LeftPanel } from './leftPanel/LeftPanel';
import { RightPanel } from './rightPanel/RightPanel';
import { ChatWrapper } from './chatWrapper/ChatWrapper';

import './Chat.scss';

export class Chat extends View {
    public leftPanel: LeftPanel;

    public rightPanel: RightPanel;

    constructor() {
        super({ tag: 'section', classNames: ['chat'] });
        this.leftPanel = new LeftPanel();
        this.rightPanel = new RightPanel();
        this.render();
    }

    public render(): void {
        this.renderHeader();
        this.renderChatWrapper();
        this.renderFooter();
    }

    private renderHeader(): void {
        const headerChat = new Header().getElement();
        this.getElement().prepend(headerChat);
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
