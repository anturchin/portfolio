import { View } from '../../View';
import { Form } from './form/Form';
import { Title } from './title/Title';
import { Router } from '../../../router/router/Router';

import './Login.scss';
import { Header } from '../../header/Header';

const minimumLengthName = 3;
const minimumLengthSurname = 4;
export class Login extends View {
    private router: Router;

    constructor(router: Router, headerInstance: Header) {
        super({ tag: 'div', classNames: ['login'], callback: null });
        this.router = router;
        this.setupLoginContent(headerInstance);
    }

    setupLoginContent(headerInstance: Header): void {
        const title = new Title().getElement();
        const form = new Form(
            this.router,
            headerInstance,
            minimumLengthName,
            minimumLengthSurname
        ).getElement();
        [title, form].forEach((elem) => this.viewHtmlElementCreator.addInnerElement(elem));
    }
}
