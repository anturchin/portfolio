import { View } from '../../../View';

import './UserItem.scss';

export class UserItem extends View {
    private counter: number = 0;

    constructor(userName: string, isLogined: boolean) {
        const styles = isLogined ? ['user__item', 'active'] : ['user__item'];
        super({ tag: 'li', classNames: styles, textContent: `${userName}` });
        this.setupUserItem(userName, isLogined);
        this.updateCounterDisplay();
    }

    public getCounter(): number {
        return this.counter;
    }

    public increaseCounter(): void {
        this.counter += 1;
        this.updateCounterDisplay();
    }

    public decreaseCounter(): void {
        if (this.counter > 0) {
            this.counter -= 1;
        }
        this.updateCounterDisplay();
    }

    public setCounter(count: number): void {
        this.counter = count;
        this.updateCounterDisplay();
    }

    public resetCounter(): void {
        this.counter = 0;
        this.updateCounterDisplay();
    }

    public updateStatus(isLogined: boolean): void {
        if (isLogined) {
            this.getElement().classList.add('active');
        } else {
            this.getElement().classList.remove('active');
        }
        this.getElement().setAttribute('data-active', `${isLogined ? 1 : 0}`);
    }

    public updateCounterDisplay(): void {
        const counterElement = this.getElement().querySelector('.counter');
        if (counterElement) {
            if (this.getElement().classList.contains('active')) {
                counterElement.classList.add('active');
            } else {
                counterElement.classList.remove('active');
            }
            if (this.counter > 0) {
                counterElement.classList.remove('hidden');
                counterElement.textContent = `${this.counter}`;
            } else {
                counterElement.classList.add('hidden');
            }
        }
    }

    private setupUserItem(userName: string, isLogined: boolean): void {
        this.getElement().setAttribute('data-name', userName);
        this.getElement().setAttribute('data-active', `${isLogined ? 1 : 0}`);
        const counter = document.createElement('span');
        counter.classList.add('counter', 'hidden');
        this.addInnerElement(counter);
    }
}
