import { IMessageTake, MessagesHistoryType } from '../chatService/messageReceiveService/types';
import { IUsersAccept } from '../chatService/types';
import { IAuthUser, IAuthUserError } from '../loginService/types';

export const enum TypeMessage {
    USER_LOGIN = 'USER_LOGIN',
    USER_LOGOUT = 'USER_LOGOUT',
    USER_EXTERNAL_LOGIN = 'USER_EXTERNAL_LOGIN',
    USER_EXTERNAL_LOGOUT = 'USER_EXTERNAL_LOGOUT',
    USER_ACTIVE = 'USER_ACTIVE',
    USER_INACTIVE = 'USER_INACTIVE',
    MSG_SEND = 'MSG_SEND',
    MSG_FROM_USER = 'MSG_FROM_USER',
    MSG_DELIVER = 'MSG_DELIVER',
    MSG_READ = 'MSG_READ',
    MSG_DELETE = 'MSG_DELETE',
    MSG_EDIT = 'MSG_EDIT',
    ERROR = 'ERROR',
}

export interface IMessage {
    id: string | null;
    type: TypeMessage;
    payload: IAuthUser | IAuthUserError | IUsersAccept | IMessageTake | MessagesHistoryType | null;
}

export interface IHandleErrorMessage {
    handleErrorMessage: (data: IMessage) => void;
}
