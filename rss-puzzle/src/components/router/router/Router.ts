import { Main } from '../../view/main/Main';
import { Route } from '../route/Route';
import { IRoute } from '../route/Route.interface';
import { IRouter } from './Router.interface';

export class Router implements IRouter {
    private routes: Route[];

    private mainInstance: Main | null;

    constructor() {
        this.routes = [];
        this.mainInstance = null;
    }

    public addRoute({ path, callback }: IRoute): void {
        this.routes.push(new Route({ path, callback }));
    }

    public addMainInstance(mainInstance: Main): void {
        this.mainInstance = mainInstance;
    }

    public async navigate(path: string): Promise<void> {
        const route = this.routes.find((r) => r.path === path);
        if (route) {
            if (this.mainInstance) {
                await route.callback(this.mainInstance, this);
                console.log(`route: ${path}`);
            }
        } else {
            console.error(`not found route: ${path}`);
        }
    }
}
