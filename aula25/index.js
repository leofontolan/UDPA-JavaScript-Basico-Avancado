// Em JavaScript tudo pode ser avaliado como true ou false
// falsy e truthy

const f1 = function() {return '';}
const f2 = function() {return null;}

// A função f1 retorna uma string vazia, logo é falsy
// a comparação retorna o próprio valor falsy
console.log(true && f1() && true);

// A função f2 retorna null, logo é falsy
// a comparação retorna o próprio valor falsy
console.log(true && f2() && true);

// NaN também é falsy
console.log(true && NaN && true);

// Zero é um valor que representa false
console.log(true && 0 && true);

//Strings com valores é considerado truthy
// a comparação retorna o próprio valor truthy
console.log('Luiz' && 'Carla' && 'João');

// 1 é um valor é considerado truthy
const f3 = function() {return 'olá';}
const f4 = function() {return 1;}

console.log(false || f3() || false);


const corUsuario = 'branco';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
