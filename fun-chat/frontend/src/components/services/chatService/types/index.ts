import { TypeMessage } from '../../types';

export interface ILogoutUser {
    user: {
        login: string;
        password: string;
        isLogined?: boolean;
    };
}

export interface ILogoutSend {
    id: string | null;
    type: TypeMessage;
    payload: ILogoutUser;
}
