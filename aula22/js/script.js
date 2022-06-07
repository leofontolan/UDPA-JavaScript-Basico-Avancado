function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    let contador = 0;

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value});

        console.log(pessoas);

        resultado.innerHTML += `<p>
                                    ${pessoas[contador] = nome.value}
                                    ${pessoas[contador] = sobrenome.value} 
                                    ${pessoas[contador] = peso.value} 
                                    ${pessoas[contador] = altura.value}
                                </p>`;
        contador++;
    })
}
meuEscopo();