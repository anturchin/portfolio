import { View } from '../../../../View';

import './NextButton.scss';

export class NextButton extends View {
    constructor() {
        super({ tag: 'button', classNames: ['next-winner__btn'] });
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'next';
    }
}
