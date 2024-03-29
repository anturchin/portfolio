import { GarageController } from '../../../../controller/garageController/GarageMainController';
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

    private updateTitleAndCarList: () => void;

    private garageController: GarageController;

    constructor(
        addCarCallback: (name: string, color: string) => void,
        updateTitleAndCarList: () => void,
        garageController: GarageController
    ) {
        super({ tag: 'form', classNames: ['form__add'] });
        this.addCarCallback = addCarCallback;
        this.updateTitleAndCarList = updateTitleAndCarList;
        this.garageController = garageController;
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.setupForm();
        this.setupEventListener();
    }

    private async onSubmitForm(event: Event): Promise<void> {
        event.preventDefault();

        const { raceController } = this.garageController;
        raceController.clearCustomAnimation();

        if (this.inputText && this.inputColor) {
            const name = (this.inputText.getElement() as HTMLInputElement)
                .value;
            const color = (this.inputColor.getElement() as HTMLInputElement)
                .value;
            if (name && color) {
                try {
                    await this.addCarCallback(name, color);
                    (this.inputText.getElement() as HTMLInputElement).value = '';
                    this.updateTitleAndCarList();
                } catch (error) {
                    if (error instanceof Error) {
                        console.error(error.message);
                    }
                }
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
