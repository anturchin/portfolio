import { View } from '../../View';

import './AboutText.scss';

const txt = `The application is designed to demonstrate the 
            Fun Chat task as part of the RSSchool JS/FE 2023Q3 course`;

export class AboutText extends View {
    constructor() {
        super({ tag: 'p', classNames: ['about__text'], textContent: txt });
    }
}
