import { View } from '../../../View';

import './Input.scss';

export class Input extends View {
    constructor(type: string) {
        super({ tag: 'input', classNames: ['form__input'] });
        this.setupInput(type);
    }

    private setupInput(type: string): void {
        this.getElement().setAttribute('type', type);
    }
}
