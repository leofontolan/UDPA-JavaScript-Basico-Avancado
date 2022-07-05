// Declaração de função
function sayMessage(msg){
    return `${msg}`;
}
console.log(sayMessage('Hello! Message'))

//Function Expression
const showData = function (data){
    return data;
}
console.log(showData('1234567890'));


//Arrow Function Expression
const arrowFunc = () => {
    return 'Sou uma arrow function';
}
console.log(arrowFunc());

//Função como atributo de objeto
const person = {
    name: 'John',
    email: 'john@gmail.com',

    talk(){
        console.log('Talk');
    }
}
person.talk();