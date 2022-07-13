// Criando objeto de forma literal
const  pessoa1 = {
    nome: 'Leonardo',
    sobrenome: 'Fontolan'
};

console.log(pessoa1['sobrenome']);



// Criando objeto com construtor
const pessoa2 = new Object({
    nome: 'Paulo',
    sobrenome: 'Antunes'
});


delete pessoa2.nome;
console.log(pessoa2);


// Métodos dentro de objetos
const obj = {
	nome: 'Leo',
	sobrenome: 'Fontolan',

	nomeCompleto(){
		return `${this.nome} ${this.sobrenome} `
	}
}

console.log(obj.nomeCompleto());