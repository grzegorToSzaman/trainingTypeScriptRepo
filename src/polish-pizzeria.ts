import {Pizzeria} from "./pizzeria";

export class PolishPizzeria extends Pizzeria {
    constructor(name: string, public isOpenAtNight: boolean) {
        super(name);
    }

    bake() {
        return "pizza is being baked"
    }
}