import { Route } from './route/Route';

export const routes: Route[] = [
    {
        path: '/login',
        callback: async (mainInstance) => {
            const { Login } = await import('../view/main/login/Login');
            mainInstance.render(new Login());
        },
    },
    {
        path: '/start',
        callback: async (mainInstance) => {
            const { StartScreen } = await import('../view/main/start-screen/StartScreen');
            mainInstance.render(new StartScreen());
        },
    },
    {
        path: '/game',
        callback: async (mainInstance) => {
            const { Game } = await import('../view/main/game/Game');
            mainInstance.render(new Game());
        },
    },
    {
        path: '/statistic',
        callback: async (mainInstance) => {
            const { Statistics } = await import('../view/main/statistics/Statistics');
            mainInstance.render(new Statistics());
        },
    },
];
