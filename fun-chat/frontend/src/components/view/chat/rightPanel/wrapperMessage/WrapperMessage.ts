import { View } from '../../../View';

import './WrapperMessage.scss';
import { Placeholder } from './placeholder/Placeholder';

export class WrapperMessage extends View {
    constructor() {
        super({ tag: 'div', classNames: ['message__wrapper'] });
        this.setupWrapperMessage();
    }

    private setupWrapperMessage(): void {
        const placeholder = new Placeholder().getElement();
        this.addInnerElement(placeholder);
    }
}
