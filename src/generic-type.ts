interface Item {
    name: string
}

class Queue<T extends Item> {
    private data: T[] = [];

    push(item: T) {
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }
}

/*
const people = new Queue<string>();
people.push("asd");
// people.push(123);

const numbers = new Queue<number>();
numbers.push(123);
// numbers.push(true);*/

interface ProductItem {
    id: number,
    name: string
}

const productItems = new Queue<ProductItem>();
productItems.push({ id:123, name: "Milk" });
