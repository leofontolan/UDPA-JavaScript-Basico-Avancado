const alunos = ['Leonardo', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);

//Altera o valor do array
alunos[0] = 'Gustavo';
console.log(alunos);

//Adicionando um novo elemento no array
alunos[alunos.length] = 'Alfredo';
console.log(alunos);

//Adicionando um novo elemento no final do array
alunos.push('Pedro');
console.log(alunos);

//Adicionar um elemento no início do array
alunos.unshift('João');
console.log(alunos);

//Remover o último elemento do array
const rm = alunos.pop();
console.log(rm);
console.log(alunos);

//Remover o primeiro elemento do array
const rm2 = alunos.shift();
console.log(rm2);
console.log(alunos);

//Remover um elemento do array
delete alunos[1];
console.log(alunos);

//Acessar um elemento do array que não existe
console.log(alunos[10000]);
console.log(alunos[1000000]);


//Selecionar um range específico do array
const alunos2 = ['Leonardo', 'Maria', 'João', 'Pedro', 'Alfredo'];
console.log(alunos2.slice(1, 3));
console.log(alunos2.slice(-2, -1));

//Verificar se é uma instância de Array
console.log(alunos2 instanceof Array);

// Alterar o tipo de uma variável que era um array para um number.
let alunos3 = new Array('Leonardo', 'Maria', 'João', 'Pedro', 'Alfredo');
alunos3 = 123;
console.log(alunos3 instanceof Array);
