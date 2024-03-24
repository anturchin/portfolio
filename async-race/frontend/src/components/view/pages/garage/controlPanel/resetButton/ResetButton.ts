import { View } from '../../../../View';

import './ResetButton.scss';

export class ResetButton extends View {
    constructor() {
        super({ tag: 'button', classNames: ['reset__button'] });
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'reset';
    }
}
