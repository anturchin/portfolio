import { GarageController } from '../../../../../controller/garageController/GarageMainController';
import { CustomAnimation } from '../../../../../utils/animation/CustomAnimation';
import { View } from '../../../../View';
import { GarageView } from '../../GarageView';

import './ButtonStart.scss';

export class ButtonStart extends View {
    private garageController: GarageController;

    private garageView: GarageView;

    private animation: CustomAnimation;

    constructor(
        garageController: GarageController,
        garageView: GarageView,
        animation: CustomAnimation
    ) {
        super({ tag: 'button', classNames: ['button__start'] });
        this.garageController = garageController;
        this.garageView = garageView;
        this.animation = animation;
        this.onClickStartEngine = this.onClickStartEngine.bind(this);
        this.setupButton();
        this.setupEventListener();
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('click', this.onClickStartEngine);
    }

    private enableControlPanel(): void {
        const btnReset = document.querySelector<HTMLButtonElement>('.reset__button');
        const btnRace = document.querySelector<HTMLButtonElement>('.race__button');
        if (btnReset) btnReset.disabled = false;
        if (btnRace) btnRace.disabled = true;
    }

    private async onClickStartEngine(event: Event): Promise<void> {
        this.enableControlPanel();
        const target = event.target as HTMLButtonElement;
        const dataId = parseInt(target.getAttribute('data-id') || '', 10);
        const { engineController } = this.garageController;
        const parent = target.parentElement;
        const btnStop = target.nextSibling as HTMLButtonElement;

        const parentElement = parent?.querySelector<HTMLElement>('.car__image');
        const carImage = parent?.querySelector<HTMLElement>('.car__svg');
        if (parentElement && carImage) {
            try {
                const { distance, velocity } = await engineController.startEngine(dataId);

                target.disabled = true;
                if (btnStop) btnStop.disabled = false;
                this.animation
                    .setCustomAnimation(parentElement, carImage, distance, velocity)
                    .start();
                try {
                    await engineController.driveEngine(dataId);
                } catch (error) {
                    if (error instanceof Error) {
                        console.error(error.message);
                    }
                    this.animation.stop();
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
            }
        }
    }

    private setupButton(): void {
        this.getElement().textContent = 'a';
    }
}
