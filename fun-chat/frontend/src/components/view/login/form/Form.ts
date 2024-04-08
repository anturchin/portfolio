import { View } from '../../View';
import { Input } from './input/Input';
import { Button } from './button/Button';
import { InputValidator } from '../../../utils/inputValidator/InputValidator';
import { ErrorManager } from '../../../utils/errorManager/ErrorManager';
import { LocalStorageManager } from '../../../utils/localStorageManager/LocalStorageManager ';
import { UserDataType } from '../../../utils/localStorageManager/types';
import { Router } from '../../../router/router/Router';
import { RoutePath } from '../../../router/hashRouter/types';

import './Form.scss';

export class Form extends View {
    private delay: number = 5000;

    private minimumLengthName: number = 3;

    private minimumLengthPassword: number = 4;

    private inputLogin: Input | null = null;

    private inputPass: Input | null = null;

    private buttonLogin: Button | null = null;

    private router: Router;

    constructor(router: Router) {
        super({ tag: 'form', classNames: ['form'] });
        this.router = router;
        this.setupFormContent();
        this.setupEventListener();
    }

    private setupFormContent(): void {
        this.inputLogin = new Input({
            type: 'text',
            label: 'Login',
            required: true,
            callback: this.validateFirstName.bind(this),
            minimumLength: this.minimumLengthName,
        });
        this.inputPass = new Input({
            type: 'password',
            label: 'Password',
            required: true,
            callback: this.validateFirstName.bind(this),
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
        const isAllowedCharacters = InputValidator.isAllowedCharacters(value);
        const isFirstLetterUpperCase = InputValidator.isFirstLetterUpperCase(value);
        const hasMinimumLength = InputValidator.hasMinimumLength(value, minimumLength);
        return isAllowedCharacters && isFirstLetterUpperCase && hasMinimumLength;
    }

    private validateFirstName(value: string, minimumLength: number): boolean {
        return this.validate(value, minimumLength);
    }

    private closeErrorMessage(errorInputOne: ErrorManager, errorInputTwo?: ErrorManager): void {
        if (!errorInputTwo) {
            errorInputOne.hideError();
            (this.buttonLogin?.getElement() as HTMLButtonElement).disabled = false;
        } else {
            errorInputOne.hideError();
            errorInputTwo.hideError();
            (this.buttonLogin?.getElement() as HTMLButtonElement).disabled = false;
        }
    }

    private showErrorMessage(inputOne: View, inputTwo?: View): void {
        if (!inputTwo) {
            const error = new ErrorManager();
            error.showError(inputOne.getElement());
            (this.buttonLogin?.getElement() as HTMLButtonElement).disabled = true;
            setTimeout(() => {
                this.closeErrorMessage(error);
            }, this.delay);
        } else {
            const errorInputOne = new ErrorManager();
            const errorInputTwo = new ErrorManager();
            errorInputOne.showError(inputOne.getElement());
            errorInputTwo.showError(inputTwo.getElement());
            (this.buttonLogin?.getElement() as HTMLButtonElement).disabled = true;
            setTimeout(() => {
                this.closeErrorMessage(errorInputOne, errorInputTwo);
            }, this.delay);
        }
    }

    private onHandleSubmit(event: Event): void {
        event.preventDefault();
        const login = (this.inputLogin?.getElement() as HTMLInputElement).value;
        const password = (this.inputPass?.getElement() as HTMLInputElement).value;
        const isValidLogin = this.validate(login, this.minimumLengthName);
        const isValidPassword = this.validate(password, this.minimumLengthPassword);
        if (this.inputLogin && !isValidLogin && isValidPassword) {
            this.showErrorMessage(this.inputLogin);
            return;
        }
        if (this.inputPass && !isValidPassword && isValidLogin) {
            this.showErrorMessage(this.inputPass);
            return;
        }
        if (this.inputPass && this.inputLogin && !isValidPassword && !isValidLogin) {
            this.showErrorMessage(this.inputLogin, this.inputPass);
            return;
        }
        (this.inputLogin?.getElement() as HTMLInputElement).value = '';
        (this.inputPass?.getElement() as HTMLInputElement).value = '';
        this.saveUserDataToLocalStorage({ login, password });
        this.router.navigate(RoutePath.CHAT);
    }

    private saveUserDataToLocalStorage({ login, password }: UserDataType): void {
        LocalStorageManager.saveUserData({ login, password });
    }
}
