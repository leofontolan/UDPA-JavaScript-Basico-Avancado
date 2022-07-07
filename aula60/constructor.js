function Pessoa(nome, sobrenome , idade){

    //Privado
    const ID = 21342343242;
    //Privado
    const metodoInterno = function(){
        console.log(ID);
    };


    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const p1 = new Pessoa('Leonardo', 'Fontolan', 42);
const p2 = new Pessoa('Mario', 'Aiala', 43);

console.log(p1.ID);
console.log(p2);
