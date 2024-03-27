import { GarageController } from '../../../../../controller/garageController/GarageMainController';
import { View } from '../../../../View';

import './RaceButton.scss';

export class RaceButton extends View {
    private controller: GarageController;

    constructor(controller: GarageController) {
        super({ tag: 'button', classNames: ['race__button'] });
        this.controller = controller;
        this.onClickRace = this.onClickRace.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickRace);
    }

    private enableBtnStartAndStop(): void {
        const btnStart = document.querySelectorAll<HTMLButtonElement>('.button__start');
        const btnStop = document.querySelectorAll<HTMLButtonElement>('.button__stop');
        btnStart?.forEach((_, i) => {
            btnStart[i].disabled = true;
            btnStop[i].disabled = false;
        });
    }

    private async onClickRace(): Promise<void> {
        const { raceController } = this.controller;
        this.enableBtnStartAndStop();
        try {
            await raceController.startRace();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    private setupButton(): void {
        this.getElement().textContent = 'race';
    }
}
