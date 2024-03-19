import { View } from '../../../View';

import imagePath from '../../../../../assets/images/sound.png';

import './PictureSound.scss';

export class PictureSound extends View {
    constructor(pathAudio: string) {
        super({ tag: 'img', callback: null, classNames: ['picture__sound'] });
        this.setupPicture();
        this.setupEventListener(pathAudio);
    }

    private setupEventListener(pathAudio: string): void {
        const audio = new Audio();
        audio.src = pathAudio;

        this.viewHtmlElementCreator.getElement().addEventListener('click', () => {
            audio.play();
        });
    }

    private setupPicture(): void {
        (this.viewHtmlElementCreator.getElement() as HTMLImageElement).src = imagePath;
    }
}
