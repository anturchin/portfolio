import { StatusMessage } from '../../../../../../services/chatService/messageReceiveService/types';
import { View } from '../../../../../View';

import './DeliveryInfo.scss';

const statusMessage = {
    delivered: 'delivered',
    sent: 'sent',
    read: 'read',
};

export class DeliveryInfo extends View {
    private status: StatusMessage;

    constructor(leftOrRight: string, status: StatusMessage) {
        const isDelivered = status.isDelivered ? statusMessage.delivered : statusMessage.sent;
        const textContent = leftOrRight === 'left' ? '' : isDelivered;
        super({
            tag: 'p',
            classNames: ['delivery__info', leftOrRight],
            textContent,
        });
        this.status = status;
    }
}
