export interface IUser {
    id: string | null;
    login: string;
    password: string;
    isLogined?: boolean;
}

export const enum ControllerName {
    LeftPanelController = 'LeftPanelController',
    RightPanelController = 'RightPanelController',
}
