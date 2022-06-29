const first_name = 'Leo Fontolan';

// Iterando com For clássico
for (let i = 0; i < first_name.length ; i++) {
    console.log(first_name[i]);
}


//Iterando com For In
for (let key in first_name) {
    console.log(first_name[key]);
}

//Iterando com  For Of
for (let valor of first_name){
    console.log(valor);
}

//ForEach
const pessoas = ['Leo', 'Gustavo', 'Bruna', 'Alberto'];

pessoas.forEach(function(valor, indice, array){ 
    console.log(valor, indice , array); 
});