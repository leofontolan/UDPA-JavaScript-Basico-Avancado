const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnAdicionar = document.querySelector('.btn-add-tarefa');
const listaTarefas = document.querySelector('.tarefas');


function criaTarefa(textoInput){
    console.log(textoInput);

}


btnAdicionar.addEventListener('click', function(event) {
    
    if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);

});



