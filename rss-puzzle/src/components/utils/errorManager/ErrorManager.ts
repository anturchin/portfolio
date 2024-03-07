import { HTMLElementCreator } from '../HtmlElementCreator';
import './ErrorManager.scss';

export class ErrorManager {
    private static errorMessageElement: HTMLElement | null;

    public static showError(message: string, targetElement: HTMLElement): void {
        if (!ErrorManager.errorMessageElement) {
            const props = {
                tag: 'div',
                classNames: ['error__massage'],
                textContent: message,
                callback: null,
            };
            ErrorManager.errorMessageElement = new HTMLElementCreator(props).getElement();
            ErrorManager.errorMessageElement.textContent = message;
            targetElement.append(ErrorManager.errorMessageElement);
        }
    }

    public static hideError(): void {
        if (ErrorManager.errorMessageElement) {
            ErrorManager.errorMessageElement.remove();
            ErrorManager.errorMessageElement = null;
        }
    }
}
