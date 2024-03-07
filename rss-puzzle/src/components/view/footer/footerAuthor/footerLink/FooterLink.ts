import { View } from '../../../View';

import './FooterLink.scss';

export class FooterLink extends View {
    constructor() {
        super({
            tag: 'a',
            classNames: ['footer__link'],
            callback: null,
            textContent: 'anturchin',
        });
        this.setLink();
    }

    setLink() {
        const footerLink = this.viewHtmlElementCreator.getElement();
        footerLink.setAttribute('href', 'https://github.com/anturchin');
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
