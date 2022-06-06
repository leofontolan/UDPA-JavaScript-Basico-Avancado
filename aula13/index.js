let valorA = 'A';
let valorB = 'B';
let valorC = 'C';

const mudar = valorA;
valorA = valorB;
valorB = valorC;
valorC = mudar;

console.log(valorA, valorB, valorC);
