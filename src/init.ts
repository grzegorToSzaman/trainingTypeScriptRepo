import {AmericanPizzeria} from "./american-pizzeria";
import {PolishPizzeria} from "./polish-pizzeria";
import {SizeKey, Status} from "./pizza-model";

const americanHouse = new AmericanPizzeria("American House");
const laStrada = new PolishPizzeria("LaStrada", true);
const venezia = new PolishPizzeria("Venezia", false);

const isOvenInVeneziaFull = venezia.isOvenFull();

const capriciosa = {
    name: "Capriciosa",
    price: "21.00zł",
    size: "medium",
    status: Status.Ordered,
    cancelable: true,
};

venezia.order(capriciosa);
venezia.changeStatus(0, Status.Baked);
venezia.changeSize(0, "small");

console.log(venezia);