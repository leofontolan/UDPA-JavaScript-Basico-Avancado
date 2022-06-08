function calculadoraIMC() {

    const formulario = document.querySelector('.formulario');
    const peso = document.querySelector('input[name="peso"]');
    const altura = document.querySelector('input[name="altura"]');
    const resultado = document.querySelector('.resultado');
    let resultadoIMC;


    resultado.style.display = 'none';


    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        resultadoIMC = Math.round((peso.value / (altura.value * altura.value)) * 100) / 100;
        console.log(resultadoIMC);


        resultado.style.display = 'block';

        if (resultadoIMC >= 10 && resultadoIMC < 18.5) {
            resultado.innerHTML = `<p>Seu ICM é ${resultadoIMC}, você está abaixo do peso</p>`;
            resultado.style.backgroundColor  = 'orange';
            resultado.style.color = 'red';

        }else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
            resultado.innerHTML = `<p>Seu ICM é ${resultadoIMC}, você está com o peso ideal</p>`;
            resultado.style.backgroundColor  = 'green';
            resultado.style.color = 'white';

        }else if (resultadoIMC >= 25 && resultadoIMC < 30) {
            resultado.innerHTML = `<p>Seu ICM é ${resultadoIMC}, você está com sobrepeso</p>`;
            resultado.style.backgroundColor  = 'orange';
            resultado.style.color = 'red';

        }else if(resultadoIMC >= 30 && resultadoIMC < 35) {
            resultado.innerHTML = `<p>Seu ICM é ${resultadoIMC}, você está com obesidade grau 1</p>`;
            resultado.style.backgroundColor  = 'red';
            resultado.style.color = 'white';

        }else if (resultadoIMC >= 35 && resultadoIMC < 40) {
            resultado.innerHTML = `<p>Seu ICM é ${resultadoIMC}, você está com obesidade grau 2</p>`;
            resultado.style.backgroundColor  = 'red';
            resultado.style.color = 'white';

        }else if (resultadoIMC >= 40 && resultadoIMC < 45) {
            resultado.innerHTML = `<p>Seu ICM é ${resultadoIMC}, você está com obesidade grau 3</p>`;
            resultado.style.backgroundColor  = 'red';
            resultado.style.color = 'white';

        }else {
            resultado.innerHTML = `<p>Valor Incorreto!!</p>`;
            resultado.style.display = 'block';
            resultado.style.backgroundColor  = 'orange';
            resultado.style.color = 'white';
        }
    });
}
calculadoraIMC();