export abstract class Pizzeria {
    name: string;
    static id: number = 0;
    public id: number;
    private pizzasInOrder: string[] = [];
    private maxPizzasInOven: number = 10;
    protected recipes: string[] = [];
    private _manager: string = "Jan Kowalski";

    constructor(name: string) {
        this.id = Pizzeria.id++;
        this.name = name;
    }

    get manager(): string {
        return this._manager;
    }

    set manager(manager) {
        this._manager = manager;
    }

    order(pizza: string): void {
        this.pizzasInOrder.push(pizza);
    }

    private isOvenFull(): boolean {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }

    abstract bake(): void
}