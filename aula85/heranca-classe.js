class ElectronicDevice {
    
    constructor(brand) {
        this.brand = brand;
        this.working = false;
    }


    turnOn() {
        if(this.working){
            console.log(`${this.brand} is already working`);
            return;
        }

        this.working = true;
    }

    turnOff() {
        if(!this.working){
            console.log(`${this.brand} is already off`);
            return;
        }

        this.working = false;
    }
}


class Smartphone extends ElectronicDevice {

    constructor(brand, color, model) {
        super(brand);

        this.color = color;
        this.model = model;
    }
};


class Table extends ElectronicDevice {

    constructor(brand, wifi) {
        super(brand);

        this.wifi = wifi;
    }


    turnOn() {
        console.log(`Sobrescrevendo o método turnOn da classe pai`);
    }
}

const t1 = new Table('iPad', true);
console.log(t1);
console.log(t1.turnOn());