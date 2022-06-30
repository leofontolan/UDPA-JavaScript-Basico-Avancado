// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). 
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura){

    if(typeof(largura) !== 'number' || typeof(altura) !== 'number'){
        return false;
    }

    return largura < altura ? false : true;
}

console.log(ePaisagem(200, 30));