import { GarageController } from '../../../../../controller/garageController/GarageMainController';
import { CustomAnimation } from '../../../../../utils/animation/CustomAnimation';
import { View } from '../../../../View';
import { GarageView } from '../../GarageView';

import './ButtonStop.scss';

export class ButtonStop extends View {
    private garageController: GarageController;

    private garageView: GarageView;

    private animation: CustomAnimation;

    constructor(
        garageController: GarageController,
        garageView: GarageView,
        animation: CustomAnimation
    ) {
        super({ tag: 'button', classNames: ['button__stop'] });
        this.garageController = garageController;
        this.garageView = garageView;
        this.animation = animation;
        this.onClickStopEngine = this.onClickStopEngine.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickStopEngine);
        (this.getElement() as HTMLButtonElement).disabled = true;
    }

    private enableControlPanel(): void {
        const btnReset = document.querySelector<HTMLButtonElement>('.reset__button');
        const btnRace = document.querySelector<HTMLButtonElement>('.race__button');
        const bntStop = document.querySelectorAll<HTMLButtonElement>('.button__stop');
        const isDisabled = [...bntStop].every((btn) => btn.disabled);
        if (isDisabled && btnRace && btnReset) {
            btnRace.disabled = false;
            btnReset.disabled = true;
        }
    }

    private async onClickStopEngine(event: Event): Promise<void> {
        const target = event.target as HTMLButtonElement;
        const btnStart = target.previousSibling as HTMLButtonElement;
        const dataId = parseInt(target.getAttribute('data-id') || '', 10);
        const { engineController } = this.garageController;
        try {
            await engineController.stopEngine(dataId);
            this.animation.reset();
            target.disabled = true;
            btnStart.disabled = false;
            this.enableControlPanel();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    private setupButton(): void {
        this.getElement().textContent = 'b';
    }
}
