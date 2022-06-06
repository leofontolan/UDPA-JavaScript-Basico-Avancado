//função clássica com function
function saudacao() {
    console.log('Olá');
}
saudacao();


//Função com parâmetro
function saudacao2(nome, mensagem) {
    console.log(`Olá ${nome}, ${mensagem}`);
}
saudacao2('Leonardo', 'Bem vindo');


//Função com retorno e atribuir o retorno na variável
function soma(a, b) {
    return a + b;
}
const retorno = soma(1, 2);
console.log(retorno);

//Retorno
function soma2(a, b) {
    return a + b;
    console.log('Nada que vier depois de um return é executado');
}


//Valores padrão em parâmetros de uma função
function soma3(a = 0, b = 0, c = 0) {
    return a + b + c;
}
console.log(soma3(2, 5));


//Função anônima
const soma4 = function (a, b) {
    return a + b;
};
console.log(soma4(2, 5));

//Arrow function com retorno explícito
const soma5 = (a, b) => {
    return a + b
};
console.log(soma5(2, 5));

// Arrow function com retorno implícito
const soma6 = (a, b) => a + b;
console.log(soma6(2, 5));

//Arrow function com retorno implícito e apenas um parâmetro
const dobro = a => a ** 2;
console.log(dobro(2));