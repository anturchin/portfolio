import { View } from '../../../../View';

import './CompanionName.scss';

export class CompanionName extends View {
    constructor(nameCompanion: string = 'Oleg') {
        super({ tag: 'p', classNames: ['companion__name'], textContent: `${nameCompanion}` });
    }
}
