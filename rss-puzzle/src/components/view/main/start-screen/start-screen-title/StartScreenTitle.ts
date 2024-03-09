import { View } from '../../../View';

import './StartScreenTitle.scss';

const TEXT_CONTENT = `
    "RSS Puzzle" - English language improvement game. 
    Press the "Start" button and dive into the world of puzzles!
`;

export class StartScreenTitle extends View {
    constructor() {
        super({
            tag: 'h2',
            textContent: TEXT_CONTENT,
            classNames: ['start-screen__title'],
            callback: null,
        });
    }
}
