const h1 = document.querySelector("#show-date");

const currentDate = new Date();

const dayWeek = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];
const month = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];


function DayOfTheWeek() {
  switch (currentDate.getDay()) {
    case 0:
      return dayWeek[0];
    case 1:
      return dayWeek[1];
    case 2:
      return dayWeek[2];
    case 3:
      return dayWeek[3];
    case 4:
      return dayWeek[4];
    case 5:
      return dayWeek[5];
    case 6:
      return dayWeek[6];
    default:
      break;
  }
}

function Month() {
  switch (currentDate.getMonth()) {
    case 0:
      return month[0];
    case 1:
      return month[1];
    case 2:
      return month[2];
    case 3:
      return month[3];
    case 4:
      return month[4];
    case 5:
      return month[5];
    case 6:
      return month[6];
    case 7:
      return month[7];
    case 8:
      return month[8];
    case 9:
      return month[9];
    case 10:
      return month[10];
    case 11:
      return month[11];
    default:
      break;
  }
}

function FormatTime() {
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    let formattedHour =  hour < 10 ? hour = `0${hour}` : hour;
    let formattedMinutes = minutes < 10 ? minutes = `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? seconds = `0${seconds}` : seconds;

    return `${formattedHour}:${formattedMinutes}:${formattedSeconds}`;

}


function MergeDate() {
  fullDate = `${DayOfTheWeek()}, ${currentDate.getDate()} de ${Month()} de ${currentDate.getFullYear()} às ${FormatTime()}`;
  h1.innerHTML = fullDate;
}

MergeDate();
