"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const american_pizzeria_1 = require("./american-pizzeria");
const polish_pizzeria_1 = require("./polish-pizzeria");
const americanHouse = new american_pizzeria_1.AmericanPizzeria("American House");
const laStrada = new polish_pizzeria_1.PolishPizzeria("LaStrada", true);
const venezia = new polish_pizzeria_1.PolishPizzeria("Venezia", false);
console.log(americanHouse);
