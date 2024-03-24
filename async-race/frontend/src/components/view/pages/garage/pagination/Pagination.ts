import { View } from '../../../View';
import { NextButton } from './nextButton/NextButton';
import { PrevButton } from './prevButton/PrevButton';
import { GarageController } from '../../../../controller/garageController/GarageMainController';
import { GarageView } from '../GarageView';

import './Pagination.scss';

export class Pagination extends View {
    private controller: GarageController;

    private garageView: GarageView;

    constructor(controller: GarageController, garageView: GarageView) {
        super({ tag: 'section', classNames: ['pagination'] });
        this.controller = controller;
        this.garageView = garageView;
        this.setupPagination();
    }

    private setupPagination(): void {
        const prevButton = new PrevButton(this.controller, this.garageView);
        const nextButton = new NextButton(this.controller, this.garageView);
        this.getElement().append(
            ...[prevButton.getElement(), nextButton.getElement()]
        );
    }
}
