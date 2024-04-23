import { LoginService } from '../../services/loginService/LoginService';
import { ErrorManager } from '../../utils/errorManager/ErrorManager';
import { InputValidator } from '../../utils/inputValidator/InputValidator';
import { SessionStorageManager } from '../../utils/sessionStorageManager/SessionStorageManager';
import { UserDataType } from '../../utils/sessionStorageManager/types';
import { View } from '../../view/View';
import { ErrorAuth } from '../../view/login/errorAuth/ErrorAuth';
import { Form } from '../../view/login/form/Form';

export class LoginController {
    private delay: number = 5000;

    private minimumLengthName: number = 3;

    private minimumLengthPassword: number = 4;

    private loginService: LoginService;

    private form: Form;

    private errorAuth: ErrorAuth;

    constructor(loginService: LoginService, form: Form, errorAuth: ErrorAuth) {
        this.loginService = loginService;
        this.form = form;
        this.errorAuth = errorAuth;
    }

    public validateForm(value: string, minimumLength: number): boolean {
        const isAllowedCharacters = InputValidator.isAllowedCharacters(value);
        const isFirstLetterUpperCase = InputValidator.isFirstLetterUpperCase(value);
        const hasMinimumLength = InputValidator.hasMinimumLength(value, minimumLength);
        return isAllowedCharacters && isFirstLetterUpperCase && hasMinimumLength;
    }

    public handleSubmitForm(): void {
        const { inputLogin, inputPass } = this.form;

        const login = (inputLogin?.getElement() as HTMLInputElement).value;
        const password = (inputPass?.getElement() as HTMLInputElement).value;
        const isValidLogin = this.validateForm(login, this.minimumLengthName);
        const isValidPassword = this.validateForm(password, this.minimumLengthPassword);
        if (inputLogin && !isValidLogin && isValidPassword) {
            this.showErrorMessage(inputLogin);
            return;
        }
        if (inputPass && !isValidPassword && isValidLogin) {
            this.showErrorMessage(inputPass);
            return;
        }
        if (inputPass && inputLogin && !isValidPassword && !isValidLogin) {
            this.showErrorMessage(inputLogin, inputPass);
            return;
        }
        (inputLogin?.getElement() as HTMLInputElement).value = '';
        (inputPass?.getElement() as HTMLInputElement).value = '';
        const id = SessionStorageManager.generateRequestId();
        this.authorization({ id, login, password });
    }

    private authorization({ id, login, password }: UserDataType): void {
        this.loginService.login(id, login, password, this.errorAuth);
    }

    private showErrorMessage(inputOne: View, inputTwo?: View): void {
        const { buttonLogin } = this.form;

        if (!inputTwo) {
            const error = new ErrorManager();
            error.showError(inputOne.getElement());
            (buttonLogin?.getElement() as HTMLButtonElement).disabled = true;
            setTimeout(() => {
                this.closeErrorMessage(error);
            }, this.delay);
        } else {
            const errorInputOne = new ErrorManager();
            const errorInputTwo = new ErrorManager();
            errorInputOne.showError(inputOne.getElement());
            errorInputTwo.showError(inputTwo.getElement());
            (buttonLogin?.getElement() as HTMLButtonElement).disabled = true;
            setTimeout(() => {
                this.closeErrorMessage(errorInputOne, errorInputTwo);
            }, this.delay);
        }
    }

    private closeErrorMessage(errorInputOne: ErrorManager, errorInputTwo?: ErrorManager): void {
        const { buttonLogin } = this.form;

        if (!errorInputTwo) {
            errorInputOne.hideError();
            (buttonLogin?.getElement() as HTMLButtonElement).disabled = false;
        } else {
            errorInputOne.hideError();
            errorInputTwo.hideError();
            (buttonLogin?.getElement() as HTMLButtonElement).disabled = false;
        }
    }
}
