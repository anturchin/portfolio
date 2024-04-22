import { View } from '../../View';

import './AboutAuthor.scss';

export class AboutAuthor extends View {
    constructor() {
        super({ tag: 'a', classNames: ['about__author'], textContent: 'anturchin' });
        this.setupAboutAuthor();
    }

    private setupAboutAuthor(): void {
        (this.getElement() as HTMLAnchorElement).href = 'https://github.com/anturchin';
    }
}
