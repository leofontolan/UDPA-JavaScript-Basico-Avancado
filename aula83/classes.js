// CLASSE

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayName(){
        console.log(this.name);
    }

    sayAge(){
        console.log(this.age);
    }
}

const p1 = new Person('João', 20);
console.log(p1);



//FUNÇÃO CONSTRUTORA

function Person2(name, age){
    this.name = name;
    this.age = age;
}

Person2.prototype.sayName = function(){
    console.log(this.name);
}

Person2.prototype.sayAge = function(){
    console.log(this.age);
}

const p2 = new Person2('João', 20);
console.log(p2);
