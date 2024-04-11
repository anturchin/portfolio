import { View } from '../../../../../View';

import './MessageContent.scss';

const tmp = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint deleniti molestiae aspernatur officiis nesciunt tempora minus adipisci maxime repudiandae doloribus!
    Debitis quia repellat voluptatibus nulla eum reprehenderit quidem vitae magnam?`;

export class MessageContent extends View {
    constructor() {
        super({ tag: 'p', classNames: ['message__content'], textContent: tmp });
    }
}
