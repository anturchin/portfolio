import { View } from '../../../../View';

import './RaceButton.scss';

export class RaceButton extends View {
    private raceCallback?: () => void;

    constructor(raceCallback?: () => void) {
        super({ tag: 'button', classNames: ['race__button'] });
        this.raceCallback = raceCallback;
        this.setupButton();
    }

    private setupButton(): void {
        this.getElement().textContent = 'race';
        this.getElement().addEventListener('click', () => {
            this.raceCallback?.();
        });
    }
}
