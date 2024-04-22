import { View } from '../View';
import { Form } from './form/Form';
import { Title } from './title/Title';
import { WebSocketService } from '../../services/WebSocketService';
import { ErrorAuth } from './errorAuth/ErrorAuth';
import { Router } from '../../router/router/Router';

import './Login.scss';

export class Login extends View {
    constructor(socket: WebSocketService, router: Router) {
        super({ tag: 'section', classNames: ['login'] });
        this.setupLogin(socket, router);
    }

    private setupLogin(socket: WebSocketService, router: Router): void {
        const errorAuth = new ErrorAuth();
        const title = new Title().getElement();
        const form = new Form(socket, errorAuth, router).getElement();
        this.getElement().append(...[title, form, errorAuth.getElement()]);
    }
}
