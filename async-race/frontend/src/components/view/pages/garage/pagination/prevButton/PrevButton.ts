import { View } from '../../../../View';

import './PrevButton.scss';

export class PrevButton extends View {
    private prevCallback?: () => void;

    constructor(prevCallback?: () => void) {
        super({ tag: 'button', classNames: ['prev__bnt'] });
        this.prevCallback = prevCallback;
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'prev';
        this.getElement().addEventListener('click', () => {
            this.prevCallback?.();
        });
    }
}
