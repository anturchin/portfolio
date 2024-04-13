import { ChatService } from '../../../services/chatService/ChatService';
import { SessionStorageManager } from '../../../utils/sessionStorageManager/SessionStorageManager';
import { Header } from '../../../view/chat/header/Header';
import { ChatController } from '../ChatController';

export class HeaderController {
    private chatService: ChatService;

    private headerChat: Header;

    private mainController: ChatController;

    constructor(chatService: ChatService, headerChat: Header, mainController: ChatController) {
        this.chatService = chatService;
        this.headerChat = headerChat;
        this.mainController = mainController;
        this.setUserName();
        this.onClickBtnLogout();
    }

    private logoutHandle(): void {
        const logoutService = this.chatService.getLogoutService();
        logoutService.logout();
    }

    private onClickBtnLogout(): void {
        this.headerChat
            .getBtnLogout()
            .getElement()
            .addEventListener('click', () => {
                this.logoutHandle();
            });
    }

    private setUserName(): void {
        const element = this.headerChat.getUserName();
        element.getElement().textContent = `user: ${this.getUserNameInSs()}`;
    }

    private getUserNameInSs(): string | null {
        const userDate = SessionStorageManager.getUserData();
        if (userDate) {
            const { login } = userDate;
            return login;
        }
        return null;
    }
}
