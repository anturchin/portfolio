import { GarageController } from '../../../../../controller/garageController/GarageMainController';
import { View } from '../../../../View';

import './ResetButton.scss';

export class ResetButton extends View {
    private controller: GarageController;

    constructor(controller: GarageController) {
        super({ tag: 'button', classNames: ['reset__button'] });
        this.controller = controller;
        this.onClickReset = this.onClickReset.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickReset);
    }

    private enableBtnStartAndStop(): void {
        const btnStart = document.querySelectorAll<HTMLButtonElement>('.button__start');
        const btnStop = document.querySelectorAll<HTMLButtonElement>('.button__stop');
        const btnRace = document.querySelector<HTMLButtonElement>('.race__button');
        if (btnRace) btnRace.disabled = false;
        btnStart?.forEach((_, i) => {
            btnStart[i].disabled = false;
            btnStop[i].disabled = true;
        });
    }

    private async onClickReset(event: Event): Promise<void> {
        const target = event.target as HTMLButtonElement;
        target.disabled = true;
        const { raceController } = this.controller;
        this.enableBtnStartAndStop();
        try {
            await raceController.resetRace();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    private setupButton(): void {
        this.getElement().textContent = 'reset';
        (this.getElement() as HTMLButtonElement).disabled = true;
    }
}
