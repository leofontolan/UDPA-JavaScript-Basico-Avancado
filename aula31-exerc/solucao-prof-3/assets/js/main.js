const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
  const diasSemana = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo']
  return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  return meses[numeroMes];


}

function zeroAEsquerda(numero) {
  return numero >= 10 ? numero : `0${numero}`;
}


function criaData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();
  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return `${nomeDia}, 
          ${zeroAEsquerda(data.getDate())} de ${nomeMes} de ${data.getFullYear()}  
          ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`;	
}


h1.innerHTML = criaData(data);
