try{
    console.log(variavelNaoExiste);
}catch(e){
    console.log('Essa variável não foi declarada');
}


function soma(x,y){

    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('Invalid number');
    }

    return x + y;
}

try{
    soma('1', 2);

}catch(e){
    console.log('Invalid number')
}

