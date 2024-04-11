import { View } from '../../View';
import { ErrorButton } from './errorBtn/ErrorButton';
import { ErrorMessage } from './errorMessage/ErrorMessage';
import { ErrorWrapper } from './errorWrapper/ErrorWrapper';

import './ErrorAuth.scss';

export class ErrorAuth extends View {
    public errorWrapper: ErrorWrapper;

    public errorMessage: ErrorMessage;

    public errorBtn: ErrorButton;

    constructor() {
        super({ tag: 'div', classNames: ['overlay', 'hidden'] });
        this.errorWrapper = new ErrorWrapper();
        this.errorMessage = new ErrorMessage();
        this.errorBtn = new ErrorButton();
        this.showMessage = this.showMessage.bind(this);
        this.hiddenMessage = this.hiddenMessage.bind(this);
        this.setupErrorAuth();
        this.setupEventListener();
    }

    public showMessage(message: string): void {
        this.errorMessage.getElement().textContent = message;
        this.getElement().classList.remove('hidden');
    }

    public hiddenMessage(): void {
        this.getElement().classList.add('hidden');
    }

    private setupEventListener(): void {
        this.errorBtn.getElement().addEventListener('click', this.hiddenMessage);
    }

    private setupErrorAuth(): void {
        this.errorWrapper
            .getElement()
            .append(...[this.errorMessage.getElement(), this.errorBtn.getElement()]);
        this.addInnerElement(this.errorWrapper.getElement());
    }
}
