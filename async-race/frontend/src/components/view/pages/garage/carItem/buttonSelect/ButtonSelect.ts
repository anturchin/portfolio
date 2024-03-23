import { View } from '../../../../View';

import './ButtonSelect.scss';

export class ButtonSelect extends View {
    private selectCallback?: () => void;

    constructor(selectCallback?: () => void) {
        super({ tag: 'button', classNames: ['button__select'] });
        this.selectCallback = selectCallback;
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'select';
        this.getElement().addEventListener('click', () => {
            this.selectCallback?.();
        });
    }
}
