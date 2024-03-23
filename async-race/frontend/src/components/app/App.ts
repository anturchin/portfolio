import { GarageController } from '../controller/garageController/GarageMainController';
import { WinnerController } from '../controller/winnerController/WinnerMainController';
import { Router } from '../router/router/Router';
import { routes } from '../router/routes';
import { GarageState } from '../state/GarageState';
import { WinnerState } from '../state/WinnerState';
import { View } from '../view/View';
import { HeaderView } from '../view/header/HeaderView';
import { PageView } from '../view/pages/PageView';

export class App {
    private router: Router;

    private header: HeaderView;

    private pageView: PageView;

    private garageState: GarageState;

    private winnerState: WinnerState;

    private garageController: GarageController;

    private winnerController: WinnerController;

    constructor() {
        this.garageState = new GarageState();
        this.winnerState = new WinnerState();
        this.garageController = new GarageController(this.garageState);
        this.winnerController = new WinnerController(this.winnerState);

        const controllers = {
            garageController: this.garageController,
            winnerController: this.winnerController,
        };

        this.router = new Router(this, controllers);
        this.header = new HeaderView(this.router);
        this.pageView = new PageView();
        this.setupRouter();
    }

    public setupRouter(): void {
        routes.forEach(({ path, callback }) => {
            this.router.addRoute({ path, callback });
        });
        this.router.navigate('./garage');
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
