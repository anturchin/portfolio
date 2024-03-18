import { View } from '../../../../../View';
import { PronunciationHintIcon } from '../pronunciationHintIcon/PronunciationHintIcon';

import './PronunciationHintButton.scss';

export class PronunciationHintButton extends View {
    public onHandleClickAudioSound?: () => void;

    constructor(onHandleClickAudioSound: () => void) {
        super({
            tag: 'div',
            callback: null,
            classNames: ['game-hint__button', 'show__button'],
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
        const soundImage = new PronunciationHintIcon().getElement();
        this.viewHtmlElementCreator.addInnerElement(soundImage);
    }
}
