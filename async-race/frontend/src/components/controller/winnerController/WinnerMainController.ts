import { Winner } from '../../models/winner/Winner';
import { WinnerService } from '../../services/winnerService/WinnerService';
import { WinnerState } from '../../state/WinnerState';

export class WinnerController {
    private state: WinnerState;

    constructor(state: WinnerState) {
        this.state = state;
        this.loadWinners();
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
}
