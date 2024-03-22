import { Router } from '../router/router/Router';
import { routes } from '../router/routes';
import { View } from '../view/View';
import { HeaderView } from '../view/header/HeaderView';
import { PageView } from '../view/pages/PageView';

export class App {
    private router: Router;

    private header: HeaderView;

    private pageView: PageView;

    constructor() {
        this.router = new Router(this);
        this.header = new HeaderView(this.router);
        this.pageView = new PageView();
        this.setupRouter();
    }

    public setupRouter(): void {
        routes.forEach(({ path, callback }) => {
            this.router.addRoute({ path, callback });
        });
    }

    public renderPageView(component?: View): void {
        if (component) this.pageView.render(component);
    }

    public async render(): Promise<void> {
        const body = document.querySelector('body');
        if (body) {
            body.append(
                ...[this.header.getElement(), this.pageView.getElement()]
            );
        }
    }
}
