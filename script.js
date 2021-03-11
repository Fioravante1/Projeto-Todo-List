const textoUsuario = document.querySelectorAll('#texto-tarefa').value;
const listaTarefa = document.querySelectorAll('#lista-tarefas');
const botãoCriar = document.querySelectorAll('#criar-tarefa');

function limparTexto() {
  textoUsuario.value = '';
}

function criaTarefa() {
  const novaTarefa = document.createElement('li');
  listaTarefa.appendChild(novaTarefa).innerHTML = textoUsuario;
  limparTexto(); 
}

/* https://pt.stackoverflow.com/questions/52418/como-limpar-campos-de-formulario-html
https://pt.stackoverflow.com/questions/173221/como-checar-se-uma-string-est%C3%A1-vazia-em-javascript/173226
https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement */
