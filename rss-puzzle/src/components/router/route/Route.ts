import { IRoute, RouteCallbackType } from './Route.interface';

export class Route implements IRoute {
    public path: string;

    callback: RouteCallbackType;

    constructor({ path, callback }: IRoute) {
        this.path = path;
        this.callback = callback;
    }
}
