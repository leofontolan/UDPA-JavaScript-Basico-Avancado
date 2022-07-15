//Função Construtora 
// Ela é molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome; 
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

//Instância
const pessoa1 = new Pessoa('João', 'Silva'); //Instância de Pessoa =  Função Construtora



console.dir(pessoa1);
