import { Car } from '../../models/car/Car';
import { ICar } from '../../models/car/Car.interface';
import { GarageService } from '../../services/garageService/GarageService';
import { GarageState } from '../../state/GarageState';
import { SvgCarCreator } from '../../utils/svgCreator/SvgCarCreator';
import { EngineController } from '../engineController/EngineController';
import { WinnerController } from '../winnerController/WinnerMainController';

export class GarageController {
    public engineController: EngineController;

    private state: GarageState;

    private winnerController: WinnerController;

    private generateRandomCount: number = 100;

    constructor(state: GarageState, winnerController: WinnerController) {
        this.state = state;
        this.engineController = new EngineController(this);
        this.winnerController = winnerController;
        this.loadCars();
    }

    public async loadCars(): Promise<void> {
        try {
            const page = this.state.getCurrentPage();
            const limit = this.state.getLimit();
            const { data, totalCount } = await GarageService.getCars(
                page,
                limit
            );
            this.state.setCars(data);
            this.state.setTotalCarsCount(parseInt(totalCount || '', 10));
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    public async addCar(name: string, color: string): Promise<void> {
        try {
            const car = { name, color };
            await GarageService.createCar(car);
            await this.loadCars();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    public async removeCar(id: number): Promise<void> {
        try {
            const carWinner = this.winnerController
                .getCars()
                .find((winner) => winner.id === id);
            if (carWinner) {
                await this.winnerController.removeWinner(carWinner.id);
            }
            await GarageService.deleteCar(id);
            await this.loadCars();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    public async updateCar(car: Car): Promise<void> {
        const carWinner = this.winnerController
            .getCars()
            .find((winner) => winner.id === car.id);
        try {
            await GarageService.updateCar(car);
            await this.loadCars();
            if (carWinner) {
                await this.winnerController.setCars();
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    public async getCar(id: number): Promise<{ data: Car }> {
        try {
            return await GarageService.getCar(id);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[GarageController - getCar] failed to fetch');
        }
    }

    public getCars(): Car[] {
        return this.state.getCars();
    }

    public getPageAndTotalCount(): { page: number; totalCarsCount: number } {
        return {
            page: this.state.getCurrentPage(),
            totalCarsCount: this.state.getTotalCarsCount(),
        };
    }

    public async nextPage(): Promise<void> {
        try {
            this.state.nextPage();
            await this.loadCars();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    public async prevPage(): Promise<void> {
        try {
            this.state.prevPage();
            await this.loadCars();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    public async generateRandomCars(): Promise<void> {
        try {
            const names = [
                'Toyota',
                'Honda',
                'BMW',
                'Ford',
                'Chevrolet',
                'Mercedes',
                'Audi',
                'Volkswagen',
                'Tesla',
            ];
            const promises: Promise<ICar>[] = [];

            for (let i = 0; i < this.generateRandomCount; i += 1) {
                const color = SvgCarCreator.randomHexColor();
                const name = names[Math.floor(Math.random() * names.length)];
                const car: ICar = {
                    name: `${name} random - ${i + 1}`,
                    color,
                };
                promises.push(GarageService.createCar(car));
            }
            await Promise.all(promises);
            await this.loadCars();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }
}
