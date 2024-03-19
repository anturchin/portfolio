import { View } from '../../../View';

import './NameList.scss';

export class NameList extends View {
    constructor(nameList: string, isWordGuessed: boolean) {
        const className = isWordGuessed ? 'list__name' : 'list__name red';
        super({
            tag: 'p',
            callback: null,
            classNames: [...className.split(' ')],
            textContent: nameList,
        });
    }
}
