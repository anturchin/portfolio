import { View } from '../../../View';
import { ImageStartScreen } from './imageStartScreen/ImageStartScreen';

export class BlockImage extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['start-screen__block'] });
        this.setupBlockImage();
    }

    private setupBlockImage(): void {
        const img = new ImageStartScreen().getElement();
        this.viewHtmlElementCreator.addInnerElement(img);
    }
}
