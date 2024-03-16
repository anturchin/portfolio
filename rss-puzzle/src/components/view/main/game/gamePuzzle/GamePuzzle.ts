import { View } from '../../../View';

import './GamePuzzle.scss';
import { GamePuzzleImage } from './gamePuzzleImage/GamePuzzleImage';

export class GamePuzzle extends View {
    constructor(pathImage?: string) {
        super({ tag: 'div', classNames: ['game__puzzle', 'placeholder'], callback: null });
        if (pathImage) {
            this.setupGamePuzzle(pathImage);
        }
    }

    public removePlaceholder(): void {
        this.viewHtmlElementCreator.getElement().classList.remove('placeholder');
    }

    private setupGamePuzzle(pathImage: string): void {
        const gamePuzzleImage = new GamePuzzleImage(pathImage).getElement();
        const gamePuzzle = this.viewHtmlElementCreator;
        gamePuzzle.addInnerElement(gamePuzzleImage);
    }
}
