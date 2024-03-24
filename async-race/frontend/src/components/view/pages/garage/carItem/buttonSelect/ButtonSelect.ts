import { Car } from '../../../../../models/car/Car';
import { View } from '../../../../View';
import { FormUpdate } from '../../formUpdate/FormUpdate';

import './ButtonSelect.scss';

export class ButtonSelect extends View {
    public formUpdate: FormUpdate;

    public id: number;

    private selectCallback: (id: number) => Promise<{ data: Car }>;

    constructor(
        selectCallback: (id: number) => Promise<{ data: Car }>,
        formUpdate: FormUpdate,
        id: number
    ) {
        super({ tag: 'button', classNames: ['button__select'] });
        this.formUpdate = formUpdate;
        this.id = id;
        this.selectCallback = selectCallback;
        this.onClickSelect = this.onClickSelect.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickSelect);
    }

    private setValueInFormUpdate(
        id: number,
        name: string,
        color: string
    ): void {
        const inputText = this.formUpdate
            .getElement()
            .querySelector<HTMLInputElement>('.form__input');
        const inputColor = this.formUpdate
            .getElement()
            .querySelector<HTMLInputElement>('.form__input-color');

        const btn = this.formUpdate
            .getElement()
            .querySelector<HTMLButtonElement>('.form__btn');

        if (inputText && inputColor && btn) {
            inputText.setAttribute('data-car-id', `${id}`);
            inputText.value = name;
            inputColor.value = color;
            btn.disabled = false;
        }
    }

    private async onClickSelect(): Promise<void> {
        const {
            data: { id, name, color },
        } = await this.selectCallback(this.id);

        this.setValueInFormUpdate(id, name, color);
    }

    private setupButton(): void {
        this.getElement().textContent = 'select';
    }
}
