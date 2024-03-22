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
            console.log(this.state.getCurrentPage());
            console.log(this.state.getLimit());
            console.log(this.state.getCars());
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    // public async nextPage(): Promise<void> {}

    // public async prevPage(): Promise<void> {}
}
