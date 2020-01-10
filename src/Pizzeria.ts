class Pizzeria {
    readonly name;
    private pizzasInOrder = [];
    private maxPizzasInOven = 10;
    protected recipes = [];
    private _manager = "Jan Kowalski";

    constructor(name) {
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

    private isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }
}

const laStrada = new Pizzeria("LaStrada");
laStrada.order("Havanian Pizza");
laStrada.manager;
laStrada.manager = "Jolanta Nowak";