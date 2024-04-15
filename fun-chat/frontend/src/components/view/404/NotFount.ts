import { View } from '../View';
import { ErrorMessage } from './errorMessage/ErrorMessage';
import { ErrorWrapper } from './errorWrapper/ErrorWrapper';

import './NotFount.scss';

export class NotFount extends View {
    constructor() {
        super({ tag: 'div', classNames: ['not-found'] });
        this.setupErrorAuth();
    }

    private setupErrorAuth(): void {
        const wrapper = new ErrorWrapper().getElement();
        const message = new ErrorMessage().getElement();
        wrapper.append(message);
        this.addInnerElement(wrapper);
    }
}
