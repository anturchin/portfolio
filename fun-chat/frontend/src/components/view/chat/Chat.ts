import { View } from '../View';
import { Header } from './header/Header';

import './Chat.scss';
import { Footer } from './footer/Footer';

export class Chat extends View {
    constructor() {
        super({ tag: 'section', classNames: ['chat'] });
        this.render();
    }

    public render(): void {
        this.renderHeader();
        this.renderFooter();
    }

    private renderHeader(): void {
        const headerChat = new Header().getElement();
        this.getElement().prepend(headerChat);
    }

    private renderFooter(): void {
        const footerChat = new Footer().getElement();
        this.getElement().append(footerChat);
    }
}
