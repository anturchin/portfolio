import { Car } from '../models/car/Car';
import { Winner } from '../models/winner/Winner';
import { SortBy, SortOrder } from './types';

export class WinnerState {
    private winners: Winner[];

    private cars: Car[];

    private page: number;

    private limit: number;

    private sortBy: SortBy;

    private sortOrder: SortOrder;

    private totalWinnersCount: number;

    constructor() {
        this.winners = [];
        this.cars = [];
        this.page = 1;
        this.limit = 10;
        this.sortBy = SortBy.ID;
        this.sortOrder = SortOrder.ASC;
        this.totalWinnersCount = 0;
    }

    public getCurrentPage(): number {
        return this.page;
    }

    public getLimit(): number {
        return this.limit;
    }

    public getTotalWinnersCount(): number {
        return this.totalWinnersCount;
    }

    public getSortBy(): SortBy {
        return this.sortBy;
    }

    public getSortOrder(): SortOrder {
        return this.sortOrder;
    }

    public setTotalWinnersCount(count: number): void {
        this.totalWinnersCount = count;
    }

    public getWinners(): Winner[] {
        return this.winners;
    }

    public setWinners(winners: Winner[]): void {
        this.winners = [];
        this.winners.push(...winners);
    }

    public getCars(): Car[] {
        return this.cars;
    }

    public setCars(car: Car[]): void {
        this.cars = [];
        this.cars.push(...car);
    }

    public nextPage(): void {
        const nextPage = this.page + 1;
        const totalPages = Math.ceil(this.totalWinnersCount / this.limit);
        if (nextPage <= totalPages) {
            this.page = nextPage;
        }
    }

    public prevPage(): void {
        if (this.page > 1) {
            this.page -= 1;
        }
    }

    public toggleSortOrder(): void {
        if (this.sortOrder === SortOrder.ASC) {
            this.sortOrder = SortOrder.DESC;
        } else {
            this.sortOrder = SortOrder.ASC;
        }
    }
}
