import { View } from '../View';

export class Login extends View {
    constructor() {
        super({ tag: 'section' });
        this.setupLogin();
    }

    private setupLogin(): void {
        this.getElement().textContent = 'login';
    }
}
