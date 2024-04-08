import { View } from '../View';

export class Chat extends View {
    constructor() {
        super({ tag: 'section' });
        this.setupChat();
    }

    private setupChat(): void {
        this.getElement().textContent = 'chat';
    }
}
