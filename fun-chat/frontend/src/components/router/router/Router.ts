import { Route } from '../route/Route';
import { IRouter } from './Router.interface';

export class Router implements IRouter {
    private routes: Route[] = [];

    constructor(routes: Route[]) {
        this.addRoute(routes);
    }

    public addRoute(routes: Route[]): void {
        routes.forEach((route) => this.routes.push(new Route(route)));
    }

    public async navigate(path: string): Promise<void> {
        const route = this.routes.find((r) => r.path === path);
        if (route) {
            try {
                await route.callback();
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
            }
        } else {
            console.error(`not found route: ${path}`);
        }
    }
}
