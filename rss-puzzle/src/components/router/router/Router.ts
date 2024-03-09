import { Header } from '../../view/header/Header';
import { Main } from '../../view/main/Main';
import { Route } from '../route/Route';
import { IRoute } from '../route/Route.interface';
import { IRouter } from './Router.interface';

export class Router implements IRouter {
    private routes: Route[];

    private mainInstance: Main | null;

    private headerInstance: Header | null;

    constructor() {
        this.routes = [];
        this.mainInstance = null;
        this.headerInstance = null;
    }

    public addRoute({ path, callback }: IRoute): void {
        this.routes.push(new Route({ path, callback }));
    }

    public addMainAndHeaderInstance(mainInstance: Main, headerInstance: Header): void {
        this.mainInstance = mainInstance;
        this.headerInstance = headerInstance;
    }

    public async navigate(path: string): Promise<void> {
        const route = this.routes.find((r) => r.path === path);
        if (route) {
            if (this.mainInstance && this.headerInstance) {
                await route.callback(this.mainInstance, this, this.headerInstance);
                console.log(`route: ${path}`);
            } else if (this.mainInstance) {
                await route.callback(this.mainInstance, this);
                console.log(`route: ${path}`);
            }
        } else {
            console.error(`not found route: ${path}`);
        }
    }
}
