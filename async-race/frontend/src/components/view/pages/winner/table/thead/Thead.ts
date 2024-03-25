import { View } from '../../../../View';
import { Th } from './th/Th';
import { Tr } from './tr/Tr';

import './Thead.scss';

const COLUMNS_NAME: string[] = [
    'Number',
    'Car',
    'Name',
    'Wins',
    'Best time (seconds)',
];

export class Thead extends View {
    constructor() {
        super({ tag: 'thead', classNames: ['table__thead'] });
        this.setupThead();
    }

    private setupThead(): void {
        const tr = new Tr().getElement();
        const thList: HTMLElement[] = [];
        COLUMNS_NAME.forEach((colName) => {
            thList.push(new Th(colName).getElement());
        });
        tr.append(...thList);
        this.addInnerElement(tr);
    }
}
