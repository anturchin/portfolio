import { View } from '../View';

export class About extends View {
    constructor() {
        super({ tag: 'section' });
        this.setupAbout();
    }

    private setupAbout(): void {
        this.getElement().textContent = 'about';
    }
}
