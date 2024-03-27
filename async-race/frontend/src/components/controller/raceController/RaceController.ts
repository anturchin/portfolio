import { IEngineStatusResponse } from '../../models/engine/EngineStatusResponse';
import { CustomAnimation } from '../../utils/animation/CustomAnimation';
import { CarItem } from '../../view/pages/garage/carItem/CarItem';
import { EngineController } from '../engineController/EngineController';

export class RaceController {
    private animations: Map<CarItem, CustomAnimation> = new Map();

    private engineController: EngineController;

    constructor(
        engineController: EngineController
    ) {
        this.engineController = engineController;
    }

    public addCustomAnimation(carItem: CarItem, animation: CustomAnimation): void {
        this.animations.set(carItem, animation);
    }

    public async resetRace(): Promise<void> {
        try {
            const animationStopPromises: Promise<IEngineStatusResponse>[] = [];
            this.animations.forEach((animation, item) => {
                const carId = parseInt(item.getElement().id || '', 10);
                const stopEnginePromise = this.engineController.stopEngine(carId);
                stopEnginePromise.then(() => {
                    animation.reset();
                }).catch((error) => {
                    if (error instanceof Error) {
                        console.error(error.message);
                    }
                });
                animationStopPromises.push(stopEnginePromise);
            });
            await Promise.allSettled(animationStopPromises);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    public async startRace(): Promise<void> {
        try {
            const animationStartPromises: Promise<IEngineStatusResponse>[] = [];

            this.animations.forEach((animation, item) => {
                const carId = parseInt(item.getElement().id || '', 10);
                const startEnginePromise = this.engineController.startEngine(carId);
                startEnginePromise.then(({ distance, velocity }) => {
                    const parent = item.getElement();
                    const parentElement = parent.querySelector<HTMLElement>('.car__image');
                    const carImage = parent.querySelector<HTMLElement>('.car__svg');
                    animation
                        .setCustomAnimation(parentElement, carImage, distance, velocity)
                        .start();
                }).catch((error) => {
                    if (error instanceof Error) console.error(error.message);
                });
                animationStartPromises.push(startEnginePromise);
            });

            await Promise.allSettled(animationStartPromises);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }
}
