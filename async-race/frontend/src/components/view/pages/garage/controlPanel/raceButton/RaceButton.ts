import { View } from '../../../../View';

import './RaceButton.scss';

export class RaceButton extends View {
    constructor() {
        super({ tag: 'button', classNames: ['race__button'] });
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'race';
    }
}
