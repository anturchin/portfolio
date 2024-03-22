import { App } from '../app/App';
import { Route } from './route/Route';
import { ControllersType } from './route/Route.interface';

export const routes: Route[] = [
    {
        path: './garage',
        callback: async (app: App, controllers: ControllersType) => {
            const { GarageView } = await import(
                '../view/pages/garage/GarageView'
            );
            app.renderPageView(new GarageView(controllers.garageController));
        },
    },
    {
        path: './winners',
        callback: async (app: App, controllers: ControllersType) => {
            const { WinnerView } = await import(
                '../view/pages/winner/WinnerView'
            );
            app.renderPageView(new WinnerView(controllers.winnerController));
        },
    },
];
