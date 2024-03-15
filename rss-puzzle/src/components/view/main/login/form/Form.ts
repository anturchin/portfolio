import { View } from '../../../View';
import { Input } from './input/Input';
import { Button } from './button/Button';
import { InputValidator } from '../../../../utils/inputValidator/InputValidator';
import { ErrorManager } from '../../../../utils/errorManager/ErrorManager';
import { UserDataType } from '../../../../utils/localStorageManager/types';
import { LocalStorageManager } from '../../../../utils/localStorageManager/LocalStorageManager';
import { Router } from '../../../../router/router/Router';
import { IView } from '../../../View.interface';
import { Header } from '../../../header/Header';

import './Form.scss';

const ERROR_MESSAGE: string = `
    The name field must contain at least 3 characters,
    the surname field must contain at least 4 characters,
    both in Latin characters, and start with a capital letter.
`;
const DELAY: number = 5000;
export class Form extends View {
    private minimumLengthName: number;

    private minimumLengthSurname: number;

    private firstNameInput: Input | null;

    private surnameInput: Input | null;

    private loginButton: Button | null;

    private router: Router;

    private headerInstance: Header;

    constructor(
        router: Router,
        headerInstance: Header,
        minimumLengthName: number = 3,
        minimumLengthSurname: number = 4
    ) {
        super({
            tag: 'form',
            classNames: ['login__form'],
            callback: null,
        });
        this.minimumLengthName = minimumLengthName;
        this.minimumLengthSurname = minimumLengthSurname;
        this.router = router;
        this.headerInstance = headerInstance;
        this.firstNameInput = null;
        this.surnameInput = null;
        this.loginButton = null;
        this.setupFormContent();
        this.setupEventListener();
    }

    setupFormContent(): void {
        this.firstNameInput = new Input({
            type: 'text',
            label: 'Name',
            required: true,
            callback: this.validateFirstName.bind(this),
            minimumLength: this.minimumLengthName,
        });
        this.surnameInput = new Input({
            type: 'text',
            label: 'Surname',
            required: true,
            callback: this.validateFirstName.bind(this),
            minimumLength: this.minimumLengthSurname,
        });
        this.loginButton = new Button({ label: 'Login' });
        [
            this.firstNameInput.getElement(),
            this.surnameInput.getElement(),
            this.loginButton.getElement(),
        ].forEach((elem) => {
            this.viewHtmlElementCreator.addInnerElement(elem);
        });
    }

    private setupEventListener(): void {
        const form = this.viewHtmlElementCreator.getElement();
        form.addEventListener('submit', this.onHandleSubmit.bind(this));
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
            (this.loginButton?.getElement() as HTMLButtonElement).disabled = false;
        } else {
            errorInputOne.hideError();
            errorInputTwo.hideError();
            (this.loginButton?.getElement() as HTMLButtonElement).disabled = false;
        }
    }

    private showErrorMessage(inputOne: IView, inputTwo?: IView): void {
        if (!inputTwo) {
            const error = new ErrorManager(ERROR_MESSAGE);
            error.showError(inputOne.getElement());
            (this.loginButton?.getElement() as HTMLButtonElement).disabled = true;
            setTimeout(() => {
                this.closeErrorMessage(error);
            }, DELAY);
        } else {
            const errorInputOne = new ErrorManager(ERROR_MESSAGE);
            const errorInputTwo = new ErrorManager(ERROR_MESSAGE);
            errorInputOne.showError(inputOne.getElement());
            errorInputTwo.showError(inputTwo.getElement());
            (this.loginButton?.getElement() as HTMLButtonElement).disabled = true;
            setTimeout(() => {
                this.closeErrorMessage(errorInputOne, errorInputTwo);
            }, DELAY);
        }
    }

    private onHandleSubmit(event: Event): void {
        event.preventDefault();
        const firstName = (this.firstNameInput?.getElement() as HTMLInputElement).value;
        const lastName = (this.surnameInput?.getElement() as HTMLInputElement).value;
        const isValidName = this.validate(firstName, this.minimumLengthName);
        const isValidSurname = this.validate(lastName, this.minimumLengthSurname);
        if (this.firstNameInput && !isValidName && isValidSurname) {
            this.showErrorMessage(this.firstNameInput);
            return;
        }
        if (this.surnameInput && !isValidSurname && isValidName) {
            this.showErrorMessage(this.surnameInput);
            return;
        }
        if (this.surnameInput && this.firstNameInput && !isValidSurname && !isValidName) {
            this.showErrorMessage(this.firstNameInput, this.surnameInput);
            return;
        }
        (this.firstNameInput?.getElement() as HTMLInputElement).value = '';
        (this.surnameInput?.getElement() as HTMLInputElement).value = '';
        this.saveUserDataToLocalStorage({ firstName, lastName });
        this.router.navigate('/start');
    }

    private saveUserDataToLocalStorage({ firstName, lastName }: UserDataType): void {
        LocalStorageManager.saveUserData({ firstName, lastName });
        this.headerInstance.updateWrapperHeader();
    }
}
