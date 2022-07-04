const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnAdicionar = document.querySelector('.btn-add-tarefa');
const listaTarefas = document.querySelector('.tarefas');

function criarLi(){
    const li = document.createElement('li');
    return li;
}


function criaTarefa(textoInput){
    const li = criarLi();
    li.innerText = textoInput;
    listaTarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
    salvarTarefas();
}

function salvarTarefas(){
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){ 
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();

btnAdicionar.addEventListener('click', function(event) {
    
    if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);

});

inputTarefa.addEventListener('keypress', function(event) {
    if(event.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

document.addEventListener('click', function(event) {
    const el = event.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});