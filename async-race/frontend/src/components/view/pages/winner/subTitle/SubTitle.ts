import { View } from '../../../View';

import './SubTitle.scss';

export class SubTitle extends View {
    constructor(pageNumber: number = 1) {
        super({ tag: 'h2', classNames: ['winner__subtitle'] });
        this.setupSubTitle(pageNumber);
    }

    private setupSubTitle(pageNumber: number): void {
        this.getElement().textContent = 'page ';
        const count = document.createElement('span');
        count.classList.add('subtitle__count');
        count.textContent = `# ${pageNumber}`;
        this.addInnerElement(count);
    }
}
