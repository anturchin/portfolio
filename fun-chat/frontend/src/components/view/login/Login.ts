import { View } from '../View';
import { Form } from './form/Form';
import { Title } from './title/Title';

import './Login.scss';
import { WebSocketService } from '../../services/WebSocketService';

export class Login extends View {
    constructor(socket: WebSocketService) {
        super({ tag: 'section', classNames: ['login'] });
        this.setupLogin(socket);
    }

    private setupLogin(socket: WebSocketService): void {
        const title = new Title().getElement();
        const form = new Form(socket).getElement();
        this.getElement().append(...[title, form]);
    }
}
