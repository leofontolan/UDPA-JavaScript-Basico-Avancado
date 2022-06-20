const form = document.querySelector('#form');
const finalResult = document.querySelector('#result');

form.addEventListener('submit', function(event){
    event.preventDefault();

    result = parseFloat(calcImc(form.peso.value, form.altura.value)).toFixed(2);
    showResult(result);
});

function calcImc(peso, altura){
    const imc = peso / (altura * altura);
    return imc;
};


function showResult(result){


    //Limpar Classes
    if(finalResult.classList.value !== ''){
        finalResult.classList.remove(finalResult.classList.value);
    }

    if(result >= 15  && result < 18.5){
        finalResult.innerHTML = `Seu IMC é ${result}, você está abaixo do peso`;
        finalResult.classList.add('low-imc');
        

    }else if(result >= 18.5 && result < 25){
        finalResult.innerHTML = `Seu IMC é ${result}, você está no peso normal`; 
        finalResult.classList.add('medium-imc');

    }else if(result >= 25 && result < 29.9){
        finalResult.innerHTML = `Seu IMC é ${result}, você está acima do peso`;
        finalResult.classList.add('high-imc');

    }else if(result >= 29.9 && result < 34.9){
        finalResult.innerHTML = `Seu IMC é ${result}, você está com obesidade grau I`;
        finalResult.classList.add('high-imc');
    
    }else if(result >= 34.9 && result < 39.9){
        finalResult.innerHTML = `Seu IMC é ${result}, você está com obesidade grau II`;
        finalResult.classList.add('high-imc');

    } else if (result >= 40 && result < 49.9){
        finalResult.innerHTML = `Seu IMC é ${result}, você está com obesidade grau III`;
        finalResult.classList.add('high-imc');
    
    }else{
        finalResult.innerHTML = `Você digitou um valor inválido`;
    }
}
