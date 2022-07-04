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
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}


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



