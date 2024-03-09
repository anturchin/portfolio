import { View } from '../../../../View';

import imgPath from '../../../../../../assets/images/start-page.jpg';
import './ImageStartScreen.scss';

export class ImageStartScreen extends View {
    constructor() {
        super({ tag: 'img', callback: null, classNames: ['start-screen__image'] });
        this.setupBackground();
    }

    private setupBackground(): void {
        const img = this.viewHtmlElementCreator.getElement();
        img.setAttribute('src', imgPath);
    }
}
