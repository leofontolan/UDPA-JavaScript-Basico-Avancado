function promise(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Async operation has ended');
            resolve('This is my resolved data');
        }, 2000);
    });
}

export default async function() {
    await promise();
    console.log('This is my resolved data');
}