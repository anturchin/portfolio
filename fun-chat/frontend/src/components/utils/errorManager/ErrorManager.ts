import { HTMLElementCreator } from '../HtmlElementCreator';
import './ErrorManager.scss';

const ERROR_MESSAGE: string = `
    The name field must contain at least 3 characters,
    the password field must contain at least 4 characters,
    both in Latin characters, and start with a capital letter.
`;

export class ErrorManager {
    private errorMessageElement: HTMLElementCreator | null;

    constructor() {
        const props = {
            tag: 'div',
            classNames: ['error__massage'],
            textContent: ERROR_MESSAGE,
        };
        this.errorMessageElement = new HTMLElementCreator(props);
    }

    public showError(targetElement: HTMLElement): void {
        if (this.errorMessageElement) {
            targetElement.after(this.errorMessageElement.getElement());
        }
    }

    public hideError(): void {
        if (this.errorMessageElement) {
            this.errorMessageElement.getElement().remove();
            this.errorMessageElement = null;
        }
    }
}
