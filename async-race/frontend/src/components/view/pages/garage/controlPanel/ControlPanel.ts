import { View } from '../../../View';
import { RaceButton } from './raceButton/RaceButton';
import { ResetButton } from './resetButton/ResetButton';
import { GenerateButton } from './generateButton/GenerateButton';

import './ControlPanel.scss';

export class ControlPanel extends View {
    public raceButton: RaceButton | null = null;

    public resetButton: ResetButton | null = null;

    public generateButton: GenerateButton | null = null;

    private resetCallback?: () => void;

    private raceCallback?: () => void;

    private generateCallback?: () => void;

    constructor(
        resetCallback?: () => void,
        raceCallback?: () => void,
        generateCallback?: () => void
    ) {
        super({ tag: 'section', classNames: ['control__panel'] });
        this.resetCallback = resetCallback;
        this.raceCallback = raceCallback;
        this.generateCallback = generateCallback;
        this.setupControlPanel();
    }

    private setupControlPanel(): void {
        this.raceButton = new RaceButton(this.raceCallback);
        this.resetButton = new ResetButton(this.resetCallback);
        this.generateButton = new GenerateButton(this.generateCallback);

        this.getElement().append(
            ...[
                this.raceButton.getElement(),
                this.resetButton.getElement(),
                this.generateButton.getElement(),
            ]
        );
    }
}
