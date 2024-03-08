import { View } from '../View';
import { IView } from '../View.interface';
import { Container } from '../container/Container';

import './Main.scss';

export class Main extends View {
    constructor() {
        super({ tag: 'main', classNames: ['main'], callback: null });
        this.setupMainContent();
    }

    setupMainContent(): void {
        const container = new Container().getElement();
        this.viewHtmlElementCreator.addInnerElement(container);
    }

    override render(component: IView): void {
        console.log(this.viewHtmlElementCreator.getElement());
        console.log(component);
    }
}
