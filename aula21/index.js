// Tipos primitivos
let a = 'A';
let b = a;
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

//Tipo por referência
let c = [1, 2, 3];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d);
d.pop();
console.log(c, d);


//Objetos por referência
const obj1 = { nome: 'João' };
const obj2 = obj1;

obj1.nome = 'Maria';
console.log(obj1, obj2);

//Spread operator
const obj3 = { nome: 'João' };
const obj4 = { ...obj3 };

obj3.nome = 'Maria';
console.log(obj3, obj4);


