//Função com Retorno
function sum(a, b){
    return a + b;
}

const result = sum(1, 2);
console.log(result);


function person(name, age){

    return { name, age };
}

const p1 = person('Leo', 42);
const p2 = person('Jane', 29);

console.log(p1);
console.log(p2);


//Função retornar outra função
function firstName(name){
    function secondName(surname){
        return name + ' ' + surname;
    }

    return secondName;
}

const name1 = firstName('Leo');
const name2 = name1('Fontolan');
console.log(name2);


function multiplication(multiplier){
    return function(n){
        return n * multiplier;
    };
}

const double = multiplication(2);
const triple = multiplication(3);
const quadruple = multiplication(4);

console.log(double(10));
console.log(triple(10));
console.log(quadruple(10));
