import { View } from '../View';

import './PageView.scss';

export class PageView extends View {
    constructor() {
        super({ tag: 'main', classNames: ['main'] });
    }

    public render(component: View): void {
        this.clearContent();
        this.addInnerElement(component.getElement());
    }

    private clearContent(): void {
        this.getElement().innerHTML = '';
    }
}
