let num1 = 10;
let num2 = 20.5435343;
let num3 = '645';

console.log(num1.toString() + num2);

console.log(num1 + num2);
console.log(num2.toFixed(2));
console.log(num2.toString(2));
console.log(Number.isInteger(num1));
console.log(`\n`)

//Imprecisão de valores IEEE-754
let imp1 = 0.7;
let imp2 = 0.1;
let result = ((imp1 * 100) + (imp2 * 100)) / 100;
console.log(parseFloat(result));

//Imprecisão de valores IEEE-754
let imp3 = 0.7;
let imp4 = 0.1;
let result5 = imp3 + imp4;
console.log(parseFloat(result5.toFixed(2)));