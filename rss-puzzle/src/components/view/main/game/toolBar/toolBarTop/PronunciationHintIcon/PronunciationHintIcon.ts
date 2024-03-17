import { View } from '../../../../../View';

import soundImage from '../../../../../../../assets/images/sound.png';

import './PronunciationHintIcon.scss';

export class PronunciationHintIcon extends View {
    constructor() {
        super({ tag: 'img', callback: null, classNames: ['game-hint__img'] });
        this.setupPronunciationHintIcon();
    }

    private setupPronunciationHintIcon(): void {
        const img = this.viewHtmlElementCreator.getElement();
        if (img) img.setAttribute('src', `${soundImage}`);
    }
}
