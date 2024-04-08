import { RoutePath } from '../../app/types';

export interface IRoute {
    path: RoutePath;
    callback: () => Promise<void>;
}
