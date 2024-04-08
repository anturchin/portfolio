import { RoutePath } from '../hashRouter/types';
import { Route } from '../route/Route';

export interface IRouter {
    addRoute: (router: Route[]) => void;
    navigate: (path: RoutePath) => void;
}
