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
        btnStart?.forEach((_, i) => {
            btnStart[i].disabled = false;
            btnStop[i].disabled = true;
        });
    }

    private async onClickReset(): Promise<void> {
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
    }
}
