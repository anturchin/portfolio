import { Route } from '../router/route/Route';
import { Router } from '../router/router/Router';
import { State } from '../state/State';
import { View } from '../view/View';
import { Main } from '../view/main/Main';
import { RoutePath } from '../router/hashRouter/types';

export class App {
    private state: State;

    private main: Main;

    private router: Router;

    constructor() {
        this.state = new State();
        this.router = new Router(this.initialRoutes());
        this.main = new Main();
    }

    public render(): void {
        document.body.append(this.main.getElement());
        const { hashRouter } = this.router;
        this.router.navigate(hashRouter.getHashUrl() || RoutePath.LOGIN);
    }

    private updateContent(component: View): void {
        this.main.updateRender(component);
    }

    private initialRoutes(): Route[] {
        const routes: Route[] = [
            {
                path: RoutePath.LOGIN,
                callback: async () => {
                    const { Login } = await import('../view/login/Login');
                    this.updateContent(new Login());
                },
            },
            {
                path: RoutePath.CHAT,
                callback: async () => {
                    const { Chat } = await import('../view/chat/Chat');
                    this.updateContent(new Chat());
                },
            },
            {
                path: RoutePath.ABOUT,
                callback: async () => {
                    const { About } = await import('../view/about/About');
                    this.updateContent(new About());
                },
            },
        ];
        return routes;
    }
}
