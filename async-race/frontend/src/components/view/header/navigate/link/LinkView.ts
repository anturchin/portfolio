import { View } from '../../../View';

import './LinkView.scss';

export class LinkView extends View {
    constructor(textContent: string, id: string) {
        super({ tag: 'li', classNames: ['nav__link'], textContent });
        this.setupLinkView(id);
    }

    private setupLinkView(id: string): void {
        this.getElement().id = id;
    }
}
