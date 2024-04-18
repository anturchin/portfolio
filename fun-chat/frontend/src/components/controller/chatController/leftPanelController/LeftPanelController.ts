import { IObserverMessages } from '../../../observers/observerMessages/ObserverMessages.interface';
import { ChatService } from '../../../services/chatService/ChatService';
import { IMessageResponse } from '../../../services/chatService/messageReceiveService/types';
import { LeftPanel } from '../../../view/chat/leftPanel/LeftPanel';
import { UserItem } from '../../../view/chat/leftPanel/userItem/UserItem';
import { ChatController } from '../ChatController';

export class LeftPanelController implements IObserverMessages<IMessageResponse> {
    private chatService: ChatService;

    private mainController: ChatController;

    private leftPanel: LeftPanel;

    private inputValue: string = '';

    constructor(chatService: ChatService, leftPanel: LeftPanel, mainController: ChatController) {
        this.chatService = chatService;
        this.leftPanel = leftPanel;
        this.mainController = mainController;
        this.onHandleInput = this.onHandleInput.bind(this);

        const messageReceiveService = this.chatService.getMessageReceiveService();
        messageReceiveService.registerObserver(this.constructor.name, this);

        this.initialUserList();
        this.setupSearchInput();
    }

    public updateMessages(data: IMessageResponse): void {
        console.log(data);
    }

    public updateUserList(): void {
        const userList = this.leftPanel.getUserList();
        const userService = this.chatService.getUserService();
        userService.fetchAllUsers((users) => {
            userList.updateUserList(users);
            this.handleFilterUserList();
        });
    }

    private handleFilterUserList(): void {
        const userItems = this.leftPanel.getUserItems();
        const filteredItems = userItems.filter((item) => {
            return this.filterListItem(item, this.inputValue);
        });
        this.filterUserList(filteredItems);
    }

    private filterListItem(item: UserItem, value: string): boolean {
        const userName = item.getElement().textContent?.toLocaleLowerCase();
        if (userName?.includes(value)) {
            return true;
        }
        return false;
    }

    private filterUserList(filteredItems: UserItem[]): void {
        const userList = this.leftPanel.getUserList().getElement();
        while (userList.firstChild) {
            userList.removeChild(userList.firstChild);
        }
        userList.append(...filteredItems.map((item) => item.getElement()));
    }

    private onHandleInput(event: Event): void {
        const { value } = event.target as HTMLInputElement;
        this.inputValue = value;
        this.handleFilterUserList();
    }

    private setupSearchInput(): void {
        const input = this.leftPanel.getSearchInput();
        input.getElement().addEventListener('input', this.onHandleInput);
    }

    private initialUserList(): void {
        this.updateUserList();
    }
}
