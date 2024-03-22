import { App } from '../../app/App';
import { ControllersType, IRoute } from './Route.interface';

export class Route implements IRoute {
    public path: string;

    public callback: (app: App, controllers: ControllersType) => Promise<void>;

    constructor({ path, callback }: IRoute) {
        this.path = path;
        this.callback = callback;
    }
}
