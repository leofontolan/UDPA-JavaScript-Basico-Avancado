const mainContainer = document.querySelector('#main-container');
mainContainer.innerHTML += '<div id="content-container">';

const contentContainer = document.querySelector('#content-container');


const elements = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];


for(let i =0; i < elements.length; i++){
    contentContainer.innerHTML += `<${elements[i].tag}>${elements[i].texto} </${elements[i].tag}>`;
}


