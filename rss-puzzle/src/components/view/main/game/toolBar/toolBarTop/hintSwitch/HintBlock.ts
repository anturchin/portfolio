import { View } from '../../../../../View';
import { ButtonHintImage } from './buttonHintImage/ButtonHintImage';
import { ButtonHintSound } from './buttonHintSound/ButtonHintSound';
import { ButtonHintText } from './buttonHintText/ButtonHintText';

import './HintBlock.scss';

export class HintBlock extends View {
    constructor() {
        super({ tag: 'div', callback: null, classNames: ['hint'] });
        this.setupHintBlock();
    }

    private setupHintBlock(): void {
        const btnHintText = new ButtonHintText().getElement();
        const btnHintSound = new ButtonHintSound().getElement();
        const btnHintImage = new ButtonHintImage().getElement();
        this.viewHtmlElementCreator
            .getElement()
            .append(...[btnHintSound, btnHintText, btnHintImage]);
    }
}
