import { TypeMessage } from '../../../types';

export type MessageSendType = {
    to: string;
    text: string;
};

export interface IMessageSend {
    message: MessageSendType;
}

export type LoginMessageType = {
    login: string;
};

export type UserMessageType = {
    user: LoginMessageType;
};

export interface IMessageRequest {
    id: string;
    type: TypeMessage;
    payload: IMessageSend | UserMessageType;
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

export type MessagesHistoryType = {
    messages: MessageTakeType[];
};

export interface IMessageResponse {
    id: string;
    type: TypeMessage;
    payload: IMessageTake | MessagesHistoryType | MessageError;
}
