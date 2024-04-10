import { View } from '../../../View';

import './Title.scss';

export class Title extends View {
    constructor(title: string) {
        super({ tag: 'h3', classNames: ['header__title'] });
        this.setupTitle(title);
    }

    private setupTitle(title: string): void {
        this.getElement().textContent = title;
    }
}
