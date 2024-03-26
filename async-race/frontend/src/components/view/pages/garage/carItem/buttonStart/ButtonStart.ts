import { GarageController } from '../../../../../controller/garageController/GarageMainController';
import { View } from '../../../../View';
import { GarageView } from '../../GarageView';

import './ButtonStart.scss';

export class ButtonStart extends View {
    private garageController: GarageController;

    private garageView: GarageView;

    constructor(garageController: GarageController, garageView: GarageView) {
        super({ tag: 'button', classNames: ['button__start'] });
        this.garageController = garageController;
        this.garageView = garageView;
        this.onClickStartEngine = this.onClickStartEngine.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickStartEngine);
    }

    private async onClickStartEngine(event: Event): Promise<void> {
        const target = event.target as HTMLButtonElement;
        const dataId = parseInt(target.getAttribute('data-id') || '', 10);
        const { engineController } = this.garageController;
        // prettier-ignore
        const { distance, velocity } = await engineController.startEngine(dataId);
        console.log(distance, velocity);
        try {
            await engineController.driveEngine(dataId);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    private setupButton(): void {
        this.getElement().textContent = 'a';
    }
}
