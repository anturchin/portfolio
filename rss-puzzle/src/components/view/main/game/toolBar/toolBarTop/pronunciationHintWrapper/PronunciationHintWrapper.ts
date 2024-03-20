import { View } from '../../../../../View';

import './PronunciationHintWrapper.scss';

export class PronunciationHintWrapper extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['game-hint'] });
    }
}
