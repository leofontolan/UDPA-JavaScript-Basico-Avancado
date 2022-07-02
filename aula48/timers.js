function gerarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        seconds: '2-digit'
    });
}

const timer = setInterval( () => {
    console.log(gerarHora());
}, 1000 );


setTimeout( () => {
    clearInterval( timer );
}, 5000);