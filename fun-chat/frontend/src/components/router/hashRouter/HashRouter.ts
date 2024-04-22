import { RoutePath } from './types';
import { Router } from '../router/Router';
import { SessionStorageManager } from '../../utils/sessionStorageManager/SessionStorageManager';

export class HashRouter {
    private router: Router;

    constructor(router: Router) {
        this.router = router;
        this.handleHashChange = this.handleHashChange.bind(this);
        this.clearHash();
        this.setupEventListener();
        this.handleHashChange();
    }

    public clearHash(): void {
        window.location.hash = '';
    }

    public updateHashUrl(path: RoutePath): void {
        window.location.hash = path;
    }

    public getHashUrl(): RoutePath {
        const { hash } = window.location;
        return hash.slice(1) as RoutePath;
    }

    public handleHashChange(): void {
        const userData = SessionStorageManager.getUserData();

        if (!this.getHashUrl()) {
            if (userData) {
                this.updateHashUrl(RoutePath.CHAT);
                return;
            }
            this.updateHashUrl(RoutePath.LOGIN);
            return;
        }

        if (!userData && this.getHashUrl() === RoutePath.CHAT) {
            this.updateHashUrl(RoutePath.LOGIN);
            return;
        }

        const route = this.router.findRoute(this.getHashUrl());

        if (route) {
            if (userData && this.getHashUrl() === RoutePath.LOGIN) {
                this.updateHashUrl(RoutePath.CHAT);
                return;
            }
            route.callback();
        } else {
            this.updateHashUrl(RoutePath.NOT_FOUND);
        }
    }

    private setupEventListener(): void {
        window.addEventListener('hashchange', this.handleHashChange);
    }
}
