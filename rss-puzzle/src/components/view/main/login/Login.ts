import { View } from '../../View';
import { Form } from './form/Form';
import { Title } from './title/Title';
import { Router } from '../../../router/router/Router';

import './Login.scss';

const minimumLengthName = 3;
const minimumLengthSurname = 4;
export class Login extends View {
    private router: Router;

    constructor(router: Router) {
        super({ tag: 'div', classNames: ['login'], callback: null });
        this.router = router;
        this.setupLoginContent();
    }

    setupLoginContent(): void {
        const title = new Title().getElement();
        const form = new Form(this.router, minimumLengthName, minimumLengthSurname).getElement();
        [title, form].forEach((elem) => this.viewHtmlElementCreator.addInnerElement(elem));
    }
}
