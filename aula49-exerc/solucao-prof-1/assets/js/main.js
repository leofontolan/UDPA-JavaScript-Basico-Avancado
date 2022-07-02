const relogio = document.querySelector(".relogio");
let segundos = 0;
let timer;

document.addEventListener("click", function (e) {
    
  switch (e.target.className) {
    case "iniciar":
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
      break;

    case "pausar":
      relogio.classList.add("pausado");
      clearInterval(timer);
      break;

    case "zerar":
      relogio.classList.remove("pausado");
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = "00:00:00";
      break;
  }
});

function criarHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criarHoraDosSegundos(segundos);
  }, 1000);
}
