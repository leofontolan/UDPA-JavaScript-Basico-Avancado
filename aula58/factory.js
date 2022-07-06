function createPerson(name, surname){

    return{
        name: 'Maria',
        surname: 'Souza',

        showName(msn){
            return `${msn}, ${this.name} ${this.surname}`
        }
    }
}

const p1 = createPerson('Leo', 'Fontolan');
console.log(p1.showName('Olá'));