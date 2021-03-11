const listaTarefa = document.getElementById('lista-tarefas');
const botãoCriar = document.getElementById('criar-tarefa');

function criaTarefa() {
  const elementoUsuario = document.getElementById('texto-tarefa');
  const novaTarefa = document.createElement('li');
  listaTarefa.appendChild(novaTarefa).innerHTML = elementoUsuario.value;
  elementoUsuario.value = '';
}

function adicionaTarefa() {
  botãoCriar.addEventListener('click', criaTarefa);
}

adicionaTarefa();
/* https://pt.stackoverflow.com/questions/52418/como-limpar-campos-de-formulario-html
https://pt.stackoverflow.com/questions/173221/como-checar-se-uma-string-est%C3%A1-vazia-em-javascript/173226
https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement */
