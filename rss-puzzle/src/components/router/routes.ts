import { Route } from './route/Route';

export const routes: Route[] = [
    {
        path: '/login',
        callback: async (mainInstance, router, headerInstance) => {
            const { Login } = await import('../view/main/login/Login');
            if (headerInstance) {
                mainInstance.render(new Login(router, headerInstance));
            }
        },
    },
    {
        path: '/start',
        callback: async (mainInstance, router) => {
            const { StartScreen } = await import('../view/main/startScreen/StartScreen');
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
