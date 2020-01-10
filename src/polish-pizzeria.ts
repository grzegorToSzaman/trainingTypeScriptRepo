import {Pizzeria} from "./pizzeria";
import {Pizza} from "./pizza-model";

interface CancelablePizza {
    cancelable: boolean;
}

export class PolishPizzeria extends Pizzeria {
    constructor(name: string, public isOpenAtNight: boolean) {
        super(name);
    }

    order(pizza: Pizza & CancelablePizza) {
        this.pizzasInOrder.push(pizza);
    }



    bake() {
        return "pizza is being baked"
    }
}