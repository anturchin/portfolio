import { View } from '../../../../View';

import './ButtonStop.scss';

export class ButtonStop extends View {
    private stopCallback?: () => void;

    constructor(stopCallback?: () => void) {
        super({ tag: 'button', classNames: ['button__stop'] });
        this.stopCallback = stopCallback;
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'b';
        this.getElement().addEventListener('click', () => {
            this.stopCallback?.();
        });
    }
}
