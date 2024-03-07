import { Footer } from '../view/footer/Footer';
import { Header } from '../view/header/Header';
import { Main } from '../view/main/Main';
import { Login } from '../view/main/login/Login';

export class App {
    render() {
        const header = new Header().getElement();
        const main = new Main().getElement();
        main.append(new Login().getElement());
        const footer = new Footer().getElement();
        const body: HTMLElement | null = document.querySelector('body');
        if (body) {
            body.append(...[header, main, footer]);
        }
    }
}
