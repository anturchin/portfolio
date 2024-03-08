import { Main } from '../../view/main/Main';
import { Router } from '../router/Router';

export type RouteCallbackType = (mainInstance: Main, router: Router) => Promise<void>;

export interface IRoute {
    path: string;
    callback: RouteCallbackType;
}
