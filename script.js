const listaTarefa = document.getElementById('lista-tarefas');
const botãoCriar = document.getElementById('criar-tarefa');
const elementoUsuario = document.getElementById('texto-tarefa');
/* Função criada com ajuda dos colegas dos Plantoes. Com a ajuda do racionio de Camila
 Arruda e Issac foi posivel desenvolver o trecho do codigo onde adiciona tarefas a lista.
 Referencias de sites no final do codigo. */
function criaTarefa() {
  if (elementoUsuario.value === '') {
    alert('Adicione uma tarefa!');
    elementoUsuario.focus();
  } else {
    const novaTarefa = document.createElement('li');
    listaTarefa.appendChild(novaTarefa).innerHTML = elementoUsuario.value;
    elementoUsuario.value = '';
    elementoUsuario.focus();
  }
}

botãoCriar.addEventListener('click', criaTarefa);

const corCinza = document.getElementsByClassName('corFundo');
function corFundo() {
  if (corCinza) {
    listaTarefa.classList.add('corFundo');
  } else {
    listaTarefa.classList.remove('corFundo');
  }
}

listaTarefa.addEventListener('click', corFundo);

/* https://pt.stackoverflow.com/questions/52418/como-limpar-campos-de-formulario-html
https://pt.stackoverflow.com/questions/173221/como-checar-se-uma-string-est%C3%A1-vazia-em-javascript/173226
https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement */
