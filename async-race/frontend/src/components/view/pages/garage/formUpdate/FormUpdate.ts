import { View } from '../../../View';
import { Input } from '../Input/Input';
import { InputColor } from '../InputColor/InputColor';
import { Button } from '../button/Button';

import './FormUpdate.scss';

export class FormUpdate extends View {
    public inputText: Input | null = null;

    public inputColor: InputColor | null = null;

    public buttonUpdate: Button | null = null;

    private updateCarCallback?: (
        carId: number,
        name: string,
        color: string
    ) => void;

    constructor() {
        super({ tag: 'form', classNames: ['form__update'] });
        this.setupForm();
    }

    private setupForm(): void {
        this.inputText = new Input('text');
        this.inputColor = new InputColor('color', '#A8E4A0');
        this.buttonUpdate = new Button('update');
        this.getElement().append(
            ...[
                this.inputText.getElement(),
                this.inputColor.getElement(),
                this.buttonUpdate.getElement(),
            ]
        );
    }
}
