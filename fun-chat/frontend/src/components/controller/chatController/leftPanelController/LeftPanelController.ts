import { IObserverUsers } from '../../../observers/observerUsers/ObserverUsers.interface';
import { ChatService } from '../../../services/chatService/ChatService';
import { User } from '../../../services/chatService/types';
import { State } from '../../../state/State';
import { LeftPanel } from '../../../view/chat/leftPanel/LeftPanel';
import { UserItem } from '../../../view/chat/leftPanel/userItem/UserItem';

export class LeftPanelController implements IObserverUsers<User> {
    private chatService: ChatService;

    private leftPanel: LeftPanel;

    private state: State;

    private inputValue: string = '';

    constructor(chatService: ChatService, leftPanel: LeftPanel, state: State) {
        this.chatService = chatService;
        this.leftPanel = leftPanel;
        this.state = state;
        this.state.registerUserObserver(this.constructor.name, this);
        this.onHandleInput = this.onHandleInput.bind(this);
        this.handleUserItemClick = this.handleUserItemClick.bind(this);
        this.initialUserList();
        this.setupSearchInput();
        this.setupUserItemClickListeners();
    }

    public updateUsers(data: User): void {
        const userList = this.leftPanel.getUserList();
        userList.updateUserList(data);
        userList.moveToBottomInactiveUserItem();
    }

    public updateCounter(): void {
        console.log(this.state.getMessages());
    }

    public updateCounterInUserItems(): void {
        const userItems = this.leftPanel.getUserItems();
        if (userItems.length !== 0) {
            userItems.forEach((item) => {
                const userName = item.getElement().getAttribute('data-name');
                console.log(userName);
                const msgService = this.chatService.getMessageReceiveService();
                msgService.sendRequestHistoryMessages(
                    userName || '',
                    false,
                    this.updateCounter.bind(this)
                );
            });
        }
    }

    public initialUserList(): void {
        const userList = this.leftPanel.getUserList();
        const userService = this.chatService.getUserService();
        userService.fetchAllUsers((users) => {
            userList.initialUserList(users);
            this.handleFilterUserList();
        }, this.updateCounterInUserItems.bind(this));
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

    private handleUserItemClick(event: Event): void {
        const element = event.target as HTMLElement;
        if (element.classList.contains('user__item')) {
            const login = element.getAttribute('data-name');
            const messageService = this.chatService.getMessageReceiveService();
            if (login) messageService.sendRequestHistoryMessages(login, true);
        }
    }

    private setupUserItemClickListeners(): void {
        const list = this.leftPanel.getUserList();
        list.getElement().addEventListener('click', this.handleUserItemClick);
    }
}
