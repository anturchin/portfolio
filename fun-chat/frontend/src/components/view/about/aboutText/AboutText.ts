import { View } from '../../View';

import './AboutText.scss';

const txt = `The application was developed as part of the 
Fun Chat learning task as part of the RSSchool JS/FE 2023Q3 course.`;

export class AboutText extends View {
    constructor() {
        super({ tag: 'p', classNames: ['about__text'], textContent: txt });
    }
}
