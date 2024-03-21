import { App } from '../../app/App';
import { IRoute } from '../route/Route.interface';

export interface IRouter {
    addRoute: ({ path, callback }: IRoute) => void;
    navigate: (path: string, app: App) => void;
}
