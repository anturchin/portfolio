import { App } from '../../app/App';

export interface IRoute {
    path: string;
    callback: (app: App) => Promise<void>;
}
