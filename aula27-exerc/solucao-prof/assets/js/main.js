const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult("Peso Inválido", false);
    return;
  }

  if (!altura) {
    setResult("Altura Inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const indexImc = getIndexlImc(imc);
  const msg = `Seu IMC é ${imc} (${indexImc})`;

  setResult(msg, true);
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  result.appendChild(p);
}

function getImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function getIndexlImc(imc) {
  const index = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc > 39.9) return index[5];

  if (imc >= 34.9) return index[4];

  if (imc >= 29.9) return index[3];

  if (imc >= 24.9) return index[2];

  if (imc >= 18.5) return index[1];

  if (imc < 18.5) return index[0];
}
