import { View } from '../View';
import './Container.scss';

export class Container extends View {
    constructor() {
        super({ tag: 'div', classNames: ['container'], callback: null });
    }

    render(): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
