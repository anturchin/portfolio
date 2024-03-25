import { View } from '../../../../View';

import './PrevButton.scss';

export class PrevButton extends View {
    constructor() {
        super({ tag: 'button', classNames: ['prev-winner__btn'] });
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'prev';
    }
}
