import { View } from '../../../View';

import './Table.scss';
import { Thead } from './thead/Thead';

export class Table extends View {
    constructor() {
        super({ tag: 'table', classNames: ['winners-table'] });
        this.setupTable();
    }

    private setupTable(): void {
        const thead = new Thead().getElement();
        this.addInnerElement(thead);
    }
}
