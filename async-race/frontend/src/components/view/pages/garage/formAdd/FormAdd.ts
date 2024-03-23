import { View } from '../../../View';
import { Input } from '../Input/Input';

import './FormAdd.scss';

export class FormAdd extends View {
    public inputText: Input | null = null;

    public inputColor: Input | null = null;

    private addCarCallback?: (name: string, color: string) => void;

    constructor() {
        super({ tag: 'form', classNames: ['form__add'] });
        this.setupForm();
    }

    private setupForm(): void {
        this.inputText = new Input('text');
        this.inputColor = new Input('color');
        this.getElement().append(
            ...[this.inputText.getElement(), this.inputColor.getElement()]
        );
    }
}
