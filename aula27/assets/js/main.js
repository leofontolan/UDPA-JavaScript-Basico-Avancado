const formulario = document.querySelector(".formulario");
const peso = document.querySelector('input[name="peso"]');
const altura = document.querySelector('input[name="altura"]');
const resultado = document.querySelector(".resultado");
let resultadoIMC;

resultado.style.display = "none";

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  setResultado("Vamos ver o que vai rolar.");
});

function setResultado(msg) {
  resultado.innerHTML = msg;

  const p = document.createElement("p");
    p.innerHTML = msg;
    // resultado.appendChild(p);
}
