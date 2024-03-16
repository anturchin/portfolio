import { View } from '../../../View';
// import { GamePuzzleImage } from './gamePuzzleImage/GamePuzzleImage';

import './GamePuzzle.scss';

export class GamePuzzle extends View {
    constructor() {
        super({ tag: 'div', classNames: ['game__puzzle', 'placeholder'], callback: null });
    }
}
