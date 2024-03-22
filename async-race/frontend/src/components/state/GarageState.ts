import { Car } from '../models/car/Car';

export class GarageState {
    private cars: Car[];

    private page: number;

    private limit: number;

    private totalCarsCount: number;

    constructor() {
        this.cars = [];
        this.page = 1;
        this.limit = 7;
        this.totalCarsCount = 0;
    }

    public getCurrentPage(): number {
        return this.page;
    }

    public getLimit(): number {
        return this.limit;
    }

    public getTotalCarsCount(): number {
        return this.totalCarsCount;
    }

    public setTotalCarsCount(count: number): void {
        this.totalCarsCount = count;
    }

    public getCars(): Car[] {
        return this.cars;
    }

    public setCars(cars: Car[]): void {
        this.cars.push(...cars);
    }

    public nextPage(): void {
        const nextPage = this.page + 1;
        const totalPages = Math.ceil(this.totalCarsCount / this.limit);
        if (nextPage <= totalPages) {
            this.page = nextPage;
        }
    }

    public prevPage(): void {
        if (this.page > 1) {
            this.page -= 1;
        }
    }
}
