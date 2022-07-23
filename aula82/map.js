const pessoas = [
    { id: 3, nome: 'João', idade: 20 },
    { id: 2, nome: 'José', idade: 25 },
    { id: 1, nome: 'Maria', idade: 18 },
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa})
}

//console.log(novasPessoas);

//Para obter um valor específico do map, usamos o get()
//console.log(novasPessoas.get(2));


for(const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id, nome);
}

for(const pessoas of novasPessoas.values()){
    console.log(pessoas);
}

novasPessoas.delete(1);
console.log(novasPessoas);