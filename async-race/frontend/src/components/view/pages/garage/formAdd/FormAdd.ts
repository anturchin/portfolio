import { View } from '../../../View';
import { Input } from '../Input/Input';
import { InputColor } from '../InputColor/InputColor';
import { Button } from '../button/Button';

import './FormAdd.scss';

export class FormAdd extends View {
    public inputText: Input | null = null;

    public inputColor: InputColor | null = null;

    public buttonAdd: Button | null = null;

    private addCarCallback?: (name: string, color: string) => void;

    constructor() {
        super({ tag: 'form', classNames: ['form__add'] });
        this.setupForm();
    }

    private setupForm(): void {
        this.inputText = new Input('text');
        this.inputColor = new InputColor('color', '#F5B7B1');
        this.buttonAdd = new Button('create');
        this.getElement().append(
            ...[
                this.inputText.getElement(),
                this.inputColor.getElement(),
                this.buttonAdd.getElement(),
            ]
        );
    }
}
