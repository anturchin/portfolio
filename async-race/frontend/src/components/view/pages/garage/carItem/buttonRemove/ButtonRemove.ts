import { GarageController } from '../../../../../controller/garageController/GarageMainController';
import { View } from '../../../../View';

import './ButtonRemove.scss';

export class ButtonRemove extends View {
    private updateTitleAndCarList: () => void;

    private removeCallback: (id: number) => void;

    private id: number;

    private garageController: GarageController;

    constructor(
        updateTitleAndCarList: () => void,
        removeCallback: (id: number) => void,
        id: number,
        garageController: GarageController
    ) {
        super({ tag: 'button', classNames: ['button__remove'] });
        this.updateTitleAndCarList = updateTitleAndCarList;
        this.removeCallback = removeCallback;
        this.onClickDelete = this.onClickDelete.bind(this);
        this.id = id;
        this.garageController = garageController;
        this.setupButton();
        this.setupEventListener();
    }

    private async onClickDelete(): Promise<void> {
        const { raceController } = this.garageController;
        raceController.clearCustomAnimation();

        try {
            await this.removeCallback(this.id);
            this.updateTitleAndCarList();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickDelete);
    }

    private setupButton(): void {
        this.getElement().textContent = 'remove';
    }
}
