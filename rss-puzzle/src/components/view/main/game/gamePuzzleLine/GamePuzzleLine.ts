import { View } from '../../../View';

import './GamePuzzleLine.scss';

export class GamePuzzleLine extends View {
    private isActive: boolean;

    constructor(isActive: boolean = false) {
        super({ tag: 'ul', callback: null, classNames: ['game__row', 'placeholder'] });
        this.isActive = isActive;
        this.setupGamePuzzle();
    }

    private setupGamePuzzle(): void {
        if (this.isActive) {
            const linePuzzle = this.viewHtmlElementCreator.getElement();
            linePuzzle.classList.add('active');
        }
    }
}
