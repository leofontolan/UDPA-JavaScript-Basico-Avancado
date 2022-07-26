class ValidaCPF{

    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/[^\d]+/g, ''),
        });
    }


    validandoSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.validandoSequencia()) return false;

        return 'CHEGUEI AQUI';
    }
}

let validaCPF = new ValidaCPF('070.987.720-03');
console.log(validaCPF.valida());

validaCPF = new ValidaCPF('999.999.999-99');
console.log(validaCPF.valida());



//CPFs para testar:
//705.484.450-52
//070.987.720-03

//Sequencia deve ser detectada como cpf inválido
//111.111.111-11
