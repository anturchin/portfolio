import { GarageController } from '../../../../../controller/garageController/GarageMainController';
import { View } from '../../../../View';
import { GarageView } from '../../GarageView';

import './ButtonStop.scss';

export class ButtonStop extends View {
    private garageController: GarageController;

    private garageView: GarageView;

    constructor(garageController: GarageController, garageView: GarageView) {
        super({ tag: 'button', classNames: ['button__stop'] });
        this.garageController = garageController;
        this.garageView = garageView;
        this.onClickStopEngine = this.onClickStopEngine.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickStopEngine);
    }

    private async onClickStopEngine(event: Event): Promise<void> {
        const target = event.target as HTMLButtonElement;
        const dataId = parseInt(target.getAttribute('data-id') || '', 10);
        const { engineController } = this.garageController;
        await engineController.stopEngine(dataId);
    }

    private setupButton(): void {
        this.getElement().textContent = 'b';
    }
}
