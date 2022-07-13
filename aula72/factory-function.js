function criarPessoa(nome, sobrenome, idade){

    return{
        nome, sobrenome, idade,

        get nomeCompleto(){
            return ` ${this.nome} ${this.sobrenome}`
        }
    }
}


const p1 = criarPessoa('Leo', 'Fontolan', 42);
console.log(p1.nome);