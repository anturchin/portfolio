import { RoutePath } from '../../app/types';
import { IRoute } from './Route.interface';

export class Route implements IRoute {
    public path: RoutePath;

    public callback: () => Promise<void>;

    constructor({ path, callback }: IRoute) {
        this.path = path;
        this.callback = callback;
    }
}
