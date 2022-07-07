function createPerson(name, surname, hgt, wgt){

    return{
        name: 'Maria',
        surname: 'Souza',

        showName(msn){
            return `${msn}, ${this.name} ${this.surname}`
        },

        height: hgt,
        weight: wgt,

        imc(){
            const index = this.weight / (this.height ** 2)
            return index.toFixed(2);
        }

    }
}

const p1 = createPerson('Leo', 'Fontolan', 1.72, 90);
console.log(p1.showName('Olá'));
console.log(p1.imc());

const p2 = createPerson('Maria', 'Almeida', 1.60, 46);




const showFullName = {

    firstName: 'Leonardo',
    lastName: 'Fontolan',


    set addName(data){
        data = data.split(' ');
        this.firstName = data.shift()
        this.lastName = data.join(' ')
    },

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}


showFullName.addName = 'Maria Joaquina Silva';
console.log(showFullName.fullName);