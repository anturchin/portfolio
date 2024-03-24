import { GarageController } from '../../../../../controller/garageController/GarageMainController';
import { View } from '../../../../View';
import { GarageView } from '../../GarageView';

import './GenerateButton.scss';

export class GenerateButton extends View {
    private controller: GarageController;

    private garageView: GarageView;

    constructor(controller: GarageController, garageView: GarageView) {
        super({ tag: 'button', classNames: ['generate__button'] });
        this.controller = controller;
        this.garageView = garageView;
        this.onClickGenerate = this.onClickGenerate.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickGenerate);
    }

    private async onClickGenerate(): Promise<void> {
        await this.controller.generateRandomCars();
        this.garageView.updateTitleAndCarList();
    }

    private setupButton(): void {
        this.getElement().textContent = 'generate (100+)';
    }
}
