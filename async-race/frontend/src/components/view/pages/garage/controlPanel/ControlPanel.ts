import { View } from '../../../View';
import { RaceButton } from './raceButton/RaceButton';
import { ResetButton } from './resetButton/ResetButton';
import { GenerateButton } from './generateButton/GenerateButton';

import './ControlPanel.scss';
import { GarageController } from '../../../../controller/garageController/GarageMainController';
import { GarageView } from '../GarageView';

export class ControlPanel extends View {
    public raceButton: RaceButton | null = null;

    public resetButton: ResetButton | null = null;

    public generateButton: GenerateButton | null = null;

    private controller: GarageController;

    private garageView: GarageView;

    constructor(controller: GarageController, garageView: GarageView) {
        super({ tag: 'section', classNames: ['control__panel'] });
        this.controller = controller;
        this.garageView = garageView;
        this.setupControlPanel();
    }

    private setupControlPanel(): void {
        this.raceButton = new RaceButton();
        this.resetButton = new ResetButton();
        this.generateButton = new GenerateButton(
            this.controller,
            this.garageView
        );

        this.getElement().append(
            ...[
                this.raceButton.getElement(),
                this.resetButton.getElement(),
                this.generateButton.getElement(),
            ]
        );
    }
}
