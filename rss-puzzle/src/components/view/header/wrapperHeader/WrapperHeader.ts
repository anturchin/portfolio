import { View } from '../../View';
import { Logo } from './logo/Logo';
import { User } from './user/User';

import './WrapperHeader.scss';

export class WrapperHeader extends View {
    constructor() {
        super({ tag: 'div', classNames: ['header__wrapper'], callback: null });
        this.setupWrapperContent();
    }

    setupWrapperContent(): void {
        const logo = new Logo().getElement();
        const user = new User().getElement();
        [logo, user].forEach((elem) => this.viewHtmlElementCreator.addInnerElement(elem));
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
