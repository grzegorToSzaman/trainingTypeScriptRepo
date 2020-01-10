"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizzeria {
    constructor(name) {
        this.pizzasInOrder = [];
        this.maxPizzasInOven = 10;
        this.recipes = [];
        this._manager = "Jan Kowalski";
        this.id = Pizzeria.id++;
        this.name = name;
    }
    get manager() {
        return this._manager;
    }
    set manager(manager) {
        this._manager = manager;
    }
    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }
    changeStatus(index, status) {
        this.pizzasInOrder[index].status = status;
    }
    changeSize(index, size) {
        this.pizzasInOrder[index].size = size;
    }
    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }
}
exports.Pizzeria = Pizzeria;
Pizzeria.id = 0;
