import { View } from '../../../View';

import './Title.scss';

export class Title extends View {
    constructor(totalCount: number = 0) {
        super({ tag: 'h1', classNames: ['garage__title'] });
        this.setupTitle(totalCount);
    }

    private setupTitle(totalCount: number): void {
        this.getElement().textContent = 'garage ';
        const count = document.createElement('span');
        count.classList.add('title__count');
        count.textContent = `(${totalCount})`;
        this.addInnerElement(count);
    }
}
