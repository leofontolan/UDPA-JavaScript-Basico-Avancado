function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min)) + min;
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    //Se o parâmetro for diferente de uma String vamos rejeitar a promise
    if (typeof msg !== "string") {
      reject(false);
      return;
    }

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

// wait("FASE 1", rand(1, 5))
//   .then((msg) => {
//     console.log(msg);
//     return wait("FASE 2", rand(1, 5));
//   })
//   .then((msg) => {
//     console.log(msg);
//     return wait("FASE 3", rand(1, 5));
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .then(() => {
//     console.log("FIM");
//   })

//   .catch((err) => {
//     console.log(err);
//   });


async function execute(){

    try{
        const fase1 = await wait('FASE 1', rand(1, 5));
        console.log(fase1);
    
        const fase2 = await wait(2222, rand(1, 5));
        console.log(fase2);
    
        const fase3 = await wait('FASE 3', rand(1, 5));
        console.log(fase3);
    
        console.log('FIM');

    }catch(e){
        console.log('CAI NO ERRO');
    }
    
}

execute();