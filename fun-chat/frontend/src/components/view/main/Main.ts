import { View } from '../View';

import './Main.scss';

export class Main extends View {
    constructor() {
        super({ tag: 'main', classNames: ['main'] });
    }

    public updateRender(component: View): void {
        this.getElement().innerHTML = '';
        this.getElement().append(component.getElement());
    }
}
