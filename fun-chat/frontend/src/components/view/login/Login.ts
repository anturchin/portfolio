import { View } from '../View';
import { Form } from './form/Form';
import { Title } from './title/Title';

import './Login.scss';
import { WebSocketService } from '../../services/WebSocketService';
import { ErrorAuth } from './errorAuth/ErrorAuth';

export class Login extends View {
    constructor(socket: WebSocketService) {
        super({ tag: 'section', classNames: ['login'] });
        this.setupLogin(socket);
    }

    private setupLogin(socket: WebSocketService): void {
        const errorAuth = new ErrorAuth();
        const title = new Title().getElement();
        const form = new Form(socket, errorAuth).getElement();
        this.getElement().append(...[title, form, errorAuth.getElement()]);
    }
}
