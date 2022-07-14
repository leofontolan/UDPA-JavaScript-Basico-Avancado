function Produto(nome, preco, estoque){
 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        value: estoque,
        writable: false, 
        configurable: true
    });
    

    Object.defineProperties(this, {

        nome:{
            enumerable: true, 
            value: nome,
            writable: false, 
            configurable: true
        },

        preco:{
            enumerable: true, 
            value: preco,
            writable: false, 
            configurable: true
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));
