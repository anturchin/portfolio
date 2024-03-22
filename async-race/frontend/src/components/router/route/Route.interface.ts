import { App } from '../../app/App';
import { GarageController } from '../../controller/garageController/garageController';
import { WinnerController } from '../../controller/winnerController/winnerController';

export type ControllersType = {
    garageController: GarageController;
    winnerController: WinnerController;
};

export interface IRoute {
    path: string;
    callback: (app: App, controllers: ControllersType) => Promise<void>;
}
