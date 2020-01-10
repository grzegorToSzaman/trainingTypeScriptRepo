interface Item {
    name: string
}

interface ProductsQueue<T> {
    push(item: T): void;
    getAll(): T[];
}

class Queue<T extends Item> implements ProductsQueue<T>{
    private data: T[] = [];

    push(item: T) {
        this.data.push(item);
    }

    pop() {
        this.data.shift();
    }

    getAll() {
        return this.data
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
