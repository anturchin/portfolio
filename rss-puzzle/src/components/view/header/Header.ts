import { View } from '../View';
import { Container } from '../container/Container';
import { WrapperHeader } from './wrapperHeader/WrapperHeader';

import './Header.scss';
import { Router } from '../../router/router/Router';

export class Header extends View {
    private router: Router;

    constructor(router: Router) {
        super({ tag: 'header', classNames: ['header'], callback: null });
        this.router = router;
        this.setupHeaderContent();
    }

    private setupHeaderContent(): void {
        const wrapperHeader = new WrapperHeader(this.router, this).getElement();
        const container = new Container();
        container.addInnerElement(wrapperHeader);
        this.viewHtmlElementCreator.addInnerElement(container.getElement());
    }

    public updateWrapperHeader(): void {
        this.viewHtmlElementCreator.getElement().innerHTML = '';
        this.setupHeaderContent();
    }
}
