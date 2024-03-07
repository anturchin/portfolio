import { View } from '../../View';

import './FooterAuthor.scss';
import { FooterLink } from './footerLink/FooterLink';

export class FooterAuthor extends View {
    constructor() {
        super({
            tag: 'p',
            classNames: ['footer__author'],
            callback: null,
            textContent: "The author's github: ",
        });
        this.setupFooterAuthorContent();
    }

    setupFooterAuthorContent(): void {
        this.viewHtmlElementCreator.addInnerElement(new FooterLink().getElement());
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
