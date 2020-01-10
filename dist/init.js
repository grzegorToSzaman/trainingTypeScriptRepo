"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const american_pizzeria_1 = require("./american-pizzeria");
const polish_pizzeria_1 = require("./polish-pizzeria");
const pizza_model_1 = require("./pizza-model");
const americanHouse = new american_pizzeria_1.AmericanPizzeria("American House");
const laStrada = new polish_pizzeria_1.PolishPizzeria("LaStrada", true);
const venezia = new polish_pizzeria_1.PolishPizzeria("Venezia", false);
const isOvenInVeneziaFull = venezia.isOvenFull();
const capriciosa = {
    name: "Capriciosa",
    price: 20.99,
    size: "large",
    status: pizza_model_1.Status.Ordered
};
venezia.order(capriciosa);
venezia.changeStatus(0, pizza_model_1.Status.Baked);
console.log(venezia);
