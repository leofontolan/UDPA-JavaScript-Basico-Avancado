function meuEscopo() {

    const formulario = document.querySelector('.formulario');
    const botao = document.querySelector('.bt-calcular');


    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Calculando...');
    });

}