import { RoutePath } from '../hashRouter/types';
import { HashRouter } from '../hashRouter/HashRouter';
import { Route } from '../route/Route';
import { IRouter } from './Router.interface';
import { SessionStorageManager } from '../../utils/sessionStorageManager/SessionStorageManager';

export class Router implements IRouter {
    private routes: Route[] = [];

    public hashRouter: HashRouter;

    constructor(routes: Route[]) {
        this.hashRouter = new HashRouter(this);
        this.addRoute(routes);
    }

    public addRoute(routes: Route[]): void {
        routes.forEach((route) => this.routes.push(new Route(route)));
    }

    public async navigate(path: RoutePath): Promise<void> {
        const route = this.routes.find((r) => r.path === path);
        if (route) {
            try {
                await route.callback();
                this.hashRouter.updateHashUrl(path);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
            }
        } else {
            const userData = SessionStorageManager.getUserData();
            if (userData) {
                this.navigate(RoutePath.CHAT);
                this.hashRouter.updateHashUrl(RoutePath.CHAT);
                console.error(`[ ROUTER ] Not found route: "${path}" and redirect to "CHAT" page`);
            }
        }
    }
}
