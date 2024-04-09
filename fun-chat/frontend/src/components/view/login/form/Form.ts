import { View } from '../../View';
import { Input } from './input/Input';
import { Button } from './button/Button';
import { WebSocketService } from '../../../services/WebSocketService';
import { LoginController } from '../../../controller/loginController/LoginController';

import './Form.scss';

export class Form extends View {
    public inputLogin: Input | null = null;

    public inputPass: Input | null = null;

    public buttonLogin: Button | null = null;

    private minimumLengthName: number = 3;

    private minimumLengthPassword: number = 4;

    private loginController: LoginController;

    constructor(socket: WebSocketService) {
        super({ tag: 'form', classNames: ['form'] });
        this.loginController = new LoginController(socket.getLoginService(), this);
        this.setupFormContent();
        this.setupEventListener();
    }

    private setupFormContent(): void {
        this.inputLogin = new Input({
            type: 'text',
            label: 'Login',
            required: true,
            callback: this.validate.bind(this),
            minimumLength: this.minimumLengthName,
        });
        this.inputPass = new Input({
            type: 'password',
            label: 'Password',
            required: true,
            callback: this.validate.bind(this),
            minimumLength: this.minimumLengthPassword,
        });
        this.buttonLogin = new Button({ label: 'Submit' });
        [
            this.inputLogin.getElement(),
            this.inputPass.getElement(),
            this.buttonLogin.getElement(),
        ].forEach((elem) => {
            this.addInnerElement(elem);
        });
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('submit', this.onHandleSubmit.bind(this));
    }

    private validate(value: string, minimumLength: number): boolean {
        return this.loginController.validateForm(value, minimumLength);
    }

    private onHandleSubmit(event: Event): void {
        event.preventDefault();
        this.loginController.handleSubmitForm();
    }
}
