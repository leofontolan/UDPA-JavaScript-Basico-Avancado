function criarCalculadora(){
    
    return {

        display: document.querySelector('.display'),


        inicia(){
            alert('Oi Calculadora Iniciada');
        },

        cliqueBotoes(){

            document.addEventListener('click', function(e){
                
                this.btnParaDisplay();
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    console.log(el);
                };
            });
        },

        btnParaDisplay(){
            console.log('Apertou botão');
        }
    };
}

const calculadora = criarCalculadora();
calculadora.cliqueBotoes();

