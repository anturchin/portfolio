import { SvgCarCreator } from '../../../../../utils/svgCreator/SvgCarCreator';
import { View } from '../../../../View';
import { FlagItem } from '../flagItem/FlagItem';

import './CarImage.scss';

export class CarImage extends View {
    private color?: string;

    constructor(color?: string) {
        super({ tag: 'div', classNames: ['car__image'] });
        this.color = color || SvgCarCreator.randomHexColor();
        this.setupCarImage();
    }

    private setupCarImage(): void {
        const svgString = SvgCarCreator.create(this.color);
        this.getElement().innerHTML = svgString;
        const flagImg = new FlagItem().getElement();
        this.addInnerElement(flagImg);
    }
}
