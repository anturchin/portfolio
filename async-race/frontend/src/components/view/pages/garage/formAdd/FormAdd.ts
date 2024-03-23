import { View } from '../../../View';
import { Input } from '../Input/Input';
import { InputColor } from '../InputColor/InputColor';
import { Button } from '../button/Button';

import './FormAdd.scss';

export class FormAdd extends View {
    public inputText: Input | null = null;

    public inputColor: InputColor | null = null;

    public buttonAdd: Button | null = null;

    private addCarCallback: (name: string, color: string) => void;

    private updateTitle: () => void;

    constructor(
        addCarCallback: (name: string, color: string) => void,
        updateTitle: () => void
    ) {
        super({ tag: 'form', classNames: ['form__add'] });
        this.setupForm();
        this.addCarCallback = addCarCallback;
        this.updateTitle = updateTitle;
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.setupEventListener();
    }

    private async onSubmitForm(event: Event): Promise<void> {
        event.preventDefault();
        if (this.inputText && this.inputColor) {
            const name = (this.inputText.getElement() as HTMLInputElement)
                .value;
            const color = (this.inputColor.getElement() as HTMLInputElement)
                .value;
            if (name && color) {
                await this.addCarCallback(name, color);
                this.updateTitle();
            }
        }
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('submit', this.onSubmitForm);
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
