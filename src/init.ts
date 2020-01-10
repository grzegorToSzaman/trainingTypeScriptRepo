import {AmericanPizzeria} from "./american-pizzeria";
import {PolishPizzeria} from "./polish-pizzeria";
import {Status} from "./pizza-model";

const americanHouse = new AmericanPizzeria("American House");
const laStrada = new PolishPizzeria("LaStrada", true);
const venezia = new PolishPizzeria("Venezia", false);

const isOvenInVeneziaFull = venezia.isOvenFull();

const capriciosa = {
    name: "Capriciosa",
    price: 20.99,
    size: "large",
    status: Status.Ordered
};

venezia.order(capriciosa);
venezia.changeStatus(0, Status.Baked);

console.log(venezia);