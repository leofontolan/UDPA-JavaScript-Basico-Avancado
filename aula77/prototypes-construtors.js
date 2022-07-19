//Nova  função - Produto 1
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco * (1 - percentual / 100);
}


Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco * (1 + percentual / 100);
}

const p1 = new Produto('Caneta', 1.90);
p1.desconto(10);
console.log(p1);


//Nova  função - Produto 2
function Produto2(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Object.setPrototypeOf(Produto2.prototype, Produto.prototype);

const p2 = new Produto2('Lápis', 2.90);
p2.aumento(10);
console.log(p2);

//Nova  função - Produto 3
const p3 = Object.create(Produto.prototype,{
    tamanho:{
        writable: true,
        enumerable: true,
        configurable: true,
        value: 42
    },
    estoque:{
        writable: true,
        enumerable: true,
        configurable: true,
        value: 400
    },
});


p3.nome = 'Caderno';
p3.preco = 3.90;
p3.aumento(10);
console.log(p3);