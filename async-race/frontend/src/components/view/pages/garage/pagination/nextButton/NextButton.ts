import { View } from '../../../../View';

import './NextButton.scss';

export class NextButton extends View {
    private nextCallback?: () => void;

    constructor(nextCallback?: () => void) {
        super({ tag: 'button', classNames: ['next__btn'] });
        this.nextCallback = nextCallback;
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'next';
        this.getElement().addEventListener('click', () => {
            this.nextCallback?.();
        });
    }
}
