const num = Number(prompt("Digite um número"));

const numeroTitulo = document.getElementById("numero-digitado");
const texto = document.getElementById("texto");


numeroTitulo.innerHTML = num;
texto.innerHTML = `
    <p>A raiz quadrada de ${num} é: ${Math.sqrt(num)}</p>
    <p>${num} é inteiro ? ${Number.isInteger(num)}</p>
    <p>${num} é NaN ? ${Number.isNaN(num)}</p>
    <p>${num} arredondado para baixo é: ${Math.floor(num)}</p>
    <p>${num} arredondado para cima é: ${Math.ceil(num)}</p>
    <p>${num} com duas casas decimais é: ${num.toFixed(2)}</p>
    `;
