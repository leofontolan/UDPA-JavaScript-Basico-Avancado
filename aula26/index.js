const hora = 19;

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia');

}else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde');

}else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite');

}else {
  console.log('Hora inválida');
}


const numero = 10;

if (numero >= 0 && numero <= 5) {
  console.log('Intervalo de 0 a 5');

}else if (numero >= 6 && numero <= 8) {
  console.log('Intervalo de 6 a 8');

}else if ( 1 === 1 ){ // Verdadeira, vai parar a verificação e vai sair do if
    console.log('Verdadeiro, vai sair do código ');
    
}else if (numero >= 9 && numero <= 11) { // Verdadeira
  console.log('Intervalo de 9 a 11');

}else{
    console.log('Fora do intervalo');
}
console.log('Aqui tem mais código JavaScript');
