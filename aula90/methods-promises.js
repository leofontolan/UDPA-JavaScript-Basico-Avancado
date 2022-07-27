function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)) + min;
}


function wait(msg, time){
    return new Promise((resolve, reject) => {

        //Se o parâmetro for diferente de uma String vamos rejeitar a promise
        if(typeof msg !== 'string') {
            reject(false);
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

//Promise.all() Promise.race() Promise.revolve() Promise.reject()
const promises = [
    wait('Promise 1', rand(1,5)),
    wait('Promise 2', rand(1,5)),
    wait('Promise 3', rand(1,5)),
];

Promise.race(promises).then((valor) => {
    console.log(valor);

}).catch((err) => {
    console.log(err);
});



function downloadPage(){
    const cache =  false;

    if(cache){
        return Promise.reject('Page cached');
    }else{
        return wait('Page Downloaded', 3000)
    }
}

downloadPage().then((valor) => {
    console.log(valor);

}).catch((err) => {
    console.log(err);
});