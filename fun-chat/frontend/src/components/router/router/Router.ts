import { RoutePath } from '../hashRouter/types';
import { HashRouter } from '../hashRouter/HashRouter';
import { Route } from '../route/Route';
import { IRouter } from './Router.interface';

export class Router implements IRouter {
    private routes: Route[] = [];

    public hashRouter: HashRouter;

    constructor(routes: Route[]) {
        this.addRoute(routes);
        this.hashRouter = new HashRouter(this);
    }

    public addRoute(routes: Route[]): void {
        routes.forEach((route) => this.routes.push(new Route(route)));
    }

    public findRoute(path: RoutePath): Route | undefined {
        return this.routes.find((r) => r.path === path);
    }

    public showNotFoundPage(): void {
        this.findRoute(RoutePath.NOT_FOUND)?.callback();
    }

    public navigate(path: RoutePath): void {
        const route = this.findRoute(path);
        if (route) {
            this.hashRouter.updateHashUrl(path);
        } else {
            this.showNotFoundPage();
        }
    }
}
