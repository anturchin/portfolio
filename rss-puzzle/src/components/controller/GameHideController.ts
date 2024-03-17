import { IView } from '../view/View.interface';
import { Game } from '../view/main/game/Game';

export class GameHideController {
    private game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    public hideButtonCheck(): void {
        const button = this.game.buttonCheck;
        if (button) this.hideButton(button);
    }

    public hideButtonContinue(): void {
        const button = this.game.buttonContinue;
        if (button) this.hideButton(button);
    }

    public showButtonCheck(): void {
        const button = this.game.buttonCheck;
        if (button) this.showButton(button);
    }

    public showButtonContinue(): void {
        const button = this.game.buttonContinue;
        if (button) this.showButton(button);
    }

    private hideButton(element: IView): void {
        const button = element.getElement();
        if (button) {
            button.classList.remove('show');
            button.classList.add('hide');
        }
    }

    private showButton(element: IView): void {
        const button = element.getElement();
        if (button) {
            button.classList.add('show');
            button.classList.remove('hide');
        }
    }
}
