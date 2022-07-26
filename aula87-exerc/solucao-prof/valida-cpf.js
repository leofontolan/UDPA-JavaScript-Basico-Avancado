class ValidaCPF{

    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/[^\d]+/g, ''),
        });
    }


    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica)
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }


    validandoSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.validandoSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }
}

let validaCPF = new ValidaCPF('705.484.450-52');


if(validaCPF.valida()){
    console.log('CPF válido');
}else{
    console.log('CPF inválido');

}

//CPFs para testar:
//705.484.450-52
//070.987.720-03

//Sequencia deve ser detectada como cpf inválido
//111.111.111-11
