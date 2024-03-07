import { View } from '../View';
import { Container } from '../container/Container';

import './Footer.scss';
import { FooterAuthor } from './footerAuthor/FooterAuthor';

export class Footer extends View {
    constructor() {
        super({ tag: 'footer', classNames: ['footer'], callback: null });
        this.setupFooterContent();
    }

    setupFooterContent(): void {
        const container = new Container();
        container.addInnerElement(new FooterAuthor().getElement());
        this.viewHtmlElementCreator.addInnerElement(container.getElement());
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
