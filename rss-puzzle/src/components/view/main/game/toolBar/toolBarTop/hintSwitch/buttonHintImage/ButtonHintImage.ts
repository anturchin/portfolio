import { View } from '../../../../../../View';

import imagePath from '../../../../../../../../assets/images/image-hint.svg';

import './ButtonHintImage.scss';

export class ButtonHintImage extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['hint__item'] });
        this.setupButtonHintImage();
    }

    private setupButtonHintImage(): void {
        const img = document.createElement('img');
        img.src = imagePath;
        img.classList.add('icon');
        this.viewHtmlElementCreator.addInnerElement(img);
    }
}
