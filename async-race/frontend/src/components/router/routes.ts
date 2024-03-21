import { App } from '../app/App';
import { Route } from './route/Route';

export const routes: Route[] = [
    {
        path: './garage',
        callback: async (app: App) => {
            const { GarageView } = await import('../view/pages/garage/GarageView');
            app.renderPageView(new GarageView());
        },
    },
    {
        path: './winners',
        callback: async (app: App) => {
            const { WinnerView } = await import('../view/pages/winner/WinnerView');
            app.renderPageView(new WinnerView());
        },
    },
];
