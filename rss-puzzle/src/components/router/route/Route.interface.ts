import { Main } from '../../view/main/Main';

export type RouteCallbackType = (mainInstance: Main) => Promise<void>;

export interface IRoute {
    path: string;
    callback: RouteCallbackType;
}
