// Instanciar objetos
const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 20,
}

//Função que cria um objeto
function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade}
}
const pessoa1 = criarPessoa('João', 'Silva', 20)
const pessoa2 = criarPessoa('Maria', 'Santos', 25)
const pessoa3 = criarPessoa('José', 'Pereira', 30)
const pessoa4 = criarPessoa('Pedro', 'Albuquerque', 35)
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome);


//Métodos de um objeto
const pessoa5 = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 20,
    mostrarNome: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}
console.log(pessoa5.mostrarNome());
