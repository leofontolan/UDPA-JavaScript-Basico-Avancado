const nomes1 = ['Eduardo', 'Maria', 'Joana'];
const nomes2 = nomes1;

console.log(nomes2);

nomes2.pop();
console.log(nomes1);




const cidades = new Array('São Paulo', 'Rio de Janeiro', 'Brasília');
console.log(cidades);


const guitarras = ['fender', 'ibanez', 'gibson', 'jackson'];
const novasGuitarras = [...guitarras];

console.log(novasGuitarras);



const baterias = ['pearl', 'dw', 'tama', 'sonnor', 'premier'];
const bateriasSlice = baterias.slice(1, 3);
console.log(bateriasSlice);


const domPedro = 'Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon';

const domPedroArray = domPedro.split(' ');
console.log(domPedroArray);


const domPedroJoin = domPedroArray.join(' ');
console.log(domPedroJoin);
