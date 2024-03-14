import { View } from '../../../../View';

import './GamePuzzleImage.scss';

export class GamePuzzleImage extends View {
    constructor(pathImage: string) {
        super({ tag: 'img', classNames: ['game__puzzle'], callback: null });
        this.setupGamePuzzleImage(pathImage);
    }

    private setupGamePuzzleImage(pathImage: string): void {
        const image = this.viewHtmlElementCreator.getElement();
        image.setAttribute('src', pathImage);
        image.setAttribute('alt', 'image puzzle');
    }
}
