"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pizzeria_1 = require("./pizzeria");
class PolishPizzeria extends pizzeria_1.Pizzeria {
    constructor(name, isOpenAtNight) {
        super(name);
        this.isOpenAtNight = isOpenAtNight;
    }
    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }
    bake() {
        return "pizza is being baked";
    }
}
exports.PolishPizzeria = PolishPizzeria;
