function Produto(nome, preco, estoque){
 
    this.nome =  nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        //value: estoque,
        //writable: false, 
        configurable: true,

        get: function(){
            return estoque;
        },

        set: function(value){
            if( typeof value !== 'number' ){
                
                throw new TypeError('value must be a number');
    
            }

            estoque = value;
        }
    });
    
}

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// p1.estoque = 4000;
// console.log(p1.estoque);


function criaProduto(nome) {

    return {

        get nome(){
            return nome;
        },

        set nome(valor) {
            nome = valor;
        }
    }
}


const p2 = criaProduto('Camiseta');
console.log(p2.nome);
p2.nome = 'Bermuda';
console.log(p2.nome)