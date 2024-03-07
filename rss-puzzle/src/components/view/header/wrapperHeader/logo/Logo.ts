import { View } from '../../../View';
import './Logo.scss';
import img from '../../../../../assets/images/logo.svg';

export class Logo extends View {
    constructor() {
        super({ tag: 'img', classNames: ['header__logo'], callback: null });
        this.setImgPath();
    }

    setImgPath(): void {
        const logo = this.viewHtmlElementCreator.getElement();
        logo.setAttribute('src', img);
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
