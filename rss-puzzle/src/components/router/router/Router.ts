import { Main } from '../../view/main/Main';
import { Route } from '../route/Route';
import { IRoute } from '../route/Route.interface';
import { IRouter } from './Router.interface';

export class Router implements IRouter {
    private routes: Route[];

    private mainInstance: Main;

    constructor(mainInstance: Main) {
        this.routes = [];
        this.mainInstance = mainInstance;
    }

    public addRoute({ path, callback }: IRoute): void {
        this.routes.push(new Route({ path, callback }));
    }

    public async navigate(path: string): Promise<void> {
        const route = this.routes.find((r) => r.path === path);
        if (route) {
            await route.callback(this.mainInstance);
            console.log(`route ${path}`);
        } else {
            console.error(`not found route ${path}`);
        }
    }
}
