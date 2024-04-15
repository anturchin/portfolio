import { RoutePath } from './types';
import { Router } from '../router/Router';

export class HashRouter {
    private router: Router;

    private previousHash: RoutePath | null = null;

    constructor(router: Router) {
        this.router = router;
        this.setupEventListener();
    }

    public updateHashUrl(path: RoutePath): void {
        window.location.hash = path;
        this.previousHash = path;
    }

    public getHashUrl(): RoutePath {
        const { hash } = window.location;
        return hash.slice(1) as RoutePath;
    }

    private setupEventListener(): void {
        window.addEventListener('hashchange', () => {
            if (this.previousHash) {
                this.updateHashUrl(this.previousHash);
            }
        });
    }
}
