function* geradora1(){
    
    //Aqui podemos ter qualquer código.
    yield 'Valor 1';

    //Aqui podemos ter qualquer código.
    yield 'Valor 2';

    //Aqui podemos ter qualquer código.
    yield 'Valor 3';

}

const g1 = geradora1();


for (let valor of g1) {
    console.log(valor);
}




function* geradora3(){

    yield 0;

    yield 1;

    yield 2;

}

function* geradora4(){

    yield* geradora3();

    yield 3;

    yield 4;

    yield 5;

}

const g4 = geradora4();

for(let valor of g4){
    console.log(valor);
}