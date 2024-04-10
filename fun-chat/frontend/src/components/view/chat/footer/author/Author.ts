import { View } from '../../../View';

import './Author.scss';

export class Author extends View {
    constructor() {
        super({ tag: 'a', classNames: ['footer__author'], textContent: 'anturchin' });
        this.setupAuthor();
    }

    private setupAuthor(): void {
        (this.getElement() as HTMLLinkElement).href = 'https://github.com/anturchin';
        (this.getElement() as HTMLLinkElement).target = '_blanc';
    }
}
