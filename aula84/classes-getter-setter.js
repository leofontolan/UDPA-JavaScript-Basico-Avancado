const _speed = Symbol('speed');

class Car{

    constructor(model){
        this.model = model;
        this[_speed] = 0;
    }

    accelerate(){
        if(this[_speed] >= 100) return;
        this[_speed]++;
    }

    brake(){
        if(this[_speed] <= 0) return;
        this[_speed]--;
    }


    get speed(){
        return this[_speed];
    }

    set speed(value){
        if(typeof value !== 'number') return;
        if(value >= 100 || value <= 0) return;
        this[_speed] = value;
    }
}

const car1 = new Car('Fusca');

for(let i = 0; i <= 200; i++){
    car1.accelerate();
}


car1.speed = 20;
console.log(car1.speed);