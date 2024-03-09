import { Header } from '../../view/header/Header';
import { Main } from '../../view/main/Main';
import { Router } from '../router/Router';

export type RouteCallbackType = (
    mainInstance: Main,
    router: Router,
    header?: Header
) => Promise<void>;

export interface IRoute {
    path: string;
    callback: RouteCallbackType;
}
