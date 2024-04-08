import { Router } from '../../router/router/Router';
import { View } from '../View';
import { Form } from './form/Form';
import { Title } from './title/Title';

import './Login.scss';

export class Login extends View {
    constructor(router: Router) {
        super({ tag: 'section', classNames: ['login'] });
        this.setupLogin(router);
    }

    private setupLogin(router: Router): void {
        const title = new Title().getElement();
        const form = new Form(router).getElement();
        this.getElement().append(...[title, form]);
    }
}
