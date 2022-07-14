const produto = { nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;

// console.log(outraCoisa);
// console.log(produto);

// outraCoisa.nome = 'Bermuda';
// console.log(produto.nome);



const produto2 = { nome: 'Impressora', preco: 600};
const outra2 = {...produto2}

// outra2.nome = 'Monitor';

// console.log(produto2);
// console.log(outra2);


const produto3 = { nome: 'Mouse', preco: 120};
const mouse = Object.assign({}, produto3);

// console.log(produto3);
// console.log(mouse);

//console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'));

const caneca = {nome: 'Caneca', preco: 40};
// console.log(Object.values(caneca));
// console.log(Object.entries(caneca));



const pessoa = {
    nome: 'Leonardo', 
    preco: 'Fontola',
    idade: 42,
    titulo: true,
    outro: true,
};

for (let [chave, valor] of Object.entries(pessoa)){
    console.log(chave);
    console.log(valor);

}
