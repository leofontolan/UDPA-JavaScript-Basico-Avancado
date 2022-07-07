function criarCalculadora(){
    
    return {

        display: document.querySelector('.display'),


        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        clearDisplay(){
            this.display.value = '';
        },



        cliqueBotoes(){

            document.addEventListener('click', (e) => {    
                const el = e.target;
            
                if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);    
                if(el.classList.contains('btn-clear')) this.clearDisplay();
                if(el.classList.contains('btn-del')) this.deleteLast();
                if(el.classList.contains('btn-eq')) this.realizaConta();
        
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },


        deleteLast(){
            this.display.value = this.display.value.slice(0, - 1);
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta Inválida');
                }

                this.display.value = conta;

            }catch(e){
                alert('Conta Inválida');
                return;
            }
        },

        pressionaEnter(){
           this.display.addEventListener('keyup', (e) => {
                if(e.keyCode == 13) this.realizaConta();
           });
        }

    };
}

const calculadora = criarCalculadora();
calculadora.inicia();
