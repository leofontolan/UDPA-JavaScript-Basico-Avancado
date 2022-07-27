function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function aguardar(msg, tempo) {
  return new Promise((resolve, reject) => {


    if(typeof msg !== 'string') reject(new Error('ERRO: msg deve ser uma string'));

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

aguardar("Frase 1", aleatorio(1, 5))
  .then((answer) => {
    console.log(answer);
    return aguardar("Frase 2", aleatorio(1, 5));
  })

  .then((answer) => {
    console.log(answer);
    return aguardar(111, aleatorio(1, 5));
  })

  .then((answer) => {
    console.log(answer);
    image.png
  })
  .then(() => {
    console.log("Fim");

  }).catch((err) => {
    console.log('ERROS', err);
  });

  console.log("Isso será exibido antes de todas as promises");
