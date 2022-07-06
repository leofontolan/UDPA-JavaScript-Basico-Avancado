function multiply(a, b){
    return a * b;
}
sum(2,2);



function teste(){
    console.log(arguments);
}
teste('valor', 1,2,3,4,5,6,7,8,9,10);



function menosArgumentos(a, b, c, d, e, f, g, h, i) {
    console.log(a, b, c, d, e, f, g, h, i);
}
menosArgumentos(1,2,3);


function sum(a, b = 0){
    return a + b;
}
console.log(sum(2));


//Descruturing como argumentos
function customer({name, email, password}){
    console.log(name, email, password);
}

customer({name:'Leo', email:'leo@email.com', password: 123345})


//Descruturing
function arithmetic(operator, accumulator, ...numbers) {
    for (let number of numbers){
        
        if(operator === '+') accumulator += number;
        if(operator === '-') accumulator -= number;
        if(operator === '/') accumulator /= number;
        if(operator === '*') accumulator *= number;

    }

    console.log('Result: ' + accumulator);
};

arithmetic('+', 0, 20,30,40,50,60,70,80,90);