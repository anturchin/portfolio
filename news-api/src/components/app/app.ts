import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Sources } from '../../types';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        const sources = document.querySelector('.sources') as HTMLElement;
        if (sources) {
            sources.addEventListener('click', (e) => {
                this.controller.getNews(e, (data) => {
                    if (data) {
                        this.view.drawNews(data);
                    }
                });
            });
        }
        this.controller.getSources((data) => {
            if (data) {
                const sourceData = data as Sources;
                this.view.drawSources(sourceData);
            }
        });
    }
}

export default App;
