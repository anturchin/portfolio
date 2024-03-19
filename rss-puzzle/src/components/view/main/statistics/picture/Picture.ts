import { View } from '../../../View';

import './Picture.scss';

export class Picture extends View {
    constructor(path: string) {
        super({ tag: 'img', callback: null, classNames: ['statistics__picture'] });
        this.setupPicture(path);
    }

    private setupPicture(path: string): void {
        (this.viewHtmlElementCreator.getElement() as HTMLImageElement).src = path;
    }
}
