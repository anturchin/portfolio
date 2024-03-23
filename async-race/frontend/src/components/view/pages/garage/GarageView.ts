import { GarageController } from '../../../controller/garageController/GarageController';
import { View } from '../../View';

import './GarageView.scss';

export class GarageView extends View {
    private controller: GarageController;

    constructor(controller: GarageController) {
        super({ tag: 'section' });
        this.controller = controller;
    }

    public renderFormAdd(): void {}
}
