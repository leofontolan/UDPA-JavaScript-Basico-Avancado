const falar = {
    falar(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    }
};


const comer = {
    comer(){
        console.log(`${this.nome} ${this.sobrenome} está comendo`)
    }
};

const beber = {
    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo`)
    },
};


const pessoaPrototype = {...falar, ...comer, ...beber};


function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });

}

const p1 = criaPessoa('João', 'Silva');
const p2 = criaPessoa('Maria', 'Silva');
console.log(p1);
console.log(p2);