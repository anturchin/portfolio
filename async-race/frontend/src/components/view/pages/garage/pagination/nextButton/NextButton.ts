import { GarageController } from '../../../../../controller/garageController/GarageMainController';
import { View } from '../../../../View';
import { GarageView } from '../../GarageView';

import './NextButton.scss';

export class NextButton extends View {
    private controller: GarageController;

    private garageView: GarageView;

    constructor(controller: GarageController, garageView: GarageView) {
        super({ tag: 'button', classNames: ['next__btn'] });
        this.controller = controller;
        this.garageView = garageView;
        this.onClickNext = this.onClickNext.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickNext);
    }

    private async onClickNext(): Promise<void> {
        try {
            await this.controller.nextPage();
            this.garageView.updateTitleAndCarList();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    private setupButton(): void {
        this.getElement().textContent = 'next';
    }
}
