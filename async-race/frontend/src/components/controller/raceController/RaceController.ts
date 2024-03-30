import { IEngineDriveModeResponse } from '../../models/engine/EngineDriveModeResponse';
import { IEngineStatusResponse } from '../../models/engine/EngineStatusResponse';
import { Winner } from '../../models/winner/Winner';
import { CustomAnimation } from '../../utils/animation/CustomAnimation';
import { CarItem } from '../../view/pages/garage/carItem/CarItem';
import { EngineController } from '../engineController/EngineController';
import { WinnerController } from '../winnerController/WinnerMainController';
import { ICarFinished } from './types';

export class RaceController {
    private animations: Map<CarItem, CustomAnimation> = new Map();

    private engineController: EngineController;

    private winnerController: WinnerController;

    private finishedCar: Map<number, ICarFinished> = new Map();

    constructor(
        engineController: EngineController,
        winnerController: WinnerController
    ) {
        this.engineController = engineController;
        this.winnerController = winnerController;
    }

    public addCustomAnimation(carItem: CarItem, animation: CustomAnimation): void {
        this.animations.set(carItem, animation);
    }

    public clearCustomAnimation(): void {
        this.animations.clear();
    }

    public showMessageView(winner:
        { carId: number, time: number }): void {
        const winnerCar = [...this.animations]
            .filter(([carItem]) => {
                return (+carItem.getElement().id === winner.carId);
            })
            .map(([elem]) => {
                const nameCar = elem.getElement()
                    .querySelector<HTMLElement>('.car__title')?.textContent;
                return {
                    nameCar,
                    time: winner.time,
                };
            })[0];

        const message = document.createElement('span');
        message.classList.add('modal__winner');
        message.textContent = `${winnerCar.nameCar} won the race in ${winner.time.toFixed(2)} s.`;
        document.body.append(message);

        setTimeout(() => message.remove(), 6000);
    }

    private async updateOrCreateWinnersTable(
        winner:
            { carId: number, time: number }
    ): Promise<void> {
        let firstRequest: Winner | null = null;

        try {
            const { data } = await this.winnerController.getWinner(winner.carId);
            firstRequest = data;
            if (data) {
                const updateWinner: Winner = {
                    ...data,
                    wins: (data.wins || 0) + 1,
                    time: +Math.min(winner.time, +data.time).toFixed(2),
                };
                await this.winnerController.updateWinner(updateWinner);
            }
        } catch (error) {
            this.handleError(error);
        }
        if (!firstRequest) {
            try {
                const newWinner: Winner = {
                    id: winner.carId,
                    wins: 1,
                    time: +winner.time.toFixed(2),
                };
                await this.winnerController.addWinner(newWinner);
            } catch (error) {
                this.handleError(error);
            }
        }
    }

    public async showResultRaceAndUpdateWinnersTable(): Promise<void> {
        const resultInfo: { carId: number, time: number }[] = [];
        [...this.finishedCar].forEach(([carId, raceInfo]) => {
            const diffTime = raceInfo.endTime ? raceInfo.endTime - raceInfo.startTime : 0;
            const info = {
                carId,
                time: diffTime / 1000,
            };
            resultInfo.push(info);
        });
        resultInfo.sort((a, b) => a.time - b.time);
        try {
            await this.updateOrCreateWinnersTable(resultInfo[0]);
        } catch (error) {
            this.handleError(error);
        }

        this.showMessageView(resultInfo[0]);
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
                    this.handleError(error);
                });
                animationStopPromises.push(stopEnginePromise);
            });
            await Promise.allSettled(animationStopPromises);
        } catch (error) {
            this.handleError(error);
        }
    }

    public async startRace(): Promise<void> {
        this.finishedCar.clear();
        try {
            const animationStartPromises: Promise<IEngineStatusResponse>[] = [];
            this.animations.forEach((animation, item) => {
                const carId = parseInt(item.getElement().id || '', 10);
                const carFinished: ICarFinished = {
                    carId,
                    startTime: Date.now(),
                };
                this.finishedCar.set(carId, carFinished);
                const startEnginePromise = this.engineController.startEngine(carId);
                startEnginePromise.then(({ distance, velocity }) => {
                    const parent = item.getElement();
                    const parentElement = parent.querySelector<HTMLElement>('.car__image');
                    const carImage = parent.querySelector<HTMLElement>('.car__svg');
                    animation
                        .setCustomAnimation(parentElement, carImage, distance, velocity)
                        .start();
                }).catch((error) => {
                    this.handleError(error);
                });
                animationStartPromises.push(startEnginePromise);
            });
            await Promise.allSettled(animationStartPromises);
            try {
                await this.driveRace();
            } catch (error) {
                this.handleError(error);
            }
        } catch (error) {
            this.handleError(error);
        } finally {
            this.showResultRaceAndUpdateWinnersTable()
                .catch((error) => this.handleError(error));
        }
    }

    private async driveRace(): Promise<void> {
        try {
            const animationStartPromises: Promise<IEngineDriveModeResponse>[] = [];
            this.animations.forEach((animation, item) => {
                const carId = parseInt(item.getElement().id || '', 10);
                const startEnginePromise = this.engineController.driveEngine(carId);
                startEnginePromise
                    .then(() => {
                        const carFinished = this.finishedCar.get(carId);
                        if (carFinished) carFinished.endTime = Date.now();
                    })
                    .catch((error) => {
                        this.handleError(error);
                        animation.stop();
                        this.finishedCar.delete(carId);
                    });
                animationStartPromises.push(startEnginePromise);
            });
            await Promise.allSettled(animationStartPromises);
        } catch (error) {
            this.handleError(error);
        }
    }

    private handleError(error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
