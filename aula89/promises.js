function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function aguardar(msg, tempo){
    setTimeout(() => {
        console.log(msg)
    }, tempo);
}

aguardar('Frase 1', aleatorio(1, 5));
aguardar('Frase 2', aleatorio(1, 5));
aguardar('Frase 3', aleatorio(1, 5));