const pessoa = {

    nome: 'Leo',
    sobrenome: 'Fontolan',
    idade: 30,

    endereco:{
        rua: 'Av das Nações',
        numero: 320
    }
}


const { nome, sobrenome, idade, altura = 1.71 } = pessoa;
console.log(nome , sobrenome , idade, altura);

const { endereco: {rua}} = pessoa;
console.log(rua);



const guitar = {

    brand: 'Fender',
    model: 'Telecaster',
    country: 'United States',

    attributes:{
        color: 'White',
        frets: 22
    }
}

const { brand: marca, model: modelo, country: pais} = guitar;
console.log(marca, modelo, pais);

// Usando o operador ... rest
const videogame = {
    fabricante: 'Sony',
    modelo: 'PlayStation',
    ab: 'PS4',

    outros: {
        tipo: 'slim',
        cor: 'preta',
        ano: 2020
    }
}

const  { fabricante, ...resto } = videogame;
console.log(fabricante, resto);