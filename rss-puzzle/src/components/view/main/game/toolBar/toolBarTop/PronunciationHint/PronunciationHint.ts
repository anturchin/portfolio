import { View } from '../../../../../View';

import './PronunciationHint.scss';

export class PronunciationHint extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['game-hint'] });
    }
}
