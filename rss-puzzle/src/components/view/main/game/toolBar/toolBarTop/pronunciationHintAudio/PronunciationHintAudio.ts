import { View } from '../../../../../View';

import { PronunciationHintImage } from '../pronunciationHintImage/PronunciationHintImage';

import './PronunciationHintAudio.scss';

export class PronunciationHintAudio extends View {
    public onHandleClickAudioSound?: () => void;

    constructor(onHandleClickAudioSound: () => void) {
        super({
            tag: 'div',
            callback: null,
            classNames: ['game-hint__button', 'show__text'],
        });
        this.onHandleClickAudioSound = onHandleClickAudioSound;
        this.setupPronunciationHintButton();
        this.setEventListener();
    }

    private setEventListener(): void {
        this.viewHtmlElementCreator.getElement().addEventListener('click', () => {
            this.onHandleClickAudioSound?.();
        });
    }

    private setupPronunciationHintButton(): void {
        const soundImage = new PronunciationHintImage().getElement();
        this.viewHtmlElementCreator.addInnerElement(soundImage);
    }
}
