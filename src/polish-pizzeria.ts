import {Pizzeria} from "./pizzeria";
import {Pizza} from "./pizza-model";

interface CancelablePizza {
    cancelable: boolean;
}

function PizzaCreated(target: Function) {
    console.log("Polish pizza has been created...");
}

function CloseAtNight<T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        openAtNight = false;
    }
}

@CloseAtNight
@PizzaCreated

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