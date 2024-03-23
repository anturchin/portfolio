import { View } from '../../../../View';

import flagImage from '../../../../../../assets/image/flag.svg';

import './FlagItem.scss';

export class FlagItem extends View {
    constructor() {
        super({ tag: 'img', classNames: ['car__flag'] });
        this.setupFlagItem();
    }

    private setupFlagItem(): void {
        (this.getElement() as HTMLImageElement).src = flagImage;
    }
}
