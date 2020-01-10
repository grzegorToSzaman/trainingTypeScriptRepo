var Pizzeria = /** @class */ (function () {
    function Pizzeria(name) {
        this.pizzasInOrder = [];
        this.maxPizzasInOven = 10;
        this.recipes = [];
        this._manager = "Jan Kowalski";
        this.name = name;
    }
    Object.defineProperty(Pizzeria.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        set: function (manager) {
            this._manager = manager;
        },
        enumerable: true,
        configurable: true
    });
    Pizzeria.prototype.order = function (pizza) {
        this.pizzasInOrder.push(pizza);
    };
    Pizzeria.prototype.isOvenFull = function () {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    };
    return Pizzeria;
}());
var laStrada = new Pizzeria("LaStrada");
laStrada.order("Havanian Pizza");
laStrada.manager;
laStrada.manager = "Jolanta Nowak";
