import { TypeMessage } from '../../../types';

export type MessageSendType = {
    to: string;
    text: string;
};

export interface IMessageSend {
    message: MessageSendType;
}

export interface IMessageRequest {
    id: string;
    type: TypeMessage;
    payload: IMessageSend;
}

export type StatusMessage = {
    isDelivered: boolean;
    isReaded: boolean;
    isEdited: boolean;
};

export type MessageTakeType = {
    id: string;
    from: string;
    to: string;
    text: string;
    datetime: number;
    status: StatusMessage;
};

export interface IMessageTake {
    message: MessageTakeType;
}

export type MessageError = {
    error: string;
};

export interface IMessageResponse {
    id: string;
    type: TypeMessage;
    payload: IMessageTake | MessageError;
}
