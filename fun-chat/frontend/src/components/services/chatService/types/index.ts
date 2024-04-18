import { TypeMessage } from '../../types';

export interface IUser {
    login: string;
    password: string;
    isLogined?: boolean;
}

export type User = {
    login: string;
    isLogined: boolean;
};
export interface ILogoutUser {
    user: IUser | User;
}

export interface ILogoutSend {
    id: string | null;
    type: TypeMessage;
    payload: ILogoutUser;
}

export interface IUsersSend {
    id: string;
    type: TypeMessage;
    payload: null;
}

export interface IUserAccept {
    users: User[];
}

export interface IUsersAccept {
    id: string;
    type: TypeMessage;
    payload: IUserAccept | null;
}

export type CallBackUsers = (users: User[]) => void;
