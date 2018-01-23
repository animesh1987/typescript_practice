import { generateRandomId, Component, enumerable, prop, param } from './utils';
import { random } from 'lodash';

class ComponentLog {
    constructor() {
        this.log();
    }
    log() {
        console.log('Component created');
    }
}

@Component({
    id: 'app'
})
class App extends ComponentLog {
    private readonly foo: string = 'bar';

    @prop
    static version: string;

    @enumerable(false)
    private onInit(@param el: HTMLElement | null): void {
        setInterval(function() {
            if (el) {
                el.innerHTML = generateRandomId({
                    symbol: '#',
                    len: random(7, 10)
                });
            }
        }, 1000)
    }
}

function main(ComponentClass) {
    const app = document.getElementById(ComponentClass.id);
    const cmp = new ComponentClass();
    cmp.onInit(app);
}

main(App);