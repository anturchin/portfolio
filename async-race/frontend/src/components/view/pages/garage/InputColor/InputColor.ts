import { View } from '../../../View';

import './InputColor.scss';

export class InputColor extends View {
    constructor(type: string, color: string) {
        super({ tag: 'input', classNames: ['form__input-color'] });
        this.setupInput(type, color);
    }

    private setupInput(type: string, color: string): void {
        this.getElement().setAttribute('type', type);
        this.getElement().setAttribute('value', `${color}`);
    }
}
