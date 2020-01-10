import { Orderable } from "./orderable";
import {Pizza, SizeKey, Status} from "./pizza-model";

export abstract class Pizzeria implements Orderable {
    name: string;
    static id = 0;
    public id: number;
    pizzasInOrder: Pizza[] = [];
    private maxPizzasInOven = 10;
    protected recipes: string[] = [];
    private _manager = "Jan Kowalski";

    constructor(name: string) {
        this.id = Pizzeria.id++;
        this.name = name;
    }

    get manager() {
        return this._manager;
    }

    set manager(manager) {
        this._manager = manager;
    }

    order(pizza: Pizza) {
        this.pizzasInOrder.push(pizza);
    }

    changeStatus(index: number, status: Status) {
        this.pizzasInOrder[index].status = status;
    }

    changeSize(index: number, size: SizeKey) {
        this.pizzasInOrder[index].size = size;
    }

    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }

    abstract bake(): void
}