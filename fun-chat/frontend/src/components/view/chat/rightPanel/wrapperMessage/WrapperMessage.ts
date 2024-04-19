import { View } from '../../../View';
import { Placeholder } from './placeholder/Placeholder';

import './WrapperMessage.scss';

export class WrapperMessage extends View {
    private placeholder: Placeholder;

    constructor() {
        super({ tag: 'div', classNames: ['message__wrapper'] });
        this.placeholder = new Placeholder();
        this.setupWrapperMessage();
    }

    public placeHolderHidden(): void {
        const placeholder = this.placeholder.getElement();
        placeholder.classList.remove('hidden');
    }

    public updateTextContentInPlaceholder(): void {
        const placeholder = this.placeholder.getElement();
        placeholder.textContent = 'Write your first message...';
    }

    private setupWrapperMessage(): void {
        this.addInnerElement(this.placeholder.getElement());
    }
}
