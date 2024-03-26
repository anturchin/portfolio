import { Car } from '../../models/car/Car';
import { Winner } from '../../models/winner/Winner';
import { GarageService } from '../../services/garageService/GarageService';
import { WinnerService } from '../../services/winnerService/WinnerService';
import { WinnerState } from '../../state/WinnerState';
import { SortBy } from '../../state/types';

export class WinnerController {
    private state: WinnerState;

    constructor(state: WinnerState) {
        this.state = state;
        this.loadWinners();
    }

    public async setCars(): Promise<void> {
        try {
            const winners = this.state.getWinners();
            const cars: Car[] = [];

            const promises = winners.map(async (winner) => {
                const car = await GarageService.getCar(winner.id);
                return car;
            });

            const carsData = await Promise.all(promises);

            carsData.forEach(({ data }) => {
                const car = {
                    id: data.id,
                    name: data.name,
                    color: data.color,
                };
                cars.push(car);
            });

            this.state.setCars(cars);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[WinnerController - setCars] failed to fetch');
        }
    }

    public async loadWinners(): Promise<void> {
        try {
            const page = this.state.getCurrentPage();
            const limit = this.state.getLimit();
            const sortBy = this.state.getSortBy();
            const sortOrder = this.state.getSortOrder();
            const { data, totalCount } = await WinnerService.getWinners(
                page,
                limit,
                sortBy,
                sortOrder
            );
            this.state.setWinners(data);
            this.state.setTotalWinnersCount(parseInt(totalCount || '', 10));
            await this.setCars();
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[WinnerController - loadWinners] failed to fetch');
        }
    }

    public async addWinner(winner: Winner): Promise<void> {
        try {
            await WinnerService.createWinner(winner);
            await this.loadWinners();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            throw new Error('[WinnerController - addWinner] failed to fetch');
        }
    }

    public async removeWinner(id: number): Promise<void> {
        try {
            await WinnerService.deleteWinner(id);
            await this.loadWinners();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            throw new Error(
                '[WinnerController - removeWinner] failed to fetch'
            );
        }
    }

    public async updateWinner(winner: Winner): Promise<void> {
        try {
            await WinnerService.updateWinner(winner);
            await this.loadWinners();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            throw new Error(
                '[WinnerController - updateWinner] failed to fetch'
            );
        }
    }

    public async getWinner(id: number): Promise<{ data: Winner }> {
        try {
            return await WinnerService.getWinner(id);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            throw new Error('[WinnerController - getWinner] failed to fetch');
        }
    }

    public getWinners(): Winner[] {
        return this.state.getWinners();
    }

    public getCars(): Car[] {
        return this.state.getCars();
    }

    public getPageAndTotalCount(): { page: number; totalWinnersCount: number } {
        return {
            page: this.state.getCurrentPage(),
            totalWinnersCount: this.state.getTotalWinnersCount(),
        };
    }

    public async nextPage(): Promise<void> {
        try {
            this.state.nextPage();
            await this.loadWinners();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            throw new Error('[nextPage - getWinners] failed to fetch');
        }
    }

    public async prevPage(): Promise<void> {
        try {
            this.state.prevPage();
            await this.loadWinners();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            throw new Error('[prevPage - getWinners] failed to fetch');
        }
    }

    public setSortBy(sort: SortBy): void {
        this.state.setSortBy(sort);
    }

    public async handleSortBy(sort: SortBy): Promise<void> {
        this.setSortBy(sort);
        this.state.toggleSortOrder();
        await this.loadWinners();
    }
}
