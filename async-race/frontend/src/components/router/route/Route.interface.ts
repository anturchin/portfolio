import { App } from '../../app/App';
import { GarageController } from '../../controller/garageController/GarageMainController';
import { WinnerController } from '../../controller/winnerController/WinnerMainController';

export type ControllersType = {
    garageController: GarageController;
    winnerController: WinnerController;
};

export interface IRoute {
    path: string;
    callback: (app: App, controllers: ControllersType) => Promise<void>;
}
