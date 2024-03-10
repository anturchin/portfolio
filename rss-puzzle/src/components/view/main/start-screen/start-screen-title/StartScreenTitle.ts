import { View } from '../../../View';

import './StartScreenTitle.scss';

const TEXT_CONTENT = `
    Are you ready to embark on an exciting journey through the English language? <br> 
    <span class="start-screen__action">Simply press the 
    <span class="start-screen__start">"Start"</span> 
    button and unlock the doors to a world of thrilling puzzles!</span>
`;

export class StartScreenTitle extends View {
    constructor() {
        super({
            tag: 'h3',
            classNames: ['start-screen__title'],
            callback: null,
        });
        this.setupStartScreenTitle();
    }

    private setupStartScreenTitle(): void {
        const title = this.viewHtmlElementCreator.getElement();
        title.innerHTML = TEXT_CONTENT;
    }
}
