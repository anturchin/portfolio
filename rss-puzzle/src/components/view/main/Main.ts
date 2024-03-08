import { Router } from '../../router/router/Router';
import { View } from '../View';
import { IView } from '../View.interface';
import { Container } from '../container/Container';

import './Main.scss';

export class Main extends View {
    private router: Router;

    constructor(router: Router) {
        super({ tag: 'main', classNames: ['main'], callback: null });
        this.router = router;
        this.setupMainContent();
    }

    setupMainContent(): void {
        const container = new Container().getElement();
        this.viewHtmlElementCreator.addInnerElement(container);
    }

    private clearContent(container: HTMLElement): void {
        const containerMain = container;
        containerMain.innerHTML = '';
    }

    override render(component: IView): void {
        const container: HTMLElement | null = this.viewHtmlElementCreator
            .getElement()
            .querySelector('.container');
        if (container) {
            this.clearContent(container);
        }
        const content = component.getElement();
        container?.append(content);
    }
}
