import { View } from '../../../../../View';

import './PronunciationHintText.scss';

export class PronunciationHintText extends View {
    constructor() {
        super({
            tag: 'p',
            callback: null,
            classNames: ['game-hint__text'],
        });
    }
}
