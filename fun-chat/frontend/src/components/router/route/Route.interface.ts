import { RoutePath } from '../hashRouter/types';

export interface IRoute {
    path: RoutePath;
    callback: () => Promise<void>;
}
