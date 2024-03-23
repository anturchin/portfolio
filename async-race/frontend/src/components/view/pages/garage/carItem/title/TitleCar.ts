import { View } from '../../../../View';

import './TitleCar.scss';

export class TitleCar extends View {
    constructor(carName: string = ' - ') {
        super({ tag: 'h3', classNames: ['car__title'] });
        this.setupTitleCar(carName);
    }

    private setupTitleCar(carName: string): void {
        this.getElement().textContent = carName;
    }
}
