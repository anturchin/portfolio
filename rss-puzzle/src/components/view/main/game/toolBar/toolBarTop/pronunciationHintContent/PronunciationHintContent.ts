import { View } from '../../../../../View';

import './PronunciationHintContent.scss';

export class PronunciationHintContent extends View {
    constructor() {
        super({
            tag: 'p',
            callback: null,
            classNames: ['game-hint__text', 'text-animation', 'show__text'],
        });
    }
}
