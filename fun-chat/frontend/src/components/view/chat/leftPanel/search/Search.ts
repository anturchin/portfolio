import { View } from '../../../View';

import './Search.scss';

export class Search extends View {
    constructor() {
        super({ tag: 'input', classNames: ['search__input'] });
        this.setupSearch();
    }

    private setupSearch(): void {
        this.getElement().setAttribute('type', 'text');
        this.getElement().setAttribute('placeholder', 'Search');
    }
}
