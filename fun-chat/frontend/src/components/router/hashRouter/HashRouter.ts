import { RoutePath } from './types';
import { Router } from '../router/Router';
import { SessionStorageManager } from '../../utils/sessionStorageManager/SessionStorageManager';

export class HashRouter {
    private router: Router;

    private previousHash: RoutePath | null = null;

    constructor(router: Router) {
        this.router = router;
        this.setupEventListener();
    }

    public updateHashUrl(path: RoutePath): void {
        window.location.hash = path;
    }

    public getHashUrl(): RoutePath {
        const { hash } = window.location;
        return hash.slice(1) as RoutePath;
    }

    private setupEventListener(): void {
        window.addEventListener('hashchange', () => {
            const userData = SessionStorageManager.getUserData();
            if (!userData) {
                this.updateHashUrl(RoutePath.LOGIN);
                return;
            }
            if (this.getHashUrl() === RoutePath.LOGIN) {
                if (this.previousHash) {
                    this.updateHashUrl(this.previousHash);
                }
                return;
            }
            this.previousHash = this.getHashUrl();
            this.router.navigate(this.getHashUrl());
        });
    }
}
