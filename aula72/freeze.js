function Pessoa(nome, sobrenome, idade){

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    Object.freeze(this);

}


const p1 = new Pessoa('Leo', 'Fontolan', 42);
p1.nome = 'Manuel';

console.log(p1);
