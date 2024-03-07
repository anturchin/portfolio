import { View } from '../View';
import { Container } from '../container/Container';

import './Header.scss';
import { WrapperHeader } from './wrapperHeader/WrapperHeader';

export class Header extends View {
    constructor() {
        super({ tag: 'header', classNames: ['header'], callback: null });
        this.setupHeaderContent();
    }

    setupHeaderContent(): void {
        const wrapperHeader = new WrapperHeader().getElement();
        const container = new Container();
        container.addInnerElement(wrapperHeader);
        this.viewHtmlElementCreator.addInnerElement(container.getElement());
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
