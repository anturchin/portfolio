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
        let isDelivered = status.isDelivered ? statusMessage.delivered : statusMessage.sent;
        if (status.isReaded) {
            isDelivered = statusMessage.read;
        }
        // const textContent = leftOrRight === 'left' ? '' : isDelivered;
        super({
            tag: 'p',
            classNames: ['delivery__info', leftOrRight],
            textContent: isDelivered,
        });
        this.status = status;
    }
}
