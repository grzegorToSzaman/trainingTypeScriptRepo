import {AmericanPizzeria} from "./american-pizzeria";
import {PolishPizzeria} from "./polish-pizzeria";

const americanHouse = new AmericanPizzeria("American House");
const laStrada = new PolishPizzeria("LaStrada", true);
const venezia = new PolishPizzeria("Venezia", false);

console.log(americanHouse);