import { TypeMessage } from '../../types';

export interface IAuthUser {
    user: {
        login: string;
        password: string;
        isLogined?: boolean;
    };
}

export interface IAuthUserError {
    error: string;
}

export interface ILoginSend {
    id: string | null;
    type: TypeMessage;
    payload: IAuthUser;
}

export interface ILoginError {
    id: string | null;
    type: TypeMessage;
    payload: IAuthUser;
}
