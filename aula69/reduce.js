//Some todos os números utilizando o reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const somarPares = numeros.reduce(function (acumulador, valor){
    
    if(valor % 2 === 0) acumulador += valor;
    return acumulador;

}, 0 );


//console.log(somarPares);




//Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);