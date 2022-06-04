/*
Leonardo Fontolan tem 42 AnalyserNode, pesa 88 kg tem 
1,71 de altura e tem um IMC de 29,9.
Leonardo, nasceu em 1980.
*/

const nome = 'Leonardo';
const sobrenome = 'Fontolan';
const idade = 42;
const peso = 88;
const altura = 1.71;
let imc = peso / (altura * altura);
let anoNascimento;

let anoAtual = new Date().getFullYear();
anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${imc}`);
console.log(`${nome}, nasceu em ${anoNascimento}`);
