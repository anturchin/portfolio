import { View } from '../../../../View';

import './ResetButton.scss';

export class ResetButton extends View {
    private resetCallback?: () => void;

    constructor(resetCallback?: () => void) {
        super({ tag: 'button', classNames: ['reset__button'] });
        this.resetCallback = resetCallback;
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'reset';
        this.getElement().addEventListener('click', () => {
            this.resetCallback?.();
        });
    }
}
