const a1 = [1,2, 3, 4, 5, 6, 7, 8, 9];

// Iterar tendo com resultado o valor
for (let valor of a1) {
    console.log(valor);
}

// Iterar tendo com resultado o índice
for (let valor in a1){
    console.log(`${valor} ${a1[valor]}`);
}   


//forEach
a1.forEach(function(valor, indice, array){ 
    console.log(`${valor} ${indice} ${array}`); 
});


const a2 = [10 ,20 , 30, 40, 50, 60, 70, 80, 90];
let resultado = 0;

a2.forEach( function(valor){
    resultado += valor
});

console.log(resultado);

