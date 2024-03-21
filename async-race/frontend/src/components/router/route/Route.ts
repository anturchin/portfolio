import { App } from '../../app/App';
import { IRoute } from './Route.interface';

export class Route implements IRoute {
    public path: string;

    public callback: (app: App) => Promise<void>;

    constructor({ path, callback }: IRoute) {
        this.path = path;
        this.callback = callback;
    }
}
