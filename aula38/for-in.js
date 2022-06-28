// FOR IN -> Lê os índices ou chaves do objeto
// const fruits = ['Maça', 'Pêra', 'Melância', 'Uva'];

// for (let index in fruits){
//     console.log(fruits[index]);
// }


const person = {
    name: 'Leo',
    surname: 'Fontolan',
    idade: 42
}

for (let keys in person){
    console.log(keys);
    console.log(person[keys]);
}