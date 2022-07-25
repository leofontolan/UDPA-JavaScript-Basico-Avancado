class Person{

    #name;

    constructor(){
        this.#name = 'John Doe';
    }

    get name(){
        return this.#name;
    }
}

const p1 = new Person();
p1.name = 'Leo Fontolan';
console.log(p1.name);