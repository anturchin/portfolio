import { View } from '../../../../View';

import './ButtonRemove.scss';

export class ButtonRemove extends View {
    private removeCallback?: () => void;

    constructor(removeCallback?: () => void) {
        super({ tag: 'button', classNames: ['button__remove'] });
        this.removeCallback = removeCallback;
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'remove';
        this.getElement().addEventListener('click', () => {
            this.removeCallback?.();
        });
    }
}
