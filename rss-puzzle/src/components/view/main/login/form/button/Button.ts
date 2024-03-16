import { ButtonType } from './types';
import { View } from '../../../../View';

import './Button.scss';

export class Button extends View {
    constructor(props: ButtonType) {
        super({ tag: 'button', classNames: ['login__button'], callback: null });
        this.setupInput(props);
    }

    private setupInput(props: ButtonType): void {
        const button = this.viewHtmlElementCreator.getElement() as HTMLButtonElement;
        button.textContent = props.label;
        if (props.disabled) {
            button.disabled = props.disabled;
        }
    }
}
