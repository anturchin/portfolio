import { GarageController } from '../../../../controller/garageController/GarageMainController';
import { View } from '../../../View';
import { GarageView } from '../GarageView';
import { Input } from '../Input/Input';
import { InputColor } from '../InputColor/InputColor';
import { Button } from '../button/Button';

import './FormUpdate.scss';

export class FormUpdate extends View {
    private controller: GarageController;

    private garageView: GarageView;

    public inputText: Input;

    public inputColor: InputColor;

    public buttonUpdate: Button;

    constructor(controller: GarageController, garageView: GarageView) {
        super({ tag: 'form', classNames: ['form__update'] });
        this.controller = controller;
        this.garageView = garageView;
        this.inputText = new Input('text');
        this.inputColor = new InputColor('color', '#A8E4A0');
        this.buttonUpdate = new Button('update');
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.setupForm();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('submit', this.onSubmitForm);
    }

    private clearForm(): void {
        const inputValue = this.inputText.getElement() as HTMLInputElement;
        const btn = this.buttonUpdate.getElement() as HTMLButtonElement;
        inputValue.value = '';
        btn.disabled = true;
    }

    private async onSubmitForm(event: Event): Promise<void> {
        event.preventDefault();
        const name = (this.inputText.getElement() as HTMLInputElement).value;
        const idString = this.inputText
            .getElement()
            .getAttribute('data-car-id');
        const id = parseInt(idString || '', 10);
        const color = (this.inputColor.getElement() as HTMLInputElement).value;
        if (name && id && color) {
            try {
                await this.controller.updateCar({ id, name, color });
                this.garageView.updateTitleAndCarList();
                this.clearForm();
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
            }
        }
    }

    private setupForm(): void {
        (this.buttonUpdate.getElement() as HTMLButtonElement).disabled = true;
        this.getElement().append(
            ...[
                this.inputText.getElement(),
                this.inputColor.getElement(),
                this.buttonUpdate.getElement(),
            ]
        );
    }
}
