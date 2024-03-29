import { GarageController } from '../../../../../controller/garageController/GarageMainController';
import { View } from '../../../../View';
import { GarageView } from '../../GarageView';

import './PrevButton.scss';

export class PrevButton extends View {
    private controller: GarageController;

    private garageView: GarageView;

    constructor(controller: GarageController, garageView: GarageView) {
        super({ tag: 'button', classNames: ['prev__bnt'] });
        this.controller = controller;
        this.garageView = garageView;
        this.onClickPrev = this.onClickPrev.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickPrev);
    }

    private async onClickPrev(): Promise<void> {
        const { raceController } = this.controller;
        raceController.clearCustomAnimation();

        try {
            await this.controller.prevPage();
            this.garageView.updateTitleAndCarList();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    private setupButton(): void {
        this.getElement().textContent = 'prev';
    }
}
