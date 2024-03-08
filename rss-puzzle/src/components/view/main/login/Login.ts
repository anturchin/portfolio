import { View } from '../../View';
import { Form } from './form/Form';
import { Title } from './title/Title';

import './Login.scss';

export class Login extends View {
    constructor() {
        super({ tag: 'div', classNames: ['login'], callback: null });
        this.setupLoginContent();
    }

    setupLoginContent(): void {
        const title = new Title().getElement();
        const form = new Form().getElement();
        [title, form].forEach((elem) => this.viewHtmlElementCreator.addInnerElement(elem));
    }
}
