import { View } from '../../../../View';

import './GenerateButton.scss';

export class GenerateButton extends View {
    private generateCallback?: () => void;

    constructor(generateCallback?: () => void) {
        super({ tag: 'button', classNames: ['generate__button'] });
        this.generateCallback = generateCallback;
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'generate (100+)';
        this.getElement().addEventListener('click', () => {
            this.generateCallback?.();
        });
    }
}
