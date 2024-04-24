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

export type FetchingMessageType = {
    id: string;
    status: {
        isDelivered: boolean;
        isReaded?: boolean;
        isDeleted?: boolean;
    };
};

export interface IFetchingMessage {
    message: FetchingMessageType;
}
export interface IFetchingMessageHistory {
    id: null;
    type: TypeMessage;
    payload: IFetchingMessage;
}

export type ReadMessageType = {
    id: string;
    status: {
        isReaded: boolean;
    };
};

export type MessageIdType = {
    id: string;
};

export interface IReadMessage {
    message: ReadMessageType;
}
export interface IResponseReadMessage {
    id: null;
    type: TypeMessage;
    payload: ReadMessageType;
}

export interface IRequestReadMessage {
    id: string;
    type: TypeMessage;
    payload: {
        message: MessageIdType;
    };
}

export interface IRequestDeleteMessage {
    id: string;
    type: TypeMessage;
    payload: {
        message: MessageIdType;
    };
}

export type DeleteMessageType = {
    id: string;
    status: {
        isDeleted: boolean;
    };
};

export type IDeleteMessageType = {
    message: DeleteMessageType;
};
export interface IResponseDeleteMessage {
    id: string;
    type: TypeMessage;
    payload: DeleteMessageType;
}
