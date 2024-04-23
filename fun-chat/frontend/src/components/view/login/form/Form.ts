import { View } from '../../View';
import { Input } from './input/Input';
import { Button } from './button/Button';
import { WebSocketService } from '../../../services/WebSocketService';
import { LoginController } from '../../../controller/loginController/LoginController';
import { ErrorAuth } from '../errorAuth/ErrorAuth';
import { LinkInfo } from './btnInfo/LinkInfo';
import { Router } from '../../../router/router/Router';
import { RoutePath } from '../../../router/hashRouter/types';

import './Form.scss';

export class Form extends View {
    public inputLogin: Input | null = null;

    public inputPass: Input | null = null;

    public buttonLogin: Button | null = null;

    private minimumLengthName: number = 3;

    private minimumLengthPassword: number = 4;

    private loginController: LoginController;

    private linkInfo: LinkInfo | null = null;

    private router: Router;

    constructor(socket: WebSocketService, errorAuth: ErrorAuth, router: Router) {
        super({ tag: 'form', classNames: ['form'] });
        this.router = router;
        this.loginController = new LoginController(socket.getLoginService(), this, errorAuth);
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
        this.linkInfo = new LinkInfo();
        [
            this.inputLogin.getElement(),
            this.inputPass.getElement(),
            this.buttonLogin.getElement(),
            this.linkInfo.getElement(),
        ].forEach((elem) => {
            this.addInnerElement(elem);
        });
    }

    private setupEventListener(): void {
        this.getElement().addEventListener('submit', this.onHandleSubmit.bind(this));
        this.linkInfo?.getElement().addEventListener('click', () => {
            this.router.navigate(RoutePath.ABOUT);
        });
    }

    private validate(value: string, minimumLength: number): boolean {
        return this.loginController.validateForm(value, minimumLength);
    }

    private onHandleSubmit(event: Event): void {
        event.preventDefault();
        this.loginController.handleSubmitForm();
    }
}
