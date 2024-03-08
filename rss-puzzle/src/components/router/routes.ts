import { Route } from './route/Route';

export const routes: Route[] = [
    {
        path: '/login',
        callback: async (mainInstance, router) => {
            const { Login } = await import('../view/main/login/Login');
            mainInstance.render(new Login(router));
        },
    },
    {
        path: '/start',
        callback: async (mainInstance, router) => {
            const { StartScreen } = await import('../view/main/start-screen/StartScreen');
            mainInstance.render(new StartScreen(router));
        },
    },
    {
        path: '/game',
        callback: async (mainInstance, router) => {
            const { Game } = await import('../view/main/game/Game');
            mainInstance.render(new Game(router));
        },
    },
    {
        path: '/statistic',
        callback: async (mainInstance, router) => {
            const { Statistics } = await import('../view/main/statistics/Statistics');
            mainInstance.render(new Statistics(router));
        },
    },
];
