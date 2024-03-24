import { Car } from '../../models/car/Car';
import { GarageService } from '../../services/garageService/GarageService';
import { GarageState } from '../../state/GarageState';

export class GarageController {
    private state: GarageState;

    constructor(state: GarageState) {
        this.state = state;
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
            throw new Error('[GarageController - loadCar] failed to fetch');
        }
    }

    public async addCar(name: string, color: string): Promise<void> {
        try {
            const car = { name, color };
            await GarageService.createCar(car);
            await this.loadCars();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            throw new Error('[GarageController - addCar] failed to fetch');
        }
    }

    public async removeCar(id: number): Promise<void> {
        try {
            await GarageService.deleteCar(id);
            await this.loadCars();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            throw new Error('[GarageController - removeCar] failed to fetch');
        }
    }

    public async updateCar(car: Car): Promise<void> {
        try {
            await GarageService.updateCar(car);
            await this.loadCars();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            throw new Error('[GarageController - updateCar] failed to fetch');
        }
    }

    public async getCar(id: number): Promise<{ data: Car }> {
        try {
            return await GarageService.getCar(id);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
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

    // public async nextPage(): Promise<void> {}

    // public async prevPage(): Promise<void> {}
}
