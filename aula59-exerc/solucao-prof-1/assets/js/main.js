function criarCalculadora(){
    
    return {

        display: document.querySelector('.display'),


        inicia(){
            this.cliqueBotoes();
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
        
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },


        deleteLast(){
            this.display.value = this.display.value.slice(0, - 1);
        }

    };
}

const calculadora = criarCalculadora();
calculadora.inicia();
