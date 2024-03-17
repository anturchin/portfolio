import { View } from '../../../../../../View';

import imagePath from '../../../../../../../../assets/images/text-hint.svg';

import './ButtonHintText.scss';

export class ButtonHintText extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['hint__item'] });
        this.setupButtonHintText();
    }

    private setupButtonHintText(): void {
        const img = document.createElement('img');
        img.src = imagePath;
        img.classList.add('icon');
        this.viewHtmlElementCreator.addInnerElement(img);
    }
}
