const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [a1, a2, ...others] = numbers;
console.log(a1, a2);
console.log(others);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const impares = [b1, , b3, , b5, , b7, , b9] = numbers2;
console.log(b1,b3,b5,b7,b9);



const letters = [ ['a', 'b', 'c', 'd', 'e'] , ['f', 'g', 'h', 'i', 'j', 'k'], ['l', 'm', 'n', 'o'] ];
const [, [, , letraH]] = letters;

console.log(letraH);

