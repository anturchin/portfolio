import { Router } from '../../router/router/Router';
import { View } from '../View';

import './HeaderView.scss';
import { NavigateView } from './navigate/NavigateView';

export class HeaderView extends View {
    constructor(router: Router) {
        super({ tag: 'header', classNames: ['header'] });
        this.setupHeader(router);
    }

    private setupHeader(router: Router): void {
        const navbar = new NavigateView(router).getElement();
        this.viewHtmlElement.addInnerElement(navbar);
    }
}
