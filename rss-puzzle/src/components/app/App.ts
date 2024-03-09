import { Footer } from '../view/footer/Footer';
import { Header } from '../view/header/Header';
import { Main } from '../view/main/Main';
import { Router } from '../router/router/Router';
import { routes } from '../router/routes';
import { LocalStorageManager } from '../utils/localStorageManager/LocalStorageManager';

export class App {
    private header: Header;

    private mainInstance: Main;

    private router: Router;

    private footer: Footer;

    constructor() {
        this.router = new Router();
        this.header = new Header(this.router);
        this.mainInstance = new Main(this.router);
        this.footer = new Footer();
        this.setupRouter();
    }

    public render() {
        const header = this.header.getElement();
        const main = this.mainInstance.getElement();
        const footer = this.footer.getElement();
        const body: HTMLElement | null = document.querySelector('body');
        if (body) {
            body.append(...[header, main, footer]);
        }
    }

    private isUserLoggedIn(): boolean {
        return !!LocalStorageManager.getUserData();
    }

    private setupRouter(): void {
        this.router.addMainAndHeaderInstance(this.mainInstance, this.header);
        routes.forEach(({ path, callback }) => {
            this.router.addRoute({ path, callback });
        });
        if (!this.isUserLoggedIn()) {
            this.router.navigate('/login');
        } else {
            this.router.navigate('/start');
        }
    }
}
