const num1 = 10;
const num2 = 20.65;
const stringNum = '10';

//Adicionar valores
console.log(num1 +  num2);
console.log(num1 +  stringNum);

//Subtrair valores
console.log(num1 -  num2);

//Potencia de valore
console.log(num1 ** num2);

//Resto da divisão
console.log(num1 % num2);

//Incremento
let contator = 1;
contator++;
console.log(contator);

contator--;
console.log(contator);

contator += 10;
console.log(contator);

contator -= 10;
console.log(contator);

contator *= 10;
console.log(contator);

contator /= 10;
console.log(contator);

contator %= 10;
console.log(contator);

contator =+ 10;
console.log(contator);

contator =- 10;
console.log(contator);


//Converter valores de forma explicita
console.log(Number(stringNum));
console.log(parseInt(stringNum));