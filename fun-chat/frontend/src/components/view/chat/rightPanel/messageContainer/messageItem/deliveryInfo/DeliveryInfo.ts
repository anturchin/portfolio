import { View } from '../../../../../View';

import './DeliveryInfo.scss';

const statusMessage = {
    delivered: 'delivered',
    read: 'read,',
};
export class DeliveryInfo extends View {
    constructor(leftOrRight: string = 'right', status: string = statusMessage.delivered) {
        super({ tag: 'p', classNames: ['delivery__info', leftOrRight], textContent: status });
    }
}
