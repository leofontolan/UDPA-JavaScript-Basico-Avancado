function Pessoa(nome, sobrenome, idade){

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

}


const p1 = new Pessoa('Leo', 'Fontolan', 42);
const p2 = new Pessoa('Maria', 'Joaquina', 52);
console.log(p1);
console.log(p2);