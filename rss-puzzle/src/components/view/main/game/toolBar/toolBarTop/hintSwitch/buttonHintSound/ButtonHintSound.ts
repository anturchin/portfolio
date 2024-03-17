import { View } from '../../../../../../View';

import imagePath from '../../../../../../../../assets/images/audio-hint.svg';

import './ButtonHintSound.scss';

export class ButtonHintSound extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['hint__item'] });
        this.setupButtonHintSound();
    }

    private setupButtonHintSound(): void {
        const img = document.createElement('img');
        img.src = imagePath;
        img.classList.add('icon');
        this.viewHtmlElementCreator.addInnerElement(img);
    }
}
