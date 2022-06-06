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


//Função com retorno
function soma(a, b) {
    return a + b;
}

const retorno = soma(1, 2);
console.log(retorno);