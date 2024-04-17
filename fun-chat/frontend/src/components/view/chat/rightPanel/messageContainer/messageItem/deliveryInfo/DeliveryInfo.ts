import { StatusMessage } from '../../../../../../services/chatService/messageReceiveService/types';
import { View } from '../../../../../View';

import './DeliveryInfo.scss';

const statusMessage = {
    delivered: 'delivered',
    read: 'read,',
};
export class DeliveryInfo extends View {
    constructor(leftOrRight: string, status: StatusMessage) {
        super({
            tag: 'p',
            classNames: ['delivery__info', leftOrRight],
            textContent: status.isDelivered ? statusMessage.delivered : statusMessage.read,
        });
    }
}
