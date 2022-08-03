export const firstName = 'Juan';
export const lastName = 'Perez';
export const age = 30;

export function sum(x, y){
    return x + y;
}

export default class Person{
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}