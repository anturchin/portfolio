import { GarageController } from '../../../controller/garageController/garageController';
import { View } from '../../View';

import './GarageView.scss';

export class GarageView extends View {
    private controller: GarageController;

    constructor(controller: GarageController) {
        super({ tag: 'section' });
        this.controller = controller;
    }
}
