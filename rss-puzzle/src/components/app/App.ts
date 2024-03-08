import { Footer } from '../view/footer/Footer';
import { Header } from '../view/header/Header';
import { Main } from '../view/main/Main';
import { Router } from '../router/router/Router';
import { routes } from '../router/routes';

export class App {
    private mainInstance: Main;

    private router: Router;

    constructor() {
        this.router = new Router();
        this.mainInstance = new Main(this.router);
        this.setupRouter();
    }

    render() {
        const header = new Header().getElement();
        const main = this.mainInstance.getElement();
        const footer = new Footer().getElement();
        const body: HTMLElement | null = document.querySelector('body');
        if (body) {
            body.append(...[header, main, footer]);
        }
    }

    private setupRouter(): void {
        this.router.addMainInstance(this.mainInstance);
        routes.forEach(({ path, callback }) => {
            this.router.addRoute({ path, callback });
        });
        this.router.navigate('/login');
    }
}
