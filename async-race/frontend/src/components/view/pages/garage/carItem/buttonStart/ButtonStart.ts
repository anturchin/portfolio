import { View } from '../../../../View';

import './ButtonStart.scss';

export class ButtonStart extends View {
    private startCallback?: () => void;

    constructor(startCallback?: () => void) {
        super({ tag: 'button', classNames: ['button__start'] });
        this.startCallback = startCallback;
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'a';
        this.getElement().addEventListener('click', () => {
            this.startCallback?.();
        });
    }
}
