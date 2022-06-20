const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResult('Peso Inválido', false);
        return;
    }

    if(!altura){
        setResult('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    console.log(imc);
});


function criaP(){
    const p = document.createElement('p');
    return p;
}


function setResult(msg, isValid){
    const result = document.querySelector('#result');
    result.innerHTML = '';
    
    const p = criaP();
    p.innerHTML = msg;
    result.appendChild(p);

}

function getImc(peso, altura){
    const imc = peso / (altura * altura); 
    return imc.toFixed(2);
}