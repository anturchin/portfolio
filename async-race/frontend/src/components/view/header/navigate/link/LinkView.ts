import { View } from '../../../View';

import './LinkView.scss';

export class LinkView extends View {
    constructor(textContent: string, id: string, classActive?: string) {
        const styles = classActive ? 'nav__link active' : 'nav__link';
        super({ tag: 'li', classNames: [...styles.split(' ')], textContent });
        this.setupLinkView(id);
    }

    private setupLinkView(id: string): void {
        this.getElement().id = id;
    }
}
