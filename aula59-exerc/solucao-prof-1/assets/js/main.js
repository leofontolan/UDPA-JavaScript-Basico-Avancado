function criarCalculadora(){
    
    return {

        display: document.querySelector('.display'),


        inicia(){
            alert('Oi Calculadora Iniciada');
        },

        cliqueBotoes(){

            document.addEventListener('click', function(e){
            
                const el = e.target;
                
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);    
                };

            }.bind(this));
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criarCalculadora();
calculadora.cliqueBotoes();

