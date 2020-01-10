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
    checkPrice({ price }) {
        if (typeof price === "string") {
            console.log("price is string", price.toLocaleLowerCase());
        }
        else {
            console.log("price is number", price.toFixed(2));
        }
    }
    getPaymentMethod(payment) {
        switch (payment.type) {
            case "cash": return `Paid in cash in ${payment.currency}`;
            case "debitCard": return `Paid with debit card with code ${payment.code}`;
            case "onlinePayment": return `Paid online wth bank account ${payment.bankAccount}`;
        }
    }
    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }
}
exports.Pizzeria = Pizzeria;
Pizzeria.id = 0;
