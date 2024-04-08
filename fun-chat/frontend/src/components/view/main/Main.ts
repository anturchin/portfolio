import { View } from '../View';

export class Main extends View {
    constructor() {
        super({ tag: 'main' });
    }

    public updateRender(component: View): void {
        this.getElement().innerHTML = '';
        this.getElement().append(component.getElement());
    }
}
