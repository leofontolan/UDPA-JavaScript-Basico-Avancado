// Gerar a Data Atual
const data = new Date();
console.log(data.toString());
console.log('Dia - ', data.getDate());
console.log('Mês - ', data.getMonth());
console.log('Ano - ', data.getFullYear());
console.log('Hora - ', data.getHours());
console.log('Min - ', data.getMinutes());
console.log('Seg - ', data.getSeconds());
console.log('Mili - ', data.getMilliseconds());
console.log('Dia Semana - ', data.getDay());


// Data Zero Unix Timestamp
const dataZero = new Date(0);
console.log(dataZero.toString());

// Cáculo de Data
const tresHoras = new Date(3 * 3600 * 1000);
console.log(tresHoras.toString());

// Gerar data por valor
const dataAbril = new Date(2019, 3, 20, 15,30,00);
console.log(dataAbril.toString());


//Gerar data por string
const dataString = new Date('2019-04-20T15:30:00');
console.log(dataString.toString());